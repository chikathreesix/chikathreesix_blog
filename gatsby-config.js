module.exports = {
  siteMetadata: {
    title: `chikathreesix`,
    name: `Narative`,
    siteUrl: `https://chikathreesix.com`,
    description: `Autify CEO, chikathreesixのブログ`,
    hero: {
      heading: `chikathreesix blog`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/chikathreesix`,
      },
      {
        name: `github`,
        url: `https://github.com/chikathreesix`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/ryo-chikazawa-01533749/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chikathreesix blog`,
        short_name: `chikathreesix`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
