import React from 'react';
import './Home.css';
import { Header } from '../../molecules/Header/Header';
import { Link } from 'react-router-dom';
import NearbyStop from '../NearbyStop';

export function Home() {
  const tarifa = 2700; // Tarifa fija del bus
  
  return (
    <div className="home-container">
      <Header />

      <header className="main-header">
        <div className="header-content">
          <h1>Bienvenido a TransiGO!</h1>
          <p>Prepárate para explorar las rutas de buses en Manizales.</p>

          {/* Sección de Tarifa */}
          <div className="tarifa">
            <p>La tarifa actual del bus es: <strong>${tarifa}</strong></p>
          </div>

          <div className="button-container">
            <button className="start-btn"><Link to={"/signup"}>Comenzar</Link></button>

            <button className="service-btn">
              <Link to="/contact">Servicio al Cliente</Link>
            </button>
          </div>
        </div>
        <div className="city-image" />
      </header>

      <section className="nearby-stop-section">
        <h2>Encuentra la parada de buseta más cercana</h2>
        <NearbyStop />
      </section>

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
