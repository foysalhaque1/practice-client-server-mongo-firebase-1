import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const MainLayouts = () => {
    return (
        <div className='mx-auto' >
            <Header className='mx-auto'></Header>
            <div className='max-w-7xl mx-auto'>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayouts;