import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterState';


export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


