import React from 'react';
import './Home.css'; // Importa los estilos

const Home = () => {
  return (
    <div className="home-container">
      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="logo" />
        <ul className="nav-links">
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Contacto</li>
          <li>FAQ</li>
        </ul>
        <div className="auth-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* Encabezado principal */}
      <header className="main-header">
        <div className="header-content">
          <h1>Bienvenido a TransiGO!</h1>
          <p>Prepárate para explorar las rutas de buses en Manizales.</p>
          <button className="start-btn">Comenzar</button>
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
};

export default Home;
