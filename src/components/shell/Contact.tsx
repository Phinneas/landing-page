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
    <Box>
      {/* <SimpleGrid columns={[1, 1, 2, 2]} px="2.5vw" py="25vh">
        <Flex
          direction="column"
          minWidth="15em"
          p={"2.5vw"}
          justifyContent="center"
        >
          <Heading as="h4" fontSize="sm" mb="1rem">
            Tech Stack
            </Heading>

          <Text lineHeight="md">
            Being a web studio of the future, we keep up with the latest tech
            stack. At the moment, we prefer solidity and x on the back-end and
            react and node front end architecture.
            </Text>
        </Flex>
        <Flex direction="column" minWidth="15em" p={"2.5vw"}>
          <Heading as="h4" fontSize="sm" mb="1rem">
            Press
            </Heading>

          <List spacing="1rem" >
            <ListItem color={"gray.800"}>
              <Link href="https://www.coindesk.com/dorg-founders-have-created-the-first-limited-liability-dao">
                <Text color={"gray.400"} fontSize="sm" mb="0" >
                  June 11th, 2019 on Coindesk.org
                  </Text>
                <Text as="h4" mb="0" textAlign="left">
                  dOrg Founders Have Created the First Limited Liability DAO
                  </Text>
              </Link>
            </ListItem>
            <ListItem color={"gray.800"}>
              <Link href="https://cointelegraph.com/news/dorg-llc-purports-to-be-first-legally-valid-dao-under-us-law">
                <Text color={"gray.400"} fontSize="sm" mb="0" >
                  June 12th, 2019 on Cointelegraph.org
                  </Text>
                <Text as="h4" mb="0" textAlign="left">
                  DOrg LLC Purports to be First Legally Valid DAO Under US Law
                  </Text>
              </Link>
            </ListItem>
            <ListItem color={"gray.800"}>
              <Link href="https://blockchaindefender.io/the-first-dao-with-legal-status-in-the-us-by-dorg/">
                <Text color={"gray.400"} fontSize="sm" mb="0">
                  June 12th, 2019 on Blockchaindefender.io
                  </Text>
                <Text as="h4" mb="0" textAlign="left">
                  The First DAO with Legal Status in the US by dOrg
                  </Text>
              </Link>
            </ListItem>

            <ListItem color={"gray.800"}>
              <Link href="https://blockonomi.com/dorg-create-first-legally-registered-dao/">
                <Text color={"gray.400"} fontSize="sm" mb="0" >
                  June 15th, 2019 on Blockonomi.com
                  </Text>
                <Text as="h4" mb="0" textAlign="left">
                  Blockchain Developers dOrg Create First Legally Registered DAO
                  </Text>
              </Link>
            </ListItem>
          </List>
        </Flex>
      </SimpleGrid> */}

      <SimpleGrid columns={[1, 1, 2, 2]} pt="20vh" px="2.5vw" id="contact">
        <Flex direction="column" minWidth="15em" p={"2.5vw"}></Flex>
        <Flex direction="column" minWidth="15em" p={"2.5vw"}>
          {/* <Heading as="h4" fontSize="sm" mb="1rem">
            The earth is flat.
            </Heading>

          <Text textAlign="left">
            Booking an hour-long cosult or a 30-minute long chat will help us get to know eachother, scope out requirements and estimate what's possible in your timeframe.
            </Text>
          <Button variantColor="purple" mt="2vh" alignSelf="flex-start" rightIcon="calendar"
          >
            Schedule a meeting
            </Button> */}
        </Flex>
      </SimpleGrid>

      <Flex
        pt={"5vh"}
        minHeight="60vh"
        align="center"
        pb={"25vh"}
        justify="space-around"
      >
        <Box px={["5vw", "5vw", "20vw"]} flexGrow={1}>
          <Stack spacing={"1rem"} flexGrow={1}>
            <Heading fontSize="xl">Have a project?</Heading>
            <Input placeholder="Type your name" />
            <Input placeholder="Type your email address" />
            <Input placeholder="Organization you're representing" />
            <Textarea
              placeholder="Tell us a little about your project"
              minHeight="10rem"
            />
            <Button
              variantColor="orange"
              alignSelf="flex-end"
              rightIcon="arrow-forward"
            >
              Send message
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
