import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from './Fire.config';

// import app from '../Firebase/Fire.config';
// import auth from '../Firebase/Fire.config';

export const AuthContext = createContext()
const auth = getAuth(app);

// const googleProvider = New GoogleAuthProvider();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);

    // console.log(user)

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const handleGoogleIn = () => {

        return signInWithPopup(auth, googleProvider)
    }


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updaterData) => {
        return updateProfile(auth.currentUser, updaterData);

    }


    const logOut = () => {
        return signOut(auth);
    }




    // const handleForgetPass=( email)=>{
    //       sendPasswordResetEmail(auth , email)

    //   }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoding(false);
        })


        return () => {
            unsubscribe();
        }
    }, [])



    const authData = {
        user,
        setUser,
        creatUser,
        logOut,
        signIn,
        loading,
        setLoding,
        updateUser,
        handleGoogleIn,
        auth,
        getAuth,

    };
    return <AuthContext value={authData}>{children}</AuthContext>

};

export default AuthProvider;