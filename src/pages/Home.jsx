import React from 'react';
import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import { Container } from '@chakra-ui/react';
const Home = () => {
    return (
        <Container maxW='100%' >
      <Intro/>
       <AboutMe/>
       <Skills/>
       <Projects/>
       <Contacts/>
        </Container>
    );
};

export default Home;