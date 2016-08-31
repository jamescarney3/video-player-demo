import React, { PropTypes } from 'react';

import Player from './Player.jsx';
import ClipForm from './ClipForm.jsx';

// stubbed out Clip constructor function
function Clip(options) {
  this.id = options.id;
  this.name = options.name;
  this.start = options.start;
  this.end = options.end;
}

Clip.prototype.validate = function validate() {
  return true;
};

const App = React.createClass({
  propTypes: {
    children: PropTypes.node,
  },
  getInitialState() {
    return ({
      nextClipID: 1,
      clips: [],
    });
  },
  addClip(options) {
    const newClip = new Clip(options);
    if (newClip.validate()) {
      const newClips = this.state.clips.concat(newClip);
      const nextClipID = this.state.nextClipID + 1;
      this.setState({ clips: newClips, nextClipID });
      return true;
    }
    return false;
  },
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Player start={3} end={7} />
        <ClipForm nextClipID={this.state.nextClipID} addClip={this.addClip} />
        {this.state.clips.map((clip) => <div key={clip.id}>{clip.name}</div>)}
      </div>
    );
  },
});

export default App;
