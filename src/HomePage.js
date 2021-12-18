import React from 'react'
import NavBar from './components/NavBar'
import { Link } from "react-router-dom";


function HomePage() {

    return(
      <>
        <NavBar />
        <div className='mijnHoofdTekst'>
             Welcome Sven
        </div>
        <div className= 'mijnHoofdBalk'>
            <Link to='/projects'className='navHomeLink_Projects'>
            <div className="hoogte1"></div>

              <div>
                <h1 className='navHome'>Projects</h1>
              </div>
            </Link>
            <Link to='/profile'className='navHomeLink_Profile'>
            <div className="hoogte1"></div>
              <div>
                <h1 className='navHome'>Profile</h1>
              </div>
            </Link>
            <Link to='/users' className='navHomeLink_Users'>
            <div className="hoogte1"></div>
              <div>
                <h1 className='navHome'>User Management</h1>
              </div>
            </Link>
            <Link to='/about' className='navHomeLink_About'>
                <div className="hoogte1"></div>
              <div>
                <h1 className='navHome'>
                
                  About
                  
                  </h1>
              </div>
            </Link>
        </div>
      </>
    )
}

export default HomePage