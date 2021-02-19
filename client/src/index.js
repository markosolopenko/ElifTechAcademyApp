import React from 'react';
import ReactDOM from 'react-dom';

// styles
import "./index.css";

// react router 
import { BrowserRouter } from 'react-router-dom';

// Redux
import { rootReducer } from './core/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// Local Imports
import App from './App';


const store = configureStore({
  reducer: rootReducer,
});



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

