
import { Container, Divider, Box,Icon, Text, Flex,Link } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";

const SummaryAboutme = () => {
  return (
    <Container
    id='About me'
      transform="rotate(45deg)"
      borderRadius="2em"
      height={['240px',"350px"]}
      width={['240px',"350px"]}
      bg="brand "
      p="0px"
      mt={['2em','0em','2em','0em','0em']}
      mr={['1.5em','5em','10em','20em','25em']}
    >
      <Container
        transform="rotate(-45deg)"
        height={['240px',"350px"]}
        width={['240px',"350px"]}
        py={['.8em','2.5em']}
      >
        
        <Text fontSize={['1em',"1.5em"]} textAlign="center" fontWeight="bold">
          About Me
        </Text>
        <Divider w={['100px','200px']} m='auto' my={['5px','10px']} borderColor="brand_secondary" />

        <Text fontSize={['xs',"md"]} margin="auto">
        An Aspiring Web Developer,always curious about new
        problems and bringing the best solution with an interdisciplinary
        collaboration
        </Text>
        <Box
        fontSize={['md',"25px"]}
        display="block"
        margin="auto"
        textAlign='left'
        w='8em'
        marginTop='10px'
        justifyContent="center"
      >
        <Box fontSize='.7em'>
          <Icon fontSize='1.2em'>
            <IoLocation  />
          </Icon>{" "}
          Ernakulam,Kerala{" "}
        </Box>
        <Box fontSize='.7em'>
          {" "}
          <Icon fontSize='1.2em'>
            <MdEmail  />
          </Icon>{" "}
          fahisayub@gmail.com{" "}
        </Box>
        <Box fontSize='.7em'>
          <Icon  fontSize='1.2em'>
            <MdPhone />
          </Icon>{" "}
          +91 8606298790
        </Box>
      </Box>
        <Flex
        fontSize={['md',"25px"]}
        display="flex"
        margin="auto"
        mt='5px'
        justify='center'
        w='8em'
        >
          <Link href="https://github.com/fahisayub"
        target='_blank'>
        <Flex fontSize='.7em'justifyContent='center'>
          <FaGithub fontSize='1.5em'/>
          Github
        </Flex >
          </Link>
        <Divider orientation='vertical' h={['15px','20px']} mx='10px'borderColor='black' />
          <Link href="https://www.linkedin.com/in/muhammed-fahiz-p-a-62804515b/" target='_blank'
          >
        <Flex fontSize='.7em' justifyContent='center'    >
          <FaLinkedin fontSize='1.5em' />
          LinkedIn
        </Flex>
          </Link>
        </Flex>
      </Container>
    </Container>
  );
};



export default SummaryAboutme;