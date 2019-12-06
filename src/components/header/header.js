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
  grid-template-rows: 5fr auto 7fr;
  padding-bottom: 1rem;
  width: 100vw;
  height: 60vh;
  background: ${Styles.Blue};
  background-image: url("https://res.cloudinary.com/dnsdvh13n/image/upload/v1575659398/portfolio/Frame.jpg");
  background-size: cover;
  box-shadow: ${Styles.cardBoxShadow};
  @media (min-width: 375px) and (min-height: 800px) and (orientation: portrait) {
    /* XL and [plus sized phones */
    height: 50vh;
  }
  @media (min-width: 568px) and (orientation: landscape) {
    grid-column: 1;
    width: 50vw;
    height: 100vh;
    padding: -1rem;
    position: fixed;
    top: 0;
    left: 0;
    /* grid-template-rows: 50px; */
  }
  @media (min-width: 736px) and (orientation: landscape) {
    /* padding: 2rem 0; */
    grid-template-rows: 5fr 20fr 10fr;
  }
  @media (width: 411px) and (height: 823px) {
    /* pixel 2xl */
    grid-template-rows: 8fr 20fr 10fr;
  }
  @media (min-width: 768px) and (orientation: portrait) {
    /* tablet */
    grid-template-rows: 10fr 36fr 14fr;
    height: 65vh;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    grid-template-rows: 10fr 36fr 14fr;
    width: 50vw;
  }
`
