
import { CircularProgress, CircularProgressLabel, Container, Text } from "@chakra-ui/react";
import React from "react";

const StatsCard = ({stat,description,statcolor}) => {
  return (
      <Container
      id='Projects'
        transform="rotate(45deg)"
        borderRadius={["1em",'2em']}
        height={['100px',"200px"]}
        width={['100px',"200px"]}
        border=".25em solid"
        borderColor="brand"
        bg="brand "
        p='0px'
        _hover={{boxShadow:'5px 5px 20px #79d392'}}
      >
        <Container
          transform="rotate(-45deg)"
          height={['100px',"200px"]}
          width={['100px',"200px"]}
          color='brand_secondary'
        //   p={['1em',"2.5em"]}
          
        >
         <CircularProgress value={100} size={['60px','120px']} color={statcolor}>
  <CircularProgressLabel >{stat}</CircularProgressLabel>
</CircularProgress>
    <Text fontSize={['8px','md']}>
        {description}
    </Text>
         
        </Container>
      </Container>
  );
};


export default StatsCard;