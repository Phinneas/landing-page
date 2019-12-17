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

import LineIcon from "react-lineicons";

const DorgSocial: React.FC = ({ children }) => (
  <Flex justify="flex-end" direction="row">
    <Button
      width={0}
      bg="transparent"
      onClick={() => (location.href = "https://github.com/dOrgTech")}
    >
      <LineIcon name="github" size="sm" />
    </Button>
    <Button
      width={0}
      bg="transparent"
      onClick={() => (location.href = "https://discord.gg/gywPHyW")}
    >
      <DiscordIcon />
    </Button>
    <Button
      width={0}
      bg="transparent"
      onClick={() => (location.href = "https://twitter.com/dorg_tech")}
    >
      <LineIcon name="twitter" size="sm" />
    </Button>
  </Flex>
);

export default DorgSocial;
