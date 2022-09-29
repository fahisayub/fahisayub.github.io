import React from "react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { Box, Button, Divider, Flex } from "@chakra-ui/react";
const ProjectLinkButtons = ({ livelink, github }) => {
  return (
    <Flex
    margin="auto"
    mt='.5em'
    w={['120px','200px']}
gap='5px'
>
      <Button
        as="a"
        target="_blank"
        bg="darkblue"
        color="white"
        m="auto"
        size={['xs',"md"]}
        href={livelink}
        _hover={{ color: "black", bg: "gray" }}
      >
        <FiExternalLink /> Live
      </Button>
<Divider orientation="vertical" />
      <Button
        as="a"
        target="_blank"
        bg="black"
        color="white"
        m="auto"
        size={['xs',"md"]}
        href={github}
        _hover={{ color: "black", bg: "gray" }}
      >
        <SiGithub />
         Code
      </Button>
    </Flex>
  );
};

export default ProjectLinkButtons;
