import { Container, Divider, Img, Text } from "@chakra-ui/react";
import React from "react";
import Hi from "../hi.png";

const HiIam = () => {
  return (
    <Container
      transform="rotate(45deg)"
      borderRadius="2em"
      height="250px"
      width="250px"
      bg="brand "
      p="0px"
    >
      <Container
        transform="rotate(-45deg)"
        height="250px"
        width="250px"
      >
        <Img src={Hi} height="6em" width="6em" alt="logo" margin="auto" />
        <Divider borderColor="brand_secondary" />
        <Text fontSize="1.2em" textAlign="center" fontWeight="semibold">
          Hi, I'm
        </Text>
        <Text fontSize="1.5em" textAlign="center" fontWeight="bold">
          Muhammed Fahiz
        </Text>

        <Text size="md" margin="auto">
          Full Stack Web Developer
        </Text>
      </Container>
    </Container>
  );
};

export default HiIam;
