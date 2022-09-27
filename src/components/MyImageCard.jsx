import {  Container, Text,Button, Img } from '@chakra-ui/react';
import React from 'react';
import Mfahiz from "../Mfahiz_photo.jpg";

const MyImageCard = () => {
    return (
       
        <Container transform= 'rotate(45deg)'
    borderRadius= '3.125rem'
    height= '300px'
    width= '300px'
    overflow='hidden'
    bg= '#5bb367 '
    padding='0px'
    boxShadow='5px 5px 25px #79d392'
    
    >
        <Container transform= 'rotate(-45deg)'
         height= '380px'
         width= '380px'
         
         bgPos='center'
         bgRepeat='no-repeat'
         bgSize='contain'
         bgImage={Mfahiz}
         m='0px'
         ></Container>
       
        
    
      </Container>
    );
};

export default MyImageCard;


  
 
  