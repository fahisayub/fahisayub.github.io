import React from "react";
import { Container, Heading, Text, Box, Icon } from "@chakra-ui/react";
import { IoLocation } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";

const AboutMe = () => {
  return (
    <Container
      maxW="90%"
      padding="20px"
      borderRadius="20px"
      boxShadow="base"
      bg="gray.300"
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
        An Aspiring Web Developer, Proficient in translating design into
        high-quality code using the best practice, always curious about new
        problems and bringing the best solution with an interdisciplinary
        collaboration
      </Text>
      <Box
        fontSize="25px"
        display={["block", "block", "block", "flex", "flex"]}
        margin="auto"
        justifyContent="center"
      >
        <Box>
          <Icon>
            <IoLocation size="md" />
          </Icon>{" "}
          Ernakulam,Kerala{" "}
        </Box>
        <Box>
          {" "}
          <Icon marginLeft="15px">
            <MdEmail size="md" />
          </Icon>{" "}
          fahisayub@gmail.com{" "}
        </Box>
        <Box>
          <Icon marginLeft="15px">
            <MdPhone size="md" />
          </Icon>{" "}
          +91 8606298790
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMe;
