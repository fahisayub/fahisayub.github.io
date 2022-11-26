import React from 'react';
import Whyme from "../components/Whyme";
import Projects from "../components/Projects";
import { Container } from '@chakra-ui/react';
import HiIam from '../components/HiIam';
import SummaryAboutme from '../components/SummaryAboutme';
import HowToConnect from '../components/HowToConnect';
import TechStacks from '../components/TechStacks';
import OtherSkills from '../components/OtherSkills';
import MyImageCard from '../components/MyImageCard';
import ResumeButton from '../components/ResumeButton';
import SeeInAction from '../components/SeeInAction';
import ProjectHeading from '../components/ProjectHeading';
import ContactsHeading from '../components/ContactsHeading';
import SkillsHeading from '../components/SkillsHeading';
import KnowMore from '../components/KnowMore';
import GithubCalendar from '../components/GitHubCalendar';
import StatsTitle from '../components/StatsTitle';
import GitHubStats from '../components/GitHubStats';
import Statistics from '../components/Statistics';
const Home = () => {
   
    return (
        <Container maxW={['100%', '100%','100%','100%','100%']}   margin='auto' marginBottom='100px'  pt='150px' >
      {/* <Intro/> */}
      <HiIam/>
        <MyImageCard/>
        <ResumeButton/>
        <KnowMore/>
        <SummaryAboutme/>
        <Whyme/>
        <SkillsHeading/>
      <TechStacks/>
        <OtherSkills/>
        <SeeInAction/>
        <ProjectHeading/>
        <Projects/>
        <StatsTitle/>
        <Statistics/>
        <GithubCalendar name="fahisayub"  />
        <GitHubStats/>
        <HowToConnect/>
        <ContactsHeading/>
        </Container>
    );
};

export default Home;