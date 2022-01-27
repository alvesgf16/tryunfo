import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TryunfoProvider from './context/TryunfoProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <TryunfoProvider>
    <App />
  </TryunfoProvider>,
  document.getElementById('root'),
);
