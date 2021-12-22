import React, { useState, useEffect, onChange } from 'react'
import NavBar from './components/NavBar'
import Button from './components/Button';
import { useHistory } from 'react-router-dom'
import jsonfile from'jsonfile';

function NewProjectPage() {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    

    const [project, setProject] = useState({
        name: "",
        owner: "",
    });

    //This is used to submit the data
    //and set it into the JSON file
    const sendData = (e) => {
        e.preventDefault()
        console.log(JSON.stringify({ project }))
        fetch('./projects.json', {
            method: 'POST',
            body: JSON.stringify({ project }),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(console.log("Test"))
        .catch(err => err);
        return
    }

    return( 
      <>
        <NavBar/>
        <h1>New project</h1>
        <form className="" onSubmit={e =>sendData(e)}>
         <label>Project Name:</label>
         <input
            type="text"
            name="projectname"
            onChange={e=>setProject({...project, name: e.target.value})}
         />
         <label>Project Owner:</label>
         <input
            type="text"
            name="projectowner"
            onChange={e=>setProject({...project, owner: e.target.value})}
         />
         <Button className="addproject" text='Add new project'>             
         </Button>
        </form>
      </>
    )
}


export default NewProjectPage
