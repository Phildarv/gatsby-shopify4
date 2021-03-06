require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "gatsby-starter-shopify",
    siteTitleDefault: "gatsby-starter-shopify by @GatsbyJS",
    siteUrl: "https://gatsbyshopify4.gatsbyjs.io/",
    hrefLang: "en",
    siteDescription:
      "A Gatsby starter using the latest Shopify plugin showcasing a store with product overview, individual product pages, and a cart.",
    siteImage: "/default-og-image.jpg",
    twitter: "@gatsbyjs",
  },
  
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
     
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
      
      resolve: '@plasmicapp/loader-gatsby',
      options: {
        projects: [
          {
            id: 'bL97kH9Dzecu8g2MxMGBSt', // ID of a project you are using
            token: 'PW1LUcIEsp14QbhHTd8Bjh3tS9nprRNJBMbLD7mTTqsVOSGNmKRWjlDnpR4NnGNGNMS8pAk18OZJp5iJ2VhQ' // API token for that project
          }
        ],
        // Fetches the latest revisions, whether or not they were unpublished!
        // Disable for production to ensure you render only published changes.
        preview: true
      }
  
    
   
   
    },
  ].filter(Boolean),
}
