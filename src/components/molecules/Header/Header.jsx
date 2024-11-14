import React, { useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { LoginRegister } from './LoginRegister/LoginRegister.jsx';
import { UserAuth } from './UserAuth/UserAuth.jsx';

export function Header() {
  const [session, setSession] = useState("");
  const router = useLocation();

  return (
    <section className="navbar">
      <div className="logo" />
      <nav className="nav-links">
        <li className={router.pathname == '/' ? 'current' : ''}><Link to={"/"}>Inicio</Link></li>
        <li className={router.pathname == '/contact' ? 'current' : ''}><Link to={"/contact"}>Contacto</Link></li>
        <li className={router.pathname == '/user' ? 'current' : ''}><Link to={"/user"}>Nosotros</Link></li>
        <li className={router.pathname == '/faq' ? 'current' : ''}><Link to={"/faq"}>FAQ</Link></li>
      </nav>
      {session ? <UserAuth /> : <LoginRegister />}
    </section>
  );
}

