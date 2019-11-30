import * as React from "react";
import { Link, navigate } from "gatsby";

import { Heading, Stack, Flex, Button } from "@chakra-ui/core";
import DorgSocial from "./DorgSocial";

// import GitHubIcon from "../common/icons/GitHub";
// import DiscordIcon from "../common/icons/Discord";
// import dOrgIcon from "../../images/icons/dOrg.svg";

const CallToActions: React.FC = ({}) => {
  return (
    <Flex flexDirection="row" flexWrap="wrap">
      <Flex direction="column" bg={"gray.600"} minWidth={"50%"} p={"1rem"}>
        <Heading as="h2" fontSize="sm" mb="1rem">
          Join us!
        </Heading>
        <Flex>
          <Button bg="gray.800" size="lg" flexGrow={1}>
            Fill out our agent form
          </Button>
          <DorgSocial />
        </Flex>
      </Flex>
      <Flex direction="column" minWidth={"50%"} p={"1rem"}>
        <Heading as="h2" fontSize="sm" mb="1rem">
          Have a project?
        </Heading>
        <Button bg="green.300" size="lg">
          Get in touch
        </Button>
      </Flex>
    </Flex>
  );
};

export default CallToActions;
