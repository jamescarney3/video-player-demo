import React, { PropTypes } from 'react';

const Player = React.createClass({
  propTypes: {
    clip: PropTypes.object,
    onLoadedMetadata: PropTypes.func.isRequired,
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
  render() {
    return (
      <video
        autoPlay
        muted
        onLoadedMetadata={() => { this.props.onLoadedMetadata(this.getDuration()); }}
        ref={(v) => { this.video = v; }}
        src={`sintel_trailer-480.mp4${this.getFragment()}`} type="video/mp4"
      >
        <track src="chapters.vtt" kind="chapters" default />
      </video>
    );
  },
});

export default Player;
