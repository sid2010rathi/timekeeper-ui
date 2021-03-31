import React, { useEffect, useState } from 'react'

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const Auth = React.createContext({})

const AuthProvider = props => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState()
    /*useEffect(() => {
        sleep(2000).then(()=> {
            const user = localStorage.getItem("token");
            setUser(user);
        })
    }, [])*/

    const signin = () => {
        sleep(2000).then(() => {
            alert("3")
            setLoggedIn(true)
        })
    }

    const signout = () => {
        sleep(2000).then(() => setLoggedIn(false))
    }

    const authContextValue = {
        signin,
        signout,
        user,
        loggedIn
    }
    return <Auth.Provider value={authContextValue} {...props} />
}

const useAuth = () => React.useContext(Auth)

export { AuthProvider, useAuth}