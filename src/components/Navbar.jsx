import React from "react";
import {
  Container,
  Box,
  Heading,
  Link,
  IconButton,
  useDisclosure,
  VStack,
  Spacer,
  Button,
  Divider,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Statistics",
    "Contacts",
  ];
  const onClickhandler = () => {
    return window.open(
      "https://drive.google.com/file/d/1mp9pHHSYGICZnQi8MncxAKVCE90DR6ZR/view?usp=share_link",
      "_blank"
    );
  };
  return (
    <Container
      h="80px"
      marginBottom="50px"
      pos="fixed"
      zIndex="2"
      padding="20px"
      maxW="100%"
      display="flex"
      justifyContent="space-between"
      bg="brand"
      borderRadius="20px"
      color="black"
      shadow="base"
    >
      <Box
        as={ScrollLink}
        to="Home"
        spy={true}
        smooth={true}
        offset={-80}
        duration={400}
      >
        <Heading marginTop={0} fontFamily="cursive" size="lg">
          MFahiz
        </Heading>
      </Box>
      <Spacer />
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
              p="5px"
              m="auto"
              cursor="pointer"
              w="100px"
              _hover={{ bg: "lightGreen", borderRadius: "10px" }}
            >
              {navlink}
            </Link>
          );
        })}
      </Box>
      <Link>
        <Button
          display={["none", "none", "flex", "flex", "flex"]}
          borderRadius=".8rem"
          size={["sm", "md"]}
          margin="auto"
          as={Link}
          target="_blank"
          bg="brand_secondary"
          color="brand"
          _hover={{ bg: "balck", color: "green.600" }}
          href="/Muhammed_Fahiz_Resume.pdf"
          download={true}
          onClick={onClickhandler}
        >
          <DownloadIcon marginRight="5px" />
          Resume
        </Button>
      </Link>
      <Box>
        <IconButton
          float="right"
          variant="outline"
          colorScheme="black"
          {...buttonProps}
          display={["flex", "flex", "none", "none", "none"]}
        >
          <HamburgerIcon />
        </IconButton>
        <VStack
          marginTop="40px"
          {...disclosureProps}
          bg="brand_secondary"
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
                width="100%"
                color="brand"
                borderRadius="5px"
                to={navlink}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                cursor="pointer"
              >
                {navlink}
                <Divider />
              </Link>
            );
          })}
          <Button
            margin="auto"
            as={Link}
            target="_blank"
            variant="outline"
            color="brand"
            border="1px"
            borderRadius="10px"
            href="/Muhammed_Fahiz_Resume.pdf"
            download={true}
            onClick={onClickhandler}
          >
            <DownloadIcon marginRight="5px" />
            Resume
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Navbar;
