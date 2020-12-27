import React, { createContext, useState } from 'react'
export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [isAuthenticated, setAuthenticated] = useState(true);
    const toggleAuth = () => {
        console.log("toggleAuth toggle clicked ");
        setAuthenticated(isAuthenticated => !isAuthenticated);
        console.log(isAuthenticated);
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
            {props.children}
        </AuthContext.Provider>
    )

}
export default AuthContextProvider;