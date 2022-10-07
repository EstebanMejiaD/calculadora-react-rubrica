import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Componentes/App';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='contenedor-nav'>
        <h1>MatStars Calculator</h1>
    </div>
    <App />
  </React.StrictMode>
);