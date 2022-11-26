// import React from "react";
// import { Container, Heading,Box, Icon, Text} from "@chakra-ui/react";
// import SkillBox from "./SkillBox";
// import { AiFillHtml5 } from "react-icons/ai";
// import { FaNodeJs } from "react-icons/fa";
// import { DiMysql } from "react-icons/di";
// import { FcCommandLine } from "react-icons/fc";
// import {
//   SiGithub,
//   SiAnsys,
//   SiAdobeillustrator,
//   SiInkscape,
//   SiAdobexd,
//   SiArduino,
//   SiChakraui,
//   SiFirebase,
//   SiReact,
//   SiExpress,
//   SiRedux,
//   SiFlutter,
//   SiJavascript,
//   SiCss3,
//   SiMongodb,
//   SiNetlify,
// } from "react-icons/si";
// import { F360Icon } from "../assets/F360Icon";
// import { SolidWorksIcon } from "../assets/SolidWorksIcon";
// import { EagleIcon } from "../assets/EagleIcon";
// import { DsaIcon } from "../assets/DsaIcon";
// import { AccountabilityIcon } from "../assets/AccountabilityIcon";
// import { InterpersonalIcon } from "../assets/InterpersonalIcon";
// import { SelfstudyIcon } from "../assets/SelfstudyIcon";
// import { ProblemSolvingIcon } from "../assets/ProblemSolvingIcon";
// import { TeamworkIcon } from "../assets/TeamworkIcon";
// import { AdaptabilityIcon } from "../assets/AdaptabilityIcon";



// const Skills = () => {
//   const frontend = [
//     {
//       id: 1,
//       skill: "HTML5",
//       img: <AiFillHtml5 size="25px" color="rgb(233,89,35)" />,
//     },
//     { id: 2, skill: "CSS3", img: <SiCss3 size="25px" color="blue" /> },
//     {
//       id: 3,
//       skill: "JavaScript",
//       img: <SiJavascript size="25px" color="orange" />,
//     },
//     { id: 4, skill: "React", img: <SiReact size="25px" color="skyblue" /> },
//     { id: 5, skill: "Redux", img: <SiRedux size="25px" color="darkblue" /> },
//     {
//       id: 6,
//       skill: "Chakra",
//       img: <SiChakraui size="25px" color="rgb(78,201,196)" />,
//     },
//     {
//       id: 7,
//       skill: "Flutter",
//       img: <SiFlutter size="25px" color="rgb(94,200,248)" />,
//     },
//   ];
//   const backend = [
//     // {
//     //   id: 1,
//     //   skill: "Express.js",
//     //   img: <SiExpress size="25px" color="black" />,
//     // },
//     // {
//     //   id: 2,
//     //   skill: "MongoDB",
//     //   img: <SiMongodb size="25px" color="rgb(104,177,62)" />,
//     // },
//     // {
//     //   id: 3,
//     //   skill: "Node.js",
//     //   img: <FaNodeJs size="25px" color="rgb(102,159,100)" />,
//     // },
//     // { id: 4, skill: "MySQL", img: <DiMysql size="25px" color="darkblue" /> },
//     {
//       id: 5,
//       skill: "Firebase",
//       img: <SiFirebase size="25px" color="orange" />,
//     },
//     {
//       id: 5,
//       skill: "DSA",
//       img: <Icon   ><DsaIcon/></Icon>,
//     },
//   ];
//   const toolsets = [
//     { id: 1, skill: "GitHub", img: <SiGithub size="25px" color="black" /> },
//     { id: 2, skill: "Netlify", img: <SiNetlify size="25px" color="rgb(32,169,180)" /> },

//     {
//       id: 3,
//       skill: "CLI Bash",
//       img: <FcCommandLine size="25px" color="black" />,
//     },
//     {
//       id: 4,
//       skill: "AdobeXD",
//       img: <SiAdobexd size="25px" color="rgb(69,1,53)" />,
//     },
//     {
//       id: 5,
//       skill: "Fusion360",
//       img: <Icon  ><F360Icon/></Icon>,
//     },
//     { id: 6, skill: "Inkskape", img: <SiInkscape size="25px" color="black" /> },
//     {
//       id: 7,
//       skill: "Illustrator",
//       img: <SiAdobeillustrator size="25px" color="rgb(49,0,0)" />,
//     },
//     {
//       id: 8,
//       skill: "Eagle",
//       img: <Icon paddingTop='20px' ><EagleIcon/></Icon>,
//     },
//     {
//       id: 9,
//       skill: "SolidWorks",
//       img: <Icon paddingTop='20px' ><SolidWorksIcon/></Icon>,
//     },
//     { id: 10, skill: "ANSYS", img: <SiAnsys size="25px" color="black" /> },
//     {
//       id: 11,
//       skill: "Arduino",
//       img: <SiArduino size="25px" color="rgb(78,201,196)" />,
//     },
//   ];// clickup,npm

//   const softskils = [
//     {
//       id: 1,
//       skill: "Team work",
//       img: <Icon><TeamworkIcon/></Icon>,
//     },
//     {
//       id: 2,
//       skill: "Accountability",
//       img: <Icon><AccountabilityIcon/></Icon>,
//     },
//     {
//       id: 3,
//       skill: "Self-learnig",
//       img: <Icon><SelfstudyIcon/></Icon>,
//     },
//     {
//       id: 4,
//       skill: "Interpersonal",
//       img: <Icon><InterpersonalIcon/></Icon>,
//     },
//     {
//       id: 5,
//       skill: "Problem-solving",
//       img: <Icon><ProblemSolvingIcon/></Icon>,
//     },
//     {
//       id: 6,
//       skill: "Adaptability",
//       img: <Icon><AdaptabilityIcon/></Icon>,
//     },
//   ];

//   return (
//     <Container   id='Skills'    maxW="90%"padding='10px'
//     margin='auto'
//     >

//       <Heading textAlign="center" margin="20px">
//         My Skills
//       </Heading>
//     <Container
//       maxW="100%"
//       textAlign="left"
//       marginTop="50px"
//       display='grid'
//       gridTemplateColumns={[
//         "repeat(1,1fr)",
//         "repeat(2,1fr)",
//         "repeat(2,1fr)",
//         "repeat(2,1fr)",
//         "repeat(2,1fr)",
//     ]}
//       gap='20px'

//     >
//         <Box p='10px' boxShadow='base'borderRadius='10px' h='auto'>

//       <Heading size="lg" margin="20px">
//         Frontent
//       </Heading>
//       <SkillBox skills={frontend} />
//         </Box>
//         <Box p='10px' boxShadow='base'borderRadius='10px' h='auto'>

//       <Heading size="lg" margin="20px">
//         Toolsets
//       </Heading>
//       <SkillBox skills={toolsets} />
//         </Box>
//         <Box p='10px' boxShadow='base'borderRadius='10px' h='auto'>

//       <Heading size="lg" margin="20px">
//         Backend
//       </Heading>
//       <SkillBox skills={backend} />
//         </Box>
//         <Box p='10px' boxShadow='base'borderRadius='10px' h='auto'>

//       <Heading size="lg" margin="20px">
//         Soft Skills
//       </Heading>
//       <SkillBox skills={softskils} />
//         </Box>
//     </Container>
//     </Container>
//   );
// };

// export default Skills;
