import React from "react";
import Layout from "../components/Layout";
import LearnMore from "../components/LearnMore";
import Cases from "../components/Cases";
import { Manifesto } from "../components/Manifesto";
import { Services } from "../components/Services";
import SEO from "../components/Seo";
import {
  Heading,
  Button,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  FlexProps,
  Input,
  Avatar,
  Textarea,
  Grid,
  Image,
  Stack,
  Text
} from "@chakra-ui/core";
import DorgSocial from "../components/shell/DorgSocial";
import DorgMenu from "../components/shell/DorgMenu";
import styled from "@emotion/styled";

const IndexPage: React.FC = ({}) => {
  const LandingSection: React.FC<FlexProps> = ({ children }, props) => {
    return (
      <Flex
        pt={"25vh"}
        pb={"15vh"}
        minHeight="60vh"
        align="center"
        justify="space-around"
        {...props}
      >
        <Box maxW={960} flexGrow={1}>
          {children}
        </Box>
      </Flex>
    );
  };

  return (
    <Layout>
      <SEO title="Home" />

      <Cases />

      <Flex flexDirection="row">
        <Flex direction="column" bg={"gray.100"} width={"50%"} p={4}>
          <Heading as="h2" fontSize="sm" mb="1rem">
            Join us!
          </Heading>
          <Flex>
            <Button bg="white" flexGrow={1}>
              Fill out our agent form
            </Button>
            <DorgSocial />
          </Flex>
        </Flex>
        <Flex direction="column" width={"50%"} p={4}>
          <Heading as="h2" fontSize="sm" mb="1rem">
            Have a project?
          </Heading>
          <Button>Get in touch</Button>
        </Flex>
      </Flex>

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

      <Services />

      <Flex flexDirection="row">
        <Flex direction="column" bg={"gray.100"} width={"50%"} p={"2rem"}>
          <Heading as="h2" fontSize="sm" lineHeight="md">
            <b>Tech stack – </b> Being a web studio of the future, we keep up
            with the latest tech stack. At the moment, we prefer solidity and x
            on the back-end and react and node front end architecture.
          </Heading>
        </Flex>
        <Flex direction="column" width={"50%"} p={"2rem"}>
          <Heading as="h2" fontSize="sm">
            <b>Social proof – </b>dOrg in the news: We've been working toward
            showing you that our social proof is easily transparent and
            viewable.
          </Heading>
        </Flex>
      </Flex>

      <Flex flexDirection="row" id="contact">
        <Flex direction="column" width={"50%"} p={"4vw"}></Flex>
        <Flex direction="column" width={"50%"} p={"4vw"} pt={"20vh"}>
          <Heading as="h2" size="sm">
            We like to schedule an hour long cosult with new clients to sases
            needs, decide what's possible, and iterate on an action plan.
          </Heading>
        </Flex>
      </Flex>

      <Flex
        pt={"0"}
        pb={"40vh"}
        minHeight="60vh"
        align="center"
        justify="space-around"
      >
        <Box maxW={960} flexGrow={1}>
          <Stack spacing={"2vh"} maxW={"40rem"} flexGrow={1}>
            <Heading as="h2" fontSize="xl">
              Have a project?
            </Heading>
            <Button bg={"blue.200"}>Schedule a meeting</Button>
            <Text>or</Text>
            <Input placeholder="Type your email address" />
            <Textarea placeholder="Type your message here" />
            <Button>Submit</Button>
          </Stack>
        </Box>
      </Flex>

      <Flex pt={"0"} align="center" justify="space-around">
        <Box maxW={960} flexGrow={1}>
          <Heading as="h2" size="sm" mb="2rem" id="agents">
            Our Agents
          </Heading>
        </Box>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={0}>
        <Box w="100%" bg="gray.100" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>
        <Box w="100%" bg="gray.100" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.300" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.200" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="white" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.200" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.100" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.200" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.100" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="white" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.200" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.100" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.100" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.100" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.200" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.200" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.100" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.100" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>{" "}
        <Box w="100%" bg="gray.300" p="1.5rem" textAlign="center">
          <Image
            src="https://bit.ly/sage-adebayo"
            width="100%"
            borderRadius="50%"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>
      </Grid>

      <LandingSection>
        <Manifesto />
      </LandingSection>

      <Flex
        py={"30vh"}
        minHeight="60vh"
        align="center"
        justify="space-around"
        id="join"
      >
        <Box maxW={960} flexGrow={1}>
          <Stack spacing={"2vh"} maxW={"40rem"} flexGrow={1}>
            <Heading as="h2" fontSize="xl">
              Interested Agent?
            </Heading>
            <Input placeholder="Type your email address" />
            <Textarea placeholder="Tell us about yourself" />
            <Button>Submit</Button>
          </Stack>
        </Box>
      </Flex>

      <LandingSection>
        <DorgMenu />
        <DorgSocial />
        <Heading as="h4" fontSize="sm" textAlign="right" mt={".5rem"}>
          Copyright dOrg 2019
        </Heading>
      </LandingSection>
    </Layout>
  );
};

export default IndexPage;
