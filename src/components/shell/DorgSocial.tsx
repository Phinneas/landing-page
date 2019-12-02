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
  useDisclosure,
  Image
} from "@chakra-ui/core";

import GitHubIcon from "../common/icons/GitHub";
import DiscordIcon from "../common/icons/Discord";
import dOrgIcon from "../../images/icons/dOrg.svg";

const DorgSocial: React.FC = ({ children }) => (
  <Flex justify="flex-end" direction="row" ml={4}>
    <Button width={0} bg="blue.300">
      <GitHubIcon />
    </Button>
    <Button ml={4} width={0} bg="blue.500">
      <DiscordIcon />
    </Button>
  </Flex>
);

export default DorgSocial;
