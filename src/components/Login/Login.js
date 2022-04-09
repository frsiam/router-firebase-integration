import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Please Login</h1>
            <div className='my-3'>
                <button>Google SignIn</button>
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