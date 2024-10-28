import React from 'react';
import { Link } from 'react-router-dom';
import './LoginRegister.css';

export function LoginRegister() {
  return (
    <div className="auth-buttons">
      <Link to={'/login'}>
        <button className="login-button">Log In</button>
      </Link>
      <Link to={'/signup'}>
        <button className="signup-button">Sign Up</button>
      </Link>
    </div>
  )
}