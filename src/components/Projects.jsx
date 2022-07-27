import React from "react";
import ProjectCard from "./ProjectCard";
import { Heading, Container } from "@chakra-ui/react";
import Ideakart from "../assets/ideakart.png";
import Zee5 from "../assets/zee5png.png";
import IndiaMart from "../assets/indiamart.png";
import { SiChakraui,SiReact,SiRedux,SiJavascript,SiCss3 } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";


const Projects = () => {
  const projects = [
    {
      id: 1,
      livelink: "https://jocular-pony-971066.netlify.app/",
      github: "https://github.com/fahisayub/Zee_clone",
      techStack: [ {id:1,skill:'HTML5',img:<AiFillHtml5 size='20px' color='rgb(233,89,35)' />},
      {id:2,skill:'CSS3',img:<SiCss3 size='20px' color='blue' />},
      {id:3,skill:'JavaScript',img:<SiJavascript size='20px' color='orange' />},],
      description:
        "This is the exact clone of the ZEE5 online video streaming OTT platform.A collaborative project.",
      features: [],
      images: Zee5,
      gif: "",
      projectTitle: "ZEE5 Clone",
    },
    {
      id: 2,
      livelink: "https://ideakart-clone-rct101.netlify.app/",
      github: "https://github.com/fahisayub/ideakart-clone",
      techStack: [{id:2,skill:'CSS3',img:<SiCss3 size='20px' color='blue' />},
      {id:4,skill:'React',img:<SiReact size='20px' color='skyblue' />},
      {id:5,skill:'Redux',img:<SiRedux size='20px' color='darkblue' />},
      {id:6,skill:'Chakra',img:<SiChakraui size='20px' color='rgb(78,201,196)' />},],
      description:
        "Ideakart is a  website that gives you an idea about books you want to buy.",
      features: [],
      images: Ideakart,
      gif: "",
      projectTitle: "IDEAKART Clone",
    },
    {
      id: 3,
      livelink: "https://chimerical-empanada-f4a3f8.netlify.app/",
      github: "https://github.com/fahisayub/BlueHeavenClone",
      techStack: [ {id:1,skill:'HTML5',img:<AiFillHtml5 size='20px' color='rgb(233,89,35)' />},
      {id:2,skill:'CSS3',img:<SiCss3 size='20px' color='blue' />},
      {id:3,skill:'JavaScript',img:<SiJavascript size='20px' color='orange' />},],
      description:
        "IndiaMART is an Indian e-commerce company that provides B2B and customer to customer sales services via its web portal. ",
      features: [],
      images: IndiaMart,
      gif: "",
      projectTitle: "IndiaMART Clone",
    },
  ];

  return (
    <Container maxW="90%"  margin='auto'padding='0px'  marginTop='50px'>
      <Heading margin='20px'>My Projects</Heading>
    <Container maxW="100%"  display='grid'
      gridTemplateColumns={[
        "repeat(1,1fr)",
        "repeat(1,1fr)",
        "repeat(2,1fr)",
        "repeat(3,1fr)",
        "repeat(3,1fr)",
    ]}
      gap='20px' margin='auto' p='0px' marginTop='50px'>
      {projects.map((project) => {
        return <ProjectCard key={project.id} {...project} />;
      })}
    </Container>
    </Container>
  );
};

export default Projects;
