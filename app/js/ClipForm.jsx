import React, { PropTypes } from 'react';
import { Button, Form, FormControl, Row, Col } from 'react-bootstrap';

const ClipForm = React.createClass({
  propTypes: {
    createClip: PropTypes.func,
    end: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    start: PropTypes.number,
    updateClip: PropTypes.func,
    validateClip: PropTypes.func,
  },
  getInitialState() {
    return {
      name: this.props.name || '',
      start: this.props.start || '',
      end: this.props.end || '',
      id: this.props.id || '',
    };
  },
  onClickAdd() {
    const { name, start, end, id } = this.state;
    if (this.props.validateClip(name, start, end, id)) {
      this.props.createClip(name, start, end);
      this.setState(this.getInitialState());
    }
  },
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  },
  handleStartChange(e) {
    this.setState({ start: e.target.value });
  },
  handleEndChange(e) {
    this.setState({ end: e.target.value });
  },
  render() {
    return (
      <Row>
        <Form>
          <Col xs={3}>
            <div>Clip name:</div>
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="New clip name..."
              onChange={this.handleNameChange}
            />
          </Col>
          <Col xs={3}>
            <div>Start:</div>
            <FormControl
              type="text"
              value={this.state.start}
              onChange={this.handleStartChange}
            />
          </Col>
          <Col xs={3}>
            <div>End:</div>
            <FormControl
              type="text"
              value={this.state.end}
              onChange={this.handleEndChange}
            />
          </Col>
          <Col xs={3}>
            <br />
            <Button onClick={this.onClickAdd}>Submit</Button>
          </Col>
        </Form>
      </Row>
    );
  },
});

export default ClipForm;
