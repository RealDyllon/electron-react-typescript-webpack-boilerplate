/**
 * React renderer.
 */
// Import the styles here to process them with webpack
import '_public/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));
