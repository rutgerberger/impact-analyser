import React from 'react'
import Button from './components/Button'
import { useAuth0 } from '@auth0/auth0-react'


function NotAuthorizedPage({ text, onClick }) {
    return(
        <>
            <h1>Not Authorized</h1>
            <p>You are not part of this project!</p>
            <Button text={text} onClick={onClick}/>
        </>
    )
}

export default NotAuthorizedPage
