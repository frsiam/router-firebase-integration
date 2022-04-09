import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>This is Home</h1>
            <p>Current user is : {user? user.displayName : 'Nobody'}</p>
            <img style={{'width': '300px'}} src={user? user.photoURL : ''} alt="" />
        </div>
    );
};

export default Home;