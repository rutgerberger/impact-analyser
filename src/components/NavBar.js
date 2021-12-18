import React from "react";
import { Link } from "react-router-dom";


function NavBar({ }) {
    return(
        <nav className='mainNav'>
            <Link className='contentleft' to='/'>
                <img className='logo' src="./images/logo-taskdivider.jpg" alt="Logo Task Divider" />
            </Link>
           <div className="mijnDiv" > </div>
          
           <h1 className='content' >Impact Analyser</h1>
           
           <div className="mijnDiv" > </div>
            <Link className='contentright' to='/profile'>
            </Link>
        </nav> 
    );
}

export default NavBar;
