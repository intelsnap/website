/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require ('dotenv').config({
   path:`.env.${process.env.NODE_ENV}`,
 });

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Intelsnap Inc.",
    description: "Intelligence at a snap",
    author: "@Laeeq",
    
  },
  plugins: [`gatsby-plugin-styled-components` ,
            `gatsby-transformer-sharp`,
             `gatsby-plugin-sharp`,
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9jzhvd94c25e`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
],
}
