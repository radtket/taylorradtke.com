const config = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
  name: "Taylor Radtke",
  author: "Taylor Radtke",
  siteTitle: "Taylor Radtke | A Creative Mind", // Navigation and Site Title
  siteTitleAlt: "Taylor Radtke", // Alternative Site title for SEO
  siteUrl: "https://www.taylorradtke.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/branding/logo__primary.png", // Used for SEO and manifest
  siteShortName: "taylorradtke",
  siteDescription: `Taylor Radtke is a creative mind who specializes in minimal design that displays a bold message. After three
	plus years of marketing in the service industry, Taylor takes his social skills mastered from constructing
	cocktails through college to creating a finished project that his client truly loves. A mastermind at social
	media marketing, with a concentration on an age demographic of 18-35. Taylor has a great latitude of culture
	due to his upbringing in Southern California then transitioning to the mid-Atlantic region to further his
	career and education. Recently Taylor has devoted his time to mastering the world of front-end web development
	and design. His passion for web design comes from viewing it as a functional piece of art, and striving to let
	his mind continue to share the beauty of digital`,

  // Contact Info
  contact: {
    city: "Washington, DC",
    email: "taylorradtke@gmail.com",
    phone: "18049297374",
  },

  userGithub: "radtket",
  userTwitter: "@taylor_radtke", // Twitter Username
  ogSiteName: "", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language

  // Google Analytics
  googleAnalyticsId: "UA-115162174-1",

  // Manifest and Progress color
  themeColor: "#c0a062",
  backgroundColor: "#fff",

  // Social Media
  accounts: {
    twitter: "https://twitter.com/taylor_radtke",
    instagram: "https://instagram.com/taylor.radtke",
    linkedin: "https://linkedin.com/in/radtket/",
    codepen: "https://codepen.io/radtket/",
    github: "https://github.com/radtket",
  },
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/") {
  config.siteUrl = config.siteUrl.slice(0, -1);
}

module.exports = config;
