import { Container, Divider, Img, Text } from "@chakra-ui/react";
import React from "react";
import Hi from "../hi.png";

const HiIam = () => {
  return (
    <Container
    id='Home'
      transform="rotate(45deg)"
      borderRadius="2em"
      height={["200px","350px",'350px']}
      width={["200px","350px",'350px']}
      bg="brand "
      p="0px"
      ml={['1em','2em','5em','15em','20em']}
      _hover={{boxShadow:'5px 5px 20px #79d392'}}
    >
      <Container
        transform="rotate(-45deg)"
        height={["200px","350px",'350px']}
        width={["200px","350px",'350px']}
      >
        <Img src={Hi} height={['5em',"9em",'']} width={['5em',"9em",'']} alt="Hi" margin="auto" />
        <Divider borderColor="brand_secondary" />
        <Text fontSize={['.9em',"1.2em",'']} textAlign="center" fontWeight="semibold">
          Hi, I'm
        </Text>
        <Text fontSize={['1.2em',"1.8em",'']} textAlign="center" fontWeight="bold">
          Muhammed Fahiz
        </Text>

        <Text fontSize={['xs','lg','']} margin="auto" mt={['10px','20px','']}>
          Full Stack Web Developer
        </Text>
      </Container>
    </Container>
  );
};

export default HiIam;
