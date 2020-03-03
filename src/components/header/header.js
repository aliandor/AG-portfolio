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

const Head = styled.header`
  /* small screen base styles: 320px */
  display: grid;
  grid-template-rows: 100px 1fr 1fr;
  grid-row-gap: 1.5rem;
  width: 100vw;
  background: ${Styles.Blue};
  background-image: url("https://res.cloudinary.com/dnsdvh13n/image/upload/v1575659398/portfolio/Frame.jpg");
  background-position: bottom;
  box-shadow: ${Styles.cardBoxShadow};
  overflow: hidden;
  @media (min-width: 700px) and (orientation: landscape) {
    height: 100vh;
    grid-row-gap: 0;
  }
  @media (min-width: 1000px) {
    height: 70vh;
  }
`
