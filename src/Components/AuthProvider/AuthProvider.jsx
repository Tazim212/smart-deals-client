import React, { useState } from 'react';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../../public/firebase_init';

const provider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const handleGoogleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }

    const handleSignUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }





    const authInfo = {
        handleGoogleSignIn,
        handleSignUp
    }
    return (
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
    );
};

export default AuthProvider;