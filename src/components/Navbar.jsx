import React from "react";
import {
  Container,
  Box,
  Heading,
  Link,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  const links = ["About me", "Skills", "Projects", "Contacts"];

  return (
    <Container
      h="60px"
      pos="fixed"
      zIndex="1"
      marginBottom="50px"
      padding="20px"
      maxW="100%"
      display="flex"
      justifyContent="space-between"
      bg="black"
      color="white"
    >
      <Box
        as={ScrollLink}
        to="Intro"
        spy={true}
        smooth={true}
        offset={-80}
        duration={400}
      >
        <Heading marginTop={0} fontFamily="cursive" size="lg">
          MFahiz
        </Heading>
      </Box>
      <Box
        display={["none", "none", "flex", "flex", "flex"]}
        w="50%"
        justifyContent="space-evenly"
      >
        {links.map((navlink, i) => {
          return (
            <Link
              as={ScrollLink}
              key={i}
              to={navlink}
              spy={true}
              smooth={true}
              offset={-80}
              duration={400}
              cursor="pointer"
            >
              {navlink}
            </Link>
          );
        })}
      </Box>
      <Box >
        
        <IconButton
        float='right'
          variant="outline"
          _hover={{bg:'gray.700'}}
          {...buttonProps}
          display={["flex", "flex", "none", "none", "none"]}
        >
          <HamburgerIcon />
        </IconButton>
        <VStack
        marginTop='40px'
          {...disclosureProps}
          bg="black"
          padding="5px"
          borderRadius="5px"
          display={["flex", "flex", "none", "none", "none"]}
        >
          {links.map((navlink, i) => {
            return (
              <Link
                as={ScrollLink}
                key={i}
                {...buttonProps}
                borderBottom="1px solid grey"
                _hover={{border:"3px solid gray"}}
                padding="5px"
                width='100%'
                borderRadius="5px"
                to={navlink}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                {navlink}
              </Link>
            );
          })}
        </VStack>
      </Box>
    </Container>
  );
};

export default Navbar;
