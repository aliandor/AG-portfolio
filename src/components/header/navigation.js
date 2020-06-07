import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = ({ position, bg }) => {
  return (
    <Nav position={position} bg={bg}>
      <Link to="/" style={{ color: "#fefffeaa", fontSize: 20 }}>
        AG
      </Link>
    </Nav>
  )
}

export default Navigation

const Nav = styled.div`
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 1rem;

`
