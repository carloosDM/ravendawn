import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/cadastro">
          <p>Cadastro</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
