import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container, Text } from "@chakra-ui/react";
import React from "react";

const SeeInAction = () => {
  return (
      <Container
        transform="rotate(45deg)"
        borderRadius={["1em",'2em']}
        height={['100px',"200px"]}
        width={['100px',"200px"]}
        border=".25em solid"
        borderColor="brand"
        bg="brand_secondary "
        p='0px'
        mt='10px'
        mr={['10px','50px','100px','200px','200px']}
        
      >
        <Container
          transform="rotate(-45deg)"
          height={['100px',"200px"]}
          width={['100px',"200px"]}
          p={['1em',"2.5em"]}
          
        >
          <Text fontSize={['.6em',"1.2em"]} color="brand" marginTop={['1em','1em']} textAlign='center' fontWeight="semibold">
            Let's see me in action!
          </Text>
          <ArrowBackIcon
            color="brand"
            fontSize={['2em',"4em"]}
            transform="rotate(-45deg)"
            marginTop=".3em"
            marginRight='.5em'
          />
        </Container>
      </Container>
  );
};

export default SeeInAction;
