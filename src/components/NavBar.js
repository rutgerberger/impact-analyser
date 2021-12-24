import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

function NavBar({ }) {
    return(
        <nav className='navbar'>
            <Link className='nav-button' to='/'>
                Impact Analyser
            </Link>
            <Link className='nav-button' to='/about'>
                Contact
            </Link>
        </nav> 
    );
}

export default NavBar;
