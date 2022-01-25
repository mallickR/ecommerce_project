import React from 'react';
import {Card,CardGroup} from 'react-bootstrap';
import './BrandPtoducts.css'

export const BrandProduct = () => {
  return (
      <>
      <h1 className="headings">BIGGEST DEALS ON TOP BRANDS</h1>

      <hr className="hr1"/>
      <CardGroup className="groups" >
      {/* <Card.Title>BIGGEST DEALS ON TOP BRANDS</Card.Title> */}
  <Card className="brand1">
  
    <Card.Img className ="brandp mb-4" variant="top" src="/Images/nike.webp"  />
   
   
  </Card>
  <Card className="brand1">
    <Card.Img className ="brandp" variant="top" src="/Images/forever.webp" />
   
   
  </Card>
  <Card className="brand1">
    <Card.Img  className ="brandp" variant="top" src="/Images/puma.webp" />
    
  </Card>
  <Card className="brand1">
    <Card.Img  className ="brandp" variant="top" src="/Images/jackjones.webp" />
    
  </Card>
  
  
</CardGroup>

      </>
  )
};
