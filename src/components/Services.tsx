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
  Image,
  SimpleGrid
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
        px={["5vw", "10vw", "20vw"]}
        py="25vh"
        minHeight="60vh"
        id="services"
        justify="center"
      >
        <Box flexGrow={1}>
          <Heading as="h1" fontSize="sm" mb={"1rem"}>
            Who are we?
          </Heading>
          <Heading as="h2" fontSize="xl" textAlign="left">
            dOrg is a freelancer cooperative of devOps, designers and developers
            committed to enhancing the means of coordination 👾.
          </Heading>
        </Box>
      </Flex>
      <Flex justifyContent="space-around" pt="25vh" pb="5vw" bg={"gray.100"}>
        <Heading
          as="h1"
          px={["5vw", "10vw", "20vw"]}
          flexGrow={1}
          fontSize="lg"
          textAlign="left"
        >
          Services
        </Heading>
      </Flex>

      <SimpleGrid columns={[1, 1, 1, 3]} px="2.5vw" bg={"gray.100"}>
        {data.allMarkdownRemark.edges.map(
          ({ node: { id, frontmatter } }: any) => (
            <Box pt="1rem" pb="25vh" px="2.5vw" textAlign="center">
              <Heading fontSize="sm" as="h1" mb={"10vh"} textAlign="left">
                {frontmatter.title}
              </Heading>

              <Image
                src={icons.pop()}
                height="15vh"
                mb="10vh"
                opacity={0.9}
                display="inline-block"
              />
              <Text textAlign="left">{frontmatter.description}</Text>
            </Box>
          )
        )}
      </SimpleGrid>
    </>
  );
};
