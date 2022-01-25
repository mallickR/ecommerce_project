import React,{useState} from 'react';
import{Link}from 'react-router-dom';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

function LoginPage() {
    const navigate = useNavigate();
    // const logging = () => {
    //     navigate("/register");
    // }

    const validateuname = RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    const validatePwd = RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
    const [inputState, setinputState] = useState({
        isError: {
            email: '',
            password: ''
        }
    });

    const handleChange = (event) => {
        event.persist();

        let { name, value } = event.target;

        let isErr = { ...inputState.isError };
        switch (name) {
            case "email":
                isErr.email =

                    validateuname.test(value) ? "" : "wrong pattern";
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
        let user = { email: inputState.email, password: inputState.password }
        console.log("user value: ", user);
        axios.post('https://project-node-1.herokuapp.com/postLoginData', user)
            .then(res => {
                console.log("Axios response: ", res);
                navigate("/");
                window.sessionStorage.setItem("token", res.data.token);
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
                        <img src="/Images/loginImage.jpeg" className=" logs img-fluid" alt="" ></img>
                    </div>
                    <div className="col-lg-7 px-5 pt-5">
                   
                        <form onSubmit={submitHandler}>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <button  className="btn2 mt-3 mb-2" ><BsFacebook/>  Login with Facebook</button>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <button  className="btn3 mt-3 mb-3" ><FcGoogle/>  Login with Google</button>
                            </div>
                        </div>
                        <p className="or">OR</p>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type ="email" className="form-control my-3 p-3" placeholder ="rahul007@gmail.com" name="email" autoComplete="off" onChange={handleChange}/>
                            </div>
                            {inputState.isError.email.length > 0 && (
                           <span>{inputState.isError.email}</span>
                       )}
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type ="password" className =" form-control my-3 p-3" placeholder ="enter your password"  name="password" autoComplete="off" onChange={handleChange}/>
                            </div>
                            <span>
                         {inputState.isError.password.length > 0 && (
                            <span>{inputState.isError.password}</span>
                       )}
                 </span>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <button  className="btn1 mt-3 mb-5" >Login</button>
                            </div>
                        </div>
                        <a href="#">Forgot password</a>
                        <p>Don't have an account?<Link to="/register">Register here</Link></p>

                        </form>
                    </div>
                </div>
            </div>



        </section>
           
        </>


   

    )
}

export default LoginPage

