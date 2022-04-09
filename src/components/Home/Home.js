import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h1>This is Home</h1>
            <p>Current user is : {user? user.displayName : 'Nobody'}</p>
            <img src={user? user.photoURL : ''} alt="" />
        </div>
    );
};

export default Home;