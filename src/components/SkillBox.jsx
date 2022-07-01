import React from 'react';
import {Box,Heading,Icon} from '@chakra-ui/react'
const SkillBox = ({skills}) => {
    return (
        <Box display='grid'gridTemplateColumns='repeat(7,1fr)' gap='50px' maxW='80%' boxSize='border-box'>
                {skills.map(({skill,img,id})=>{
                    return  <Box key={id} h='120px'w='120px' padding='10px'textAlign='center'boxSizing='border-box'
                    borderRadius='10px'  boxShadow='base' >
                        
                        <Icon boxSize='80px' viewBox='0 0 25 25'>{img}</Icon>
                        
                        <Heading size='sm'fontWeight='semibold' alignItems='center'>{skill}</Heading>
                        </Box>
                })}
            </Box>
       
    );
};

export default SkillBox;