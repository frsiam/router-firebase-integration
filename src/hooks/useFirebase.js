import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../firebase.init"

const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({})

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(res => {
            const user = res.user
            console.log(user)
            setUser(user)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('signout successfully')
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