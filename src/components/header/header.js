import React from "react"
import { Styles } from "../styles/styles"
import styled from "styled-components"
import Navigation from "./navigation"
import Tagline from "./tagline"

const Header = () => {
  return (
    <Head>
      <Navigation />
      <Tagline />
    </Head>
  )
}

export default Header

const Head = styled.header`
  display: grid;
  width: 100vw;
`
