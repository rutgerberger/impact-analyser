import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

function NavBar({ }) {
    return(
        <nav className='navbar'>
            <Router> <Link className='nav-button' to='/'>
                Impact Analyser
            </Link></Router>
            <Router><Link className='nav-button' to='/'>
                Contact
            </Link></Router>
        </nav> 
    );
}

export default NavBar;
