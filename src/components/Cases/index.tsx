import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CaseCard from "./CaseCard";
import {
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  Flex
} from "@chakra-ui/core";

// eslint-disable-next-line

const CaseList: React.FC = ({}) => {
  const data = useStaticQuery(graphql`
    query CasesQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/cases/" } }
        sort: { fields: frontmatter___order }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              github
              description
              test
              excerpt
              spec
              article
              bgcolor
              icon {
                publicURL
              }
            }
            html
          }
        }
      }
    }
  `);

  return (
    <>
      <Heading as="h3" size="lg" textAlign="center" mb={4}>
        Cases
      </Heading>
      <Tabs>
        <TabList
          justifyContent="space-around"
          flexDirection="row"
          flexWrap="wrap"
        >
          {data.allMarkdownRemark.edges.map(
            ({ node: { id, frontmatter } }: any) => (
              <Tab background={frontmatter.bgcolor}>
                <Image
                  src={frontmatter.icon.publicURL}
                  maxHeight={20}
                  maxWidth={20}
                />
              </Tab>
            )
          )}
        </TabList>

        <TabPanels>
          {data.allMarkdownRemark.edges.map(
            ({ node: { id, frontmatter } }: any) => (
              <TabPanel>
                <CaseCard {...frontmatter} />
              </TabPanel>
            )
          )}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default CaseList;
