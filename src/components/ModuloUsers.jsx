import React from 'react';
import './ModuloUsers.css';
import { useState } from 'react';
import { Header } from './Header/Header';

export function ModuloUsers() {
    const [mostrarInfo, setMostrarInfo] = useState([
        {
            id: 1,
            boton: 'Ver detalles de la ruta',
            contenido: 'Aquí están tus detalles de la ruta.',
            abierto: true,
        },
        {
            id: 2,
            boton: 'Ver mapa completo',
            contenido: 'Aquí está tu mapa completo.',
            abierto: false,
        },
        {
            id: 3,
            boton: 'Guardar rutas',
            contenido: 'Aquí puedes guardar tus rutas.',
            abierto: false,
        },
        {
            id: 4,
            boton: 'Ver tus rutas',
            contenido: 'Aquí puedes ver tus rutas.',
            abierto: false,
        }
    ]);

    // Función que muestra u oculta la información
    const handleButtonClick = (id) => {
        setMostrarInfo(
            mostrarInfo.map((boton) =>
                boton.id === id ? { ...boton, abierto: !boton.abierto } : boton
              )
        );
    };
    return (
        <div className="container">
            <Header/>
            {/* Contenido del modulo */}
            <div className="welcome-container">
                <h1>Bienvenido (usuario)</h1>
                <h2>¿Qué desea hacer?</h2>
                <button className=''></button>
            </div>
            <div className="map-image" />
            <div className='modulo-container'>
                {mostrarInfo.map((boton) => (
                    <div className='modulo-option'>
                        <div className='modulo-option-header'>
                            <h2>{mostrarInfo.mostrarInfo}</h2>
                            <button className='modulo-toggle' onClick={() => handleButtonClick(mostrarInfo.id)}>
                                {mostrarInfo.abierto ? '-' : '+'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
