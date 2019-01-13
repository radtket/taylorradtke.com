import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Article from "../../components/Article";
import PageSection from "../../components/PageSection/PageSection";
import BrandColors from "../../components/BrandColors";
import { AapaConference } from "../../components/Logos";

export const frontmatter = {
  clientName: "AAPA",
  companyUrl: "https://www.aapa.org/",
  cover: "./aapa-conference_cover.jpg",
  date: "11-28-2017",
  devOnly: false,
  excerpt: `The American Academy of Physician Assistants (AAPA) national conference in New Orleans, Louisiana will provide opportunities to explore the profession's limitless future with five days of certification courses, educational sessions, and discussions surrounding groundbreaking medical innovations.`,
  githubRepoName: `AAPA-Conference-2018`,
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
    "#202020"
  ],
  projectRole: "Design, Development, CMS",
  projectStack: `Wordpress, Bourbon, Neat`,
  thumbnail: "./works-thumbnail-aapa.jpg",
  title: "AAPA 2018"
};

export default class Index extends Component {
  preparePosts = (availibleImages, sectionName) => {
    const nodes = [];

    availibleImages.forEach(post => {
      if (post.node.relativePath.includes(sectionName)) {
        nodes.push(
          <Img fluid={post.node.childImageSharp.fluid} key={post.node.id} />
        );
      }
    });

    return nodes;
  };

  render() {
    const { data } = this.props;
    const { allFile } = data;
    const { edges } = allFile;
    const { projectBrandColors, clientName } = frontmatter;
    return (
      <Article {...this.props}>
        <PageSection
          sectionNumber="1"
          sectionName="Branding"
          sectionContent={(
            <BrandColors
              brandingColors={projectBrandColors}
              clientName={clientName}
              logo={<AapaConference />}
            />
)}
        />
        <PageSection
          sectionNumber="2"
          sectionName="Home"
          sectionContent={this.preparePosts(edges, "images/home")}
        />
        <PageSection
          sectionNumber="3"
          sectionName="Events"
          sectionContent={this.preparePosts(edges, "images/events")}
        />
      </Article>
    );
  }
}

export const query = graphql`
  query GatsbyImageAAPAConference {
    allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        # sourceInstanceName: { eq: "logos" }
      }
    ) {
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
    # allFile(
    #   filter: {
    #     extension: { regex: "/(jpg)|(png)/" }
    #     relativeDirectory: { eq: "collection1" }
    #   }
    # ) {
    #   edges {
    #     node {
    #       childImageSharp {
    #         fluid(maxWidth: 2000) {
    #           ...GatsbyImageSharpFluid
    #         }
    #       }
    #     }
    #   }
    # }
  }
`;
