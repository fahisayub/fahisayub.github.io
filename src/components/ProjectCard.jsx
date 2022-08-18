import React from "react";
import {
  Container,
  Img,
  Heading,
  Box,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  projectTitle,
  images,
  description,
  github,
  livelink,
  techStack,
}) => {
  return (
    <Container
      maxW="100%"
      margin="auto"
      h="auto"
      boxShadow="lg"
      bg="gray.300"
      display="block"
      borderRadius="10px"
      marginTop="10px"
      padding="10px"
    >
      <Img src={images} boxSize="border-box" borderRadius="10px" />
      <Box>
        <Heading fontWeight="semibold" size="md" margin="20px">
          {projectTitle}
        </Heading>
        <Text margin="20px" h="100px">
          {description}
        </Text>
        <Text>TechStack Used:</Text>
        <Box
          margin="auto"
          display="grid"
          gridTemplateColumns={[
            "repeat(4,1fr)",
            "repeat(4,1fr)",
            "repeat(4,1fr)",
            "repeat(4,1fr)",
            "repeat(4,1fr)",
          ]}
          gap="10px"
        >
          {techStack.map(({ id, skill, img }) => {
            return (
              <Box
                key={id}
                borderRadius="10px"
                w="60px"
                h="50px"
                bg="white"
                textAlign="center"
                padding="5px"
                boxShadow="base"
              >
                <Icon boxSize="20px">{img}</Icon>
                <Text fontSize="10px">{skill}</Text>
              </Box>
            );
          })}
        </Box>
        <Box display="flex" justifyContent="space-evenly" margin="20px">
          <Button
            as="a"
            target="_blank"
            bg="darkblue"
            color="white"
            href={livelink}
            _hover={{ color: "black", bg: "gray" }}
          >
            <FiExternalLink /> View Live
          </Button>
          <Button as="a"
           target="_blank" 
          bg="black"
           color="white" 
           href={github}
           _hover={{color:'black',bg:'gray'}}
           >
            <SiGithub />
            View Code
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectCard;
