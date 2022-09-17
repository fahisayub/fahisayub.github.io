import React from "react";
import { Box, Heading, Icon } from "@chakra-ui/react";
const SkillBox = ({ skills }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={[
        "repeat(2,1fr)",
        "repeat(2,1fr)",
        "repeat(2,1fr)",
        "repeat(2,1fr)",
        "repeat(2,1fr)",
      ]}
      gap={["20px", "20px", "20px", "20px", "20px"]}
      maxW="100%"
      boxSize="border-box"
      margin="auto"
      padding='0px'
    >
      {skills.map(({ skill, img, id }) => {
        return (
          <Box
            key={id}
            h="120px"
            w="120px"
            padding="10px"
            textAlign="center"
            boxSizing="border-box"
            borderRadius="10px"
            boxShadow="base"
          >
            <Icon
              boxSize="80px"
              bg={
                skill === "Illustrator"
                  ? "orange"
                  : skill === "AdobeXD"
                  ? "rgb(247,94,238)"
                  : ""
              }
              borderRadius="20px"
              viewBox="0 0 25 25"
            >
              {img}
            </Icon>

            <Heading fontSize="12px" fontWeight="semibold" alignItems="center">
              {skill}
            </Heading>
          </Box>
        );
      })}
    </Box>
  );
};

export default SkillBox;
