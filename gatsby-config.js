module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Intelsnap Inc.',
    description: 'Intelligence at a snap',
    author: 'intelsnap',
    siteUrl: 'https://intelsnap.com',
    topNav: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Expertise`,
        link: `/expertise`,
      },
      {
        name: `Markets`,
        link: `/markets`,
      },
      {
        name: `Media`,
        link: `/media`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Contact`,
        link: `/contact`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
  ],
}
