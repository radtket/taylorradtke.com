import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import LayoutPortfolio from "../../components/LayoutPortfolio";

export const frontmatter = {
  companyUrl: "https://www.aapa.org/",
  date: "11/28/2017",
  devOnly: false,
  excerpt: `The American Academy of Physician Assistants (AAPA) national conference in New Orleans, Louisiana will provide opportunities to explore the profession's limitless future with five days of certification courses, educational sessions, and discussions surrounding groundbreaking medical innovations.`,
  githubRepoName: `aapa-conference-2018`,
  id: "aapaconference",
  isWork: true,
  path: "/work/aapa-conference",
  projectBrandColors: [
    "#6B478E",
    "#63D0DF",
    "#7673C0",
    "#636CB2",
    "#ED3E7A",
    "#C9DA2A",
    "#999999",
    "#202020",
  ],
  projectName: "AAPA 2018",
  projectRole: "Design, Development, CMS",
  projectStack: "Wordpress, Bourbon, Neat",
  thumbnail: "./works-thumbnail-aapa.jpg",
};

const AAPA = props => {
  const { screens } = useStaticQuery(graphql`
    query {
      screens: file(
        relativePath: { eq: "aapa-conference/works-thumbnail-aapa.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  console.log({ props, screens });

  return (
    <LayoutPortfolio {...props}>
      <h1>{frontmatter.title}</h1>
    </LayoutPortfolio>
  );
};

export default AAPA;
