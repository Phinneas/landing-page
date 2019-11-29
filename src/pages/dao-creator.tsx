import * as React from "react";
import DAOcreator from "@dorgtech/daocreator-ui-v1";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const DAOcreatorPage: React.FC = () => (
  <Layout>
    <SEO title="DAO Creator" />
    <DAOcreator />
  </Layout>
);

export default DAOcreatorPage;
