import React from 'react';
import './ModuloUsers.css';
import { useState } from 'react';
import { Header } from '../../molecules/Header/Header';

export function ModuloUsers() {
    return (
        <div className="container_module">
            <Header/>
            {/* Contenido del modulo */}
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
                        <button>Ver detalles de la ruta</button>
                        <button>Ver mapa completo</button>
                        <button>Guardar rutas</button>
                        <button>Ver tus rutas</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
