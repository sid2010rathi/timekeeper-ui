import React from 'react'
import { useAuth } from './context/authContext'
import {AuthenticatedRoutes, UnauthenticatedRoutes} from './Routes'

const App = (props) => {
    const { loggedIn } = useAuth()
    console.log(loggedIn)
    return loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />
}

export default App;
