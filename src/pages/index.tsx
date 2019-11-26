import React from "react";
import Layout from "../components/Layout";
import LearnMore from "../components/LearnMore";
import Cases from "../components/Cases";
import { Manifesto } from "../components/Manifesto";
import { Services } from "../components/Services";
import SEO from "../components/Seo";
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
  FlexProps
} from "@chakra-ui/core";
import DorgSocial from "../components/shell/DorgSocial";
import DorgMenu from "../components/shell/DorgMenu";
import styled from "@emotion/styled";

const IndexPage: React.FC = ({}) => {
  const LandingSection: React.FC<FlexProps> = ({ children }) => {
    return (
      <Flex minHeight="100vh" align="center" justify="space-around">
        <Box maxW={960} px={4} flexGrow={1}>
          {children}
        </Box>
      </Flex>
    );
  };

  return (
    <Layout>
      <SEO title="Home" />

      <Flex minHeight="70vh" align="center" justifyContent={"space-around"}>
        <Box maxW={960} px={4}>
          <Heading as="h2">
            A Web3 co-op that designs, develops & maintains projects of all
            sizes.
          </Heading>
          <Button mt={6}>Get in touch</Button>
        </Box>
      </Flex>

      <LandingSection id="cases">
        <Cases />
      </LandingSection>

      <LandingSection>
        <Services />
      </LandingSection>

      <LandingSection>
        <Manifesto />
      </LandingSection>

      <LandingSection>
        <DorgMenu />
        <DorgSocial />
      </LandingSection>
    </Layout>
  );
};

export default IndexPage;
