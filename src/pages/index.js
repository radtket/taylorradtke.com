import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
// import Image from "../components/image";
import SEO from "../components/examples/seo";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Navbar />
      {/* <Image /> */}

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
