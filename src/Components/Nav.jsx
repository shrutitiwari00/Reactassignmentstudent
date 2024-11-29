import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; 

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/student" className="nav-link" activeClassName="active-link">
            Students
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" activeClassName="active-link">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
