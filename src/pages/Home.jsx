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
import OtherSkills from '../components/OtherSkills';
import MyImageCard from '../components/MyImageCard';
import ResumeButton from '../components/ResumeButton';
const Home = () => {
   
    return (
        <Container maxW={['100%', '100%','100%','100%','100%']}   margin='auto' marginBottom='100px'  pt='150px' >
      {/* <Intro/> */}
      <HiIam/>
        <MyImageCard/>
        <ResumeButton/>
        <SummaryAboutme/>
      <TechStacks/>
        <OtherSkills/>
      {/* <Whyme/>
      <TechStacks/>
      <OtherSkills/>
      <MyProjectCard/>
       <Projects/> */}
        </Container>
    );
};

export default Home;