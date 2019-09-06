import React from "react"
import styled from "styled-components"

const Tagline = () => {
  return (
    <Wrapper>
      <Tag>
        <span style={{ color: "white" }}>Alfonso</span> is a self-taught
      </Tag>
      <Tag style={{ color: "white" }}>front-end web developer</Tag>
      <Tag>living in Los Angeles, CA</Tag>
    </Wrapper>
  )
}

export default Tagline

const Wrapper = styled.div`
  /* background: tomato; */
  display: grid;
  grid-template-rows: repeat(3, 60px);
  grid-row: 2;
  align-items: center;
  justify-items: center;
  height: 180px;
  /* background: red; */
  @media (min-width: 768px) and (orientation: portrait) {
    /* tablet */
    grid-template-rows: repeat(3, 100px);
  }
  @media (min-width: 736px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    padding-top: 1.5rem;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    grid-template-rows: repeat(3, 120px);
  }
`

const Tag = styled.h2`
  font-size: 1.5rem;
  color: #333;
  span {
    font-size: inherit;
  }
  @media (min-width: 360px) {
    /* small-mid size screens */
    font-size: 1.6rem;
  }
  @media (min-width: 410px) {
    /* large size screens */
    font-size: 1.7rem;
  }
  @media (min-width: 568px) and (orientation: landscape) {
    font-size: 1.4rem;
    padding: 1rem;
  }
  @media (min-width: 736px) and (orientation: landscape) {
    font-size: 1.8rem;
  }
  @media (min-width: 768px) and (orientation: portrait) {
    /* tablet */
    font-size: 3.5rem;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    font-size: 2.6rem;
  }
`
