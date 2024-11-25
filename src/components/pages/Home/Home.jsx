import React, { useState } from 'react';
import './Home.css';
import { Header } from '../../molecules/Header/Header';
import { Link } from 'react-router-dom';
import NearbyStop from '../NearbyStop';

export function Home() {
  const tarifa = 2700; // Tarifa fija del bus
  const [showPlanningModal, setShowPlanningModal] = useState(false);
  const [travelPlans, setTravelPlans] = useState([]);

  const togglePlanningModal = () => {
    setShowPlanningModal(!showPlanningModal);
  };

  const addTravelPlan = (event) => {
    event.preventDefault();
    const newPlan = event.target.elements.plan.value;
    setTravelPlans([...travelPlans, newPlan]);
    event.target.reset();
  };

  return (
    <div className="home-container">
      <Header />

      <header className="main-header">
        <div className="header-content">
          <h1>Bienvenido a TransiGO!</h1>
          <p>Prepárate para explorar las rutas de buses en Manizales.</p>

          <div className="tarifa">
            <p>La tarifa actual del bus es: <strong>${tarifa}</strong></p>
          </div>

          <div className="button-container">
            <button className="start-btn"><Link to={"/signup"}>Comenzar</Link></button>
            <button className="service-btn">
              <Link to="/contact">Servicio al Cliente</Link>
            </button>
            <button className="planning-btn" onClick={togglePlanningModal}>
              Mis Planificaciones
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

      {/* Agregacion de planificaciones */}
      {showPlanningModal && (
        <div className="planning-modal">
          <h2>Planifica tu viaje</h2>
          <form onSubmit={addTravelPlan}>
            <input type="text" name="plan" placeholder="Describe tu planificación" required />
            <button type="submit">Agregar</button>
          </form>
          <button onClick={togglePlanningModal} className="close-modal-btn">Cerrar</button>
          <div className="travel-plans">
            <h3>Mis Planificaciones</h3>
            <ul>
              {travelPlans.map((plan, index) => (
                <li key={index}>{plan}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

