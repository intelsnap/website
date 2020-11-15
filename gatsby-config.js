module.exports = {
  siteMetadata: {
    title: 'Snaplytic',
    description: 'We help companies with intelligent solutions.',
    author: 'snaplytic-io',
    siteUrl: 'https://snaplytic.io',
    navigation: [
      { title: 'Home', route: '/' },
      { title: 'Expertise', route: '/expertise' },
      { title: 'Markets', route: '/markets' },
      { title: 'Media', route: '/media' },
      { title: 'About', route: '/about' },
      { title: 'Contact', route: '/contact' },
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
