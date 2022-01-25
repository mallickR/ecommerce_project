import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { About } from '../Layouts.js/About/About';
import { Home } from '../Layouts.js/Home/Home';

import Navbar from '../Layouts.js/Navbar';

import PNF from '../PageNotFound/PNF';
import { Contact } from '../Layouts.js/Contact_Page/Contact';
import ProductPage from '../Layouts.js/Products/ProductPage';
import LoginPage from '../Authentication/LoginPage';
import RegisterPage from '../Authentication/RegisterPage';
import CartPage from '../CartSystem/CartPage';
import Product from '../Layouts.js/Products/Product';
import { CheckOut } from '../CartSystem/CheckOut';
// import Logout from '../Authentication/Logout';
// import IsAuth from './IsAuth';
import Logout from '../Authentication/Logout';
import ProtectedRoute from './ProtectedRoute';




export const RootRoute = () => {

    return (
        <Router>
            <Navbar />

            <Routes>

                <Route element={<ProtectedRoute />}>


                    <Route path="about" element={<About />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                    <Route path="/product/:id" element={<Product />}></Route>
                    <Route path="/logout" element={<Logout />}></Route>
                    <Route path="cart/" element={<CartPage />}></Route>
                    <Route path="/product" element={<ProductPage />}></Route>


                </Route>

                <Route path="/checkout" element={<CheckOut />}></Route>


                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="register" element={<RegisterPage />}></Route>
                <Route path="*" element={<PNF />}></Route>

            </Routes>

        </Router>
    )
}











































