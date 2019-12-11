import React from "react"
import { Styles } from "../styles/styles"
import styled from "styled-components"
import Navigation from "./navigation"
import Tagline from "./tagline"
import Cta from "./cta"

const Header = () => {
  return (
    <Head>
      <Navigation />
      <Tagline />
      <Cta />
    </Head>
  )
}

export default Header

const SVG = styled.img``

const Head = styled.header`
  /* small screen base styles: 320px */
  display: grid;
  grid-template-rows: 5fr auto 7fr 2fr;
  padding-bottom: 1rem;
  width: 100vw;
  height: 100vh;
  background: ${Styles.Blue};
  background-image: url("https://res.cloudinary.com/dnsdvh13n/image/upload/v1575659398/portfolio/Frame.jpg");
  /* background-size: cover; */
  background-position: bottom;
  box-shadow: ${Styles.cardBoxShadow};
  overflow: hidden;
  @media (max-width: 500px) {
    height: 70vh;
  }
`
