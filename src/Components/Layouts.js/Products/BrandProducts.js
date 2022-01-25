import React from 'react'

import BrandProduct from './BrandProduct';


import productData from '../Products/data.json';

import styledComponents from 'styled-components';


const Container = styledComponents.div`
padding:20px;
display:flex;
`;

const BrandProducts = () => {
    return (
      <Container>
       
       {productData.brand.map((item)=>(
           <BrandProduct  item ={item} key ={item.id}/>
          
       ))}

      </Container>
     

      
    
     
    )
}

export default BrandProducts

