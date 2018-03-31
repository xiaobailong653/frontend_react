import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Editor from './card';

ReactDOM.render(<Editor />, document.getElementById('root'));
registerServiceWorker();
