import React from 'react';
import './Login.css';

export function Login() {
  return (
    <section className='login'>
      <div className='login__decoration'>
        <div className="login-text">
          <h3>Inicios de sesión recientes</h3>
          <p>Haz clic en una foto o agrega una</p>
        </div>
        <div className='login__images'>
          <img src='/image_2.jpg' className="user-image" />
          <img src='/image_2.jpg' className="add-image" />
        </div>
      </div>

      {/* Formulario de login */}
      <div className="login-form-container">
        <form className="login-form">
          <h2>Log In</h2>
          <div className="input-field">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="Correo Electrónico" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Contraseña" />
          </div>
          <button className="login-btn">Iniciar Sesión</button>
          <button className="signup-btn">Registrarse</button>
        </form>
      </div>
    </section>
  );
}
