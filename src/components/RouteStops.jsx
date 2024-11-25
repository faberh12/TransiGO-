import React from 'react';
import './RouteStop.css';

const RouteStops = ({ stops, currentStopIndex, advanceStop }) => {
    const stopsLeft = stops.slice(currentStopIndex + 1);

    return (
        <div className="stops-info">
            <h3>Paradas restantes</h3>
            <ul>
                {stopsLeft.length > 0 ? (
                    stopsLeft.map((stop) => <li key={stop.id}>{stop.name}</li>)
                ) : (
                    <p>¡Ya has llegado a tu destino!</p>
                )}
            </ul>
            <p>
                Estás en: <strong>{stops[currentStopIndex]?.name}</strong>
            </p>
            <button onClick={advanceStop}>Avanzar a la siguiente parada</button>
        </div>
    );
};

export default RouteStops;
