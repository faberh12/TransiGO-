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

      {/* Contenido de login */}
      <div className="login-content">
      </div>
    </div>
  );
};