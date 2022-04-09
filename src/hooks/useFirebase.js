import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../firebase.init"

const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({})
    console.log(user)

    const handlesignInWithGoogle = () => {
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

    return {user, handlesignInWithGoogle, handleSignOut}
}

export default useFirebase;