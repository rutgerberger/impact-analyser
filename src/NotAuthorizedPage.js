import React from 'react'
import Button from './components/Button'
import { useAuth0 } from '@auth0/auth0-react'


function NotAuthorizedPage({ text, onClick }) {
    return(
        <>
            <h1>Not Authorized</h1>
            <p>Reach out to C-job to get white-listed</p>
            <Button text={text} onClick={onClick}/>
        </>
    )
}

export default NotAuthorizedPage
