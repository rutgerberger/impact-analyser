import React from 'react'
import NavBar from './components/NavBar'
import { Link, BrowserRouter as Router } from "react-router-dom";
import './components/css/home.css';

function HomePage() {

    return(
      <div className="styling">
        <NavBar />
        <div className='header'>
               <h2>IMPACT ANALYSER</h2>
               <p>MAKING TASK DIVIDING EASY</p>
        </div>
        <div className='container'>
          <div className='fancy-image'>

          </div>
          <div className= 'content-container'>
            <Link to='/projects'className='button-home'>

                <div>
                  Projects
                </div>

              </Link>
              <Link to='/profile'className='button-home'>

                <div>
                  Profile
                </div>

              </Link>
              <Link to='/about' className='button-home'>

                <div>
                  About
                </div>

              </Link>
          </div>
        </div>
      </div>
    )
}

export default HomePage