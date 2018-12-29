import React from "react";
import { graphql } from "gatsby";
import Article from "../../components/Article";

export const frontmatter = {
	clientName: "AAPA",
	cover: "./aapa-conference_cover.jpg",
	date: "2017-11-28",
	devOnly: false,
	excerpt: `In Mid 2016 I was asked to develop their new website (designed by Victoria Leontieva) and help them scale their online enrollment business. Required by the client was a swift transition from their old website, while using the same Wordpress–powered stack.`,
	id: "aapaconference",
	isWork: true,
	path: "/work/aapa-conference",
	projectBrandColors: ["#6B478E", "#63D0DF", "#7673C0", "#636CB2"],
	projectRole: "Design, Development, CMS",
	projectStack: `Wordpress, Bourbon, Neat, Owl Carousel`,
	title: "AAPA Conference"
};

export default props => (
  <Article {...props}>
    <h1>{frontmatter.title}</h1>
  </Article>
);

export const query = graphql`
	query GatsbyImageAAPAConference {
		screens: file(relativePath: { eq: "aapa-conference/intro-section.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1400, quality: 90) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
