import React from 'react'
import { Card } from 'react-bootstrap';
import './About.css'
import Newsletter from '../Contact_Page/Newsletter';
import Footer from '../Foot/Footer';


export const About = () => {
    return (
        <>
            <h2 className="welcome">Welcome to our world</h2>
            <hr className="line" />


            <p className="paragraph">Our story began in 2001 in a small studio in the middle of nowhere.  With only one desk
                <br />
                and next to no free time, our brand was born. Our passion for unique design and
                <br />
                collaboration brought our vision, and products, to life.</p>

            <Card className="about ">
                <Card.Img className="aboutSection " src="/Images/coverPhoto10.jpg" alt="Card image" />


            </Card>
            <h2 className="welcome">Products for everyone</h2>
            <hr className="line" />

            <p className="paragraph">Our products bring together the finest materials and stunning design to create something very special.
                <br />
                We believe in quality, care, and creating unique products that everyone can enjoy.Colorful,
                <br />
                creative, and inspired by what we see everyday, each product represents what we love
                <br />
                about the world we live in. We hope they’ll inspire you too.
            </p>
            <Newsletter/>
            <Footer/>


        </>
    )
}
