import React from "react";
// import theme from "../style/theme";
// import Background from "./shell/Background";
import { TopBar } from "./shell/TopBar";
import {
  CSSReset,
  Flex,
  Box,
  DefaultTheme,
  ThemeProvider,
  theme
} from "@chakra-ui/core";
import { stripe } from "../styles";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={{ ...theme, ...stripe }}>
      <CSSReset />
      <TopBar />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
