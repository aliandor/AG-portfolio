import React from "react"
import styled from "styled-components"
import Logo from './logo'
import Tagline from "./tagline"

const Header = () => {
  return (
    <Head>
      <Tagline />
    </Head>
  )
}

export default Header

const Head = styled.header`
  display: grid;
  width: 100vw;
`
