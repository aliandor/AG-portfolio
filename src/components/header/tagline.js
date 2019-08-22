import React from "react"
import styled from "styled-components"

const Tagline = () => {
  return (
    <Tag>
      <h1>Alfonso is a self-taught</h1>
      <h1 style={{ color: "white" }}>front-end web developer</h1>
      <h1>living in Los Angeles, CA</h1>
    </Tag>
  )
}

export default Tagline

const Tag = styled.div`
  text-align: center;
  align-self: center;
  h1 {
    color: #333;
    font-size: 1.65rem;
    font-weight: 600;
    padding: 0.25rem 0;
    @media (min-width: 350px) and (orientation: portrait) {
      font-size: 1.9rem;
    }
  }
`
