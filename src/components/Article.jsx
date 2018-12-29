/* eslint-disable react/prop-types */
import React from "react";
import Layout from "./Layout";
import ProjectPagination from "./ProjectPagination";

const Article = ({ children, pageContext }) => (
  <Layout>
    <div>{children}</div>
    <ProjectPagination
      next={pageContext.nextArticle}
      prev={pageContext.prevArticle}
    />
  </Layout>
);

export default Article;
