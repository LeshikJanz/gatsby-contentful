module.exports = {
  siteMetadata: {
    title: `Gatsby with Contentful`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `bwpljobjxecg`,
        accessToken: `0efc7c66a824a799f18d037b6bc3ca92209422b0d09ffdebd716a06b8a2a86cf`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
