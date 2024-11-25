import React, { useState, useEffect } from 'react';
import './ModuloUsers.css';
import { Header } from '../../molecules/Header/Header';
import RouteHistory from '../../RouteHistory';
import WeeklySummary from '../../WeeklySummary';

export function ModuloUsers() {
    const [showRouteHistory, setShowRouteHistory] = useState(false);
    const [showWeeklySummary, setShowWeeklySummary] = useState(false);
    const [savedRoutes, setSavedRoutes] = useState([]);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [alertsActivated, setAlertsActivated] = useState(false);
    const [showReportForm, setShowReportForm] = useState(false);
    const [reportText, setReportText] = useState("");

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
    };

    const toggleWeeklySummary = () => {
        setShowWeeklySummary(!showWeeklySummary); 
    };

    const saveRoute = (newRoute) => {
        const updatedRoutes = [...savedRoutes, newRoute];
        setSavedRoutes(updatedRoutes);
        localStorage.setItem("savedRoutes", JSON.stringify(updatedRoutes));
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
                        <button onClick={() => saveRoute({ id: Date.now(), nombre: "Nueva Ruta", destino: "Destino" })}>
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
                </div>
            </div>
        </div>
    );
}

