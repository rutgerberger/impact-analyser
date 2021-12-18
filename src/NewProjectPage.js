import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Button from './components/Button';
import { useHistory } from 'react-router-dom'

function NewProjectPage() {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
         
    return( 
      <>
        <NavBar/>
        <h1>New project</h1>
        <form className="container">
         <div className="projectname">   
            <label> Project name: </label>
         </div>
            <br /><br />
            <Button className="addproject" text='Add new project'></Button>
        </form>
      </>
    )
}


export default NewProjectPage
