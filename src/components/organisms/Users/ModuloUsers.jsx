import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ModuloUsers.css';
import { Header } from '../../molecules/Header/Header';
import RouteHistory from '../../RouteHistory';
import WeeklySummary from '../../WeeklySummary';
import RouteStops from '../../RouteStops';
import { TimeChecker } from '../../data/TimeChecker';


export function ModuloUsers() {
    const [showRouteHistory, setShowRouteHistory] = useState(false);
    const [showWeeklySummary, setShowWeeklySummary] = useState(false);
    const [showNotificationForm, setShowNotificationForm] = useState(false);
    const [savedRoutes, setSavedRoutes] = useState([]);
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const [alertsActivated, setAlertsActivated] = useState(false);
    const [showReportForm, setShowReportForm] = useState(false);
    const [reportText, setReportText] = useState("");

    const [dynamicText, setDynamicText] = useState("");
    const [showTimeChecker, setShowTimeChecker] = useState(false); // Estado para controlar la visibilidad de TimeChecker

    // Estado para las paradas de la ruta
    const [showRouteStops, setShowRouteStops] = useState(false);
    const [currentStopIndex, setCurrentStopIndex] = useState(0);

    const stops = [
        { id: 1, name: "Parada 1" },
        { id: 2, name: "Parada 2" },
        { id: 3, name: "Parada 3" },
        { id: 4, name: "Parada 4" },
        { id: 5, name: "Destino final" },
    ];


    useEffect(() => {
        const handleOnlineStatus = () => setIsOnline(navigator.onLine);
        window.addEventListener("online", handleOnlineStatus);
        window.addEventListener("offline", handleOnlineStatus);

        return () => {
            window.removeEventListener("online", handleOnlineStatus);
            window.removeEventListener("offline", handleOnlineStatus);
        };
    }, []);

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

    const toggleNotificationForm = () => {
        setShowNotificationForm(!showNotificationForm); 
        setDynamicText(
            showNotificationForm
                ? "Cerrando configuración de notificaciones."
                : "Abriendo configuración de notificaciones."
        );
    };

    const saveRoute = (newRoute) => {
        const updatedRoutes = [...savedRoutes, newRoute];
        setSavedRoutes(updatedRoutes);
        localStorage.setItem("savedRoutes", JSON.stringify(updatedRoutes));
        setDynamicText("¡Ruta guardada exitosamente!");
    };

    const toggleRouteStops = () => {
        setShowRouteStops(!showRouteStops);
    };

    const advanceStop = () => {
        if (currentStopIndex < stops.length - 1) {
            setCurrentStopIndex(currentStopIndex + 1);
        }
    };
     // Función para manejar la visibilidad de TimeChecker
     const handleTimeCheckerToggle = () => {
        setShowTimeChecker(!showTimeChecker); // Cambiar el estado de la visibilidad
    };

    const toggleAlerts = () => {
        setAlertsActivated(!alertsActivated);
        if (!alertsActivated) {
            console.log("Alertas activadas");
            
        } else {
            console.log("Alertas desactivadas");
        }
    };

    const toggleReportForm = () => {
        setShowReportForm(!showReportForm);
    };

    const handleReportSubmit = (e) => {
        e.preventDefault();
        console.log("Reporte enviado:", reportText);
        setReportText("");
        setShowReportForm(false);
    };

    return (
        <div className="container_module">
            <Header />
            <div className="inter_container_module">
                <div className="left_section">
                    <div className="title_module">
                        <h1>Bienvenido (usuario)</h1>
                        <div className="map_image" />
                        <div className="footer_module">
                            <img src="/logo.png" alt="" />
                            <p>Manizales, Caldas</p>
                        </div>
                    </div>
                </div>
                <div className="right_section">
                    <div className="module_option_header">
                        <h2>¿Qué desea hacer?</h2>
                        <button>
                            <Link to={"/user/rutas"}>Consulta ruta</Link>
                        </button>
                        <button
                            onClick={() =>
                                saveRoute({ id: Date.now(), nombre: "Nueva Ruta", destino: "Destino" })
                            }
                        >
                            Guardar ruta actual
                        </button>
                        <button onClick={toggleRouteHistory}>Ver tus rutas guardadas</button>
                        <button onClick={toggleWeeklySummary}>Ver resumen semanal</button>

                        <button onClick={toggleAlerts}>
                            {alertsActivated ? "Desactivar alertas de desvío de ruta" : "Activar alertas de desvío de ruta"}
                        </button>
                        <button onClick={toggleReportForm}>Reportar problema en la ruta</button>
                    </div>

                    {/* Formulario de reporte de problemas */}
                    {showReportForm && (
                        <form className="report-form" onSubmit={handleReportSubmit}>
                            <textarea 
                                placeholder="Describe el problema en la ruta"
                                value={reportText}
                                onChange={(e) => setReportText(e.target.value)}
                            />
                            <button type="submit">Enviar reporte</button>
                        </form>
                    )}

                    {/* Historial de rutas guardadas */}

                        <button onClick={toggleNotificationForm}>
                            {showNotificationForm ? "Cerrar notificaciones" : "Configurar notificaciones"}
                        </button>

                        <button onClick={toggleRouteStops}>
                            {showRouteStops ? "Ocultar paradas" : "Ver paradas restantes"}
                        </button>

                        <button onClick={handleTimeCheckerToggle}>
                            {showTimeChecker ? "Ocultar tiempos de llegada" : "Consultar tiempo de llegada"}
                        </button>
                    </div>
                            

                    <div className="text-container">
                        {dynamicText && <p>{dynamicText}</p>}
                    </div>

                    {showRouteHistory && (
                        <div className="route-history-section">
                            <RouteHistory routes={savedRoutes} />
                        </div>
                    )}

                    {showWeeklySummary && (
                        <div className="weekly-summary-section">
                            <WeeklySummary />
                        </div>
                    )}

                    {showNotificationForm && (
                        <div className="notification-settings">
                            <h3>Configurar Notificaciones</h3>
                            <form>
                                <label>
                                    <input type="checkbox" /> Recibir notificaciones para esta ruta
                                </label>
                                <label>
                                    <input type="checkbox" /> Recordatorios de horarios
                                </label>
                                <label>
                                    <input type="checkbox" /> Alertas de tráfico
                                </label>
                                <button type="submit">Guardar configuración</button>
                            </form>
                        </div>
                    )}
                    {showTimeChecker && <TimeChecker />}

                    {showRouteStops && (
                        <RouteStops
                            stops={stops}
                            currentStopIndex={currentStopIndex}
                            advanceStop={advanceStop}
                        />
                    )}

                    {!isOnline && (
                        <div className="offline-message">
                            Estás sin conexión. Las rutas guardadas están disponibles.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

