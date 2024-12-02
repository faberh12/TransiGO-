import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ModuloUsers.css';
import { Header } from '../../molecules/Header/Header';
import RouteHistory from '../../RouteHistory';
import WeeklySummary from '../../WeeklySummary';

export function ModuloUsers() {
    const [showRouteHistory, setShowRouteHistory] = useState(false);
    const [showWeeklySummary, setShowWeeklySummary] = useState(false);
    const [savedRoutes, setSavedRoutes] = useState([]);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [dynamicText, setDynamicText] = useState(""); // Texto dinámico
    const [showDisabilityModal, setShowDisabilityModal] = useState(false);

    // Escucha el cambio de conexión
    useEffect(() => {
        const handleOnlineStatus = () => setIsOnline(navigator.onLine);
        window.addEventListener("online", handleOnlineStatus);
        window.addEventListener("offline", handleOnlineStatus);

        return () => {
            window.removeEventListener("online", handleOnlineStatus);
            window.removeEventListener("offline", handleOnlineStatus);
        };
    }, []);

    // Cargar rutas guardadas de localStorage
    useEffect(() => {
        const routes = JSON.parse(localStorage.getItem("savedRoutes")) || [];
        setSavedRoutes(routes);
    }, []);

    const toggleRouteHistory = () => {
        setShowRouteHistory(!showRouteHistory);
        setDynamicText("Mostrando el historial de rutas guardadas.");
    };

    const toggleWeeklySummary = () => {
        setShowWeeklySummary(!showWeeklySummary);
        setDynamicText("Mostrando el resumen semanal.");
    };

    // Guardar una nueva ruta en localStorage
    const saveRoute = (newRoute) => {
        const updatedRoutes = [...savedRoutes, newRoute];
        setSavedRoutes(updatedRoutes);
        localStorage.setItem("savedRoutes", JSON.stringify(updatedRoutes));
        setDynamicText("¡Ruta guardada exitosamente!");
    };

    const handleDisabilityResponse = (response) => {
        setShowDisabilityModal(false);
    };

    return (
        <div className="container_module">
            <Header />
            <div className='inter_container_module'>
                <div className='left_section'>
                    <div className='title_module'>
                        <h1>Bienvenido (usuario)</h1>
                        <div className="map_image" />
                        <div className='footer_module'>
                            <img src="/logo.png" alt="" />
                            <p>Manizales, Caldas</p>
                        </div>
                    </div>
                </div>
                <div className='right_section'>
                    <div className='module_option_header'>
                        <h2>¿Qué desea hacer?</h2>
                        <button onClick={() => setShowDisabilityModal(true)}>Consulta ruta</button>
                        <button onClick={() => saveRoute({ id: Date.now(), nombre: "Nueva Ruta", destino: "Destino" })}>
                            Guardar ruta actual
                        </button>
                        <button onClick={toggleRouteHistory}>Ver tus rutas guardadas</button>
                        <button onClick={toggleWeeklySummary}>Ver resumen semanal</button>
                    </div>
                    <div className='text-container'>
                        {/* Este es el texto dinámico que cambiará */}
                        {dynamicText && <p>{dynamicText}</p>}
                    </div>

                    {/* Historial de rutas guardadas */}
                    {showRouteHistory && (
                        <div className='route-history-section'>
                            <RouteHistory routes={savedRoutes} />
                        </div>
                    )}

                    {/* Resumen semanal */}
                    {showWeeklySummary && (
                        <div className='weekly-summary-section'>
                            <WeeklySummary />
                        </div>
                    )}

                    {/* Mensaje de estado de conexión */}
                    {!isOnline && (
                        <div className="offline-message">
                            Estás sin conexión. Las rutas guardadas están disponibles.
                        </div>
                    )}

                    {showDisabilityModal && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <h3>¿Tienes alguna discapacidad?</h3>
                                <div className="modal-buttons">
                                    <button>
                                        <Link to="/user/rutas-discapacidad">Si</Link>
                                    </button>
                                    <button>
                                        <Link to="/user/rutas">No</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
