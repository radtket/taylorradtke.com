/* eslint-disable react/prop-types */
import React from "react";
import Layout from "./Layout";
import ProjectHero from "./ProjectHero";
import ProjectNav from "./ProjectNav";

const Article = ({ children, pageContext }) => {
  const {
    date,
    excerpt,
    githubRepoName,
    projectRole,
    title
  } = pageContext.frontmatter;
  return (
    <Layout>
      <ProjectNav
        next={pageContext.nextArticle}
        prev={pageContext.prevArticle}
      />
      <ProjectHero
        date={date}
        desc={excerpt}
        githubRepoName={githubRepoName}
        projectName={title}
        role={projectRole}
      />
      {children}
    </Layout>
  );
};

export default Article;
