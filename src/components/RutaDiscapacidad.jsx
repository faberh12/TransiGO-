import React from 'react';
import { Header } from './molecules/Header/Header';
import './RutaDiscapacidad.css';

export default function RutasDiscapacidad() {
  return (
    <div className="rutas-discapacidad">
      <Header />
      <div className="container-rutas-discapacidad">
        <div className="inter-container-rutas-discapacidad">
          <h2>Rutas Disponibles para Personas con Discapacidad</h2>
          <ul className="lista-rutas">
            <li>
              <strong>Centro</strong> ➝ <strong>San Rafael</strong>
            </li>
            <li>
              <strong>San Rafael</strong> ➝ <strong>Milan</strong>
            </li>
            <li>
              <strong>Milan</strong> ➝ <strong>Villapilar</strong>
            </li>
            <li>
              <strong>Villapilar</strong> ➝ <strong>San Sebastián</strong>
            </li>
            <li>
              <strong>San Sebastián</strong> ➝ <strong>Centro</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
