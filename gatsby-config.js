module.exports = {
  siteMetadata: {
    title: "portfolio",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon.ico",
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-styled-components",
  ],
};
