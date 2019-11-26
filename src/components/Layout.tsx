import React from "react";
// import theme from "../style/theme";
// import Background from "./shell/Background";
import { TopBar } from "./shell/TopBar";
import {
  CSSReset,
  Flex,
  Box,
  DefaultTheme,
  ThemeProvider
} from "@chakra-ui/core";
// import theme from '../styles'

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <TopBar />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
