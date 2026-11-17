import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const home = (window.location.pathname.replace(/\/+$/, '') || '/') === '/';
const start = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (home) {
  requestAnimationFrame(() => requestAnimationFrame(start));
} else {
  start();
}
