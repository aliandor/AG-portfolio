import React from "react"
import styled from "styled-components"

const Tagline = () => {
  return (
    <>
      <Tag>Alfonso is a self-taught</Tag>
      <Tag style={{ color: "white" }}>front-end web developer</Tag>
      <Tag>living in Los Angeles, CA</Tag>
    </>
  )
}

export default Tagline

const Tag = styled.h2`
  font-size: 1.55rem;
  color: #333;
  @media (min-width: 360px) {
    font-size: 1.75rem;
  }
  @media (min-width: 375px) {
    font-size: 1.9rem;
  }
`
