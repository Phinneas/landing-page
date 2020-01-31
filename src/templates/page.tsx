import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { Grid } from "@chakra-ui/core";
import { MDXProvider } from "@mdx-js/react";

// eslint-disable-next-line
interface Props extends WithStyles<typeof styles> {
  data: any;
}

const PageTemplate: React.FC<Props> = ({ data: { mdx }, classes }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Grid
        container
        direction={"column"}
        justify={"flex-start"}
        className={classes.container}
      >
        <MDXProvider
          components={{
            h4: Header,
            h6: Subheader,
            p: Body,
            ul: Body,
            li: props => <li {...props} className={classes.listItem} />,
            a: props => <a {...props} className={classes.link} />
          }}
        >
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Grid>
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
