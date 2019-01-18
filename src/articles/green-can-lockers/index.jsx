import React from "react";
import { graphql } from "gatsby";
import Article from "../../components/Article";
import PageSection from "../../components/PageSection/PageSection";
import BrandColors from "../../components/BrandColors";
import { GreenCanLockers } from "../../components/Logos";
import { preparePosts } from "../../styles/SharedStyles";

export const frontmatter = {
  clientName: "Captain Jon's Green Can Lockers",
  companyUrl: "http://greencanlockers.com/",
  date: "07-16-2016",
  devOnly: false,
  excerpt: `Captain Jon's Green Can Locker's are a patented locking mechanism for ammunition based out of Southern California. Customers love the quality of the product and the ease of installation.`,
  githubRepoName: `Green-Can-Lockers_Website`,
  id: "greencanlockers",
  isWork: true,
  logo: <GreenCanLockers />,
  path: `/work/green-can-lockers`,
  projectBrandColors: ["#748247", "#262F1C", "#E7E7E7", "#3A3A3A"],
  projectName: "Captain Jon",
  projectRole: "Design, Development",
  projectStack: "Bootstrap 3, Owl Carousel, jQuery",
  thumbnail: "./green_can-large.jpg"
};

export default props => {
  const { data } = props;
  const { edges } = data.allFile;
  const { projectBrandColors, clientName, logo } = frontmatter;
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
        sectionContent={preparePosts(edges, "landing")}
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
