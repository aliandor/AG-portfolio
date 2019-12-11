import React from "react"
import styled from "styled-components"

const Tagline = () => {
  return (
    <Wrapper>
      {/* <Tag> */}
      <h1>
        <span style={{ color: "white" }}>Alfonso</span> is a self-taught
      </h1>
      <h1>
        <span style={{ color: "white" }}> front-end web developer </span>
      </h1>
      <h1>living in Los Angeles, CA</h1>
      {/* </Tag> */}
    </Wrapper>
  )
}

export default Tagline

const Wrapper = styled.div`
  /* background: tomato; */
  grid-row: 2;
  align-self: center;
  padding: 1rem;

  display: grid;
  /* align-items: center; */
  justify-items: center;
  h1 {
    font-size: 7vw;
    color: #333;
    padding: 0.5rem;
  }
  span {
    font-size: 7vw;
  }
  @media (min-width: 700px) {
    h1,
    span {
      font-size: 5vw;
    }
  }
`
