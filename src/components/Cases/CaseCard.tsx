import * as React from "react";
import TestIcon from "@material-ui/icons/ExitToApp";
import GitHubIcon from "../common/icons/GitHub";
import { Image, Heading, Flex } from "@chakra-ui/core";
import { Box } from "@material-ui/core";

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
  <>
    <Flex
      height={300}
      align={"center"}
      justifyContent={"space-around"}
      background={bgcolor}
    >
      <Image height={200} src={icon.publicURL} />
    </Flex>
    <p>{description}</p>
    <p>{excerpt}</p>
    <p>Git: {github}</p>
    <p>Test: {test}</p>
    <p>Spec: {spec}</p>
    <p>Article: {article}</p>

    <GitHubIcon />
  </>
);

export default CaseCard;
