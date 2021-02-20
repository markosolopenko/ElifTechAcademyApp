import React from 'react';
import ReactDOM from 'react-dom';

// styles
import "./index.css";

// react router 
import { BrowserRouter } from 'react-router-dom';

// Context
import { BanksContext } from './Context/BanksContext';

// Local Imports
import App from './App';





ReactDOM.render(
  <BanksContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BanksContext>,
  document.getElementById('root')
);

