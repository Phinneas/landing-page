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
import DorgMark from "../../images/mark_o.svg";
import DorgSocial from "../shell/DorgSocial";

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
      backgroundColor={"RGBA(82, 82, 80, .8)"}
      align="start"
      minH="100vh"
      id="cases"
      color="white"
      position="relative"
      w="100%"
      // pb="5vh"
    >
      <DorgSocial />
      <Background accent={"#fffff"} />

      <Flex
        width="100%"
        align="center"
        direction="column"
        px={["5vw"]}
        flexWrap="wrap"
        flexGrow={1}
      >
        <Flex
          align="center"
          direction="column"
          justifyContent="center"
          minH={["70vh", "90vh", "90vh"]}
        >
          <Image
            src={DorgMark}
            height={["6em", "6em", "7.5em"]}
            mb={["2rem", "2rem", "2rem"]}
          />

          <Heading
            as="h4"
            lineHeight="4rem"
            fontWeight="thin"
            fontSize="sm"
            mb="0"
            textAlign="center"
          >
            dOrg designs and develops web3 projects of all sizes
          </Heading>
          <SchedulingModal />
        </Flex>
      </Flex>

      <Tabs
        tabIndex={tab}
        onChange={handleTabsChange}
        width="100%"
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
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
            // bottom={0}
            // left={0}
          >
            {data.allMarkdownRemark.edges.map(
              ({ node: { id, frontmatter } }: any) => {
                return (
                  <Tab
                    width="4.3rem"
                    height="4.5rem"
                    ml="-3px"
                    border={"0"}
                    px={".5rem"}
                    // backgroundColor={frontmatter.bgcolor.slice(1)}
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
        </Flex>

        <TabPanels
          // background={bg}
          mt="-1px"
          transition="all .1s"
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

function SchedulingModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex mt={"2rem"} wrap="wrap" justify="center" width="100%">
        <Button
          size="md"
          onClick={onOpen}
          // backgroundColor={"RGB(78, 166, 138)"}
          background={"#4EA68A"}
          height={"3.5rem"}
          px="2rem"
          fontWeight={600}
          _hover={{ background: "#404038" }}
        >
          Schedule a meeting
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" bgColor={"gray.800"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize="1em"
            as="h4"
            alignText="center"
            fontWeight={300}
          >
            Scheduling a virtual meeting
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div style={{ height: "50vh", width: "100%" }}>
              <iframe
                src="https://calendar.zoho.com/eventreqForm/248bc02ab8c914cb0eaff6558b63228e0305963999e2bb69efb226b576781b60529328fa0c809bf34e53d59319ef7221?theme=0&l=en&tz=America%2FNew_York"
                frameborder="0"
                width="100%"
                height="100%"
                style={{ backgroundColor: "transparent" }}
              ></iframe>
            </div>
          </ModalBody>

          <ModalFooter>
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
