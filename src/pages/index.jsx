import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/SEO";
import config from "../../config/website";

export const query = graphql`
	query IndexQuery {
		allJavascriptFrontmatter(
			filter: { frontmatter: { isWork: { eq: true } } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						cover {
							childImageSharp {
								fluid(maxWidth: 1100, quality: 100) {
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
						devOnly
						path
					}
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
			<h1>Hi people</h1>
		</Layout>
	);
};

export default IndexPage;
