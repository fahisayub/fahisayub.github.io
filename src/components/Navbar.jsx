import React from "react";
import { Container,Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        <Box>MFahiz</Box>
        <Box display="flex" w='50%' 
        justifyContent="space-evenly" >

        <Link to="/">About Me</Link>
        <Link to="/">Skills</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>
        </Box>
      </Container>
  );
};

export default Navbar;
