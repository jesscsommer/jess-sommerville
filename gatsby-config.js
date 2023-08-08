/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jess Sommerville`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
            `gatsby-remark-line-breaks`
        ]
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp", 
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Syne`,
            file: `https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap`,
          },
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap`,
          },
        ],
      },
    },
  ],
}
