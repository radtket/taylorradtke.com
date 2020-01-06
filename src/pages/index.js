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
// import SideProjects from "../components/Home/SideProjects";
import Works from "../components/Home/Works";
import { slugify } from "../utils/helpers";

export const sections = [
  { name: "Skills", component: <Skills /> },
  { name: "Experience", component: <Experience /> },
  { name: "Clients", component: <Clients /> },
  { name: "Works", component: <Works /> },
  { name: "Testimonials", component: <Testimonials /> },
  // { name: "Side Projects", component: <SideProjects /> },
  { name: "Contact", component: <Contact /> },
].map(item => ({
  ...item,
  id: slugify(item.name),
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
      <Navbar {...{ sections }} />
      <Hero />
      {sections.map(({ name, component, id }, index) => (
        <PageSection key={name} {...{ name, index, id }}>
          {component}
        </PageSection>
      ))}
    </Layout>
  );
};

export default IndexPage;
