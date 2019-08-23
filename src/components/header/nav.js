import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = () => {
  return (
    <Links>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </Links>
  )
}

export default Nav

const Links = styled.nav`
  //   background: yellow;
  a {
    padding: 0 4px;
    color: white;
    font-size: 1.25rem;
  }
`
