import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterState';
import galleryReducer from './galleryState';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gallery : galleryReducer
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


