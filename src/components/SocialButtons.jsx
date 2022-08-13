import React from 'react';
import { Container,Button } from '@chakra-ui/react';
import {SiGithub,SiLinkedin} from "react-icons/si"

const SocialButtons = () => {
    return (
        <Container       display={["block", "block", "flex", "flex", "flex"]}
        justifyContent='space-evenly'marginTop='20px'>

        <Button as ='a' margin='5px'     size={["sm", "sm", "md", "md", "md"]}
 href='https://github.com/fahisayub' bg='black'border='1px solid white' color='white'> <SiGithub/>My GitHub</Button>
        <Button as ='a'margin='5px'size={["sm", "sm", "md", "md", "md"]} href='https://www.linkedin.com/in/muhammed-fahiz-p-a-62804515b/' bg='black'border='1px solid white' color='white' > <SiLinkedin/>My LinkedIn</Button>
        </Container>
    );
};

export default SocialButtons;