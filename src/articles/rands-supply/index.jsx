import React from "react";
import { graphql } from "gatsby";
import { Article, preparePosts } from "../../components/Article";
import PageSection from "../../components/PageSection/PageSection";
import BrandColors from "../../components/BrandColors";
import { RandS } from "../../components/Logos";
import Lightbox from "../../components/Lightbox";

export const frontmatter = {
  clientName: "R&S Supply",
  companyUrl: "http://randssupply.net/",
  date: "08-01-2016",
  devOnly: false,
  excerpt: `R&S Supply is one of America's largest wholesale distributor of roofing, siding, window and gutter materials, tools, and supplies. They approached me to evaluate their website, and was able to produce a complete branding and web redesign.`,
  githubRepoName: `rs-supply--pug`,
  id: "randssupply",
  isWork: true,
  logo: <RandS />,
  path: `/work/rands-supply`,
  projectBrandColors: [
    "#FFFFFF",
    "#FF7D77",
    "#D74B4B",
    "#A01023",
    "#333333",
    "#61778B",
    "#354B5E",
    "#0A2334"
  ],
  projectName: "R&S Supply",
  projectRole: "Design, Development",
  projectStack: "Gatsby, React, Bourbon, Neat",
  thumbnail: "./rands-large.jpg"
};

export default props => {
  const { data } = props;
  const { edges } = data.allFile;
  const { projectBrandColors, clientName, logo } = frontmatter;
  console.log(edges);
  return (
    <Article {...props}>
      <PageSection
        sectionNumber="1"
        sectionName="Branding"
        sectionContent={(
          <BrandColors
            brandingColors={projectBrandColors}
            clientName={clientName}
            logo={logo}
          />
)}
      />
      <PageSection
        sectionNumber="2"
        sectionName="Landing"
        sectionContent={preparePosts(edges, "rands-supply/images/landing")}
      />
      <PageSection
        sectionNumber="3"
        sectionName="Locations"
        sectionContent={preparePosts(edges, "rands-supply/images/locations")}
      />
    </Article>
  );
};

export const query = graphql`
  query GatsbyImageRandsSupply {
    allFile(filter: { extension: { regex: "/(jpeg|jpg|gif|png)/" } }) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
