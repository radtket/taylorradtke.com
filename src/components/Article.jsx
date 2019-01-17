/* eslint-disable react/prop-types */
import React from "react";
import Helmet from "react-helmet";
import Layout from "./Layout";
import ProjectHero from "./ProjectHero";
import ProjectNav from "./ProjectNav";
import SEO from "./SEO";
import { siteTitleAlt } from "../../config/website";

const Article = ({ children, pageContext }) => {
  const { frontmatter } = pageContext;
  const {
    date,
    excerpt,
    githubRepoName,
    path,
    projectName,
    projectRole,
    projectStack
  } = frontmatter;
  return (
    <Layout>
      <Helmet title={`${siteTitleAlt} | ${projectName}`} />
      <SEO postPath={path} postNode={frontmatter} postSEO />
      <ProjectNav
        next={pageContext.nextArticle}
        prev={pageContext.prevArticle}
      />
      <ProjectHero
        date={date}
        desc={excerpt}
        githubRepoName={githubRepoName}
        projectName={projectName}
        projectStack={projectStack}
        projectRole={projectRole}
      />
      {children}
    </Layout>
  );
};

export default Article;
