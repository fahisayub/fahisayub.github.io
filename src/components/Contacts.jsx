import React from "react";
import { Container, Icon, Box, Text } from "@chakra-ui/react";
import { IoLocation } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";
import SocialButtons from "./SocialButtons";

const Contacts = () => {
  return (
    <Container padding="0px" maxW="100%" id="Contacts">
      <Container maxW="100%" bg="black" color="white" padding="10px">
        <Text margin="20px">Feel free to contact me:</Text>
        <Box fontSize="20px" margin="20px ">
            <Box>

          <Icon>
            <IoLocation size="20px" />
          </Icon>{" "}
          Ernakulam,Kerala
            </Box>
            <Box>

          <a  href="mailto:fahisayub@gmail.com">

          <Icon marginLeft="15px">
            <MdEmail size="20px" />
          </Icon>{" "}

          fahisayub@gmail.com
          </a>
            </Box>
            <Box>

          <Icon marginLeft="15px">
            <MdPhone size="20px" />
          </Icon>
          <a
            href="tel:+918606298790"
            onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
            >
            
          +91 8606298790
          </a>
              </Box>
        </Box>
        <SocialButtons />
      </Container>
    </Container>
  );
};

export default Contacts;
