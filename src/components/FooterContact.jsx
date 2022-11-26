import { Container, Divider, Box, Icon, Text, Link } from "@chakra-ui/react";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";
import SocialButtons from "./SocialButtons";

const FooterContact = () => {
  return (
    <Container
      transform="rotate(45deg)"
      borderRadius="2em"
      height={['300px',"500px"]}
      maxW={['300px',"500px"]}
      bg="brand "
      mt='-50px'
      marginBottom={['-50px','-100px']}
      p="0px"
      _hover={{boxShadow:'5px 5px 20px #79d392'}}
    >
      <Container
        transform="rotate(-45deg)"
        height={['300px',"500px"]}
        maxW={['300px',"500px"]}
        py="1em" 
      >
        <Text
          fontSize={['.8em',"1.5em"]}
          w={['10em',"10em"]}
          margin="auto"
          textAlign="center"
          fontWeight="bold"mt='50px'
        >
          Feel free to connect with me:
        </Text>
<Container  height={['300px','500px']} 
        maxW={['300px',"500px"]}
        display='flex'
        >

     <Box>
     <SocialButtons/>

        </Box>   
        <Divider h={['60px',"100px"]} orientation='vertical' m="auto" my="10px" borderColor="brand_secondary" />
        <Box
          fontSize={['1em','1.8em']}
          display="block"
          margin="auto"
          textAlign="left"
          w="8em"
          marginTop="5px"
          justifyContent="center"
        >
          <Box fontSize=".7em">
            <Icon fontSize="1.2em">
              <IoLocation />
            </Icon>{" "}
            Ernakulam,Kerala{" "}
          </Box>
          <Link fontSize=".7em" href="mailto:fahisayub@gmail.com">
            {" "}
            <Icon fontSize="1.2em">
              <MdEmail />
            </Icon>{" "}
            fahisayub@gmail.com{" "}
          </Link>
<br />
          <Link fontSize=".7em" href="tel:+918606298790"
            >
            <Icon fontSize="1.2em">
              <MdPhone />
            </Icon>{" "}
            +91 8606298790
          </Link>
        </Box>
</Container>
      </Container>
    </Container>
  );
};

export default FooterContact;
