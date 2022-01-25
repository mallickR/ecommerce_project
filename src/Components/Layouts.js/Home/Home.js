import React from 'react'
import { Carousel } from 'react-bootstrap';
import { BrandProduct } from '../Products/BrandProduct';
import ProductPage from '../Products/ProductPage';

 export const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/Images/coverPhoto3.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ fontSize: "50px" }}>New Arrivals</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="/Images/coverPhoto4.webp"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 style={{ fontSize: "50px" }}>New Arrivals</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Images/coverPhoto5.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 style={{ fontSize: "50px" }}>New Arrivals</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Images/coverPhoto6.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 style={{ fontSize: "50px" }}>New Arrivals</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <BrandProduct/>
      <ProductPage />
     
     
    </>

  )
}

