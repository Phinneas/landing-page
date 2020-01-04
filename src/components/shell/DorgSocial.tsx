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
  <Flex
    justify="space-between"
    direction="row"
    width="100%"
    align="end"
    px="1rem"
    py="1rem"
    position="absolute"
  >
    <Flex>
      <Button
        variant="outline"
        onClick={() => window.open("https://docs.dorg.tech", "_blank")}
      >
        Docs
      </Button>
      <Button variant="outline" ml="-1px">
        DAO Creator
      </Button>
    </Flex>
    <Flex>
      <Button
        width={0}
        bg="transparent"
        ml=".5rem"
        onClick={() => window.open("https://github.com/dOrgTech", "_blank")}
      >
        <LineIcon name="github" size="sm" />
      </Button>
      <Button
        width={0}
        bg="transparent"
        ml=".5rem"
        onClick={() => (window.open("mailto:contact@dorg.tech"), "_blank")}
      >
        <LineIcon name="envelope" size="sm" />
      </Button>
      <Button
        width={0}
        bg="transparent"
        ml=".5rem"
        onClick={() => (window.open("https://twitter.com/dorg_tech"), "_blank")}
      >
        <LineIcon name="twitter" size="sm" />
      </Button>
    </Flex>
  </Flex>
);

export default DorgSocial;
