import React, { PropTypes } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const ClipForm = React.createClass({
  propTypes: {
    addClip: PropTypes.func.isRequired,
    nextClipID: PropTypes.number.isRequired,
  },
  getInitialState() {
    return {
      name: '',
      start: '',
      end: '',
    };
  },
  onClickAdd() {
    const { name, start, end } = this.state;
    const id = this.props.nextClipID;
    if (this.props.addClip({ id, name, start, end })) {
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
      <Form inline>
        <FormControl
          type="text"
          value={this.state.name}
          placeholder="New clip name..."
          onChange={this.handleNameChange}
        />
        <FormControl
          type="text"
          value={this.state.start}
          onChange={this.handleStartChange}
        />
        <FormControl
          type="text"
          value={this.state.end}
          onChange={this.handleEndChange}
        />
        <Button onClick={this.onClickAdd}>Add Clip</Button>
        <span>Next clip ID: {this.props.nextClipID}</span>
      </Form>
    );
  },
});

export default ClipForm;
