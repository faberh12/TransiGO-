// components/RouteHistory.js
import React from 'react';
import './RouteHistory.css';

const RouteHistory = ({ routes }) => {
    return (
        <div className="route-history">
            <h2>Rutas Guardadas</h2>
            {routes.length > 0 ? (
                <ul>
                    {routes.map((ruta) => (
                        <li key={ruta.id} className="route-item">
                            <p><strong>Ruta:</strong> {ruta.nombre}</p>
                            <p><strong>Destino:</strong> {ruta.destino}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tienes rutas guardadas.</p>
            )}
        </div>
    );
};

export default RouteHistory;
