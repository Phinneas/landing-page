import * as React from "react";
import LoadableDaoCreator from "../components/LoadableDaoCreator";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const DAOcreatorPage: React.FC = () => (
  <Layout>
    <SEO title="DAO Creator" />
    <LoadableDaoCreator />
  </Layout>
);

export default DAOcreatorPage;
