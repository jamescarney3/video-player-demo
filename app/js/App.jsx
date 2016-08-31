import React, { PropTypes } from 'react';

import Player from './Player.jsx';

// stubbed out Clip constructor function
function Clip(options) {
  this.id = options.id;
  this.name = options.name;
  this.start = options.start;
  this.end = options.end;
}

const App = React.createClass({
  propTypes: {
    children: PropTypes.node,
  },
  getInitialState() {
    return ({
      clips: [],
    });
  },
  validateClip(newClip) {
    console.log(newClip);
    return true;
  },
  addClip(options) {
    const newClip = new Clip(options);
    if (this.validateClip(newClip)) {
      const newClips = this.state.clips.concat(newClip);
      this.setState({ clips: newClips });
    }
  },
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Player start={3} end={7} />
        {this.props.children}
      </div>
    );
  },
});

export default App;
