import { useState } from 'react';
import React from "react";
import './FAQ.css';


const FAQ = () => {
  const [preguntas, setPreguntas] = useState([
    {
      id: 1,
      pregunta: '¿Puedo buscar un lugar específico?',
      respuesta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis nisi fermentum odio mattis ullamcorper. Suspendisse id fermentum orci. Aenean ligula quam, accumsan et laoreet et, auctor non ante. Integer at consectetur risus. In varius, mauris et consequat bibendum, enim odio commodo odio, quis accumsan nunc lectus vitae odio. Nulla lacinia ligula non nulla efficitur porttitor. Curabitur mollis massa urna, vel convallis ipsum imperdiet vel.',
      abierto: false,
    },
    {
      id: 2,
      pregunta: '¿TransiGo me informa si hay algún incidente en la ruta?',
      respuesta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis nisi fermentum odio mattis ullamcorper. Suspendisse id fermentum orci. Aenean ligula quam, accumsan et laoreet et, auctor non ante. Integer at consectetur risus. In varius, mauris et consequat bibendum, enim odio commodo odio, quis accumsan nunc lectus vitae odio. Nulla lacinia ligula non nulla efficitur porttitor. Curabitur mollis massa urna, vel convallis ipsum imperdiet vel.',
      abierto: false,
    },
    {
      id: 3,
      pregunta: '¿Puedo compartir mi ruta con otros usuarios?',
      respuesta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis nisi fermentum odio mattis ullamcorper. Suspendisse id fermentum orci. Aenean ligula quam, accumsan et laoreet et, auctor non ante. Integer at consectetur risus. In varius, mauris et consequat bibendum, enim odio commodo odio, quis accumsan nunc lectus vitae odio. Nulla lacinia ligula non nulla efficitur porttitor. Curabitur mollis massa urna, vel convallis ipsum imperdiet vel.',
      abierto: false,
    },
    {
      id: 4,
      pregunta: '¿Cuántas rutas puedo almacenar?',
      respuesta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis nisi fermentum odio mattis ullamcorper. Suspendisse id fermentum orci. Aenean ligula quam, accumsan et laoreet et, auctor non ante. Integer at consectetur risus. In varius, mauris et consequat bibendum, enim odio commodo odio, quis accumsan nunc lectus vitae odio. Nulla lacinia ligula non nulla efficitur porttitor. Curabitur mollis massa urna, vel convallis ipsum imperdiet vel.',
      abierto: false,
    }
  ]);
  
  const handleToggle = (id) => {
    setPreguntas(
      preguntas.map((pregunta) =>
        pregunta.id === id ? { ...pregunta, abierto: !pregunta.abierto } : pregunta
      )
    );
  };
  return(
    <div className="container">
      <div className="header-container">
        {/* Barra de navegación */}
        <nav className="navbar">
          <div className="logo" />
            <ul className="nav-links">
              <li>Inicio</li>
              <li>Nosotros</li>
              <li>Contacto</li>
              <li>FAQ</li>
            </ul>
          <div className="header-buttons">
            <button className="count-btn"></button>
            <button className="menu-btn"></button>
          </div>
        </nav>
      </div>
      <div className="inter-container">
        <div className="title">
          <h1>Preguntas frecuentes</h1>
          <p>Aquí te presentamos algunas de las preguntas más frecuentes de TransiGo</p>
        </div>
        <div className="search-bar">
          <button className="menu-search-btn"></button>
          <input type="text" placeholder="Buscar en TransiGo!" />
          <button className="search-btn" type="submit"></button>
        </div>
      </div>
      <div className="faq-container">
        {preguntas.map((pregunta) => (
        <div className="faq-question">
          <div className="faq-question-header">
            <h2>{pregunta.pregunta}</h2>
            <button
              className="faq-toggle"
              onClick={() => handleToggle(pregunta.id)}
            >
              {pregunta.abierto ? '-' : '+'}
            </button>
          </div>
          {pregunta.abierto && (
            <div className="faq-answer">
              <p>{pregunta.respuesta}</p>
            </div>
          )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ