import * as React from "react";
import { navigate } from "gatsby";

import { Heading, Stack, Flex, Button, Link, Box } from "@chakra-ui/core";
import DorgSocial from "./DorgSocial";

// import GitHubIcon from "../common/icons/GitHub";
// import DiscordIcon from "../common/icons/Discord";
// import dOrgIcon from "../../images/icons/dOrg.svg";

const CallToActions: React.FC = ({}) => {
  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      mx="auto"
      background="RGB(62, 62, 64)"
      color="white"
    >
      {/* <Flex direction="column" bg={"gray.100"} minWidth={"50%"} flexGrow={1} p={"5vw"}>
        <Heading as="h2" fontSize="sm" p="1rem 0">
          Join us!
        </Heading>
        <Flex>
          <Button
            variantColor="orange"
            flexGrow={1}
            justifyContent={'flex-start'}
            rightIcon="arrow-down"
            mr={'0.5rem'}
            onClick={() => (location.hash = "#join")}
          >
            Fill out our agent form
          </Button>
          <DorgSocial />
        </Flex>
      </Flex> */}
      <Flex direction="column" minWidth={"50%"} flexGrow={1}>
        <Calendly />
      </Flex>
    </Flex>
  );
};

const Calendly = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src="https://calendly.com/nickjplace"
        width="100%"
        height="100%"
        frameborder="0"
        style={{ backgroundColor: "transparent" }}
      ></iframe>
    </div>
  );
};

export default CallToActions;
