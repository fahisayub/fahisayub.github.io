
import { Container, Divider, Box,Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";

const SummaryAboutme = () => {
  return (
    <Container
      transform="rotate(45deg)"
      borderRadius="2em"
      height="350px"
      width="350px"
      bg="brand "
      p="0px"
    >
      <Container
        transform="rotate(-45deg)"
        height="350px"
        width="350px"
        py='2.5em'
      >
        
        <Text fontSize="1.5em" textAlign="center" fontWeight="bold">
          About Me
        </Text>
        <Divider w='200px' m='auto' my='10px' borderColor="brand_secondary" />

        <Text size="md" margin="auto">
        An Aspiring Web Developer,always curious about new
        problems and bringing the best solution with an interdisciplinary
        collaboration
        </Text>
        <Box
        fontSize="25px"
        display={["block", "block", "block", "flex", "flex"]}
        margin="auto"
        textAlign='left'
        w='8em'
        marginTop='10px'
        justifyContent="center"
      >
        <Box fontSize='.7em'>
          <Icon fontSize='1.2em'>
            <IoLocation  />
          </Icon>{" "}
          Ernakulam,Kerala{" "}
        </Box>
        <Box fontSize='.7em'>
          {" "}
          <Icon fontSize='1.2em'>
            <MdEmail  />
          </Icon>{" "}
          fahisayub@gmail.com{" "}
        </Box>
        <Box fontSize='.7em'>
          <Icon  fontSize='1.2em'>
            <MdPhone />
          </Icon>{" "}
          +91 8606298790
        </Box>
      </Box>
      </Container>
    </Container>
  );
};



export default SummaryAboutme;