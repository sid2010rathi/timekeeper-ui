import React from 'react'
import { useAuth } from './context/authContext'
import {AuthenticatedRoutes, UnauthenticatedRoutes} from './Routes'

const App = (props) => {
    props.children;
    const { loggedIn } = useAuth()
    return loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />
}

export default App;
