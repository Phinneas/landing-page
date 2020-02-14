import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Grid, Heading, Box, Flex } from "@chakra-ui/core";
import { MDXProvider } from "@mdx-js/react";

// eslint-disable-next-line
interface Props {
  data: any;
}

const PageTemplate: React.FC<Props> = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Flex direction={"column"} justify={"flex-start"} className={"container"}>
        <MDXProvider
          components={{
            h4: Heading,
            h6: Heading,
            p: Box,
            ul: Box,
            li: props => <li {...props} className={"listItem"} />,
            a: props => <a {...props} className={"listItem"} />
          }}
        >
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Flex>
    </Layout>
  );
};

export default PageTemplate;

export const query = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
