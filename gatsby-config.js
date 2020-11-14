module.exports = {
  siteMetadata: {
    title: 'Intelsnap Inc.',
    description: 'Intelligence at a snap.',
    author: 'intelsnap',
    siteUrl: 'https://intelsnap.com',
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
