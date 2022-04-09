import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../firebase.init"

const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({})
    console.log(user)

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(res => {
            const user = res.user
            console.log('sign in successfully')
            setUser(user)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('signout successfully')
            setUser({})
        })
    }
    useEffect( () => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    },[])

    return {user, signInWithGoogle, handleSignOut}
}

export default useFirebase;