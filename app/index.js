import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App.jsx';

require('./index.html');

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('content')
);
