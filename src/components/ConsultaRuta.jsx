import React, { useState } from 'react';
import { Header } from './molecules/Header/Header';
import './ConsultaRuta.css';

export default function ConsultaRuta() {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [avisoCompartido, setAvisoCompartido] = useState(false); // Nuevo estado

  const handleConsulta = (e) => {
    e.preventDefault(); 

    if(origen.toLowerCase() === 'centro' && destino.toLowerCase() === 'sultana'){
      setMensaje('La ruta entre el centro y la sultana está bloqueada.');
    } else if(origen.toLowerCase() === 'centro' && destino.toLowerCase() === 'villapilar'){
      setMensaje('La ruta está congestionada, puedes tomar la ruta (Centro - Chipre - Villapilar)');
    } else{
      setMensaje('La ruta está disponible.');
    }
  };

  const handleCompartirRuta = () => {
    setAvisoCompartido(true); // Muestra el aviso
    setTimeout(() => setAvisoCompartido(false), 3000); // Oculta el aviso después de 3 segundos
  };

  return (
    <div className='consulta'>
      <Header />
      <div className='container-consulta'>
        <div className='inter-container-consulta'>
          <form className="consulta-form" onSubmit={handleConsulta}>
            <h2>Consulta de Ruta</h2>
            <div className="input-field">
              <label htmlFor="origen">Origen</label>
              <input
                type="text"
                id="origen"
                placeholder="Ingrese el origen de su ruta"
                value={origen}
                onChange={(e) => setOrigen(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="destino">Destino</label>
              <input
                type="text"
                id="destino"
                placeholder="Ingrese el destino de su ruta"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
              />
            </div>
            <button className='consulta-button'>Consultar</button>
          </form>
          {mensaje && (
            <p className={`mensaje ${mensaje === 'La ruta está disponible.' ? 'mensaje-disponible' : 'mensaje-bloqueada'}`}>
              {mensaje}
            </p>
          )}
          {mensaje === 'La ruta está disponible.' && (
            <button className="compartir-button" onClick={handleCompartirRuta}>Compartir Ruta</button>
          )}
          {avisoCompartido && (
            <div className="aviso-compartido">Ruta compartida con éxito</div>
          )}
        </div>
      </div>
    </div>
  );
}
