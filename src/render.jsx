import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './Components/Render';


const options = {
  timeout: 10000,
  position: 'bottom right',
  offset: '10px',
  transition: 'scale',
};


ReactDOM.render(
  (
    <Provider template={AlertTemplate} {...options}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  ), document.getElementById('root'),
);
