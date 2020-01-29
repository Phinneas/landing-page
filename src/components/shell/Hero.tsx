import * as React from "react";
import { navigate } from "gatsby";

import {
  Heading,
  Stack,
  Flex,
  Button,
  Link,
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure
} from "@chakra-ui/core";
import NavBar from "./NavBar";
import DorgMark from "../../images/mark_o.svg";

const Hero: React.FC = ({}) => {
  return (
    <Flex
      direction="column"
      align="start"
      minH={["100vh"]}
      color="white"
      position="relative"
      w="100%"
      pb={["18vh", "12vh"]}
    >
      <NavBar />

      <Flex
        width="100%"
        align="center"
        direction="column"
        px={["7vw"]}
        flexGrow={1}
        justifyContent="center"
      >
        <Image src={DorgMark} height={["6rem", "6rem", "7.5rem"]} />

        <Heading
          as="h4"
          fontSize="sm"
          mb="0"
          py={["3vh", "5vh"]}
          textAlign="center"
        >
          dOrg designs and develops web3 projects of all sizes
        </Heading>
        <SchedulingModal />
      </Flex>
    </Flex>
  );
};

function SchedulingModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex wrap="wrap" justify="center" width="100%">
        <Button
          size="md"
          onClick={onOpen}
          background={"#4EA68A"}
          height={"3.5rem"}
          px="2rem"
          fontWeight={600}
          _hover={{ background: "rgba(12,7,5,1)" }}
        >
          Schedule a meeting
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent
          background={"#333"}
          color={"#fff"}
          position="absolute"
          right={0}
        >
          <ModalHeader
            fontSize="1em"
            as="h4"
            alignText="center"
            fontWeight={600}
          >
            Schedule a meeting
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box height="21rem" maxWidth="40rem">
              <iframe
                src="https://calendar.zoho.com/eventreqForm/248bc02ab8c914cb0eaff6558b63228e0305963999e2bb69efb226b576781b60529328fa0c809bf34e53d59319ef7221?theme=0&l=en&tz=America%2FNew_York"
                frameborder="0"
                width="100%"
                height="100%"
                style={{ backgroundColor: "transparent" }}
              ></iframe>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Hero;
