import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory } from 'react-router';
import BasicExample from './BasicExample';

ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
