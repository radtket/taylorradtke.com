const config = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
  name: "Taylor Radtke",
  siteTitle: "Taylor Radtke | A Creative Mind", // Navigation and Site Title
  siteUrl: "https://www.taylorradtke.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/branding/logo__primary.png", // Used for SEO and manifest
  short_name: "taylorradtke",
  description:
    "Hi, I’m Taylor Radtke a Full Stack Developer/Designer with a passion for finding analytical and elegant solutions to complex problems. By focusing on turning ideas into sleek, highly scalable software, I write code with its future maintainers in mind and aim to structure my user-facing architecture while keeping accessibility at the forefront. I am a self-motivated developer with a knack for working well under pressure, handling multiple priorities, and maintaining high-quality control. My objective is to obtain a full-time development opportunity where I can make a meaningful contribution to a hardworking and creative team environment.",

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
