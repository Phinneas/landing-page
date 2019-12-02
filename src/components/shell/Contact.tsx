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
  SimpleGrid,
  List,
  ListItem
} from "@chakra-ui/core";
import DorgSocial from "./DorgSocial";

// import GitHubIcon from "../common/icons/GitHub";
// import DiscordIcon from "../common/icons/Discord";
// import dOrgIcon from "../../images/icons/dOrg.svg";

const Contact: React.FC = ({}) => {
  return (
    <>
      <SimpleGrid columns={[1, 1, 2, 2]} px="2rem" py="2rem">
        <Flex
          direction="column"
          minWidth="15em"
          p={"2rem"}
          justifyContent="center"
        >
          <Heading as="h4" fontSize="sm" mb="1rem">
            Tech Stack
          </Heading>

          <Text fontSize="lg" lineHeight="md">
            Being a web studio of the future, we keep up with the latest tech
            stack. At the moment, we prefer solidity and x on the back-end and
            react and node front end architecture.
          </Text>
        </Flex>
        <Flex direction="column" minWidth="15em" p={"2rem"} bg={"gray.100"}>
          <List fontSize="lg" spacing="1rem">
            <ListItem color={"gray.600"}>
              <b>dOrg in the news headline here right here. </b>November 15th,
              2019 on Reuters.org
            </ListItem>
            <ListItem color={"gray.400"}>
              <b>dOrg in the news headline here right here. </b>November 15th,
              2019 on Reuters.org
            </ListItem>
            <ListItem color={"gray.500"}>
              <b>dOrg in the news headline here right here. </b>November 15th,
              2019 on Reuters.org
            </ListItem>
            <ListItem color={"gray.300"}>
              <b>dOrg in the news headline here right here. </b>November 15th,
              2019 on Reuters.org
            </ListItem>
            <ListItem color={"gray.600"}>
              <b>dOrg in the news headline here right here. </b>November 15th,
              2019 on Reuters.org
            </ListItem>
          </List>
        </Flex>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2, 2]} pt="20vh" px="2rem" id="contact">
        <Flex direction="column" minWidth="15em" p={"0"}></Flex>
        <Flex direction="column" minWidth="15em" p={"2rem"} bg={"gray.100"}>
          <Text fontSize="lg">
            We like to schedule an hour long cosult with new clients to sases
            needs, decide what's possible, and iterate on an action plan.
          </Text>
          <Button bg={"blue.500"} mt="2vh" alignSelf="flex-end">
            Schedule a meeting
          </Button>
        </Flex>
      </SimpleGrid>

      <Flex
        pt={"5vh"}
        pb={"40vh"}
        minHeight="60vh"
        align="center"
        justify="space-around"
      >
        <Box maxW={960} flexGrow={1}>
          <Stack spacing={"2vh"} maxW={"40rem"} flexGrow={1}>
            <Heading fontSize="xl">Have a project?</Heading>
            <Input placeholder="Type your name" />
            <Input placeholder="Type your email address" />
            <Input placeholder="Organization you're representing" />
            <Textarea
              placeholder="Tell us a little about your project"
              minHeight="10rem"
            />
            <Button bg={"violet.500"} alignSelf="flex-end">
              Send message
            </Button>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
