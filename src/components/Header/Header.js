import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
  <header>
    <NavLink to='/'><h1>LightSide</h1></NavLink>
  </header>
  )
}

export default Header;