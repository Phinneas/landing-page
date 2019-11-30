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

// import GitHubIcon from "../common/icons/GitHub";
// import DiscordIcon from "../common/icons/Discord";
// import dOrgIcon from "../../images/icons/dOrg.svg";

const AgentForm: React.FC = ({}) => {
  return (
    <>
      <Flex
        py={"20vh"}
        minHeight="60vh"
        align="center"
        justify="space-around"
        id="join"
      >
        <Box maxW={960} flexGrow={1}>
          <Stack spacing={"2vh"} maxW={"40rem"} flexGrow={1}>
            <Heading as="h2" fontSize="xl">
              Interested Agent?
            </Heading>
            <Input placeholder="Type your email address" />
            <Textarea placeholder="Tell us about yourself" />
            <Button bg="blue.500">Submit</Button>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default AgentForm;
