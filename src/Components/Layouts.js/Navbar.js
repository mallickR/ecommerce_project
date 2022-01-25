import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'




function Navbar() {
  // const navigate = useNavigate();
  // const loggingout=()=>{
  //   window.sessionStorage.clear();
  //    navigate("/login");
  // }

  const state = useSelector((state) => state.HandleCart)
  return (
    <>
      <nav className="navbar  sticky-top navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold " to="/"><span className="rahul">FabIndia</span><span>.</span><span className='mallick'>com</span></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" topbar navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link  " aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/product">Product</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link " to="contact">Contact </NavLink>
              </li>
            </ul>

            <form className="d-flex">
              <span><i className="fa fa-search sear"></i></span>
              <input className=" searching form-control me-4 " type="search" placeholder="     Search for products,brands and more" aria-label="Search" />

            </form>

            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="  nav-link dropdown-toggle me-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa fa-user me-1 profile"></i>
                  <span className="name"> Profile</span>

                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink to="login" className=" ms-4 mt-2">
                      <i className=" log fa fa-sign-in me-1"> Login</i>
                    </NavLink>

                  </li>
                  <li>
                    <NavLink to="register" className="ms-4 mt-2">
                      <i className=" log fa fa-user-plus me-1"> Signup</i>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/logout" className=" ms-4 mt-2" >
                      <i className=" log fa fa-sign-out me-1"> Logout</i>
                    </NavLink>

                  </li>
                </ul>
              </li>
            </ul>
            <NavLink to="cart" className="btn btn-outline-dark me-1 ">
              <i className="fa fa-shopping-cart me-1">  Cart ({state.length})</i>
            </NavLink>


          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
