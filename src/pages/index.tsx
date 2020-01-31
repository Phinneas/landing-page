import React from "react";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import Cases from "../components/Cases";
import SEO from "../components/Seo";
import DorgMenu from "../components/shell/NavBar";
import CallToActions from "../components/shell/Hero";
import "../fonts/index.css";
import "../styles/style.css";

import {
  Heading,
  Button,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  FlexProps,
  Input,
  Avatar,
  Textarea,
  Grid,
  Image,
  Stack,
  Text
} from "@chakra-ui/core";
import Hero from "../components/shell/Hero";

const IndexPage: React.FC = ({}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Cases />
    </Layout>
  );
};

export default IndexPage;
