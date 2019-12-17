import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Heading,
  Tabs,
  TabList,
  Button,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
  Text,
  Flex,
  Box
} from "@chakra-ui/core";

// eslint-disable-next-line

export const Manifesto: React.FC = ({}) => {
  const data = useStaticQuery(graphql`
    query ManifestoQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/manifesto/" } }
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

  return (
    <Flex py={"25vh"} minHeight="60vh" align="center" justify="space-around">
      <Box px={["5vw", "10vw", "20vw"]} flexGrow={1}>
        <Heading as="h3" fontSize="sm" mb={4}>
          Our Principles
        </Heading>
        <Accordion>
          {data.allMarkdownRemark.edges.map(
            ({ node: { id, frontmatter } }: any) => (
              <AccordionItem>
                <AccordionHeader px={0}>
                  <Heading as="h3" textAlign="left">
                    {frontmatter.title}
                  </Heading>
                </AccordionHeader>
                <AccordionPanel pb={0} px={0}>
                  <Text mb="1rem" textAlign="left">
                    {frontmatter.description}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            )
          )}
        </Accordion>
      </Box>
    </Flex>
  );
};
