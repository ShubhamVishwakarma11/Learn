import { createContext,useContext,useState, useEffect } from "react";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider( {children} ) {

    const [user,setUser] = useState({});

    function signUp(email,password) {
        createUserWithEmailAndPassword(auth,email,password);
    }

    function logIn(email,password) {
        signInWithEmailAndPassword(auth,email,password);
    }

    useEffect( ()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[]);

    return (
        <userAuthContext.Provider value={ {user,signUp,logIn} } >
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}