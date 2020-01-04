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
    spacing="5vw"
    px="5vw"
    flexWrap="wrap"
    align="center"
    justify="center"
    py="0rem"
  >
    <Flex
      height="9em"
      w="100%"
      direction="column"
      align={["center", "center", "center"]}
      justify="center"
      maxW={["70vw", "70vw", "10vw"]}
    >
      <Image
        style={{
          width: "10rem"
        }}
        src={word_mark.publicURL}
      />
    </Flex>

    <Flex
      justifyContent="center"
      direction="column"
      maxW="50%"
      minW="20em"
      py="1rem"
      textAlign={["center", "left", "left"]}
    >
      <Text>{excerpt}</Text>
    </Flex>
    <Flex maxW="1rem" align="center" justifyContent="center" direction="column">
      {github != undefined ? (
        <Button onClick={() => window.open(github)} variant="unstyled" mx="0">
          <LineIcon name="github" size="sm" />
        </Button>
      ) : (
        ""
      )}
      {article != undefined ? (
        <Button onClick={() => window.open(article)} variant="unstyled" mx="0">
          <LineIcon name="link" size="sm" />
        </Button>
      ) : (
        ""
      )}
      {spec != undefined ? (
        <Button onClick={() => window.open(spec)} variant="unstyled" mx="0">
          <LineIcon name="library" size="sm" />
        </Button>
      ) : (
        ""
      )}
    </Flex>
  </Stack>
);

export default CaseCard;
