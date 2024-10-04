import React, { useState } from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import { LoginRegister } from './LoginRegister/LoginRegister.jsx';
import { UserAuth } from './UserAuth/UserAuth.jsx';

export function Header() {

  const [session, setSession] = useState("");

  return (
    <section className="navbar">
      <div className="logo" />
      <nav className="nav-links">
        <li><Link to={"/"}>Inicio</Link></li>
        <li><Link to={"/"}>Nosotros</Link></li>
        <li><Link to={"/"}>Contacto</Link></li>
        <li><Link to={"/FAQ"}>FAQ</Link></li>
      </nav>
      {session? <UserAuth/> : <LoginRegister/>}
    </section>
  )
}