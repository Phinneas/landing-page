import * as React from "react";
import {
  Heading,
  Flex,
  Button,
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
import DorgMark from "../../images/Asset 17.svg";

const Pay: React.FC = ({}) => {
  return (
    <Flex
      width="100%"
      align="center"
      direction="column"
      minHeight={"500px"}
      px={["7vw"]}
      flexGrow={1}
      justifyContent="center"
    >
      <Image
        src={DorgMark}
        mb={["-.5rem"]}
        height={["4rem", "3.5rem", "4rem"]}
      />
      <Heading
        as="h1"
        fontSize={["1.5rem", "1.5rem", "2.6rem"]}
        mb="0"
        py={["4vh"]}
        textAlign="center"
        maxW={["20em"]}
        fontWeight={[400, 300]}
      >
        dOrg all forms of payment now
      </Heading>
    </Flex>
  );
};

export default Pay;
