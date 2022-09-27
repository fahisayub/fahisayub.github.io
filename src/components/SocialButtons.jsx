import React from "react";
import { Container, Button } from "@chakra-ui/react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const SocialButtons = () => {
  return (
    <Container
    width='200px'
      display="block"
      marginTop="10px"
    >
      <Button
        as="a"
        margin="5px"    width='150px'

        size={["sm", "sm", "md", "md", "md"]}
        href="https://github.com/fahisayub"
        bg="brand_secondary"
        target='_blank'
        color="brand"
        _hover={{color:'green.400',bg:'black'}}
      >
        {" "}
        <SiGithub />
        My GitHub
      </Button>
      <Button
        as="a"
        margin="5px"    width='150px'

        size={["sm", "sm", "md", "md", "md"]}
        href="https://www.linkedin.com/in/muhammed-fahiz-p-a-62804515b/"
        bg="brand_secondary"
        target='_blank'
        color="brand"
        _hover={{color:'green.400',bg:'black'}}
      >
        {" "}
        <SiLinkedin />
        My LinkedIn
      </Button>
    </Container>
  );
};

export default SocialButtons;
