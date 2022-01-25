// import React from 'react'
// import {useNavigate} from 'react-router-dom'

// function IsAuth({authenticate}) {
//     const navigate = useNavigate();
//     const func=()=>{
//         authenticate();
//         navigate('/login');
//     }
//     return (
//        <>
//         <h1>Please authenticate to continue</h1>
//         <button onClick ={func}>Click to authenticate</button>

//        </>
//     )
// }

// export default IsAuth



import React from 'react';
import {Navigate,Outlet} from 'react-router';

function IsAuth() {

    const isauth = window.sessionStorage.getItem('Token')
  return isauth ? <Outlet/> : <Navigate to ="/login" />;
   
};

export default IsAuth;
