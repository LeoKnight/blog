require("dotenv").config();

const siteMetadata = {
  title: `LeoKnight's blog`,
  name: `LeoKnight`,
  siteUrl: `http://leo123.pub`,
  description: `LeoKnight's blog`,
  hero: {
    heading: `Standing on the shoulders of giants.`,
    maxWidth: 700,
  },
  social: [
    {
      url: `https://twitter.com/LeoKnight_Li`,
      name: 'twitter'
    },
    {
      url: `https://github.com/LeoKnight`,
      name: 'github'
    }
  ],
};

const plugins = [
  {
    resolve: "@leoknight/gatsby-theme-leoknight",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      rootPath: "/",
      basePath: "/",
      authorsPage: true,
      mailchimp: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `LeoKnight's blog`,
      short_name: `LeoKnight`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://netlify.us19.list-manage.com/subscribe/post?u=77f953e191e4d9173630e18df&amp;id=2382f0ab1e",
    },
  },
];



module.exports = {
  siteMetadata,
  plugins,
};
