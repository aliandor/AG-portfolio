import React from "react"
// import { Link } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header/header"
import Main from "../components/main/main"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Main />
  </Layout>
)

export default IndexPage
