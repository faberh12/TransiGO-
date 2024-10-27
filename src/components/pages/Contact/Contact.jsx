import React from 'react';
import './Contact.css';
import { Header } from '../../molecules/Header/Header';

export function Contact() {
  return (
    <div className="contact-container">
      {/* Barra de navegación */}
      <Header />

      {/* Encabezado principal */}
      <header className="contact-header">
        <div className="header-content">
          <h1>Contáctanos</h1>
          <p>¿Tienes alguna duda o sugerencia? Nos encantaría saber de ti.</p>
        </div>
      </header>

      {/* Formulario de contacto */}
      <section className="contact-form-section">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Enviar Mensaje</button>
        </form>
      </section>

      {/* Pie de página */}
      <footer className="footer">
        <div className="footer-location">
          <div className="footer-logo" />
          <strong>Manizales, Caldas</strong>
        </div>
        <div className="footer-paragraph-container">
          <p className="footer-paragraph">
            Gracias por usar TransiGO. Estamos aquí para ayudarte con cualquier pregunta sobre las rutas de bus.
          </p>
        </div>
      </footer>
    </div>
  );
}
