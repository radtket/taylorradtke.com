import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import "slick-carousel/slick/slick.css";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import PageSection from "../components/PageSection";

// Sections
import Skills from "../components/Home/Skills";
import Experience from "../components/Home/Experience";
import Clients from "../components/Home/Clients";
import Testimonials from "../components/Home/Testimonials";
import Contact from "../components/Home/Contact";
import SideProjects from "../components/Home/SideProjects";
import Works from "../components/Home/Works";
import { slugify } from "../utils/helpers";

const sections = Object.entries({
  Skills,
  Experience,
  Clients,
  Works,
  "Side Projects": SideProjects,
  Testimonials,
  Contact,
}).map(([name, Component]) => ({
  name,
  id: slugify(name),
  Component,
}));

const IndexPage = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <Layout>
      <Helmet {...{ title }} />
      <SEO />
      <Navbar
        {...{
          sections,
        }}
      />
      <Hero />
      {sections.map(({ name, Component }, index) => (
        <PageSection key={name} {...{ name, index }}>
          <Component />
        </PageSection>
      ))}
    </Layout>
  );
};

export default IndexPage;
