import * as React from "react";
import { Link, navigate } from "gatsby";

import {
  Heading,
  Stack,
  Flex,
  Button,
  Box,
  Input,
  Textarea,
  Text,
  SimpleGrid
} from "@chakra-ui/core";
import DorgSocial from "./DorgSocial";

// import GitHubIcon from "../common/icons/GitHub";
// import DiscordIcon from "../common/icons/Discord";
// import dOrgIcon from "../../images/icons/dOrg.svg";

const Contact: React.FC = ({}) => {
  return (
    <>
      <SimpleGrid columns={[1, 1, 2, 2]} px="2rem">
        <Flex direction="column" minWidth="15em" p={"2rem"}>
          <Heading as="h2" fontSize="sm" lineHeight="md">
            <b>Tech stack – </b> Being a web studio of the future, we keep up
            with the latest tech stack. At the moment, we prefer solidity and x
            on the back-end and react and node front end architecture.
          </Heading>
        </Flex>
        <Flex direction="column" minWidth="15em" p={"2rem"}>
          <Heading as="h2" fontSize="sm">
            <b>Social proof – </b>dOrg in the news: We've been working toward
            showing you that our social proof is easily transparent and
            viewable.
          </Heading>
        </Flex>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2, 2]} pt="20vh" px="2rem">
        <Flex direction="column" minWidth="15em" p={"0"}></Flex>
        <Flex direction="column" minWidth="15em" p={"2rem"}>
          <Heading as="h2" size="sm">
            We like to schedule an hour long cosult with new clients to sases
            needs, decide what's possible, and iterate on an action plan.
          </Heading>
        </Flex>
      </SimpleGrid>

      <Flex
        pt={"0"}
        pb={"40vh"}
        minHeight="60vh"
        align="center"
        justify="space-around"
      >
        <Box maxW={960} flexGrow={1}>
          <Stack spacing={"2vh"} maxW={"40rem"} flexGrow={1}>
            <Heading as="h2" fontSize="xl">
              Have a project?
            </Heading>
            <Button bg={"blue.500"}>Schedule a meeting</Button>
            <Text>or</Text>
            <Input bg={"gray.600"} placeholder="Type your email address" />
            <Textarea bg={"gray.600"} placeholder="Type your message here" />
            <Button bg={"green.300"}>Submit</Button>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
