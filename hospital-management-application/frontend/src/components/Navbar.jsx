import React from 'react'
// import './csss/Navbar.css'; 
import '../Css/Navbar.css'; 

export default function Navbar() {
  return (
    <nav className="navbar">
            <div className="navbar-logo">
                <h2>Hospital Management</h2>
            </div>
            <ul className="navbar-links">
                <li><a href="">Home</a></li>
                <li><a href="">Patients</a></li>
                <li><a href="">Add Patient</a></li>
                <li><a href="">About</a></li>
            </ul>
        </nav>
  )
}






{/* <ul className="navbar-links">
<li><a href="/">Home</a></li>
<li><a href="/patients">Patients</a></li>
<li><a href="/add-patient">Add Patient</a></li>
<li><a href="/about">About</a></li>
</ul> */}