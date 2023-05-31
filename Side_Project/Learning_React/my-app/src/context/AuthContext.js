import { createContext, useMemo, useState, useContext } from "react";
import FirebaseAuth from "../handlers/auth";

const { signIn, signOut, getCurrentUser } = FirebaseAuth

export const Context = createContext()

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const login = () => signIn().then((res) =>{
        setCurrentUser(res)
    })
    const logout = () => signOut().then(() =>setCurrentUser(null))
    const authenticate = () => getCurrentUser().then(setCurrentUser)
    const value = useMemo(()=> {
        return {
            login,
            logout,
            currentUser,
            authenticate
        }
    }, [login, logout, currentUser], authenticate)
    return <Context.Provider value = {value}>{ children }</Context.Provider>
}

export const useAuthContext = () =>{
    return useContext(Context)
}
export default AuthProvider