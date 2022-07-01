import React from 'react';
import { Container,Img,Heading,Box,Text,Button,Icon } from '@chakra-ui/react';
import {SiGithub} from 'react-icons/si'
import {FiExternalLink} from 'react-icons/fi'

const ProjectCard = ({projectTitle,images,description,github,livelink,techStack}) => {
    return (
        <Container maxW='100%' h='400px' boxShadow='lg'bg='gray.100' display='flex' borderRadius='10px'margin='20px' padding='10px'>
            <Img src={images} boxSize='border-box'borderRadius='10px' />
            <Box>
            <Heading fontWeight='semibold' size='md' margin='20px'>{projectTitle}</Heading>
            <Text margin='20px'>{description}</Text>
            <Text>TechStack Used:</Text>
        <Box display='flex'margin='auto'  justifyContent='space-evenly'>
            {techStack.map(({id,skill,img})=>{
                return <Box key={id}  borderRadius='10px' w='80px' h='60px'bg='white' textAlign='center'padding='5px' boxShadow='base'>
                <Icon boxSize='30px'>{img}</Icon>
                    <Text>{skill}</Text>
                    </Box>
            })}
        </Box>
            <Box display='flex' justifyContent='space-evenly' margin='20px'>
                <Button as='a' bg='darkblue' color='white' href={livelink} ><FiExternalLink/> View Live</Button> 
                <Button as='a' bg='black' color='white' href={github}><SiGithub />View Code</Button></Box>
            </Box>
        </Container>
    );
};

export default ProjectCard;