import React from "react";

import SEO from "../components/examples/seo";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";

// Sections
import Skills from "../components/Home/Skills";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Navbar />
      <Hero />
      <Skills />
    </Layout>
  );
};

export default IndexPage;
