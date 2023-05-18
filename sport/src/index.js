import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Trainers from './Trainers';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Trainers />
  </React.StrictMode>
);
reportWebVitals();
