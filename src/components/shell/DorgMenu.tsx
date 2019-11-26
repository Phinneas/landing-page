import * as React from "react";
import { Link, navigate } from "gatsby";

import {
  Heading,
  Stack,
  Flex,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  Button,
  Input,
  useDisclosure
} from "@chakra-ui/core";

// import GitHubIcon from "../common/icons/GitHub";
// import DiscordIcon from "../common/icons/Discord";
// import dOrgIcon from "../../images/icons/dOrg.svg";

const DorgMenu: React.FC = ({}) => {
  return (
    <Stack spacing={3}>
      <Heading as="h1">
        <Link to="contact">Get in touch</Link>
      </Heading>
      <Heading as="h1" onClick={e => navigate("#services")}>
        Our services
      </Heading>
      <Heading as="h1">
        <Link to="#cases">Cases</Link>
      </Heading>
      <Heading as="h1">
        <Link to="org">Meet dOrg</Link>
      </Heading>
      <Heading as="h1">
        <Link to="join">Join us</Link>
      </Heading>
    </Stack>
  );
};

export default DorgMenu;
