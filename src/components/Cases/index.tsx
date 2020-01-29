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
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box
} from "@chakra-ui/core";
import Background from "../shell/Background";
import NavBar from "../shell/NavBar";

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
              word_mark {
                publicURL
              }
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
  const [tab, setTab] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [bg, setBg] = useState("#fffff");

  const autoPlayTimeout = setTimeout(() => {
    /*nextTab()*/
  }, 2500);

  function tabIndexChanged(i: number) {
    setTab(i);
    setBg(data.allMarkdownRemark.edges[i].node.frontmatter.bgcolor.slice(1));
  }

  function nextTab() {
    tabIndexChanged((tab + 1) % data.allMarkdownRemark.edges.length);
  }

  const handleTabsChange = index => {
    clearInterval(autoPlayTimeout);
    setAutoplay(false);
    tabIndexChanged(index);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      direction="column"
      // backgroundColor={"RGBA(82, 82, 80, .8)"}
      color="white"
      position="relative"
      w="100%"
      minH={["auto", "30vh"]}
      mt={["-7rem", "-8rem"]}
      id="cases"
    >
      <Heading
        as="h4"
        lineHeight="4rem"
        fontWeight="thin"
        fontSize="sm"
        mb="0"
        textAlign="center"
      >
        Selected Work
      </Heading>
      <Tabs
        tabIndex={tab}
        onChange={handleTabsChange}
        width="100%"
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
      >
        <Flex justifyContent="center" flexDirection="row" flexWrap="wrap">
          <TabList
            justifyContent="center"
            flexDirection="row"
            // flexWrap="wrap"
            // position="absolute"
            alignSelf="flex-start"
            // pl="5vw"
            px="1rem"
            border={0}
          >
            {data.allMarkdownRemark.edges.map(
              ({ node: { id, frontmatter } }: any) => {
                return (
                  <Tab
                    width="6rem"
                    height={["3rem", "4rem"]}
                    border={"0"}
                    px={".5rem"}
                    mb={"0"}
                    backgroundColor={frontmatter.bgcolor.substr(1)}
                  >
                    <Image
                      src={frontmatter.icon.publicURL}
                      style={{
                        width: "4rem",
                        height: "120%",
                        marginTop: "-5%"
                      }}
                    />
                  </Tab>
                );
              }
            )}
          </TabList>
        </Flex>

        <TabPanels transition="all .1s">
          {data.allMarkdownRemark.edges.map(
            ({ node: { id, frontmatter } }: any) => (
              <TabPanel>
                <CaseCard {...frontmatter} />
              </TabPanel>
            )
          )}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default CaseList;
