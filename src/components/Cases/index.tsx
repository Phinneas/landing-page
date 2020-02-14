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
  Box,
  Icon
} from "@chakra-ui/core";
import NavBar from "../shell/NavBar";
import { windowShim } from "../../util/windowShim";

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
      color="white"
      position="relative"
      w="100%"
      // mt={["0", "0"]}
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
        Selected Work <Icon name="arrow-down" />
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
            justifyContent={["space-evenly", "center"]}
            flexDirection="row"
            flexWrap="wrap"
            // position="absolute"
            alignSelf="flex-start"
            // pl="5vw"
            // px="1rem"
            border={0}
            mb="-.1rem"
          >
            {data.allMarkdownRemark.edges.map(
              ({ node: { id, frontmatter } }: any) => {
                return (
                  <Tab
                    width="6rem"
                    height={["3rem", "4rem"]}
                    border={"0"}
                    px={".5rem"}
                    borderRadius={".2rem"}
                    mb={"0"}
                    backgroundColor={frontmatter.bgcolor.substr(1)}
                    onClick={e => windowShim.scrollToBottom()}
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
