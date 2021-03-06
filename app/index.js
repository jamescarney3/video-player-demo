import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App.jsx';

require('./index.html');
require('./styles/style.scss');

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('content')
);
