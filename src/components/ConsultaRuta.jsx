import React from 'react'
import { Header } from './molecules/Header/Header';
import { Link } from 'react-router-dom';
import './ConsultaRuta.css';

export default function ConsultaRuta() {
  return (
    <div className='consulta'>
        <Header />
        <div className='container-consulta'>
            <div className='inter-container-consulta'>
                <form className="consulta-form">
                    <h2>Log In</h2>
                    <div className="input-field">
                        <label htmlFor="origen">Origen</label>
                        <input type="text" id="origen" placeholder="Ingrese el origen de su ruta" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="destino">Destino</label>
                        <input type="text" id="destino" placeholder="Ingrese el destino de su ruta" />
                    </div>
                    <button className='consulta-button'>Consultar</button>
                </form>
            </div>
        </div>
    </div>
  )
}
