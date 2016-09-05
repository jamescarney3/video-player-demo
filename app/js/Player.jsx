import React, { PropTypes } from 'react';
import { Row } from 'react-bootstrap';

const Player = React.createClass({
  propTypes: {
    clip: PropTypes.object,
    onLoadedMetadata: PropTypes.func.isRequired,
  },
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  },
  getFragment() {
    if (this.props.clip) {
      const { start, end } = this.props.clip;
      return `#t=${start},${end}`;
    }
    return '';
  },
  getDuration() {
    return this.video.duration;
  },
  playVideo() {
    this.video.play();
  },
  handleResize() {
    const playerRow = document.getElementsByClassName('player-video')[0];
    const height = window.getComputedStyle(playerRow).height;
    playerRow.style.height = height;
  },
  render() {
    return (
      <Row className="player-row">
        <video
          autoPlay
          className="player-video"
          onLoadedMetadata={() => { this.props.onLoadedMetadata(this.getDuration()); }}
          ref={(v) => { this.video = v; }}
          src={`sintel_trailer-480.mp4${this.getFragment()}`} type="video/mp4"
        />
      </Row>
    );
  },
});

export default Player;
