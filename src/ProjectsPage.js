import React, {useState, useEffect} from 'react'
import Popup from './components/Popup';
import Button from './components/Button'
import NavBar from './components/NavBar';
import { Link } from "react-router-dom";

function ProjectsPage() {
    const [projects, setProjects] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div className='styling'>
        <NavBar />
        <div>
            <div >
                <div className='navTwo'>
                <Link className='myLink2' to='/new'>
                    <Button className='create' text='Create new project' />
                </Link>
                <Button className= 'archive' text='Archive' />
                </div>

                <div className='ProjectContainer'>
                    {/* {projects.map((project) => (
                        <Project key={project.p_id} project={project} onDelete={deleteProjectSelected}/>
                    ))} */}
                </div>
           </div>
        </div>
        </div> 
        
    )
}

export default ProjectsPage
