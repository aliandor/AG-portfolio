import React from "react"
import styled from "styled-components"

const Tagline = () => {
  return (
    <Wrapper>
      <Tag>
        <span style={{ color: "white" }}>Alfonso</span> is a self-taught
        <span style={{ color: "white" }}> front-end web developer </span>
        living in Los Angeles, CA
      </Tag>
    </Wrapper>
  )
}

export default Tagline

const Wrapper = styled.div`
  /* background: tomato; */
  grid-row: 2;
  align-self: center;
  padding: 1rem;
  @media (min-width: 360px) and (orientation: portrait) {
    /* small-mid size screens */
    padding: 0 2rem;
  }
  @media (min-width: 736px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    padding-top: 1.5rem;
  }
`

const Tag = styled.h1`
  font-size: 1.6rem;
  color: #333;
  text-align: center;
  line-height: 2.5rem;
  span {
    font-size: inherit;
  }
  @media (min-width: 375px) and (orientation: portrait) {
    /* small-mid size screens */
    font-size: 1.75rem;
    line-height: 3.5rem;
  }
  @media (min-width: 568px) and (orientation: landscape) {
    font-size: 1.25rem;
    padding: 1rem;
  }
  @media (min-width: 730px) and (orientation: landscape) {
    font-size: 1.8rem;
  }
  @media (min-width: 768px) and (orientation: portrait) {
    /* tablet */
    font-size: 3.5rem;
    line-height: 5rem;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    font-size: 2.6rem;
    line-height: 4rem;
  }
`
