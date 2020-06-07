import React from "react"
import styled from "styled-components"

const Tagline = () => {
  return (
    <Wrapper>
      <h1>
        Alfonso <span>crafts unique experiences
        <br />
          for unique users.</span>
      </h1>
      <h2>
        UX/UI developer <span><br />from in Los
        Angeles, CA</span>
      </h2>
    </Wrapper>
  )
}

export default Tagline

const Wrapper = styled.div`
  color: #333;
  text-align: center;
  /* background: tomato; */
  display: grid;
  grid-row-gap: 0.5rem;
  span {
    font-weight: 200;
    color: #fefffeaa;
  }
  h1 {
    font-size: 7vw;
    @media (min-width: 700px) {
      font-size: 5.5vw;
    }
    span {
      font-size: 7vw;
      @media (min-width: 700px) {
        font-size: 5.5vw;
      }
    }
  }
  h2 {
    font-size: 4vw;
    /* padding: 1rem 0; */
    @media (min-width: 700px) {
      font-size: 2.5vw;
    }
    span {
      font-size: 4vw;
      @media (min-width: 700px) {
        font-size: 2.5vw;
      }
    }
  }
`
