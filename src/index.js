import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/index.css"
import { Movie } from './Routes/Movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Movie></Movie>
  </React.StrictMode>
);

