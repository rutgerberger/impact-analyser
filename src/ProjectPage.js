import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Button from './components/Button';
import { useParams } from 'react-router';

function ProjectPage({ match }) {
    const params = useParams()

    const [project, setProject] = useState({});

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="sidebar-super">
                    <Button className="sidebar" class="sidebar-home" text="Todo" ></Button>
                    <Button className="sidebar" class="sidebar" text="Todo" ></Button>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
