import React from "react";
import dot from "../logo.svg";
import { Img, Container, Heading, Box, Button, Text } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import SocialButtons from "./SocialButtons";
import AboutMe from "./AboutMe";
import ResumeButton from "./ResumeButton";
import GitHubButton from "./GitHubButton";
import MyImageCard from "./MyImageCard";

const Intro = () => {
  return (
    <Container
      id='Intro'
      margin="auto"
      maxW="100%"
      
      
    >
      <Container margin="auto"
      paddingTop='100px'
      maxW="100%"
      justifyContent="space-evenly"
      h='600px' display={["block", "block", "flex", "flex", "flex"]}>
        
      {/* <Img
        src={Mfahiz}
        borderRadius="40%"
        height="250px"
        width="250px"
        alt="logo"
        margin="auto"
        /> */}
        <MyImageCard/>
      <Box margin="auto" maxW='100%' >
        <Heading
          margin="auto"
          size="lg"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          Hi, I'm Muhammed Fahiz
        </Heading>
        <Text size="md" margin="auto">
          Full Stack Web Developer
        </Text>
        <br />
        <Button
        margin='auto'
        as="a"
        target='_blank'
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        color="white"
        href='/MuhammedFahiz_Resume.pdf'
        _hover={{bgGradient:"linear(to-l , #FF0080, #7928CA)"}}
          download={true}
        >
          <DownloadIcon marginRight='5px' /> Download My Resume here
        </Button>
        <SocialButtons />
      </Box>
      
    </Container>
        </Container>
  );
};

export default Intro;
