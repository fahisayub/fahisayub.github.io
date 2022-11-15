import { Grid,  } from '@chakra-ui/react';
import React from 'react';
import { AiFillHtml5 } from "react-icons/ai";
 import { FaNodeJs, } from "react-icons/fa";

import {
 
  SiChakraui,
  SiFirebase,
  SiReact,SiHeroku,
  SiExpress,
  SiRedux,
  SiFlutter,
  SiJavascript,
  SiCss3,
  SiMongodb,
 
} from "react-icons/si";

import { DsaIcon } from "../assets/DsaIcon";
import { MongooseIcon } from '../assets/MongooseIcon';

import { SkillItem, SkillTitleItem } from './SkillItemCard';
const TechStacks = () => {


    return (
        <Grid
        id='Skills'
  h={['290px','500px','700px']}maxW={['290px','500px','700px']}
  
  m='auto'
  transform="rotate(45deg)"
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(6, 1fr)'
  gap={[2,3,4]}
  mt={['50px','200px',"150px",'150px','150px']}
>
 <SkillTitleItem mtitle={"Tech Stacks"} ltitle={'Frontend'} rtitle={"Backend"} />

  <SkillItem  skill='Firebase' >   <SiFirebase size="18px" color="black" />                                 2</SkillItem>
  <SkillItem  skill='Hreoku' >    <SiHeroku size="18px" color="black" />                                3</SkillItem>
  <SkillItem  dis='none'>                           4</SkillItem>
  <SkillItem  dis='none' >                          5</SkillItem>
  <SkillItem  skill='DSA' >   <DsaIcon/>                                 6</SkillItem>
  <SkillItem  skill='Node' > <FaNodeJs size="18px" color='black'/>                                    7</SkillItem>
  <SkillItem  skill='Express' >  <SiExpress size="18px" color='black' />                                  8</SkillItem>
  <SkillItem   dis='none'>                          9</SkillItem>
  <SkillItem  skill='HTML' > <AiFillHtml5 size="18px" color="black"/>                                10</SkillItem>
  <SkillItem  skill='CSS' >   <SiCss3 size="18px" color='black'/>                               11</SkillItem>
  <SkillItem  dis='none'>                          12</SkillItem>
  <SkillItem  skill='MongoDB' > <SiMongodb size="18px" color='black'/>                                  13</SkillItem>
  <SkillItem  skill='mongoose' >      <MongooseIcon/>                           14</SkillItem>
  <SkillItem  skill='' >                                   15</SkillItem>
  <SkillItem  skill='JavaScript' >    <SiJavascript size="18px" color="black" />                               16</SkillItem>
  <SkillItem  skill='React' >     <SiReact size="18px" color="black" />                                17</SkillItem>
  <SkillItem  skill='Redux' >         <SiRedux size="18px" color="black" />                          18</SkillItem>
  <SkillItem  dis='none' >                         19</SkillItem>
  <SkillItem  skill='' >                                   20</SkillItem>
  <SkillItem  skill='' >                                   21</SkillItem>
  <SkillItem  dis='none'>                          22</SkillItem>
  <SkillItem  skill='Chakra-UI' >   <SiChakraui size="18px" color="black" />                                23</SkillItem>
  <SkillItem  skill='Flutter' >    <SiFlutter size="18px" color="black" />                               24</SkillItem>
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

export default TechStacks;