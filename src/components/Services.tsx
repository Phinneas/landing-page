import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Heading,
  Tabs,
  TabList,
  Button,
  Tab,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Flex,
  Text,
  Box,
  Image
} from "@chakra-ui/core";
import r_d from "../images/icons/r_d.svg";
import smart from "../images/icons/smart.svg";
import support from "../images/icons/support.svg";

// eslint-disable-next-line

export const Services: React.FC = ({}) => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/services/" } }
        sort: { fields: frontmatter___order }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
            }
            html
          }
        }
      }
    }
  `);

  const icons = [support, smart, r_d];

  return (
    <>
      <Flex
        pt={"25vh"}
        pb={"15vh"}
        minHeight="60vh"
        align="center"
        justify="space-around"
        id="services"
      >
        <Box maxW={960} flexGrow={1}>
          <Heading as="h1" fontSize="sm" mb={"1rem"}>
            We exist to support an ecosystem
          </Heading>
          <Heading as="h2" fontSize="xl">
            We exist to support an ecosystem. We exist to support an ecosystem.
            We exist to support an ecosystem. We exist to support an ecosystem
          </Heading>
        </Box>
      </Flex>
      <Flex px="2rem">
        {data.allMarkdownRemark.edges.map(
          ({ node: { id, frontmatter } }: any) => (
            <Flex
              width="33.333333%"
              direction="column"
              pb="10vh"
              pt="18vh"
              pl="2rem"
            >
              <Image
                src={icons.pop()}
                height="15vh"
                alignSelf="flex-start"
                mb="15vh"
              />
              <Heading fontSize="sm" as="h1" mb={"1rem"}>
                {frontmatter.title}
              </Heading>
              <Text fontSize="lg">{frontmatter.description}</Text>
            </Flex>
          )
        )}
      </Flex>
    </>
  );
};
