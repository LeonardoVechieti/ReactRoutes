import React from 'react'
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link> */}
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product">Product</NavLink>
    </nav>
  )
}

export default NavBar