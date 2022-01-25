import React from 'react'
import {useNavigate} from 'react-router-dom';
import './Logout.css'

function Logout() {
    const navigate = useNavigate();
    const loggingOut =()=>{
        window.sessionStorage.clear ();
        
        navigate('/login');
    }
    return (
        <div className='logouts'>
         <h1 className="logout1">Thanks for visit</h1>
       <center><button onClick ={loggingOut} className='logout'>Logout</button></center> 
            
        </div>
    )
}

export default Logout
