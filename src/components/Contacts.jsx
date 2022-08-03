import React from 'react';
import { Container,Icon,Box,Text } from '@chakra-ui/react';
import { IoLocation } from "react-icons/io5";
import { MdPhone,MdEmail } from "react-icons/md";
import SocialButtons from './SocialButtons';


const Contacts = () => {
    return (
        <div id='contact'>
            <Container  maxW='100%' bg='black' color='white' h='200px' >
        <Text margin='20px'>Feel free to contact me:</Text>
            <Box fontSize='20px' margin='20px ' ><Icon><IoLocation size='md' /></Icon> Ernakulam,Kerala 
      <Icon marginLeft='15px'><MdEmail size='md' /></Icon> fahisayub@gmail.com 
      <Icon marginLeft='15px'><MdPhone size='md'/></Icon> +91 8606298790</Box> 
        <SocialButtons/>

            </Container>
           
            
        </div>
    );
};

export default Contacts;