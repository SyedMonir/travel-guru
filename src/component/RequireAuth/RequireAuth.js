import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { MyContext } from '../../App';

const RequireAuth = ({ children }) => {
    const [loggedInUser] = useContext(MyContext);
    let location = useLocation();
    if (!loggedInUser.email) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

export default RequireAuth;