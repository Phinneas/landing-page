import * as React from "react";
import LineIcon from "react-lineicons";

import {
  Image,
  Heading,
  Flex,
  Text,
  Box,
  Link,
  Button,
  Stack
} from "@chakra-ui/core";

// eslint-disable-next-line
interface Props {
  word_mark: {
    publicURL: string;
  };
  icon: {
    publicURL: string;
  };
  title: string;
  bgcolor: string;
  description: string;
  excerpt: string;
  github?: string;
  test?: string;
  spec?: string;
  article?: string;
}

const CaseCard: React.FC<Props> = ({
  word_mark,
  title,
  bgcolor,
  description,
  excerpt,
  github,
  test,
  spec,
  article
}) => (
  <Stack
    direction="row"
    spacing={["0", "0", "3rem"]}
    px="3rem"
    pt={["1rem", "1rem", "2rem"]}
    flexWrap="wrap"
    align="center"
    justify={["center", "space-between", "center"]}
    pb="2rem"
    background={bgcolor.substr(1)}
  >
    <Flex
      pb={["2rem", "2rem", 0]}
      pt={["1.5rem", "1rem", 0]}
      w="100%"
      direction="column"
      align={["center", "start", "center"]}
      justify="center"
      maxW={["70vw", "70vw", "10rem"]}
    >
      <Box
        width={["10rem", "12rem", "10rem"]}
        height={["10rem", "8rem", "10rem"]}
        backgroundImage={"url(" + word_mark.publicURL + ")"}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition={["center", "left center", "left center"]}
      />
    </Flex>

    <Flex
      justifyContent="center"
      direction="column"
      textAlign={["center", "left", "left"]}
      maxWidth={["100%", "70vw", "50vw", "38rem"]}
      pb={["1rem", 0]}
    >
      <Text>{excerpt}</Text>
    </Flex>
    <Flex
      maxW={["100%", "1rem"]}
      ml={[0, "1rem"]}
      mt={["1rem", "0"]}
      align="center"
      justifyContent="center"
      direction={["row", "column"]}
    >
      {github != undefined ? (
        <Button
          onClick={() => window.open(github)}
          variant="unstyled"
          mx="0"
          textAlign="center"
        >
          <LineIcon name="github" size="sm" />
        </Button>
      ) : (
        ""
      )}
      {article != undefined ? (
        <Button
          onClick={() => window.open(article)}
          variant="unstyled"
          mx="0"
          textAlign="center"
        >
          <LineIcon name="link" size="sm" />
        </Button>
      ) : (
        ""
      )}
      {spec != undefined ? (
        <Button
          onClick={() => window.open(spec)}
          variant="unstyled"
          mx="0"
          textAlign="center"
        >
          <LineIcon name="library" size="sm" />
        </Button>
      ) : (
        ""
      )}
    </Flex>
  </Stack>
);

export default CaseCard;
