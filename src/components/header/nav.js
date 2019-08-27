import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = () => {
  return (
    <Links>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </Links>
  )
}

export default Nav

const Links = styled.nav`
  a {
    padding: 0 4px;
    color: white;
    font-size: 1.25rem;
  }
`
