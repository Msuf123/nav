import React from 'react';
import Navigation from '../navigation';
import { Outlet } from 'react-router-dom';
// import Outlet

const Root = () => {
    return (
        <>
            <Navigation/>
          <Outlet></Outlet>
        </>
    );
};

export default Root;