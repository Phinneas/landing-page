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
  AccordionPanel
} from "@chakra-ui/core";

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

  return (
    <>
      <Heading as="h3" size="lg" mb={4}>
        Services we offer
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
                <p>{frontmatter.description}</p>
                <Button my={4}>Get in touch</Button>
              </AccordionPanel>
            </AccordionItem>
          )
        )}
      </Accordion>
    </>
  );
};
