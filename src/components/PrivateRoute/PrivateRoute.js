import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [name, setName] = useContext(UserContext);
    return (
            name ? <Outlet /> : <Navigate to="/selection" />
    );
};

export default PrivateRoute;