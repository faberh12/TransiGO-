import React, { useState } from 'react';

const routes = [
    {
        id: 1,
        name: "Ruta A",
        stops: [
            { id: 1, name: "Parada 1", estimatedArrival: "5 minutos" },
            { id: 2, name: "Parada 2", estimatedArrival: "10 minutos" },
            { id: 3, name: "Parada 3", estimatedArrival: "15 minutos" },
        ],
    },
    {
        id: 2,
        name: "Ruta B",
        stops: [
            { id: 4, name: "Parada 1", estimatedArrival: "3 minutos" },
            { id: 5, name: "Parada 2", estimatedArrival: "8 minutos" },
            { id: 6, name: "Parada 3", estimatedArrival: "12 minutos" },
        ],
    },
];

export function TimeChecker() {
    const [selectedRoute, setSelectedRoute] = useState(null); 
    const [routeStops, setRouteStops] = useState([]); 

    // Manejar la selección de una ruta
    const handleRouteSelect = (e) => {
        const routeId = parseInt(e.target.value); 
        const route = routes.find((r) => r.id === routeId);
        setSelectedRoute(route); 
        setRouteStops(route ? route.stops : []); 
    };

    return (
        <div className="time-checker-container">
            <h2>Consulta el tiempo de llegada</h2>

            {/* Selector de rutas */}
            <select onChange={handleRouteSelect} defaultValue="">
                <option value="" disabled>Selecciona una ruta</option>
                {routes.map((route) => (
                    <option key={route.id} value={route.id}>
                        {route.name}
                    </option>
                ))}
            </select>

            {selectedRoute && (
                <div className="route-details">
                    <h3>{`Paradas de la ${selectedRoute.name}`}</h3>
                    <ul>
                        {routeStops.map((stop) => (
                            <li key={stop.id}>
                                <strong>{stop.name}</strong>: {stop.estimatedArrival}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {!selectedRoute && <p>Por favor selecciona una ruta para ver los tiempos.</p>}
        </div>
    );
}
