import * as React from "react";
import { Link, navigate } from "gatsby";

import {
  Heading,
  Stack,
  Flex,
  Grid,
  Image,
  Box,
  Button,
  SimpleGrid
} from "@chakra-ui/core";
import DorgSocial from "./DorgSocial";

// import GitHubIcon from "../common/icons/GitHub";
// import DiscordIcon from "../common/icons/Discord";
// import dOrgIcon from "../../images/icons/dOrg.svg";

const Agents: React.FC = ({}) => {
  return (
    <>
      <Flex pt={"0"} align="center" justify="space-around">
        <Box maxW={960} flexGrow={1}>
          <Heading as="h2" fontSize="sm" mb="2rem" id="agents">
            Meet dOrg
          </Heading>
        </Box>
      </Flex>

      <SimpleGrid columns={[2, 3, 4, 5]} gap={0}>
        <Box w="100%" bg="gray.100" p="1.5rem" textAlign="center">
          <Image
            src="https://randomuser.me/api/portraits/men/97.jpg"
            width="100%"
            borderRadius="50%"
            display="block"
          />
          <Heading as="h3" fontSize="lg" pt={"0.5rem"}>
            Segun Abeyo
          </Heading>
          <Heading as="h4" fontSize="sm">
            @githubuser
          </Heading>
        </Box>
        <Box w="100%" bg="gray.400" p="1.5rem" textAlign="center">
          <Image
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
        <Box w="100%" bg="gray.400" p="1.5rem" textAlign="center">
          <Image
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
        <Box w="100%" bg="gray.400" p="1.5rem" textAlign="center">
          <Image
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
        <Box w="100%" bg="gray.400" p="1.5rem" textAlign="center">
          <Image
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
        <Box w="100%" bg="gray.400" p="1.5rem" textAlign="center">
          <Image
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
            src="https://randomuser.me/api/portraits/men/97.jpg"
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
      </SimpleGrid>
    </>
  );
};

export default Agents;
