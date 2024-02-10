import React from "react";
import { NavLink } from "react-router-dom";
import "./Css/Navbar.css";
import { useAuth } from "../Store/Auth";

export default function Navbar() {
  const { isLoggedIn } = useAuth();

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
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"> Login </NavLink>
                  </li>
                </>
              )}
              {/* {isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">LogIn</NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              )} */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
