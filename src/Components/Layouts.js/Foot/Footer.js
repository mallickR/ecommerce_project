import { AddLocationAlt, Email, Facebook, Instagram, PermPhoneMsg, Twitter, WhatsApp } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
// import styledComponents from 'styled-components'



const Container = styled.div`
display:flex;

`;
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;

`;
const Logo = styled.h5``;

const Desc = styled.p`
margin:20px 0px;
`;

const SocialContainer = styled.div`
display:flex;
`;

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius: 50%;
color:white;
background-color: #${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;

const Center = styled.div`
flex:1;
padding:20px;
`;
const Title = styled.h3`
margin-bottom:30px;
`;

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;

`;

const ListItem = styled.li`
width:50%;
margin-bottom:10px;

`;

const Right = styled.div`
flex:1;
padding:20px;
`;
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;
const Payment = styled.img`
width:50%;
`;
// const Container = styledComponents.div``;

const Footer = () => {
    return (
       <Container>
       <Left>
           <Logo><span className='rahul'>FabIndia</span><span>.</span><span className='mallick'>com</span></Logo>
           <Desc>
           If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. FabIndia.com is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items.
           </Desc>
           <SocialContainer>
               <SocialIcon color ="3B5999">
                   <Facebook/>
               </SocialIcon>
               <SocialIcon  color ="E4405F">
                   <Instagram/>
               </SocialIcon>
               <SocialIcon  color ="55ACEE">
                  <Twitter/>
               </SocialIcon>
               <SocialIcon  color ="008000">
                  <WhatsApp/>
               </SocialIcon>
           </SocialContainer>
       </Left>
       <Center>
           <Title>Useful Links</Title>
           <List>
               <ListItem>Home</ListItem>
               <ListItem>About</ListItem>
               <ListItem>Product</ListItem>
               <ListItem>Cart</ListItem>
               <ListItem>Contact</ListItem>
               <ListItem>My Account</ListItem>
               <ListItem>Man Fashion</ListItem>
               <ListItem>Woman Fashion</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Terms & Condition</ListItem>
           </List>

       </Center>
       <Right>
           <Title>Contact</Title>
           <ContactItem><AddLocationAlt style ={{marginRight:"10px"}}/> 26 G.T Road,Barddhaman</ContactItem>
           <ContactItem><PermPhoneMsg style ={{marginRight:"10px"}}/> +91 6294114766</ContactItem>
           <ContactItem><Email style ={{marginRight:"10px"}}/> rahulmallick5858@gmail.com</ContactItem>
           <Payment src ="https://i.ibb.co/Qfvn4z6/payment.jpg"/>
       </Right>
       

       </Container>
    )
}

export default Footer

