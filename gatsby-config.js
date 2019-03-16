module.exports = {
  plugins: [
    { resolve: `gatsby-plugin-react-helmet` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Emrbace Clarity",
        short_name: "EC",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#000",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/icon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YUA-85886537-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "embraceclarity.com"
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
