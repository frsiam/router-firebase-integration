import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h1>{user? user.displayName : 'No one'}</h1>
        </div>
    );
};

export default Products;