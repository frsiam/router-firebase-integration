import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>{user? user.displayName : 'No one'}</h1>
        </div>
    );
};

export default Products;