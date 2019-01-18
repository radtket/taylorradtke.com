/* eslint-disable react/prop-types */
import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import Layout from "./Layout";
import ProjectHero from "./ProjectHero";
import ProjectNav from "./ProjectNav";
import SEO from "./SEO";
import { siteTitleAlt } from "../../config/website";

export const preparePosts = (availibleImages, sectionName) => {
  const nodes = [];

  availibleImages.forEach(post => {
    const { relativePath, id, childImageSharp } = post.node;
    const { fluid } = childImageSharp;
    if (relativePath.includes(`images/${sectionName}`)) {
      nodes.push(
        <Img
          fluid={fluid}
          key={id}
          css={css`
            margin-bottom: 40px;

            @media only screen and (min-width: 600px) {
              margin-bottom: 80px;
            }
          `}
        />
      );
    }
  });

  return nodes;
};

export const Article = ({ children, pageContext }) => {
  const { frontmatter, nextArticle, prevArticle } = pageContext;
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
      <ProjectNav next={nextArticle} prev={prevArticle} />
      <ProjectHero
        date={date}
        excerpt={excerpt}
        githubRepoName={githubRepoName}
        projectName={projectName}
        projectStack={projectStack}
        projectRole={projectRole}
      />
      {children}
    </Layout>
  );
};
