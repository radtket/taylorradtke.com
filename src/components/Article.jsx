/* eslint-disable react/prop-types */
import React from "react";
import Helmet from "react-helmet";
import Layout from "./Layout";
import ProjectHero from "./ProjectHero";
import ProjectNav from "./ProjectNav";
import SEO from "./SEO";
import { siteTitleAlt } from "../../config/website";

const Article = ({
  children,
  pageContext: { frontmatter, nextArticle, prevArticle },
}) => (
  <Layout>
    <Helmet title={`${siteTitleAlt} | ${frontmatter.projectName}`} />
    <SEO postNode={frontmatter} postPath={frontmatter.path} postSEO />
    <ProjectNav next={nextArticle} prev={prevArticle} />
    <ProjectHero {...frontmatter} />
    {children}
  </Layout>
);
export default Article;
