import React from "react";
import { graphql } from "gatsby";
import { Article, preparePosts } from "../../components/Article";
import PageSection from "../../components/PageSection/PageSection";
import BrandColors from "../../components/BrandColors";
import { Aapa } from "../../components/Logos";

export const frontmatter = {
  clientName: "AAPA",
  companyUrl: "https://yourpacan.org/",
  date: "02-05-2018",
  devOnly: false,
  excerpt: `A Campaign by AAPA showing the "Your PA Can Handle It" With thousands of hours of medical training and a versatile skill set, PAs are expanding access to team-based care. When it comes to quality healthcare, your PA can handle it.`,
  githubRepoName: `your-pa-can`,
  id: "yourpacan",
  isWork: true,
  logo: <Aapa />,
  path: `/work/your-pa-can`,
  projectBrandColors: ["#f58220", "#62489d", "#017581", "#003c69"],
  projectName: "Your PA Can",
  projectRole: "Design, Development",
  projectStack: "Bourbon, Neat, eCharts.js, Gulp",
  thumbnail: "./yourpacan_cover.jpg"
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
        sectionContent={preparePosts(edges, "your-pa-can/images/landing")}
      />
    </Article>
  );
};

export const query = graphql`
  query GatsbyImageYourPaCan {
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
