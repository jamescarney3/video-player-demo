import React, { PropTypes } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

import ClipForm from './ClipForm.jsx';

const Clip = React.createClass({
  propTypes: {
    clip: PropTypes.object.isRequired,
    deleteClip: PropTypes.func,
    playClip: PropTypes.func.isRequired,
    updateClip: PropTypes.func,
    validateClip: PropTypes.func,
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
      const { name, start, end, id } = this.props.clip;
      return (
        <ClipForm
          createClip={this.onSubmitUpdate}
          validateClip={this.props.validateClip}
          {...{ name, start: parseInt(start, 10), end: parseInt(end, 10), id }}
        />
      );
    }
    return (
      <Row className="clip-row">
        <Form>
          <Col xs={3}>
            Clip Name: {this.props.clip.name}
          </Col>
          <Col xs={3}>
            Start: {this.props.clip.start}
          </Col>
          <Col xs={3}>
            End: {this.props.clip.end}
          </Col>
          <Col xs={3}>
            <Button onClick={this.onClickPlay}>Play</Button>{' '}
            {this.getUpdateButton()}{' '}
            {this.getDeleteButton()}
          </Col>
        </Form>
      </Row>
    );
  },
});

export default Clip;
