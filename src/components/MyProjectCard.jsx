import { Container, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import ideakart from "../assets/ideakart.png";
import ProjectLinkButtons from "./ProjectLinkButtons";
import ProjectStack from "./ProjectStack";
const MyProjectCard = ({
  projectTitle,
  image,
  description,
  github,
  livelink,
  techStack,
}) => {
  return (
    <Container
      maxW="full"
      mt='50px'
      display={["block", "block", "block", "flex", "flex"]}
    >
      <Container
        transform="rotate(45deg)"
        borderRadius={['2em',"3em"]}
        height={['240px',"320px"]}
        w={['240px',"320px"]}
        margin="auto"
        zIndex={1}
        backgroundColor=" #2d2c2c"
        border=" 0.25rem solid #79d392"
      >
        <Container
          transform="rotate(-45deg)"
          color="brand"
          height={['240px',"320px"]}
          w={['240px',"320px"]}
          marginLeft="-15px"
          py="90px"
        >
          {" "}
          <Img src={image} boxSize="border-box" borderRadius="10px" />
        </Container>
      </Container>

      <Container
        transform="rotate(45deg)"
        borderRadius={['2em',"3em"]}
        height={['200px',"280px"]}
        w={['200px',"280px"]}
        margin="auto"
        backgroundColor="#79d392"
        border="0.25rem solid #79d392"
      >
        {" "}
        <Container
          transform="rotate(-45deg)"
          height={['200px',"280px"]}
          w={['150px',"230px"]}
          px="20px"
            marginLeft='25px'

        >
          {" "}
          <Heading fontWeight="semibold" size="md" margin="20px">
            {projectTitle}
          </Heading>
          <Text margin="20px" h="100px">
            {description}
           
          </Text>
        </Container>
      </Container>

      <Container
        transform="rotate(45deg)"
        borderRadius={['2em',"3em"]}
        height={['150px',"250px"]}
        w={['150px',"250px"]}
        margin="auto"
        backgroundColor=" #2d2c2c"
        border=" 0.25rem solid #79d392"
      >
        {" "}
        <Container
          transform="rotate(-45deg)"
          color="brand"
          marginLeft="-15px"
          height={['150px',"250px"]}
          w={['150px',"250px"]}
          p="0px"
          paddingTop={['.1em',"2em"]}
        >
          {" "}
          <Text fontWeight="semibold" w={['10em','10em']} ml={['2.3em','3em']} fontSize={['10px','md']}>Tech Stack Used:</Text>
          <ProjectStack />
          <ProjectLinkButtons livelink={livelink} github={github} />
        </Container>
      </Container>
    </Container>
  );
};

export default MyProjectCard;
