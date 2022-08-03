import React from "react";
import { Container,Box, Heading,Link } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
      <Container
        h="60px"
        pos="fixed"
        zIndex="1"
        marginBottom="50px"
        padding="20px"
        maxW="100%"
        display="flex"
        justifyContent="space-between"
        bg="black"
        color="white"
        
      >
        <Box as={ScrollLink} to="intro"spy={true} smooth={true}offset={-80} duration={500}><Heading marginTop={0} fontFamily='cursive' size='lg'>MFahiz</Heading></Box>
        <Box display="flex" w='50%' 
        justifyContent="space-evenly" >

        <Link as={ScrollLink}  to="aboutme"spy={true} smooth={true}offset={-80} duration={500} cursor='pointer'>About Me</Link>
        <Link as={ScrollLink} to="skills"spy={true} smooth={true}offset={-80} duration={500}>Skills</Link>
        <Link as={ScrollLink} to="projects"spy={true} smooth={true}offset={-80} duration={500}>Projects</Link>
        <Link as={ScrollLink} to="contact"spy={true} smooth={true}offset={-80} duration={500}>Contact</Link>
        </Box>
      </Container>
  );
};

export default Navbar;
