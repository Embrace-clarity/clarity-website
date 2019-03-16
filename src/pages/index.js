import React from "react"
import Wraper from "../components/wraper"
import Home from "./home"
import Modules from "./modules"
import Os from "./os"
import Manifesto from "./manifesto"
import Contribute from "./contribute"
import GlobalStyle from "../css/globalStyles"
import { ThemeProvider } from "styled-components"
import theme from "../css/theme"
import { Helmet } from "react-helmet"

export default () => (
  <ThemeProvider theme={theme}>
    <Wraper>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Embrace Clarity</title>
        <link rel="canonical" href="https://embraceclarity.com/" />
        <meta
          name="description"
          content="Clarity is a decentralised communication device.
Let's make communication a common good."
        />
      </Helmet>
      <Home />
      <Modules />
      <Os />
      <Manifesto />
      <Contribute />
    </Wraper>
  </ThemeProvider>
)
