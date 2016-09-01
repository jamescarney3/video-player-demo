import React, { PropTypes } from 'react';

const Player = React.createClass({
  propTypes: {
    clip: PropTypes.object,
  },
  getFragment() {
    if (this.props.clip) {
      const { start, end } = this.props.clip;
      return `#t=${start},${end}`;
    }
    return '';
  },
  render() {
    const videoTag = 'videoTagRef';
    return (
      <video autoPlay poster="sintel.jpg" ref={videoTag}>
        <source src={`sintel_trailer-480.mp4${this.getFragment()}`} type="video/mp4" />
        <track src="chapters.vtt" kind="chapters" default />
      </video>
    );
  },
});

export default Player;
