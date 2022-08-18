import React from 'react';
import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Container } from '@chakra-ui/react';
const Home = () => {
    return (
        <Container maxW={['100%', '100%','100%','70%','70%']}   margin='auto' marginBottom='100px'  padding='10px' >
            
      <Intro/>
       <AboutMe/>
       <Skills/>
       <Projects/>
        </Container>
    );
};

export default Home;