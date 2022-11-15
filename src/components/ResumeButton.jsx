import { DownloadIcon } from "@chakra-ui/icons";
import { Container, Text, Button, Link } from "@chakra-ui/react";
import React from "react";

const ResumeButton = () => {

  const onClickhandler = () => {
    return window.open(
      "https://drive.google.com/file/d/1mp9pHHSYGICZnQi8MncxAKVCE90DR6ZR/view?usp=share_link",
      "_blank"
    );
  };

  return (
      <Container
        transform="rotate(45deg)"
        borderRadius={['1em',"2rem"]}
        height={["100px","200px"]}
        width={["100px","200px"]}
        bg="brand "
        p="0px"
        mt={['0px','-10px']}
        ml={['10px','50px','100px','200px','200px']}
        _hover={{boxShadow:'5px 5px 20px #79d392'}}

      >
        <Container
          transform="rotate(-45deg)"
          height={["100px","200px"]}
        width={["100px","200px"]}
          py={['25px',"25px"]}
          ml={['0px','0px']}
        >
          <Text fontSize={['.6em',"1.2em"]}fontWeight='semibold' >
            Download my Resume here
          </Text>
          <Button
            borderRadius={['.5em',".8rem"]}
            height={['2em','2em']}
            width={['6em','6em']}
            margin="auto"
            as={Link}
            target="_blank"
            href="/Muhammed_Fahiz_Resume.pdf"
          download={true}
          onClick={onClickhandler}
            bg="brand_secondary"
            fontSize={['.5em','1.5em']}
            color='brand'
            _hover={{bg:'balck' , color:'green.600'}}
          >
            <DownloadIcon marginRight='5px'   />
              Resume
          </Button>
        </Container>
      </Container>
  );
};

export default ResumeButton;
