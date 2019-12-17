import React from "react";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import LearnMore from "../components/LearnMore";
import Cases from "../components/Cases";
import { Manifesto } from "../components/Manifesto";
import { Services } from "../components/Services";
import SEO from "../components/Seo";
import DorgSocial from "../components/shell/DorgSocial";
import DorgMenu from "../components/shell/DorgMenu";
import CallToActions from "../components/shell/CallToActions";
import Contact from "../components/shell/Contact";
import Agents from "../components/shell/Agents";
import AgentForm from "../components/shell/AgentForm";
import Footer from "../components/shell/Footer";
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

const IndexPage: React.FC = ({}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Cases />
      {/* <CallToActions /> */}
      {/* <Services /> */}
      {/* <Contact /> */}
      {/* <Manifesto /> */}

      {/* <Agents /> */}
      {/* <AgentForm /> */}
      {/* <Footer /> */}
    </Layout>
  );
};

export default IndexPage;
