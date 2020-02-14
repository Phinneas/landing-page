import React from "react";
// import theme from "../style/theme";
import {
  CSSReset,
  Flex,
  Box,
  DefaultTheme,
  ThemeProvider,
  theme,
  ColorModeProvider
} from "@chakra-ui/core";
import { stripe } from "../styles";
import NavBar from "./shell/NavBar";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={{ ...theme, ...stripe }}>
      <CSSReset />
      <Box as={"main"}>
        <Flex
          direction="column"
          align="space-around"
          minH={["100vh"]}
          color="white"
          position="relative"
          w="100%"
          background={"radial-gradient( #004346, #004346, #172A3A);"}
        >
          <NavBar />
          {children}
        </Flex>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
