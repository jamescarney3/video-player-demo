import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App.jsx';

require('./index.html');
require('./sintel_trailer-480.mp4');
require('./sintel.jpg');
require('./chapters.vtt');

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('content')
);
