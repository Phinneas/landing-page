import * as React from "react";
import { navigate } from "gatsby";

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
  ListItem,
  Link
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
        <Flex direction="column" minWidth="15em" p={"2rem"}>
          <List fontSize="lg" spacing="1rem">
            <ListItem color={"gray.800"}>
              <Link href="https://www.coindesk.com/dorg-founders-have-created-the-first-limited-liability-dao">
                <Text color={"gray.400"} fontSize="xs">
                  June 11th, 2019 on Coindesk.org
                </Text>
                <Heading as="h4" fontSize="sm" mb="0">
                  dOrg Founders Have Created the First Limited Liability DAO
                </Heading>
              </Link>
            </ListItem>
            <ListItem color={"gray.800"}>
              <Link href="https://cointelegraph.com/news/dorg-llc-purports-to-be-first-legally-valid-dao-under-us-law">
                <Text color={"gray.400"} fontSize="xs">
                  June 12th, 2019 on Cointelegraph.org
                </Text>
                <Heading as="h4" fontSize="sm" mb="0">
                  DOrg LLC Purports to be First Legally Valid DAO Under US Law
                </Heading>
              </Link>
            </ListItem>
            <ListItem color={"gray.800"}>
              <Link href="https://blockchaindefender.io/the-first-dao-with-legal-status-in-the-us-by-dorg/">
                <Text color={"gray.400"} fontSize="xs">
                  June 12th, 2019 on Blockchaindefender.io
                </Text>
                <Heading as="h4" fontSize="sm" mb="0">
                  The First DAO with Legal Status in the US by dOrg
                </Heading>
              </Link>
            </ListItem>

            <ListItem color={"gray.800"}>
              <Link href="https://blockonomi.com/dorg-create-first-legally-registered-dao/">
                <Text color={"gray.400"} fontSize="xs">
                  June 15th, 2019 on Blockonomi.com
                </Text>
                <Heading as="h4" fontSize="sm" mb="0">
                  Blockchain Developers dOrg Create First Legally Registered DAO
                </Heading>
              </Link>
            </ListItem>
          </List>
        </Flex>
      </SimpleGrid>

      <SimpleGrid
        columns={[1, 1, 2, 2]}
        pt="20vh"
        px="2rem"
        id="contact"
        bg={"gray.100"}
      >
        <Flex direction="column" minWidth="15em" p={"0"}></Flex>
        <Flex direction="column" minWidth="15em" p={"2rem"}>
          <Text fontSize="lg">
            We like to schedule an hour long cosult with new clients to assess
            needs, decide what's possible and iterate on an action plan.
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
        bg={"gray.100"}
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
