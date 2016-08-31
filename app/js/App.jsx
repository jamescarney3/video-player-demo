import React, { PropTypes } from 'react';

import Player from './Player.jsx';

const App = React.createClass({
  propTypes: {
    children: PropTypes.node,
  },
  getInitialState() {
    return ({
      clips: [],
    });
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
