import React from 'react';

import Player from './Player.jsx';
import ClipForm from './ClipForm.jsx';
import Clip from './Clip.jsx';

const App = React.createClass({
  getInitialState() {
    if (window.localStorage.kvPlayer) {
      return JSON.parse(window.localStorage.kvPlayer);
    }
    return ({
      clips: [],
      fullClip: { id: 0, name: 'Full Video', start: 0 },
      activeClipID: '',
    });
  },
  componentDidUpdate() {
    window.localStorage.kvPlayer = JSON.stringify(this.state);
  },
  onKeyUp(e) {
    console.log(e);
  },
  getChildClips() {
    return this.state.clips.map((clip) =>
      <Clip
        key={clip.id}
        clip={clip}
        deleteClip={this.deleteClip}
        playClip={this.playClip}
        updateClip={this.updateClip}
      />
    );
  },
  setVideoDuration(dur) {
    if (!this.state.fullClip.end) {
      const fullClip = Object.assign(this.state.fullClip, { end: dur });
      this.setState({ fullClip });
    }
  },
  getActiveClip() {
    return this.state.clips.find((clip) => clip.id === this.state.activeClipID);
  },
  deleteClip(id) {
    const { clips } = this.state;
    clips.splice(clips.findIndex((clip) => clip.id === id), 1);
    this.setState({ clips });
  },
  updateClip(id, name, start, end) {
    const newClips = this.state.clips.map((clip) => (
      clip.id === id ? { id, name, start, end } : clip
    ));
    this.setState({ clips: newClips });
  },
  playClip(id) {
    this.setState({ activeClipID: id });
    this.player.video.load();
  },
  validateClipID(id) {
    return this.state.clips.every((clip) => clip.id !== id);
  },
  nextClipID() {
    let newClipID = 1;
    while (!this.validateClipID(newClipID)) {
      newClipID += 1;
    }
    return newClipID;
  },
  createClip(name, start, end) {
    const id = this.nextClipID();
    const newClips = this.state.clips.concat({ id, name, start, end });
    this.setState({ clips: newClips });
  },
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <div style={{ backgroundColor: 'black', height: '480px' }}>
          <Player
            ref={(p) => { this.player = p; }}
            clip={this.getActiveClip()}
            onLoadedMetadata={this.setVideoDuration}
          />
        </div>
        <h2>Add a clip:</h2>
        <ClipForm createClip={this.createClip} />
        <Clip
          key={this.state.fullClip.id}
          clip={this.state.fullClip}
          playClip={this.playClip}
        />
        {this.getChildClips()}
      </div>
    );
  },
});

export default App;
