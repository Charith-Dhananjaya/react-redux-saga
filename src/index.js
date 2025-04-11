import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


