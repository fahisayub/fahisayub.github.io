import {  Container, Text,Button, Img } from '@chakra-ui/react';
import React from 'react';
import Mfahiz from "../Mfahiz_photo.jpg";

const MyImageCard = () => {
    return (
       
        <Container transform= 'rotate(45deg)'
    borderRadius= {['2em','3em','']}
    height= {['200px','300px','300px']}
    width= {['200px','300px','300px']}
    overflow='hidden'
    bg= '#5bb367 '
    padding='0px'
    mt={['3em','3em','0em','0em','0em']}
    mr={['1em','5em','10em','15em','20em']}
    _hover={{boxShadow:'5px 5px 20px #79d392'}}    
    >
        <Container transform= 'rotate(-45deg)'
         height= {['250px','380px','380px']}
         width= {['250px','380px','380px']}
         
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


  
 
  