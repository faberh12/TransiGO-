// src/components/WeeklySummary.js
import React from 'react';

// Datos ficticios de rutas
const mockRoutes = [
  { name: 'Ruta 1', duration: 45, date: '2024-11-07T10:30:00Z' },
  { name: 'Ruta 2', duration: 30, date: '2024-11-08T12:00:00Z' },
  { name: 'Ruta 3', duration: 60, date: '2024-11-09T15:00:00Z' },
  { name: 'Ruta 4', duration: 20, date: '2024-11-10T09:00:00Z' },
  { name: 'Ruta 5', duration: 50, date: '2024-11-11T08:30:00Z' },
];

const WeeklySummary = () => {
  // Función para calcular el tiempo total y las rutas de la semana
  const getWeeklySummary = () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    // Filtrar rutas de la última semana
    const weeklyRoutes = mockRoutes.filter(route => new Date(route.date) >= oneWeekAgo);
    const totalTime = weeklyRoutes.reduce((total, route) => total + route.duration, 0);

    return { weeklyRoutes, totalTime };
  };

  // Obtener el resumen de la semana
  const { weeklyRoutes, totalTime } = getWeeklySummary();

  return (
    <div className="weekly-summary">
      <h2>Resumen Semanal de Transporte</h2>
      
      <div className="summary-info">
        <p><strong>Tiempo total dedicado al transporte:</strong> {Math.floor(totalTime / 60)} horas y {totalTime % 60} minutos</p>
        <p><strong>Número de viajes realizados:</strong> {weeklyRoutes.length}</p>
      </div>
      
      <ul className="routes-list">
        {weeklyRoutes.map((route, index) => (
          <li key={index} className="route-item">
            <p><strong>Ruta:</strong> {route.name}</p>
            <p><strong>Fecha:</strong> {new Date(route.date).toLocaleDateString()}</p>
            <p><strong>Duración:</strong> {route.duration} minutos</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklySummary;
