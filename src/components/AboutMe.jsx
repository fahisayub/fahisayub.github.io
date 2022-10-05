import React from "react";
import { Container, Heading, Text, Box, Icon } from "@chakra-ui/react";
import { IoLocation } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";

const AboutMe = () => {
  return (
    <Container
      id='About me'
      maxW="90%"
      padding="20px"
      borderRadius="20px"
      margin="auto"
      marginTop="20px"
      
    >
      <Heading margin="auto" size="lg">
        About Me
      </Heading>
      <Text
        margin="auto"
        padding={["10px", "10px", "20px", "20px", "30px"]}
        w={["90%", "90%", "70%", "60%", "60%"]}
        textAlign="center"
      >
        An inspired team palyer,previously founder at spisook,always curious about new
        problems and learning new things in order to deliver out of the box solution for a 
        better return on investment with complete ownership
      </Text>
      <Box
        fontSize="25px"
        display={["block", "block", "block", "flex", "flex"]}
        margin="auto"
        justifyContent="center"
      >
        <Box fontSize='.7em'>
          <Icon>
            <IoLocation size="1em" />
          </Icon>{" "}
          Ernakulam,Kerala{" "}
        </Box>
        <Box fontSize='.7em'>
          {" "}
          <Icon marginLeft="15px">
            <MdEmail size="25px" />
          </Icon>{" "}
          fahisayub@gmail.com{" "}
        </Box>
        <Box fontSize='.7em'>
          <Icon marginLeft="15px">
            <MdPhone size="25px" />
          </Icon>{" "}
          +91 8606298790
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMe;
