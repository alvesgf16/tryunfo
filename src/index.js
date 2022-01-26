import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TryunfoProvider from './context/TryunfoProvider';

ReactDOM.render(
  <TryunfoProvider>
    <App />
  </TryunfoProvider>,
  document.getElementById('root'),
);
