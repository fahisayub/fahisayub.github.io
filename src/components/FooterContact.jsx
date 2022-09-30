import { Container, Divider, Box, Icon, Text, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";
import SocialButtons from "./SocialButtons";

const FooterContact = () => {
  return (
    <Container
      transform="rotate(45deg)"
      borderRadius="2em"
      height={['300px',"1000px"]}
      maxW={['300px',"1000px"]}
      bg="brand "
      marginBottom={['-50px','-500px']}
      marginLeft={['100px','500px']}
      p="0px"
    >
      <Container
        transform="rotate(-45deg)"
        height={['500px',"1000px"]}
        maxW={['500px',"1000px"]}
        py="1em"
      >
        <Text
          fontSize="1.5em"
          w="10em"
          margin="auto"
          textAlign="center"
          fontWeight="bold"
        >
          Feel free to connect with me:
        </Text>
<Container  height="1000px"
        maxW="500px"
        display='flex'
        >

     <Box>
     <SocialButtons/>

        </Box>   
        <Divider h="100px" orientation='vertical' m="auto" my="10px" borderColor="brand_secondary" />
        <Box
          fontSize="25px"
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
            onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">
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
