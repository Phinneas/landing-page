import * as React from "react";

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
          className="moreButton"
          _hover={{ background: "transparent", color: "#1aaf71" }}
          _active={{ background: "transparent" }}
          as={Button}
          variant="invisible"
          rightIcon="chevron-down"
        >
          More
        </MenuButton>

        <MenuList backgroundColor="transparent">
          <MenuItem
            backgroundColor="transparent"
            _focus={{ background: "transparent" }}
            _active={{ background: "transparent" }}
            _hover={{ background: "transparent", color: "#1aaf71" }}
            onClick={() => navigate("/dao-creator")}
          >
            DAO Creator
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
        width={0}
        bg="transparent"
        ml=".25rem"
        onClick={() => windowShim.open("https://github.com/dOrgTech")}
        _hover={{ background: "transparent", color: "#1aaf71" }}
      >
        {/* <LineIcon name="github" size="sm" /> */}
      </Button>
      <Button
        width={0}
        bg="transparent"
        ml=".25rem"
        onClick={() => windowShim.open("https://twitter.com/dorg_tech")}
        _hover={{ background: "transparent", color: "#1aaf71" }}
      >
        {/* <LineIcon name="twitter" size="sm" /> */}
      </Button>
      <Button
        width={0}
        bg="transparent"
        ml=".25rem"
        onClick={() => windowShim.open("mailto:contact@dorg.tech")}
        _hover={{ background: "transparent", color: "#1aaf71" }}
      >
        {/* <LineIcon name="envelope" size="sm" /> */}
      </Button>
    </Flex>
  </Flex>
);

export default NavBar;
