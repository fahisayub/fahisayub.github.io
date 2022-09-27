import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container, Text } from "@chakra-ui/react";
import React from "react";
const SeeInAction = () => {
    return (
        <Container
        transform="rotate(45deg)"
        borderRadius="2em"
        height="200px"
        width="200px"
        border=".25em solid"
        borderColor="brand"
        bg="brand_secondary "
        p='0px'
        
      >
        <Container
          transform="rotate(-45deg)"
          height="200px"
          width="200px"
          p="2.5em"
          
        >
          <Text fontSize="1.2em" color="brand" marginTop='20px' textAlign='center' fontWeight="semibold">
            Let see me in action!
          </Text>
          <ArrowBackIcon
            color="brand"
            fontSize="4em"
            transform="rotate(-45deg)"
            marginTop=".3em"
            marginRight='.5em'
          />
        </Container>
      </Container>
    );
};

export default SeeInAction;