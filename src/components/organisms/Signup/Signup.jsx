import React from 'react';
import './Signup.css';

import { Link, useLocation } from 'react-router-dom';

export function Signup() {
  return (
    <section className='register'>
      {/* Formulario de register */}
      <div className="register-form-container">
        <form className="register-form">
          <h2>Sign up</h2>
          <div className="same-row">
            <div className="input-field">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="your name" />
            </div>
            <div className="input-field">
              <label htmlFor="apellido">Apellido</label>
              <input type="text" id="apellido" placeholder="your lastname" />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="telefono">Teléfono</label>
            <input type="phone" id="telefono" placeholder="your phone" />
          </div>
          <div className="input-field">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="your email" />
          </div>
          <div className="same-row">
            <div className="input-field">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" placeholder="your password" />
            </div>
            <div className="input-field">
              <label htmlFor="password">Confirmar Contraseña</label>
              <input type="password" id="password" placeholder="Confirm password" />
            </div>

          </div>
          <button className="register-btn">Registrarse</button>
          <p className='register-question'>
            ¿Ya tienes cuenta?
            <br />
            <Link className="signup-btn" to={"/login"}>Iniciar sesión</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
