import React from "react";
import { graphql } from "gatsby";
import { Article, BrandColors } from "../../components";
import PageSection from "../../components/PageSection/PageSection";
import { AapaConference } from "../../components/Logos";
import { preparePosts } from "../../utils/helpers";

export const frontmatter = {
  clientName: "AAPA",
  companyUrl: "https://www.aapa.org/",
  date: "11/28/2017",
  devOnly: false,
  excerpt: `The American Academy of Physician Assistants (AAPA) national conference in New Orleans, Louisiana will provide opportunities to explore the profession's limitless future with five days of certification courses, educational sessions, and discussions surrounding groundbreaking medical innovations.`,
  githubRepoName: `aapa-conference-2018`,
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
    "#202020",
  ],
  projectName: "AAPA 2018",
  projectRole: "Design, Development, CMS",
  projectStack: "Wordpress, Bourbon, Neat",
  thumbnail: "./works-thumbnail-aapa.jpg",
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
            clientName={clientName}
            logo={logo}
          />
        }
        sectionName="Branding"
        sectionNumber="1"
      />
      <PageSection
        sectionContent={preparePosts(edges, "aapa-conference/images/home")}
        sectionName="Home"
        sectionNumber="2"
      />
      <PageSection
        sectionContent={preparePosts(edges, "aapa-conference/images/events")}
        sectionName="Events"
        sectionNumber="3"
      />
      <PageSection
        sectionContent={preparePosts(edges, "aapa-conference/images/tabs")}
        sectionName="Tabs"
        sectionNumber="4"
      />
      <PageSection
        sectionContent={preparePosts(edges, "aapa-conference/images/contact")}
        sectionName="Contact"
        sectionNumber="5"
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
