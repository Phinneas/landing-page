import * as React from "react";
import TwitterIcon from "react-icons/lib/io/social-twitter";
import GithubIcon from "react-icons/lib/fa/github-alt";
import EmailIcon from "react-icons/lib/io/android-mail";

import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon
} from "@chakra-ui/core";

// import LineIcon from "react-lineicons";
import { windowShim } from "../../util/windowShim";
import { navigate } from "gatsby";

const NavBar: React.FC = ({ children }) => (
  <Flex
    justify={["space-evenly", "space-around", "space-between"]}
    flexWrap={["wrap", "nowrap"]}
    direction="row"
    width="100%"
    align="end"
    pr={[0, "2rem"]}
    pl={[0, "1rem"]}
    py="1rem"
  >
    <Flex>
      {/* <Button
        variant="outline"
        onClick={() => windowShim.open("https://docs.dorg.tech", "_blank")}
      >
        Contribute
      </Button> */}
      <Menu>
        <MenuButton
          className="toolsButton"
          _hover={{ background: "transparent", color: "#1aaf71" }}
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
            _hover={{ background: "transparent", color: "#1aaf71" }}
            onClick={() =>
              windowShim.open("https://alchemy.daostack.io/daos/create")
            }
          >
            Cotary Create
            <Icon name="chevron-right" />
          </MenuItem>
          <MenuItem
            backgroundColor="transparent"
            _focus={{ background: "transparent" }}
            _active={{ background: "transparent" }}
            _hover={{ background: "transparent", color: "#1aaf71" }}
            onClick={() => windowShim.open("https://docs.dorg.tech")}
          >
            Docs
            <Icon name="chevron-right" />
          </MenuItem>
          <MenuItem
            backgroundColor="transparent"
            _focus={{ background: "transparent" }}
            _active={{ background: "transparent" }}
            _hover={{ background: "transparent", color: "#1aaf71" }}
            onClick={() =>
              windowShim.open("https://dorgtech.typeform.com/to/a1rMob")
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
        bg="transparent"
        onClick={() => windowShim.open("https://github.com/dOrgTech")}
        _hover={{ background: "transparent", color: "#1aaf71" }}
      >
        <GithubIcon size={20} />
      </Button>
      <Button
        bg="transparent"
        onClick={() => windowShim.open("https://twitter.com/dorg_tech")}
        _hover={{ background: "transparent", color: "#1aaf71" }}
      >
        <TwitterIcon size={20} />
      </Button>
      <Button
        bg="transparent"
        onClick={() => windowShim.open("mailto:contact@dorg.tech")}
        _hover={{ background: "transparent", color: "#1aaf71" }}
      >
        <EmailIcon size={20} />
      </Button>
    </Flex>
  </Flex>
);

export default NavBar;
