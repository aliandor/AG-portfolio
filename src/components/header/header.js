import React from "react"
import { Link } from "gatsby"
import { Styles } from "../styles/styles"
import styled from "styled-components"

import Logo from "./logo"
import Navigation from "./navigation"
import Tagline from "./tagline"
import Cta from "./cta"

const Header = () => {
  return (
    <Head>
      <Navigation color="white">
        <Logo color="white">{`<AG>`}</Logo>
        <div>
          <Link to="about">
            <img
              src="https://res.cloudinary.com/dnsdvh13n/image/upload/v1567021277/portfolio/Vector.svg"
              alt="profile by Juan Carlos Altamirano from the Noun Project"
            />
          </Link>
          <Link to="contact">
            <img
              src="https://res.cloudinary.com/dnsdvh13n/image/upload/v1567021277/portfolio/email-1.svg"
              alt="Email by Alfred Brave from the Noun Project"
            />
          </Link>
        </div>
      </Navigation>
      <Tagline />
      <Cta />
    </Head>
  )
}

export default Header

const Head = styled.header`
  display: grid;
  grid-template-rows: 50px 180px 70px;
  /* grid-row-gap: 1rem; */
  padding: 1rem;
  width: 100vw;
  height: 60vh;
  background: ${Styles.Blue};
  box-shadow: ${Styles.cardBoxShadow};
  @media (min-width: 568px) and (orientation: landscape) {
    grid-column: 1;
    width: 50vw;
    height: 100vh;
    grid-template-columns: 50vw;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    left: 0;
  }
  @media (min-width: 736px) and (orientation: landscape) {
    padding: 2rem 0;
    grid-template-rows: 50px 200px 100px;
  }
`
