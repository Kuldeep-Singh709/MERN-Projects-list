import React from "react";
import { NavLink } from "react-router-dom";
import "./Css/Navbar.css"
export default function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logoName">
            <h1>Admin Panel</h1>
          </div>

          <nav className="navbarLink">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">LogIn</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
