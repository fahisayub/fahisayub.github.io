import React from "react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { Button, Divider, Flex } from "@chakra-ui/react";
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
        colorScheme='green'
        color="white"
        m="auto"
        size={['xs',"md"]}
        href={livelink}
        _hover={{boxShadow:'1px 1px 10px #79d392'}}
      >
        <FiExternalLink /> Live
      </Button>
<Divider orientation="vertical" />
      <Button
        as="a"
        target="_blank"
        bg="blackAlpha.700"
        color="white"
        m="auto"
        size={['xs',"md"]}
        href={github}
        _hover={{bg: "blackAlpha.900" , boxShadow:'1px 1px 10px #79d392' }}
      >
        <SiGithub />
         Code
      </Button>
    </Flex>
  );
};

export default ProjectLinkButtons;
