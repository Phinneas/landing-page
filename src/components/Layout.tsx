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
  theme,
  ColorModeProvider
} from "@chakra-ui/core";
import { stripe } from "../styles";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={{ ...theme, ...stripe }}>
      <ColorModeProvider value="dark">
        <CSSReset />
        <TopBar />
        <main>{children}</main>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default Layout;
