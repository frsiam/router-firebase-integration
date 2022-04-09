import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <div>
            <h1>Please Login</h1>
            <div className='my-3'>
                <button className='btn btn-info' onClick={signInWithGoogle}>Sign-in by Google</button>
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