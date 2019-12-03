import * as React from "react";
import LineIcon from "react-lineicons";

import { Image, Heading, Flex, Text, Box, Link, Button } from "@chakra-ui/core";

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
  <>
    <Flex height={"20vh"} align={"center"} justifyContent={"space-around"}>
      <Image height={"110%"} maxHeight={"30vh"} src={word_mark.publicURL} />
    </Flex>

    <Text textAlign="center" fontSize="lg">
      {excerpt}
    </Text>
    <Text textAlign="center" mt="1rem">
      {github != undefined ? (
        <Button
          onClick={() => (location.href = github)}
          variant="unstyled"
          mx="0"
        >
          <LineIcon name="github" size="sm" />
        </Button>
      ) : (
        ""
      )}
      {article != undefined ? (
        <Button
          onClick={() => (location.href = article)}
          variant="unstyled"
          mx="0"
        >
          <LineIcon name="link" size="sm" />
        </Button>
      ) : (
        ""
      )}
      {spec != undefined ? (
        <Button
          onClick={() => (location.href = spec)}
          variant="unstyled"
          mx="0"
        >
          <LineIcon name="library" size="sm" />
        </Button>
      ) : (
        ""
      )}
    </Text>
  </>
);

export default CaseCard;
