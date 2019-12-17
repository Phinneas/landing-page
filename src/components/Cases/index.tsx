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
  Box,
  Button,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text
} from "@chakra-ui/core";
import Background from "../shell/Background";
import DorgMark from "../../images/icons/dOrg-mark.svg";

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

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      direction="column"
      backgroundColor={"RGBA(82, 82, 80, .5)"}
      align="start"
      minH="100vh"
      id="cases"
      color="white"
      position="relative"
      w="100%"
      // pb="5vh"
    >
      <Background />

      <Flex
        width="100%"
        align="center"
        direction="row"
        px={["5vw"]}
        flexWrap="wrap"
        py="10vh"
        flexGrow={1}
      >
        <Image
          src={DorgMark}
          height="10rem"
          display="inline"
          mr="5vw"
          pb="5vw"
        />

        <Flex align="flex-start" direction="column">
          <Heading
            as="h3"
            fontSize={["1.8em", "1.8em", "2.5em"]}
            lineHeight="1.1em"
            maxW="15em"
            fontWeight={900}
            textAlign="left"
          >
            A freelancer cooperative committed to enhancing means of
            coordination.
          </Heading>
          <CalendlyModal />
        </Flex>
      </Flex>

      <Tabs
        index={casesState.tabIndex}
        onChange={handleTabsChange}
        width="100%"
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
      >
        <Heading as="h4" fontSize="sm" mb="1rem" pl="5vw">
          Selected Work
        </Heading>
        <TabList
          justifyContent="flex-start"
          flexDirection="row"
          // flexWrap="wrap"
          // position="absolute"
          alignSelf="flex-start"
          pl="5vw"
          border={0}
          // bottom={0}
          // left={0}
        >
          {data.allMarkdownRemark.edges.map(
            ({ node: { id, frontmatter } }: any) => {
              return (
                <Tab
                  background={frontmatter.bgcolor}
                  width="6.5rem"
                  height="5.5rem"
                  ml="-3px"
                  border={"0"}
                  backgroundColor={frontmatter.bgcolor.slice(1)}
                >
                  <Image
                    src={frontmatter.icon.publicURL}
                    style={{
                      width: "4rem",
                      height: "100%"
                    }}
                  />
                </Tab>
              );
            }
          )}
        </TabList>
        <TabPanels
          background={casesState.sectionBg}
          mt="-1px"
          transition="all 1s"
        >
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

function CalendlyModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="md"
        onClick={onOpen}
        backgroundColor={"RGB(78, 166, 138)"}
        rightIcon="calendar"
        mt={"1rem"}
      >
        Schedule a meeting
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize="1em"
            as="h4"
            alignText="center"
            fontWeight={300}
          >
            We look forward to meeting.
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div style={{ height: "50vh", width: "100%" }}>
              <iframe
                src="https://calendly.com/dorg"
                width="100%"
                height="100%"
                frameborder="0"
                style={{ backgroundColor: "transparent" }}
              ></iframe>
            </div>
          </ModalBody>

          <ModalFooter>
            <Text>Email info & resumes to ops@dorg.tech</Text>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CaseList;
