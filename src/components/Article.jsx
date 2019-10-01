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
}) => {
  const {
    date,
    excerpt,
    githubRepoName,
    path,
    projectName,
    projectRole,
    projectStack,
  } = frontmatter;
  return (
    <Layout>
      <Helmet title={`${siteTitleAlt} | ${projectName}`} />
      <SEO postNode={frontmatter} postPath={path} postSEO />
      <ProjectNav next={nextArticle} prev={prevArticle} />
      <ProjectHero
        date={date}
        excerpt={excerpt}
        githubRepoName={githubRepoName}
        projectName={projectName}
        projectRole={projectRole}
        projectStack={projectStack}
      />
      {children}
    </Layout>
  );
};

export default Article;
