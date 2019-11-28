import * as React from "react";
import GitHubIcon from "../common/icons/GitHub";
import { Image, Heading, Flex, Text, Box } from "@chakra-ui/core";

// eslint-disable-next-line
interface Props {
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
  icon,
  title,
  bgcolor,
  description,
  excerpt,
  github,
  test,
  spec,
  article
}) => (
  <Box mb={"4vh"}>
    <Flex height={"24vh"} align={"center"} justifyContent={"space-around"}>
      <Image height={"100%"} maxHeight={"30vh"} src={icon.publicURL} />
    </Flex>
    <Text textAlign="center" fontSize="lg">
      {description}
    </Text>
    <Text textAlign="center" fontSize="lg" mt={".5rem"} fontWeight={300}>
      {excerpt}
    </Text>
    <Text textAlign="center" fontSize="lg" mt={".5rem"}>
      {" "}
      <GitHubIcon />
    </Text>
  </Box>
);

export default CaseCard;
