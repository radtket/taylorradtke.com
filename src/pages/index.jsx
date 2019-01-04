import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import config from "../../config/website";
import Navbar from "../components/Navbar/Navbar";

import "../styles/global.scss";
import HomeHero from "../components/HomeHero";

export const query = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
			}
		}
		allJavascriptFrontmatter(
			filter: { frontmatter: { isWork: { eq: true } } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						path
						devOnly
						cover {
							childImageSharp {
								fluid(maxWidth: 1100, quality: 100) {
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
					}
				}
			}
		}
		avitar: file(relativePath: { eq: "hero__avitar.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1400, quality: 90) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		hero: file(relativePath: { eq: "hero__bg.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1400, quality: 90) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

const IndexPage = ({ data }) => {
	const { allJavascriptFrontmatter } = data;
	const { edges: articles } = allJavascriptFrontmatter;
	return (
  <Layout>
    <Helmet title={config.siteTitle} />
    <SEO postEdges={articles} />
    <Navbar />
    <HomeHero heroImage={data.hero} avitar={data.avitar} />
  </Layout>
	);
};

export default IndexPage;
