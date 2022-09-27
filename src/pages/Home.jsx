import React from 'react';
import AboutMe from "../components/AboutMe";
import Whyme from "../components/Whyme";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Circle, Container, Icon } from '@chakra-ui/react';
import HiIam from '../components/HiIam';
import SummaryAboutme from '../components/SummaryAboutme';
import HowToConnect from '../components/HowToConnect';
import MyProjectCard from '../components/MyProjectCard';
import TechStacks from '../components/TechStacks';
const Home = () => {
   
    return (
        <Container maxW={['100%', '100%','100%','100%','100%']}   margin='auto' marginBottom='100px'  padding='0px' >
      <Intro/>
      <TechStacks/>
      {/* <HiIam/>
      <SummaryAboutme/>
      <Whyme/>
      <HowToConnect/>
       <Skills/>
       <Projects/> */}
        </Container>
    );
};

export default Home;