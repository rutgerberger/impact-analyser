import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './HomePage'
import AboutPage from './AboutPage';
import LoadingPage from './LoadingPage';
import ProjectsPage from './ProjectsPage';
import ProfilePage from './ProfilePage';
import NewProjectPage from './NewProjectPage';
import ProjectPage from './ProjectPage';
import './components/css/common.css'


function App() {

            return (
                <Router>
                    {/* add different pages here*/}
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/profile" component={ProfilePage}/>
                    <Route exact path="/projects" component={ProjectsPage}/>
                    <Route exact path="/new" component={NewProjectPage}/>
                    <Route exact path="/projects/:p_id/:v_id" component={ProjectPage}/>
                </Router>
            );
  
}

export default App;