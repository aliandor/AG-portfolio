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
      {/* <Top>
        <Logo color="white">{`<AG>`}</Logo>
        <Nav color="white" />
      </Top> */}
      <Navigation color="white">
        <Logo color="white">{`<AG>`}</Logo>
        <div>
          <Link to="contact">
            <img
              src="https://res.cloudinary.com/dnsdvh13n/image/upload/v1567021277/portfolio/email-1.svg"
              alt="Email by Alfred Brave from the Noun Project"
            />
          </Link>
          <Link to="about">
            <img
              src="https://res.cloudinary.com/dnsdvh13n/image/upload/v1567021277/portfolio/Vector.svg"
              alt="profile by Juan Carlos Altamirano from the Noun Project"
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
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 100px;
  width: 100vw;
  height: 60vh;
  background: ${Styles.Blue};
  box-shadow: ${Styles.cardBoxShadow};
  padding: 1rem 0.5rem;
  justify-items: center;
  @media (min-width: 568px) and (orientation: landscape) {
    grid-column: 1;
    width: 50vw;
    height: 100vh;
    grid-template-columns: 50vw;
    padding: 0.5rem;
    position: sticky;
    top: 0;
    left: 0;
  }
`
// const Top = styled.div`
//   position: relative;
//   bottom: 1rem;
//   width: 90vw;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   @media (min-width: 568px) and (orientation: landscape) {
//     width: 44vw;
//   }
// `
