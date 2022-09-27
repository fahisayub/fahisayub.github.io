import { Box, Icon, Text } from '@chakra-ui/react';
import React from 'react';

const ProjectStack = ({techStack}) => {
    return (
        <Box
          display="grid"
          w='200px'
          m='auto'
          gridTemplateColumns={[
            "repeat(3,1fr)",
            "repeat(3,1fr)",
            "repeat(3,1fr)",
            "repeat(3,1fr)",
            "repeat(3,1fr)",
          ]}
          gap="10px"
        >
            
          {techStack?.map(({id,img,skill}) => {
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
    );
};

export default ProjectStack;