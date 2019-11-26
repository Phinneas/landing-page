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
  Text
} from "@chakra-ui/core";
import DorgSocial from "../components/shell/DorgSocial";
import DorgMenu from "../components/shell/DorgMenu";
import styled from "@emotion/styled";

const OrgPage: React.FC = ({}) => {
  return (
    <Layout>
      <SEO title="Contact dOrg" />

      <Flex minHeight="70vh" align="center" justifyContent={"space-around"}>
        <Box maxW={960} px={4}>
          <Heading as="h2">
            We work with clients of all shapes and sizes.
          </Heading>
          <Button mt={6}>Join our Discord</Button>
          <Button mt={6} color="clear">
            Join our Discord
          </Button>
          <Button mt={6}>Tell us about your project</Button>
        </Box>
      </Flex>
    </Layout>
  );
};

export default OrgPage;
