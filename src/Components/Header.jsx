import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='text-center my-3.5  mx-auto text-3xl font-extrabold  space-x-4 mb-8 ' >
            <Link to={'/'} className='btn btn-primary' >Home</Link>
            <Link to={'/addCoffee'} className='btn btn-secondary' >Add Coffee</Link>
            <Link to={'/signup'} className='btn btn-secondary' >Sign up</Link>
            <Link to={'/signin'} className='btn btn-secondary' >Sign in</Link>
            
        </div>
    );
};

export default Header;