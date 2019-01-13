/* eslint-disable react/prop-types */
import React from "react";
import Layout from "./Layout";
import ProjectHero from "./ProjectHero";
import ProjectNav from "./ProjectNav";

const Article = ({ children, pageContext }) => {
  const {
    clientName,
    companyUrl,
    date,
    excerpt,
    projectRole
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
        name={clientName}
        role={projectRole}
        siteUrl={companyUrl}
        title={clientName}
      />
      {children}
    </Layout>
  );
};

export default Article;
