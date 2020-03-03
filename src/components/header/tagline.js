import React from "react"
import styled from "styled-components"

const Tagline = () => {
  return (
    <Wrapper>
      <h1>
        <span style={{ color: "white" }}>Alfonso</span> is the crafter of <br />
        unique experiences
        <br />
        for the unique user.
      </h1>
      <h2>
        <span style={{ color: "white" }}>UX/UI developer</span> from in Los
        Angeles, CA
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
