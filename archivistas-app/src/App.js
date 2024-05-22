import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <h1>Archivos Sin Caos</h1>
      </div>
      <div className="center-container">
        <div className="left-center">
          <div className="image-container">
            <img src={process.env.PUBLIC_URL + '/images/OficinistaFondoMorado.jpg'} alt="Oficinista" className="rounded-image" />
          </div>
        </div>
        <div className="right-center">
          <div className="image-container">
            <img src={process.env.PUBLIC_URL + '/images/LogoBoliRegla.png'} alt="Logo" className="logo-image" />
          </div>
          <div className="button-container">
            <button className="btn">Iniciar Sesión</button>
            <button className="btn">Registrarse</button>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        {/* Aquí va el contenido del contenedor inferior */}
      </div>
    </div>
  );
}

export default App;
