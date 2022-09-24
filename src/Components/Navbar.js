import React from 'react'
import './Navbar.css'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-color">
        <Link className="navbar-brand" to="/">SkillWomen</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/volunteer">Volunteer </Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/learner_validate"> Learner</Link>
            </li>

            <li className="nav-item active">
                <Link className="nav-link" to="/company">Sponsors</Link>
            </li>

            </ul>
            {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button> */}
        </div>
    
        </nav>
    </>
  )
}
// create navbar

export default Navbar
