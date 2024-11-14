// src/components/RouteSearch.js
import React, { useState } from 'react';

function RouteSearch() {
  const [route, setRoute] = useState('');

  // Función para agregar la ruta al historial
  const addRouteToHistory = (newRoute) => {
    const history = JSON.parse(localStorage.getItem('routeHistory')) || [];
    if (!history.includes(newRoute)) {  // Evitar duplicados
      history.unshift(newRoute);
      if (history.length > 5) history.pop(); // Limitar a las 5 rutas más recientes
      localStorage.setItem('routeHistory', JSON.stringify(history));
    }
  };

  const handleSearch = () => {
    // Lógica de búsqueda de la ruta (simulada aquí)
    if (route) {
      addRouteToHistory(route);
      alert(`Consulta realizada para la ruta: ${route}`);
    }
  };

  return (
    <div className="route-search">
      <h2>Buscar Ruta</h2>
      <input
        type="text"
        value={route}
        onChange={(e) => setRoute(e.target.value)}
        placeholder="Ingresa la ruta"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default RouteSearch;
