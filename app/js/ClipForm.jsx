import React, { PropTypes } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const ClipForm = React.createClass({
  propTypes: {
    createClip: PropTypes.func,
    end: PropTypes.number,
    name: PropTypes.string,
    start: PropTypes.number,
    updateClip: PropTypes.func,
  },
  getInitialState() {
    return {
      name: this.props.name || '',
      start: this.props.start || '',
      end: this.props.end || '',
    };
  },
  onClickAdd() {
    const { name, start, end } = this.state;
    this.props.createClip(name, start, end);
    this.setState(this.getInitialState());
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
        <Button onClick={this.onClickAdd}>Submit</Button>
      </Form>
    );
  },
});

export default ClipForm;
