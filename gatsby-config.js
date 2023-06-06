require("dotenv").config({
 path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
 siteMetadata: {
  title: `National Institute of Technology Patna`,
  description: `Official Website of NIT Patna`,
  author: `NITP WEB TEAM`,
 },
 plugins: [
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-helmet`,
  {
   resolve: `gatsby-source-filesystem`,
   options: {
    name: `images`,
    path: `${__dirname}/src/components`,
   },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  "gatsby-plugin-use-query-params",
  {
   resolve: `gatsby-plugin-manifest`,
   options: {
    name: `national-institute-of-technology-patna`,
    short_name: `nitpatna`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/assets/logo512.png`, // This path is relative to the root of the site.
   },
  },

  // {
  //   resolve: 'gatsby-source-multi-api',
  //   options: {
  //     apis: [{
  //       baseUrl:"https://nitpadmin.herokuapp.com/api/",
  //       endpoints:["notice/active","event/active","notice","event","event/archive","notice/archive"]
  //     }],
  //   },
  // },
  `gatsby-plugin-styled-components`,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
 ],
}
