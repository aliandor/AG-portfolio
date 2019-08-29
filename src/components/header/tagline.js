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

const Tag = styled.h1`
  font-size: 1.5rem;
  color: #333;
`
