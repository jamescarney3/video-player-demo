import React from 'react';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <video poster="sintel.jpg">
          <source src="sintel_trailer-480.mp4" type="video/mp4" />
          <track src="chapters.vtt" kind="chapters" default />
        </video>
      </div>
    );
  },
});

export default App;
