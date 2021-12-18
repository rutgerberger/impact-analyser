import React, {useState, useEffect, Fragment } from 'react'
import NavBar from './components/NavBar'
import NotAuthorizedPage from './NotAuthorizedPage';
import { useHistory } from 'react-router-dom'
import Button from './components/Button';;


function UserManagementPage() {

    const [users, setUsers] = useState([])

    const history = useHistory();

    const [role, setRole] = useState("user");


    if (true) {
        return(
            <>
                <NavBar/>
            </>
        )
    } else {
        return (
            <>
                <NavBar/>
            </>
        )
    }
}

export default UserManagementPage