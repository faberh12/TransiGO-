import React, { useState } from 'react'
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { LoginRegister } from './LoginRegister/LoginRegister.jsx';
import { UserAuth } from './UserAuth/UserAuth.jsx';

export function Header() {

  const [session, setSession] = useState("");

  const router = useLocation()

  return (
    <section className="navbar">
      <div className="logo" />
      <nav className="nav-links">
        <li className={router.pathname == '/' ? 'current' : ''}><Link to={"/"}>Inicio</Link></li>
        <li className={router.pathname == '/user'}><Link to={"/"}>Nosotros</Link></li>
        <li className={router.pathname == '/contacto' ? 'current' : ''}><Link to={"/"}>Contacto</Link></li>
        <li className={router.pathname == '/FAQ' ? 'current' : ''}><Link to={"/FAQ"}>FAQ</Link></li>
      </nav>
      {session? <UserAuth/> : <LoginRegister/>}
    </section>
  )
}
