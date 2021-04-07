import React, { useContext, useState, useEffect } from 'react';
import logo from '../assets/icon-frame0.png';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser ] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
    }
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return auth.signOut()
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            debugger;
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])

    if (loading) {
        return (<div id="load-gif" >

            <img style={{ zIndex: "0", position: "absolute" }} src={logo} alt="logo" />

        </div>)
    }
   
    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
