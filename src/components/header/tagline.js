import React from "react"
import styled from "styled-components"

const Tagline = () => {
  return (
    <Wrapper>
      <h1>
        <span>Alfonso</span> is a crafter of
        <br /> UX / UI <span>designs</span>
        <br /> from Los Angeles, CA
      </h1>
    </Wrapper>
  )
}

export default Tagline

const Wrapper = styled.div`
  color: #333;
  text-align: center;
  display: grid;
  grid-row-gap: 0.5rem;
  h1, h2 {
    font-size: 1.75rem;
    color: #fefffeaa;
  }
  span{
    color: #fefffe;
    font-size: 1.75rem;
    font-weight: 100;
  }
`
