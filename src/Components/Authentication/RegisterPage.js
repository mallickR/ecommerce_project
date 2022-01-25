
import React, { useState } from 'react'
// import styledComponents from 'styled-components'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css'


function RegisterPage() {

    const validateEmail = RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    const validatePwd = RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
    const validatefname = RegExp('^[a-zA-Z\s]+$');
    const validatelname = RegExp('^[a-zA-Z\s]+$');
    const navigate = useNavigate()

    const [inputState, setinputState] = useState({
        isError: {
            username: '',
            lname: '',
            uname: '',
            email: '',
            password: '',
            cpassword: ''
        }
    });
    const handleChange = (event) => {
        event.persist();

        let { name, value } = event.target;

        let isErr = { ...inputState.isError };
        switch (name) {
            case "username":
                isErr.username =

                    validatefname.test(value) ? "" : "wrong pattern";
                break;
            case "lname":
                isErr.lname =

                    validatelname.test(value) ? "" : "wrong pattern";
                break;
            case "email":
                isErr.email =

                    validateEmail.test(value) ? "" : "wrong pattern";
                break;
            case "password":
                isErr.password =

                    validatePwd.test(value) ? "" : "wrong pattern";
                break;

        }
        setinputState({ ...inputState, [name]: value, isError: isErr });
        console.log(inputState);

    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("after submit: ", inputState);
        let user = { username: inputState.username, email: inputState.email, password: inputState.password }
        console.log("user value: ", user);
        axios.post('https://project-node-1.herokuapp.com/postUserData', user)
            .then(res => {
                console.log("Axios response: ", res);
                navigate('/login');
            })
            .catch(err => {
                console.log("Axios error: ", err);
            })

    }



    
       

    return (

        <>

<section className= "Form my-4 mx-4">
        <div className="container">
                <div className="row no-gutters rows">
                    <div className="col-lg-5">
                        <img src="/Images/loginImage.jpeg" className=" logss img-fluid" alt="" ></img>
                    </div>
                    <div className="col-lg-7 px-5 pt-3">
                    <h1 className="font-weight-bold py-3 signins">Sign in</h1>
                        <form onSubmit={submitHandler}>

                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type ="text"  name="username" className="form-control my-3 p-3" placeholder ="Enter your firstname" autoComplete="off" onChange={handleChange}/>
                            </div>
                            {inputState.isError.username.length > 0 && (
                           <span>{inputState.isError.username}</span>
                       )}
                        </div>

                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type ="text"  name="lname" className="form-control my-3 p-3" placeholder ="Enter your lastname" autoComplete="off" onChange={handleChange}/>
                            </div>
                            {inputState.isError.lname.length > 0 && (
                            <span>{inputState.isError.lname}</span>
                        )}
                        </div>

                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type ="text"  name="uname" className="form-control my-3 p-3" placeholder ="Enter your username" autoComplete="off" onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type ="email"  name="email" className="form-control my-3 p-3" placeholder ="rahul007@gmail.com" autoComplete="off" onChange={handleChange}/>
                            </div>
                            {inputState.isError.email.length > 0 && (
                            <span>{inputState.isError.email}</span>
                        )}
                        </div>

                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type ="password"  name="password" className=" form-control my-3 p-3" placeholder ="enter your password" autoComplete="off" onChange={handleChange}/>
                            </div>
                            {inputState.isError.password.length > 0 && (
                            <span>{inputState.isError.password}</span>
                        )}
                        </div>

                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type ="password"  name="cpassword" className=" form-control my-3 p-3" placeholder ="confirm password" autoComplete="off" onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-lg-7">
                                <button className="btn1 mt-3 mb-5" >Create</button>
                            </div>
                        </div>
                       
                        </form>
                    </div>
                </div>
            </div>



        </section>
           
        </>







    )
}

export default RegisterPage
