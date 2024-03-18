import React from 'react';
import '../components/Nav.css';
import Logo from '../assets/images/Logo.png';
import ButtonAdd from '../components/ButtonAdd';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
<nav className="nav">
  <div className="left-section">
    <div className="logo-container">
      <Link to="/">
        <img src={Logo} alt="Logo de la empresa" className="logo" />
      </Link>
    </div>
  </div>

  <div className="right-section">
    <ButtonAdd/>
  </div>
</nav>
  )
}

export default Nav
