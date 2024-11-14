import React from 'react';
import './Home.css';
import { Header } from '../../molecules/Header/Header';
import { Link } from 'react-router-dom';

export function Home() {
  const tarifa = 2700; // Tarifa fija del bus
  
  return (
    <div className="home-container">
      {/* Barra de navegación */}
      <Header />

      {/* Encabezado principal */}
      <header className="main-header">
        <div className="header-content">
          <h1>Bienvenido a TransiGO!</h1>
          <p>Prepárate para explorar las rutas de buses en Manizales.</p>

          {/* Sección de Tarifa */}
          <div className="tarifa">
            <p>La tarifa actual del bus es: <strong>${tarifa}</strong></p>
          </div>

          {/* Contenedor para los botones */}
          <div className="button-container">
            <button className="start-btn"><Link to={"/signup"}>Comenzar</Link></button>

            {/* Botón de Servicio al Cliente */}
            <button className="service-btn">
              <Link to="/contact">Servicio al Cliente</Link>
            </button>
          </div>
        </div>
        <div className="city-image" />
      </header>

      {/* Pie de página */}
      <footer className="footer">
        <div className="footer-location">
          <div className="footer-logo" />
          <strong>Manizales, Caldas</strong>
        </div>
        <div className="footer-paragraph-container">
          <p className="footer-paragraph">
            Disfruta de esta aplicación al máximo, las rutas de busetas muchas veces se demoran,
            ¡aprovecha para saber cuál es tu ruta!
          </p>
        </div>
      </footer>
    </div>
  );
}



