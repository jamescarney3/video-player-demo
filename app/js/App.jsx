import React from 'react';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <video autoPlay>
          <source src="sintel_trailer-480.mp4" type="video/mp4" />
        </video>
      </div>
    );
  },
});

export default App;
