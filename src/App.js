import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import HomePage from './HomePage'
import AboutPage from './AboutPage';
import LoadingPage from './LoadingPage';
import LoginPage from './LoginPage';
import ProjectsPage from './ProjectsPage';
import ProfilePage from './ProfilePage';
import NewProjectPage from './NewProjectPage';
import ProjectPage from './ProjectPage';
import NotAuthorizedPage from './NotAuthorizedPage';
import UserManagementPage from './UserManagementPage';
import { FaViadeoSquare } from 'react-icons/fa';


function App() {
    const { user, loginWithPopup, isAuthenticated, isLoading, logout } = useAuth0();

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const res = await fetch(`http://localhost:3001/users`, {
                method: 'GET',
            })
        console.log(res)
        const data = await res.json()
        console.log(data)
        setUsers(data);
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    const checkAuthorized = () => {
        var authorized = false
        for (const index in users) {
            if (users[index].email === user.email && users[index].removed === false) {
                authorized = true
            }
        }
        return authorized
    }

    if (isLoading) {
        return (
            <LoadingPage/>
      )
    }
    
    if (isAuthenticated) {
        if (checkAuthorized()) {
            return (
                <Router>
                    {/* add different pages here*/}
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/profile" component={ProfilePage}/>
                    <Route exact path="/projects" component={ProjectsPage}/>
                    <Route exact path="/new" component={NewProjectPage}/>
                    <Route exact path="/users" component={UserManagementPage}/>
                    <Route exact path="/projects/:p_id/:v_id" component={ProjectPage}/>
                </Router>
            );
        } else {
            return (
                <NotAuthorizedPage text='Log out' onClick={logout}/>
            )
        }
        
    } else {
        return (
            <LoginPage onClick={loginWithPopup}/>
        )
    }
  
}

export default App;