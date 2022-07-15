import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import {ThemeProvider} from '@material-ui/core';
import Theme from './Theme/Theme';

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={Theme}>
      <App />
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
