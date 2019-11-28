import React, { useState } from "react";
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
  Flex,
  Box
} from "@chakra-ui/core";

// eslint-disable-next-line

export interface CaseState {
  sectionBg: string;
  tabIndex: number;
}

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

  const [casesState, setCasesState] = useState<CaseState>({
    sectionBg: data.allMarkdownRemark.edges[0].node.frontmatter.bgcolor.slice(
      1
    ),
    tabIndex: 0
  });

  function tabIndexChanged(i: number) {
    setCasesState({
      sectionBg: data.allMarkdownRemark.edges[i].node.frontmatter.bgcolor.slice(
        1
      ),
      tabIndex: i
    });
  }
  function nextTab(i: number) {
    tabIndexChanged(
      (casesState.tabIndex + 1) % data.allMarkdownRemark.edges.length
    );
  }
  const handleTabsChange = index => {
    tabIndexChanged(index);
  };

  return (
    <Flex
      direction="column"
      backgroundColor={casesState.sectionBg}
      align="center"
      height="100vh"
      justify="center"
      id="cases"
      color="white"
    >
      <Heading as="h3" size="sm" textAlign="center">
        Cases
      </Heading>

      <Tabs index={casesState.tabIndex} onChange={handleTabsChange}>
        <Flex justifyContent={"space-around"}>
          <TabPanels>
            {data.allMarkdownRemark.edges.map(
              ({ node: { id, frontmatter } }: any) => (
                <TabPanel maxWidth={"30em"}>
                  <CaseCard {...frontmatter} />
                </TabPanel>
              )
            )}
          </TabPanels>
        </Flex>

        <TabList
          justifyContent="space-evenly"
          flexDirection="row"
          flexWrap="wrap"
          alignSelf="flex-end"
          border={0}
        >
          {data.allMarkdownRemark.edges.map(
            ({ node: { id, frontmatter } }: any) => {
              return (
                <Tab background={frontmatter.bgcolor} border={0}>
                  <Image
                    src={frontmatter.icon.publicURL}
                    maxHeight={"9vh"}
                    maxWidth={"9vh"}
                  />
                </Tab>
              );
            }
          )}
        </TabList>
      </Tabs>
    </Flex>
  );
};

export default CaseList;
