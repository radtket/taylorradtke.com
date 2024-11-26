import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import urljoin from "url-join";
import { isEmpty } from "lodash";

const SEO = ({ postNode = {} }) => {
  const isPost = !isEmpty(postNode);

  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            backgroundColor
            description
            name
            siteLogo
            siteUrl
            title
            accounts {
              twitter {
                account
              }
            }
          }
        }
      }
    `
  );

  let { title, description, siteLogo: image } = siteMetadata;
  const {
    accounts: { twitter },
    backgroundColor,
    name,
    siteUrl,
    title: siteTitle,
  } = siteMetadata;
  let postURL;

  if (isPost) {
    title = `${name} | ${postNode.projectName}`;
    description = postNode.description
      ? postNode.description
      : postNode.excerpt;
    image = postNode.thumbnail.childImageSharp.fluid.src;
    postURL = urljoin(siteUrl, postNode.path);
  }

  if (
    !image.match(
      "(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]"
    )
  ) {
    image = urljoin(siteUrl, image);
  }

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: siteUrl,
      name: title,
      alternateName: name || "",
    },
  ];

  if (isPost) {
    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: siteUrl,
        name: title,
        author: {
          "@type": "Person",
          name,
        },
        publisher: {
          "@type": "Organization",
          name: siteTitle,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/branding/logo__primary.png`,
          },
        },
        alternateName: name || "",
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image,
        },
        description,
      }
    );
  }

  const href = isPost ? postURL : siteUrl;
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      {/* Favicons */}
      <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" />
      <link
        href="/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/favicons/favicon.ico" rel="shortcut icon" />
      <meta content={backgroundColor} name="msapplication-TileColor" />
      <meta content="/browserconfig.xml" name="msapplication-config" />

      {/* General tags */}
      <meta content={description} name="description" />
      <meta content={image} name="image" />
      <link href={href} rel="canonical" />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta content={href} property="og:url" />
      {isPost && <meta content="article" property="og:type" />}
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={image} property="og:image" />
      {/* Facebook */}
      {/* <meta content={siteFBAppID || ""} property="fb:app_id" /> */}

      {/* Twitter Card tags */}
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={twitter.account || ""} name="twitter:creator" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={image} name="twitter:image" />
    </Helmet>
  );
};

SEO.propTypes = {
  postNode: PropTypes.shape({
    projectName: PropTypes.string,
    description: PropTypes.string,
    excerpt: PropTypes.string,
    thumbnail: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          src: PropTypes.string,
        }),
      }),
    }),
    path: PropTypes.string,
  }),
};

export default SEO;
