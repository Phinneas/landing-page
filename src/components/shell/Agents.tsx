import * as React from "react";
import { Link, navigate, useStaticQuery, graphql } from "gatsby";

import {
  Heading,
  Stack,
  Flex,
  Grid,
  Image,
  Box,
  Button,
  SimpleGrid
} from "@chakra-ui/core";
import DorgSocial from "./DorgSocial";

// import GitHubIcon from "../common/icons/GitHub";
// import DiscordIcon from "../common/icons/Discord";
// import dOrgIcon from "../../images/icons/dOrg.svg";

const Agents: React.FC = ({}) => {
  const agents = [
    {
      name: "Nick",
      github: "nickplace"
    },
    {
      name: "Thomas",
      github: "tspoff"
    },
    {
      name: "Christian",
      github: "xiphiness"
    },
    {
      name: "Hector",
      github: "mrrobot16"
    },
    {
      name: "Cesar",
      github: "cbrzn"
    },
    {
      name: "Zak",
      github: "zakhap"
    },
    {
      name: "Bogdan",
      github: "bogdanbatog"
    },
    {
      name: "Jordan",
      github: "dOrgJelli"
    },
    {
      name: "Ori",
      github: "orishim"
    },
    {
      name: "Corkus",
      github: "stink3finger"
    },
    {
      name: "Veriledger",
      github: "veriledger"
    },
    {
      name: "Asgeir",
      github: "sogasg"
    },
    {
      name: "Shiv",
      github: "shivgupt"
    },
    {
      name: "Seth",
      github: "sethfork"
    },
    {
      name: "Eric",
      github: "arsena21"
    }
  ];

  return (
    <Box py={"15vh"}>
      <Flex align="center" justify="space-around">
        <Box px={["5vw", "10vw", "20vw"]} flexGrow={1}>
          <Heading as="h2" fontSize="sm" mb="2rem" id="agents">
            Meet dOrg
          </Heading>
        </Box>
      </Flex>

      <SimpleGrid columns={[2, 2, 4, 5]} gap={0} p="2.5vw" pt="0">
        {agents.map(element => {
          return (
            <Box w="100%" p="2.5vw" textAlign="center">
              <Image
                src={"https://github.com/" + element.github + ".png"}
                width="100%"
                borderRadius="50%"
                display="block"
              />
              <Heading as="h3" pt={"1rem"}>
                {element.name}
              </Heading>
              <Heading as="h4" fontSize="sm" color={"gray.500"}>
                <Link href={"https://github.com/" + element.github}>
                  {" "}
                  @{element.github}
                </Link>
              </Heading>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Agents;
