import React from "react";
import { Link } from "react-router-dom";
import './css/home.css'


function NavBar({ }) {
    return(
        <nav className='navbar'>
            <Link className='nav-button' to='/'>
                Impact Analyser
            </Link>
            <Link className='nav-button' to='/'>
                Contact
            </Link>
        </nav> 
    );
}

export default NavBar;
