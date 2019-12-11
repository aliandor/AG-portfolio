import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import Header from "../components/header/header"
import Main from "../components/main/main"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  </Layout>
)

export default IndexPage

const Wrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 568px) and (orientation: landscape) {
    /* grid-template-columns: 50vw 50vw; */
  }
`
