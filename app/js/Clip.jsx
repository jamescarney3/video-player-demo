import React, { PropTypes } from 'react';
import { Button, Form } from 'react-bootstrap';

import ClipForm from './ClipForm.jsx';

const Clip = React.createClass({
  propTypes: {
    clip: PropTypes.object.isRequired,
    deleteClip: PropTypes.func,
    playClip: PropTypes.func.isRequired,
    updateClip: PropTypes.func,
  },
  getInitialState() {
    return { updating: false };
  },
  onClickPlay() {
    this.props.playClip(this.props.clip.id);
  },
  onClickDelete() {
    this.props.deleteClip(this.props.clip.id);
  },
  onClickUpdate() {
    this.setState({ updating: true });
  },
  onSubmitUpdate(name, start, end) {
    this.props.updateClip(this.props.clip.id, name, start, end);
    this.setState({ updating: false });
  },
  getUpdateButton() {
    if (this.props.updateClip) {
      return (
        <Button onClick={this.onClickUpdate}>Edit</Button>
      );
    }
    return null;
  },
  getDeleteButton() {
    if (this.props.deleteClip) {
      return (
        <Button onClick={this.onClickDelete}>Delete</Button>
      );
    }
    return null;
  },
  render() {
    if (this.state.updating) {
      const { name, start, end } = this.props.clip;
      return (
        <ClipForm
          createClip={this.onSubmitUpdate}
          {...{ name, start, end }}
        />
      );
    }
    return (
      <Form inline>
        <span>name: {this.props.clip.name},</span>
        <span>start time: {this.props.clip.start},</span>
        <span>end time: {this.props.clip.end}</span>
        <Button onClick={this.onClickPlay}>Play</Button>
        {this.getUpdateButton()}
        {this.getDeleteButton()}
      </Form>
    );
  },
});

export default Clip;
