import React from 'react';
import './Login.css';

import { Link, useLocation } from 'react-router-dom';

export function Login() {
  return (
    <section className='login'>
      <div className='login__decoration'>
        <div className="login-text">
          <h3>Inicios de sesión recientes</h3>
          <p>Haz clic en una foto o agrega una</p>
        </div>
        <div className='login__images'>
          <img src='/user.jpg' className="user-image" />
          <img src='/user.jpg' className="add-image" />
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
          <button className="login-btn"><Link to={"/user"}>Iniciar Sesión</Link></button>
          <p className='register-question'>
            ¿No tienes una cuenta?
            <br />
            <Link className="signup-btn" to={"/signup"}>Registrarse</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
