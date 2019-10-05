import React from "react";
import { graphql } from "gatsby";
import { Article, BrandColors } from "../../components";
import PageSection from "../../components/PageSection/PageSection";
import { GreenCanLockers } from "../../components/Logos";
import { preparePosts } from "../../utils/helpers";

export const frontmatter = {
  clientName: "Captain Jon's Green Can Lockers",
  companyUrl: "http://greencanlockers.com/",
  date: "07/16/2016",
  devOnly: false,
  excerpt: `Captain Jon's Green Can Locker's are a patented locking mechanism for ammunition based out of Southern California. Customers love the quality of the product and the ease of installation.`,
  githubRepoName: `green-can-lockers`,
  id: "greencanlockers",
  isWork: true,
  logo: <GreenCanLockers />,
  path: `/work/green-can-lockers`,
  projectBrandColors: ["#748247", "#262F1C", "#E7E7E7", "#3A3A3A"],
  projectName: "Captain Jon",
  projectRole: "Design, Development",
  projectStack: "Bootstrap 3, Owl Carousel, jQuery",
  thumbnail: "./green_can-large.jpg",
};

export default props => {
  const { data } = props;
  const { edges } = data.allFile;
  const { projectBrandColors, clientName, logo } = frontmatter;
  return (
    <Article {...props}>
      <PageSection
        sectionContent={
          <BrandColors
            brandingColors={projectBrandColors}
            {...{ clientName, logo }}
          />
        }
        sectionName="Branding"
        sectionNumber="1"
      />
      <PageSection
        sectionContent={preparePosts(edges, "green-can-lockers/images/landing")}
        sectionName="Landing"
        sectionNumber="2"
      />
    </Article>
  );
};

export const query = graphql`
  query GatsbyImageGreenCanLockers {
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
