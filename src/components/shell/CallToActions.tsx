import * as React from "react";
import { navigate } from "gatsby";

import { Heading, Stack, Flex, Button, Link } from "@chakra-ui/core";
import DorgSocial from "./DorgSocial";

// import GitHubIcon from "../common/icons/GitHub";
// import DiscordIcon from "../common/icons/Discord";
// import dOrgIcon from "../../images/icons/dOrg.svg";

const CallToActions: React.FC = ({}) => {
  return (
    <Flex flexDirection="row" flexWrap="wrap">
      <Flex direction="column" bg={"gray.100"} minWidth={"50%"} p={"1rem"}>
        <Heading as="h2" fontSize="sm" mb="1rem">
          Join us!
        </Heading>
        <Flex>
          <Button
            bg="gray.200"
            flexGrow={1}
            onClick={() => (location.hash = "#join")}
          >
            Fill out our agent form
          </Button>
          <DorgSocial />
        </Flex>
      </Flex>
      <Flex direction="column" minWidth={"50%"} p={"1rem"}>
        <Heading as="h2" fontSize="sm" mb="1rem">
          Have a project?
        </Heading>
        <Button
          bg="green.300"
          flexGrow={1}
          onClick={() => (location.hash = "#contact")}
        >
          Get in touch
        </Button>
      </Flex>
    </Flex>
  );
};

export default CallToActions;
