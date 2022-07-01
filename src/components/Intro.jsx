import React from "react";
import Mfahiz from "../Mfahiz_photo.jpg";
import { Img, Container, Heading,Box,Button,Text } from "@chakra-ui/react";
import {DownloadIcon} from '@chakra-ui/icons';
import SocialButtons from "./SocialButtons";

const Intro = () => {
  return (
    <Container display="flex" maxW="80%" justifyContent="space-evenly" h='300px'>
      <Img
        src={Mfahiz}
        borderRadius="50%"
        height="300px"
        width="300px"
        alt="logo"
      />
    <Box margin='auto'>
    <Heading margin="auto" size="lg">
        Hi, I'm Muhammed Fahiz
      </Heading>
      <Text size='md' margin='auto'>Full Stack Web Developer</Text>
      <br />
      <Button as='a' border='2px solid grey' href='https://drive.google.com/file/d/1N6vSNzfhRjmvvcA-aYGj5qGoF8bW0erx/view?usp=sharing'>
        <DownloadIcon margin='10px'/> Download My Resume here</Button>
        <SocialButtons/>
    </Box>
    
      
    </Container>
  );
};

export default Intro;
