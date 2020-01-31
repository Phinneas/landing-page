import React from "react";
// import theme from "../style/theme";
import { TopBar } from "./shell/TopBar";
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

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={{ ...theme, ...stripe }}>
      <CSSReset />
      <Box as={"main"} backgroundColor={"#4D3466"}>
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
