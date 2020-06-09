import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Logo = () => {
  return (
    <Nav>
      <Link to="/" style={{ color: "#fefffeaa", fontSize: 20 }}>
        AG
      </Link>
    </Nav>
  )
}

export default Logo

const Nav = styled.div`
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 1rem;
`
