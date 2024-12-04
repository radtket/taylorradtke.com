const config = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
  name: "Taylor Radtke",
  siteTitle: "Taylor Radtke | A Creative Mind", // Navigation and Site Title
  siteUrl: "https://www.taylorradtke.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/branding/logo__primary.png", // Used for SEO and manifest
  short_name: "taylorradtke",
  description:
    "Hi, I’m Taylor Radtke — a Full Stack Developer and Designer with a passion for crafting analytical, elegant solutions to complex challenges. I specialize in transforming ideas into sleek, scalable software, writing maintainable code that’s as thoughtful for future developers as it is for end-users. My approach prioritizes accessible, user-focused design, ensuring every solution is inclusive and intuitive.-split-I thrive in fast-paced environments, excelling under pressure and adeptly managing multiple priorities while maintaining the highest standards of quality. My goal is to contribute to a collaborative, innovative team where I can leverage my skills to build impactful, forward-thinking applications.",

  // Contact Info
  contact: {
    city: "Washington, DC",
    email: "taylorradtke@gmail.com",
    phone: "18049297374",
  },

  ogSiteName: "", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language

  // Google Analytics
  trackingId: "UA-115162174-1",

  // Manifest and Progress color
  themeColor: "#c0a062",
  backgroundColor: "#fff",

  // Social Media
  accounts: {
    twitter: {
      account: "taylor_radtke",
      url: "https://twitter.com/taylor_radtke",
    },
    instagram: {
      account: "taylor.radtke",
      url: "https://instagram.com/taylor.radtke",
    },
    linkedin: {
      account: "radtket",
      url: "https://linkedin.com/in/radtket/",
    },
    codepen: {
      account: "radtket",
      url: "https://codepen.io/radtket/",
    },
    github: {
      account: "radtket",
      url: "https://github.com/radtket",
    },
  },
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix !== "/") {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/") {
  config.siteUrl = config.siteUrl.slice(0, -1);
}

module.exports = config;
