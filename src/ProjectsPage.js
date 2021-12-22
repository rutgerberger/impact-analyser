import React, {useState, useEffect} from 'react'
import Popup from './components/Popup';
import Button from './components/Button'
import NavBar from './components/NavBar';
import ProjectTile from './components/ProjectTile';
import { Link } from "react-router-dom";

function ProjectsPage() {
    const [projects, setProjects] = useState([
    {
        name: "Update Homepage",
        id: 1,
        mainContributor: "Sven",
        totalHours: 60,
        contributors: 4
    },
    {
        name: "Send Annual Review to Client",
        id: 2,
        mainContributor: "Rutger",
        totalHours: 15,
        contributors: 3
    },
    {
        name: "Update Keycloak",
        id: 3,
        mainContributor: "Rutger",
        totalHours: 10,
        contributors: 3
    },
    {
        name: "Update Database Structure",
        id: 4,
        mainContributor: "Sven",
        totalHours: 280,
        contributors: 3
    },
    {
        name: "Buy New Plants",
        id: 5,
        mainContributor: "Jeroen",
        totalHours: 2,
        contributors: 3
    }])

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div className='styling'>
        <NavBar />
        <div>
            <div >
                <Link className='' to='/new'>
                    <Button className='button-new-project' text='Create new project' />
                </Link>

                <div className=''>
                    {projects.map((project) => (
                        <Link to='/edit'>
                        <ProjectTile
                            name={project.name}
                            id={project.id}
                            mainContributor={project.mainContributor}
                            totalHours={project.totalHours}
                            contributors={project.contributors}
                        />
                        </Link>
                    ))}
                </div>
           </div>
        </div>
        </div> 
        
    )
}

export default ProjectsPage
