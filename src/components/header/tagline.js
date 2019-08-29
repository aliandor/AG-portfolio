import React from "react"
import styled from "styled-components"

const Tagline = () => {
  return (
    <Wrapper>
      <Tag>Alfonso is a self-taught</Tag>
      <Tag style={{ color: "white" }}>front-end web developer</Tag>
      <Tag>living in Los Angeles, CA</Tag>
    </Wrapper>
  )
}

export default Tagline

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 60px);
  grid-row: 2;
  align-items: center;
  justify-items: center;
  height: 180px;
  /* background: red; */
`

const Tag = styled.h2`
  font-size: 1.55rem;
  color: #333;
  @media (min-width: 360px) {
    font-size: 1.75rem;
  }
  @media (min-width: 375px) {
    font-size: 1.9rem;
  }
  @media (min-width: 568px) and (orientation: landscape) {
    font-size: 1.4rem;
    padding: 1rem;
  }
  @media (min-width: 736px) and (orientation: landscape) {
    font-size: 1.8rem;
  }
`
