import React from 'react'
import NavBar from './components/NavBar'
import { useAuth0 } from '@auth0/auth0-react'
import { useHistory } from 'react-router-dom'
import Button from './components/Button'

const LoginPage = ({ onClick }) => {
    const history = useHistory();
    return (
      <div className="container" style={{ backgroundImage: "./images/background-taskdivider.jpg.jpg)" }}>
        <div className="center-main">
            <img className="logo" src="./images/logo-taskdivider.jpg" alt="Logo Impact Analyser" />
            <h1>Welcome to the Impact Analyser!</h1>
            <Button className="login" text='Click here to log in' onClick={onClick}/>
        </div>
      </div>
    )
}

export default LoginPage