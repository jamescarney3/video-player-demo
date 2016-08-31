import React, { PropTypes } from 'react';

const Player = React.createClass({
  propTypes: {
    start: PropTypes.number,
    end: PropTypes.number,
  },
  getFragment() {
    const { start, end } = this.props;
    if (start && end) {
      return `#t=${start},${end}`;
    }
    return '';
  },
  render() {
    return (
      <video autoPlay poster="sintel.jpg">
        <source src={`sintel_trailer-480.mp4${this.getFragment()}`} type="video/mp4" />
        <track src="chapters.vtt" kind="chapters" default />
      </video>
    );
  },
});

export default Player;
