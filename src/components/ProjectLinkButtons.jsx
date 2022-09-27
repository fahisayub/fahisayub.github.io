import React from "react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { Box, Button } from "@chakra-ui/react";
const ProjectLinkButtons = ({ livelink, github }) => {
  return (
    <Box
      display="flex"
      gap="5px"
      flexDir="column"
      margin="10px"
    >
      <Button
        as="a"
        target="_blank"
        bg="darkblue"
        color="white"
        m="auto"
        w="150px"
        href={livelink}
        _hover={{ color: "black", bg: "gray" }}
      >
        <FiExternalLink /> View Live
      </Button>

      <Button
        as="a"
        target="_blank"
        bg="black"
        color="white"
        m="auto"
        w="150px"
        href={github}
        _hover={{ color: "black", bg: "gray" }}
      >
        <SiGithub />
        View Code
      </Button>
    </Box>
  );
};

export default ProjectLinkButtons;
