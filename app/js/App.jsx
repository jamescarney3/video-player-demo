import React from 'react';
import key from 'keymaster';
import { Grid, Row } from 'react-bootstrap';

import Player from './Player.jsx';
import ClipForm from './ClipForm.jsx';
import Clip from './Clip.jsx';

const App = React.createClass({
  getInitialState() {
    if (window.localStorage.kvPlayer) {
      return JSON.parse(window.localStorage.kvPlayer);
    }
    return ({
      clips: [{ id: 0, name: 'Full Video', start: 0 }],
      activeClipID: '',
    });
  },
  componentDidMount() {
    const app = this;
    key(',', () => {
      app.playPrevClip();
    });
    key('.', () => {
      app.playNextClip();
    });
  },
  componentDidUpdate() {
    window.localStorage.kvPlayer = JSON.stringify(this.state);
  },
  onVideoLoadedMetadata(dur) {
    if (!this.state.clips[0].end) {
      const newClips = this.state.clips;
      newClips[0].end = dur;
      this.setState({ clips: newClips });
    }
  },
  getChildClips() {
    return this.state.clips.slice(1).map((clip) =>
      <Clip
        key={clip.id}
        clip={clip}
        deleteClip={this.deleteClip}
        playClip={this.playClip}
        updateClip={this.updateClip}
        validateClip={this.validateNewClip}
      />
    );
  },
  getActiveClip() {
    return this.state.clips.find((clip) => clip.id === this.state.activeClipID);
  },
  playNextClip() {
    const clipsIdx = this.state.clips.findIndex((clip) =>
    clip.id === this.state.activeClipID
    );
    if (clipsIdx < this.state.clips.length - 1) {
      this.setState({ activeClipID: this.state.clips[clipsIdx + 1].id });
    }
  },
  playPrevClip() {
    const clipsIdx = this.state.clips.findIndex((clip) =>
      clip.id === this.state.activeClipID
    );
    if (clipsIdx > 0) {
      this.setState({ activeClipID: this.state.clips[clipsIdx - 1].id });
    }
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
  validateNewClip(name, startStr, endStr, id) {
    const duration = this.state.clips[0].end;
    const start = parseInt(startStr, 10);
    const end = parseInt(endStr, 10);
    if (!name || !start || !end || !duration) {
      return false;
    } else if (start < 0 || end < 0 || start > duration || end > duration) {
      return false;
    } else if (this.state.clips.find((c) => c.name === name && c.id !== id)) {
      return false;
    } else if (start > end) {
      return false;
    }
    return true;
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
      <Grid>
        <Row><h1>Video Player</h1></Row>
        <Player
          ref={(p) => { this.player = p; }}
          clip={this.getActiveClip()}
          onLoadedMetadata={this.onVideoLoadedMetadata}
        />
        <Row><h2>Add a clip:</h2></Row>
        <ClipForm
          createClip={this.createClip}
          validateClip={this.validateNewClip}
        />
        <Row><h2>Navigate between clips with &lt; and &gt; keys</h2></Row>
        <Clip
          key={this.state.clips[0].id}
          clip={this.state.clips[0]}
          playClip={this.playClip}
        />
        {this.getChildClips()}
      </Grid>
    );
  },
});

export default App;
