import React from "react";
import Helmet from "react-helmet";
import config from "../../config/website";

const SEO = ({ postNode, postPath, postSEO, pageSEO }) => {
  const {
    backgroundColor,
    siteTitle,
    siteTitleAlt,
    siteUrl,
    siteDescription,
    userTwitter,
    author
  } = config;
  let title;
  let description;
  let image;
  let postURL;

  if (postSEO || pageSEO) {
    const postMeta = postNode;
    title = `${siteTitle} | ${postMeta.clientName}`;
    description = postMeta.excerpt ? postMeta.excerpt : postNode.title;
    if (postMeta.thumbnail) {
      image = postMeta.thumbnail.childImageSharp.fluid.src;
    }
    postURL = siteUrl + postPath;
  } else {
    title = siteTitle;
    description = siteDescription;
    image = "/branding/logo__primary.png";
  }
  image = siteUrl + image;

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: siteUrl,
      name: title,
      alternateName: siteTitleAlt
    }
  ];
  if (postSEO) {
    schemaOrgJSONLD.push({
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": `${siteUrl}/work`,
            name: "Work"
          }
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": postURL,
            name: title,
            image
          }
        }
      ]
    });

    schemaOrgJSONLD.push({
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      url: postURL,
      name: title,
      author: {
        "@type": "Person",
        name: author
      },
      publisher: {
        "@type": "Organization",
        name: siteTitle,
        logo: {
          "@type": "ImageObject",
          url: `${config.siteUrl}/branding/logo__primary.png`
        }
      },
      datePublished: postNode.date,
      alternateName: "",
      headline: postNode.clientName,
      image: {
        "@type": "ImageObject",
        url: image
      },
      description
    });
  }

  if (pageSEO) {
    schemaOrgJSONLD.push({
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": postURL,
            name: title,
            image
          }
        }
      ]
    });
  }
  return (
    <Helmet>
      {/* Favicons */}
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content={backgroundColor} />
      <meta name="msapplication-config" content="browserconfig.xml" />

      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <link rel="canonical" href={postSEO ? postURL : siteUrl} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={postSEO ? postURL : siteUrl} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={userTwitter || ""} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
