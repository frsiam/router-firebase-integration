import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/register'>Register</Link>
            {
                user &&
                <Link to='/privet'>Privet</Link>
            }
            {
                user?.uid 
                ?
                <button onClick={()=>signOut(auth)} className='btn btn-danger'>Sign Out</button>
                :
                <Link to='/login'>Login</Link>
            }
            <span className='ms-2 fw-bold'>{user?.displayName && user.displayName}</span>
        </nav>
    );
};

export default Header;