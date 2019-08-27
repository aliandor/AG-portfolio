import React from "react"

import { Styles } from "../styles/styles"
import styled from "styled-components"

import Logo from "./logo"
import Nav from "./nav"
import Tagline from "./tagline"
import Cta from "./cta"

const Header = () => {
  return (
    <Head>
      <Top>
        <Logo color="white">{`<AG>`}</Logo>
        <Nav color="white" />
      </Top>
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
`
const Top = styled.div`
  position: relative;
  bottom: 1rem;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
