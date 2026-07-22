/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../../../public/firebase_init';

const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleGoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const handleSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUserOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const loggerUser = { email: currentUser?.email }
            if (currentUser) {
                fetch("https://smart-deals-server-tc3q.onrender.com/getToken", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(loggerUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("token", data.token)
                        setUser(currentUser)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem("token")
                setUser(null)
                setLoading(false)
            }
        });
        return () => {
            unSubscribe()
        }
    },
        [])

    const updateUser = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name })
    }

    const authInfo = {
        handleGoogleSignIn,
        handleSignUp,
        handleSignIn,
        user,
        loading,
        updateUser,
        signUserOut
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;