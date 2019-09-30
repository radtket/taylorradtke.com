import React from "react";
import Helmet from "react-helmet";
import {
  backgroundColor,
  siteTitle,
  siteTitleAlt,
  siteUrl,
  siteDescription,
  userTwitter,
  author,
} from "../../config/website";

const SEO = ({ postNode, postPath, postSEO, pageSEO }) => {
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
      "@context": "https://schema.org/",
      "@type": "WebSite",
      url: siteUrl,
      name: title,
      alternateName: siteTitleAlt,
    },
  ];
  if (postSEO) {
    schemaOrgJSONLD.push({
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": `${siteUrl}/work`,
            name: "Work",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": postURL,
            name: title,
            image,
          },
        },
      ],
    });

    schemaOrgJSONLD.push({
      "@context": "https://schema.org/",
      "@type": "BlogPosting",
      url: postURL,
      name: title,
      author: {
        "@type": "Person",
        name: author,
      },
      publisher: {
        "@type": "Organization",
        name: siteTitle,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/branding/logo__primary.png`,
        },
      },
      datePublished: postNode.date,
      alternateName: "",
      headline: postNode.clientName,
      image: {
        "@type": "ImageObject",
        url: image,
      },
      description,
    });
  }

  if (pageSEO) {
    schemaOrgJSONLD.push({
      "@context": "https://schema.org/",
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
    });
  }
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
      <meta content="browserconfig.xml" name="msapplication-config" />

      {/* General tags */}
      <meta content={description} name="description" />
      <meta content={image} name="image" />
      <link href={postSEO ? postURL : siteUrl} rel="canonical" />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta content={postSEO ? postURL : siteUrl} property="og:url" />
      {postSEO ? <meta content="article" property="og:type" /> : null}
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={image} property="og:image" />

      {/* Twitter Card tags */}
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={userTwitter || ""} name="twitter:creator" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={image} name="twitter:image" />
    </Helmet>
  );
};

export default SEO;
