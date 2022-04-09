import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle,user] = useSignInWithGoogle(auth)
    const location = useLocation()
    const navigate = useNavigate()

    let from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = ()=> {
        signInWithGoogle()
        .then(() => {
            navigate(from, {replace: true})
        })
    }
    return (
        <div>
            <h1>Please Login</h1>
            <div className='my-3'>
                <button className='btn btn-info' onClick={handleGoogleSignIn}>Sign-in by Google</button>
            </div>
            <form>
                <input className='my-2' type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <input className='my-2' type="password" name="password" id="" placeholder='Your password' />
                <br />
                <input className='my-2' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;