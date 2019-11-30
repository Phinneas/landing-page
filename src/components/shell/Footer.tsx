import * as React from "react";
import { Link, navigate } from "gatsby";

import {
  Heading,
  Stack,
  Flex,
  Button,
  Input,
  Textarea,
  Box
} from "@chakra-ui/core";
import DorgSocial from "./DorgSocial";
import DorgMenu from "./DorgMenu";

// import GitHubIcon from "../common/icons/GitHub";
// import DiscordIcon from "../common/icons/Discord";
// import dOrgIcon from "../../images/icons/dOrg.svg";

const Footer: React.FC = ({}) => {
  return (
    <>
      <Flex
        py={"30vh"}
        minHeight="60vh"
        align="center"
        justify="space-around"
        id="join"
      >
        <Box maxW={960} flexGrow={1}>
          <DorgMenu />
          <DorgSocial />
          <Heading as="h4" fontSize="sm" textAlign="right" mt={".5rem"}>
            Copyright dOrg 2019
          </Heading>
        </Box>
      </Flex>
    </>
  );
};

export default Footer;
