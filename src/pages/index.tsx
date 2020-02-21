import React from "react";

import Layout from "../components/Layout";
import Cases from "../components/Cases";
import SEO from "../components/Seo";
import Pay from "../components/Payment/Pay";
import "../fonts/index.css";
import "../styles/style.css";

import Hero from "../components/shell/Hero";

const IndexPage: React.FC = ({}) => {
  return (
    <Layout>
      <SEO title="dOrg" />
      <Hero />
      <Cases />
      <Pay />
    </Layout>
  );
};

export default IndexPage;
