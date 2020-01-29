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
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon
} from "@chakra-ui/core";

import GitHubIcon from "../common/icons/GitHub";
import DiscordIcon from "../common/icons/Discord";
import dOrgIcon from "../../images/icons/dOrg.svg";

import LineIcon from "react-lineicons";

const DorgSocial: React.FC = ({ children }) => (
  <Flex
    justify={["space-around", "space-around", "space-between"]}
    flexWrap={["wrap", "nowrap"]}
    direction="row"
    width="100%"
    align="end"
    px={[0, "1rem"]}
    py="1rem"
  >
    <Flex>
      {/* <Button
        variant="outline"
        onClick={() => window.open("https://docs.dorg.tech", "_blank")}
      >
        Contribute
      </Button> */}
      <Menu>
        <MenuButton
          className="toolsButton"
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent" }}
          as={Button}
          variant="invisible"
          rightIcon="chevron-down"
        >
          Tools
        </MenuButton>
        <MenuList backgroundColor="transparent">
          <MenuItem
            backgroundColor="transparent"
            _focus={{ background: "transparent" }}
            _active={{ background: "transparent" }}
            _hover={{ background: "transparent" }}
            onClick={() => window.open("")}
          >
            Cotary Create
            <Icon name="chevron-right" />
          </MenuItem>
          <MenuItem
            backgroundColor="transparent"
            _focus={{ background: "transparent" }}
            _active={{ background: "transparent" }}
            _hover={{ background: "transparent" }}
            onClick={() => window.open("https://docs.dorg.tech")}
          >
            Docs
            <Icon name="chevron-right" />
          </MenuItem>
          <MenuItem
            backgroundColor="transparent"
            _focus={{ background: "transparent" }}
            _active={{ background: "transparent" }}
            _hover={{ background: "transparent" }}
            onClick={() =>
              window.open("https://dorgtech.typeform.com/to/a1rMob")
            }
          >
            Join us
            <Icon name="chevron-right" />
          </MenuItem>
        </MenuList>
      </Menu>
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
