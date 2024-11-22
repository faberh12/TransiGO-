import React, { useState, useEffect } from 'react';
import './Notification.css';

const availableRoutes = ["Ruta A", "Ruta B", "Ruta C"];
const availableTimes = ["Mañana", "Tarde", "Noche"];

export function NotificationSettings() {
    const [selectedRoutes, setSelectedRoutes] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [notifications, setNotifications] = useState([]);

    // Cargar preferencias desde localStorage
    useEffect(() => {
        const savedRoutes = JSON.parse(localStorage.getItem("preferredRoutes")) || [];
        const savedTimes = JSON.parse(localStorage.getItem("preferredTimes")) || [];
        setSelectedRoutes(savedRoutes);
        setSelectedTimes(savedTimes);
    }, []);

    // Manejar cambios en la selección de rutas
    const handleRouteChange = (e) => {
        const { value, checked } = e.target;
        setSelectedRoutes((prev) =>
            checked ? [...prev, value] : prev.filter((route) => route !== value)
        );
    };

    // Manejar cambios en la selección de horarios
    const handleTimeChange = (e) => {
        const { value, checked } = e.target;
        setSelectedTimes((prev) =>
            checked ? [...prev, value] : prev.filter((time) => time !== value)
        );
    };

    // Guardar preferencias en localStorage
    const savePreferences = () => {
        localStorage.setItem("preferredRoutes", JSON.stringify(selectedRoutes));
        localStorage.setItem("preferredTimes", JSON.stringify(selectedTimes));
        alert("Preferencias guardadas exitosamente");
    };

    // Simular notificaciones relevantes
    const simulateNotifications = () => {
        const messages = [];
        if (selectedRoutes.length && selectedTimes.length) {
            messages.push(
                `Notificación: Información relevante para las rutas ${selectedRoutes.join(
                    ", "
                )} durante ${selectedTimes.join(", ")}.`
            );
        } else {
            messages.push("Por favor configura tus preferencias de notificaciones.");
        }
        setNotifications(messages);
    };

    return (
        <div className="notification-settings">
            <h2>Configura tus notificaciones</h2>
            <div>
                <h3>Selecciona tus rutas de interés:</h3>
                {availableRoutes.map((route) => (
                    <label key={route}>
                        <input
                            type="checkbox"
                            value={route}
                            checked={selectedRoutes.includes(route)}
                            onChange={handleRouteChange}
                        />
                        {route}
                    </label>
                ))}
            </div>
            <div>
                <h3>Selecciona tus horarios de interés:</h3>
                {availableTimes.map((time) => (
                    <label key={time}>
                        <input
                            type="checkbox"
                            value={time}
                            checked={selectedTimes.includes(time)}
                            onChange={handleTimeChange}
                        />
                        {time}
                    </label>
                ))}
            </div>
            <button onClick={savePreferences}>Guardar preferencias</button>
            <button onClick={simulateNotifications}>Simular notificaciones</button>

            <div className="notifications">
                <h3>Notificaciones:</h3>
                {notifications.map((note, index) => (
                    <p key={index}>{note}</p>
                ))}
            </div>
        </div>
    );
}
