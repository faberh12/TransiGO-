import React, { useState, useEffect } from 'react';
import MapGL, { Marker } from 'react-map-gl';


const MAPBOX_TOKEN = 'TU_MAPBOX_ACCESS_TOKEN';

const NearbyStop = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestStop, setNearestStop] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 14,
    width: '100%',
    height: '100vh'
  });

  const busStops = [
    { name: 'Parada 1', latitude: 10.988, longitude: -74.788 },
    { name: 'Parada 2', latitude: 10.999, longitude: -74.777 },

  ];


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setViewport({ ...viewport, latitude, longitude });
          findNearestStop(latitude, longitude);
        },
        (error) => console.error('Error obteniendo la ubicación:', error),
        { enableHighAccuracy: true }
      );
    } else {
      alert('Geolocalización no es soportada por tu navegador');
    }
  }, []);


  const findNearestStop = (latitude, longitude) => {
    let nearest = null;
    let minDistance = Infinity;

    busStops.forEach((stop) => {
      const distance = Math.sqrt(
        Math.pow(latitude - stop.latitude, 2) +
        Math.pow(longitude - stop.longitude, 2)
      );

      if (distance < minDistance) {
        minDistance = distance;
        nearest = stop;
      }
    });

    setNearestStop(nearest);
  };

  return (
    <div>
      {userLocation ? (
        <MapGL
          {...viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={(newViewport) => setViewport(newViewport)}
        >
          <Marker
            latitude={userLocation.latitude}
            longitude={userLocation.longitude}
          >
            <div>📍 Tú estás aquí</div>
          </Marker>

          {nearestStop && (
            <Marker
              latitude={nearestStop.latitude}
              longitude={nearestStop.longitude}
            >
              <div>🚏 {nearestStop.name}</div>
            </Marker>
          )}
        </MapGL>
      ) : (
        <p>Cargando ubicación...</p>
      )}
    </div>
  );
};

export default NearbyStop;
