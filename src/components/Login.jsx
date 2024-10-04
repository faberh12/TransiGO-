import React from 'react';
import './Login.css';

export function Login() {
  return (
    <div className="login-container">
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

      {/* Contenido del login */}
      <header className="login-header">
        <div className="header-content">
          <h1>Bienvenido de nuevo!</h1>
          <p>Inicia sesión para continuar explorando las rutas de buses en Manizales.</p>
        </div>
      </header>

      {/* Formulario de login */}
      <div className="login-form-container">
        <form className="login-form">
          <h2>Iniciar Sesión</h2>
          <div className="input-field">
            <label htmlFor="email">Correo Electronico</label>
            <input type="email" id="email" placeholder="Correo Electronico" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Contraseña" />
          </div>
          <button className="login-btn">Iniciar Sesión</button>
          <button className="signup-btn">Registrarse</button>
        </form>
      </div>

      {/* Pie de página */}
      <footer className="footer">
        <div className="footer-location">
          <div className="footer-logo" />
          <strong>Manizales, Caldas</strong>
        </div>
        <div className="footer-paragraph-container">
          <p className="footer-paragraph">
            Accede a todas las funcionalidades de la aplicación iniciando sesión. ¡Estamos aquí para facilitar tu viaje en bus!
          </p>
        </div>
      </footer>
    </div>
  );
};
