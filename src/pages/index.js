import React from "react";
import "slick-carousel/slick/slick.css";

import SEO from "../components/examples/seo";
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
import Works from "../components/Home/Works";

const components = [
  { name: "Skills", component: <Skills /> },
  { name: "Experience", component: <Experience /> },
  { name: "Clients", component: <Clients /> },
  { name: "Works", component: <Works /> },
  { name: "Testimonials", component: <Testimonials /> },
  { name: "Contact", component: <Contact /> },
];

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Navbar />
      <Hero />
      {components.map(({ name, component }, index) => (
        <PageSection key={name} {...{ name, index }}>
          {component}
        </PageSection>
      ))}
    </Layout>
  );
};

export default IndexPage;
