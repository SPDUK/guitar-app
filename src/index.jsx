import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { GuitarProvider } from './contexts/GuitarContext';
import 'focus-visible';

ReactDOM.render(
  <React.StrictMode>
    <GuitarProvider>
      <App />
    </GuitarProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
