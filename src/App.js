import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

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


function App() {


    
    if (true) {
        if (true) {
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
                <NotAuthorizedPage text='Log out'/>
            )
        }
        
    } else {
        return (
            <LoginPage />
        )
    }
  
}

export default App;