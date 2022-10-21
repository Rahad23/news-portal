import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from './../../firebase/Firebase.init';

const auth = getAuth(app);
// console.log(auth);]\

// Google auth provider
const provider = new GoogleAuthProvider();
// Create contextApi
export const AuthContext = createContext();

const PrivateRoute = ({children}) => {
    // User document hook
    const [userDocument, setUserDocument] = useState('');
    // sign in with google popup
    const googlePopuplogin =()=>{
        return signInWithPopup(auth, provider);
    }

// Create user withEmailAndPassword
const createUserEmailPassworD = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
}

// login user email and password
const userLogin =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

// User logout 
const userLogout= ()=>{
   return signOut(auth)
   .then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

    // user tract
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setUserDocument(user);
        });
        return ()=>unsubscribe();
    },[]);

    // send email verification
    const emailVerification = ()=>{
       return sendEmailVerification(auth.currentUser);
    }

    const provite = {googlePopuplogin, userDocument, userLogout, createUserEmailPassworD, userLogin, emailVerification};

    return (
        <AuthContext.Provider value={provite}>
            {children}
        </AuthContext.Provider>
    );
};

export default PrivateRoute;