import {  Container, Text,Button } from '@chakra-ui/react';
import React from 'react';

const ResumeButton = () => {
    return (
        <Container  height= '424px'
        width= '424px'>
        <Container transform= 'rotate(45deg)'
    borderRadius= '3.125rem'
    height= '300px'
    width= '300px'
    bg= '#79d392 '>
            
        <Container transform= 'rotate(-45deg)'
         height= '300px'
         width= '300px'
         py='50px'
         >
        <Text 
    fontSize='30px'
    color='#000000'>Download 
  my Resume here</Text>
        <Button borderRadius= '1.25rem'
    height= '65px'
    width= '185px'
    bg= '#2d2c2c' >
        <Text textAlign= 'center'
    fontSize= '32px'
    color= '#79d392'>Resume</Text></Button>
    </Container>
      </Container>
      </Container>
    );
};

export default ResumeButton;


  
 
  