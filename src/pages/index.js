import React from "react";
import { Link } from "gatsby";

import SEO from "../components/examples/seo";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Navbar />
      <Hero />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
