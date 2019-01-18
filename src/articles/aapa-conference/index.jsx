import React from "react";
import { graphql } from "gatsby";
import Article from "../../components/Article";
import PageSection from "../../components/PageSection/PageSection";
import BrandColors from "../../components/BrandColors";
import { AapaConference } from "../../components/Logos";
import { preparePosts } from "../../styles/SharedStyles";

export const frontmatter = {
  clientName: "AAPA",
  companyUrl: "https://www.aapa.org/",
  date: "11-28-2017",
  devOnly: false,
  excerpt: `The American Academy of Physician Assistants (AAPA) national conference in New Orleans, Louisiana will provide opportunities to explore the profession's limitless future with five days of certification courses, educational sessions, and discussions surrounding groundbreaking medical innovations.`,
  githubRepoName: `AAPA-Conference-2018`,
  id: "aapaconference",
  isWork: true,
  logo: <AapaConference />,
  path: "/work/aapa-conference",
  projectBrandColors: [
    "#6B478E",
    "#63D0DF",
    "#7673C0",
    "#636CB2",
    "#ED3E7A",
    "#C9DA2A",
    "#999999",
    "#202020"
  ],
  projectName: "AAPA 2018",
  projectRole: "Design, Development, CMS",
  projectStack: "Wordpress, Bourbon, Neat",
  thumbnail: "./works-thumbnail-aapa.jpg"
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
        sectionName="Home"
        sectionContent={preparePosts(edges, "home")}
      />
      <PageSection
        sectionNumber="3"
        sectionName="Events"
        sectionContent={preparePosts(edges, "events")}
      />
    </Article>
  );
};

export const query = graphql`
  query GatsbyImageAAPAConference {
    # events: allFile(
    #   filter: {
    #     relativeDirectory: { eq: "aapa-conference/images/events" }
    #     extension: { regex: "/(jpeg|jpg|gif|png)/" }
    #   }
    # ) {
    #   edges {
    #     node {
    #       id
    #       relativePath
    #       childImageSharp {
    #         fluid(maxWidth: 2000) {
    #           ...GatsbyImageSharpFluid
    #         }
    #       }
    #     }
    #   }
    # }
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
