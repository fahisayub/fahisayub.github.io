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
      height="600px"
      maxW="1000px"
      display="flex"
    >
      <Container
        transform="rotate(45deg)"
        borderRadius="3.125rem"
        height="400px"
        w="400px"
        margin="auto"
        zIndex={1}
        backgroundColor=" #2d2c2c"
        border=" 0.25rem solid #79d392"
      >
        <Container
          transform="rotate(-45deg)"
          color="brand"
          height="400px"
          w="400px"
          marginLeft="-15px"
          py="90px"
        >
          {" "}
          <Img src={image} boxSize="border-box" borderRadius="10px" />
        </Container>
      </Container>

      <Container
        transform="rotate(45deg)"
        borderRadius="3.125rem"
        height="350px"
        w="350px"
        margin="auto"
        backgroundColor="#79d392"
        border="0.25rem solid #79d392"
      >
        {" "}
        <Container
          transform="rotate(-45deg)"
          height="350px"
          w="300px"
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
        borderRadius="3.125rem"
        height="300px"
        w="300px"
        margin="auto"
        backgroundColor=" #2d2c2c"
        border=" 0.25rem solid #79d392"
      >
        {" "}
        <Container
          transform="rotate(-45deg)"
          color="brand"
          marginLeft="-15px"
          height="300px"
          w="300px"
          p="0px"
          paddingTop="25px"
        >
          {" "}
          <Text fontWeight="semibold">TechStack Used:</Text>
          <ProjectStack />
          <ProjectLinkButtons livelink={livelink} github={github} />
        </Container>
      </Container>
    </Container>
  );
};

export default MyProjectCard;
