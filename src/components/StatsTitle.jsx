
import { Container, Text } from "@chakra-ui/react";
import React from "react";

const StatsTitle = () => {
  return (
      <Container
      id='Statistics'
        transform="rotate(45deg)"
        borderRadius={["1em",'2em']}
        height={['100px',"200px"]}
        width={['100px',"200px"]}
        border=".25em solid"
        borderColor="brand"
        bg="brand_secondary "
        p='0px'
        mt={['20px','100px']}
        ml={['10px','50px','100px','200px','200px']}
        
      >
        <Container
          transform="rotate(-45deg)"
          height={['100px',"200px"]}
          width={['100px',"200px"]}
          p={['1em',"2em"]}
          
        >
          <Text fontSize={['md','lg','3xl']} color="brand" marginTop={['1em','1em']} textAlign='center' fontWeight="bold">
            Statistics
          </Text>
         
        </Container>
      </Container>
  );
};

export default StatsTitle;
