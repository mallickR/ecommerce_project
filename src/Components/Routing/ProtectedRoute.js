import React from 'react';
import {Navigate,Outlet} from 'react-router';


function ProtectedRoute() {
    const isAuth = window.sessionStorage.getItem('token')
    
    return isAuth ? <Outlet/> : <Navigate to ="/login" />;

  
  
}

export default ProtectedRoute;
