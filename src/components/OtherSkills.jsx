import { Grid,  } from '@chakra-ui/react';
import React from 'react';

import { FcCommandLine } from "react-icons/fc";
import {
  SiGithub,
//   SiAnsys,
//   SiAdobeillustrator,
  SiInkscape,
  SiAdobexd,
  SiArduino,SiFigma,SiCypress,

  SiNetlify,
} from "react-icons/si";
import { F360Icon } from "../assets/F360Icon";
// import { SolidWorksIcon } from "../assets/SolidWorksIcon";
import { EagleIcon } from "../assets/EagleIcon";
import { AccountabilityIcon } from "../assets/AccountabilityIcon";
// import { InterpersonalIcon } from "../assets/InterpersonalIcon";
import { SelfstudyIcon } from "../assets/SelfstudyIcon";
import { ProblemSolvingIcon } from "../assets/ProblemSolvingIcon";
import { TeamworkIcon } from "../assets/TeamworkIcon";
import { AdaptabilityIcon } from "../assets/AdaptabilityIcon";
import { SkillItem, SkillTitleItem } from './SkillItemCard';
import { FaTree } from 'react-icons/fa';


const OtherSkills = () => {


    return (
        <Grid
  h={['290px','500px','700px']}maxW={['290px','500px','700px']}
  m='auto'
  mt='50px'
  transform="rotate(45deg)"
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(6, 1fr)'
  gap={[2,3,4]}
>
  <SkillTitleItem mtitle={"Other Skills"} ltitle={"Mindsets"} rtitle={"Toolsets"} />

  <SkillItem  skill='Github' >     <SiGithub size="18px" color="black" />                               2</SkillItem>
  <SkillItem  skill='Netlify' >         <SiNetlify size="18px" color="black" />                           3</SkillItem>
  <SkillItem  dis='none'>                           4</SkillItem>
  <SkillItem  dis='none' >                          5</SkillItem>
  <SkillItem  skill='CLI Bash' >         <FcCommandLine size="18px" color="black" />                           6</SkillItem>
  <SkillItem  skill='Cypress' >         <SiCypress size="18px" color="black"/>                           7</SkillItem>
  <SkillItem  skill='Figma' >           <SiFigma size="18px" />                         8</SkillItem>
  <SkillItem   dis='none'>                          9</SkillItem>
  <SkillItem   skill='Team Work'>  <TeamworkIcon/>                                 10</SkillItem>
  <SkillItem   skill='Ownership'>  <AccountabilityIcon/>                                 11</SkillItem>
  <SkillItem  dis='none'>                          12</SkillItem>
  <SkillItem  skill='Adobe XD' >   <SiAdobexd size="18px" color="black" />                                13</SkillItem>
  <SkillItem  skill='Inkscape' >        <SiInkscape size="18px" color="black" />                            14</SkillItem>
  <SkillItem  skill='Fusion360' >       <F360Icon/>                            15</SkillItem>
  <SkillItem  skill='Adaptable' >       <AdaptabilityIcon/>                            16</SkillItem>
  <SkillItem  skill='Self Learn' >    <SelfstudyIcon/>                               17</SkillItem>
  <SkillItem  skill='Creative' >      <ProblemSolvingIcon/>                             18</SkillItem>
  <SkillItem  dis='none' >                         19</SkillItem>
  <SkillItem  skill='Eagle' >        <EagleIcon/>                           20</SkillItem>
  <SkillItem  skill='Arduino' >       <SiArduino size="18px" color="black" />                            21</SkillItem>
  <SkillItem  dis='none'>                          22</SkillItem>
  <SkillItem  skill='Growth' >      <FaTree size="18px" color='black'/>                             23</SkillItem>
  <SkillItem  skill='' >                                  24</SkillItem>
  <SkillItem  skill='' >                                   25</SkillItem>
  <SkillItem  dis='none' >                         26</SkillItem>
  <SkillItem  dis='none' >                         27</SkillItem>
  <SkillItem  dis='none' >                         28</SkillItem>
  <SkillItem  dis='none'>                          29</SkillItem>
  <SkillItem  skill='' >                                   30</SkillItem>
  <SkillItem  skill='' >                                   31</SkillItem>
  <SkillItem  dis='none' >                         32</SkillItem>
  <SkillItem  dis='none' >                         33</SkillItem>
</Grid>
    );
};

export default OtherSkills;