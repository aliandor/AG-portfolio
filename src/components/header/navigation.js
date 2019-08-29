import React from "react"
import styled from "styled-components"

const Navigation = ({ children, className, color }) => {
  return (
    <Brand color={color} className={className}>
      {children}
    </Brand>
  )
}

export default Navigation

const Brand = styled.div`
  color: ${props => props.color};
  display: flex;
  width: 100%;
  height: 50px;
  align-items: flex-start;
  justify-content: space-between;
  grid-row: 1;
  /* background: lime; */
  div {
    display: grid;
    align-items: center;
    grid-template-columns: 24px 24px;
    grid-column-gap: 1rem;
  }
  img {
    width: 24px;
    transform: translateY(2px);
  }
  @media (min-width: 568px) and (orientation: landscape) {
    padding: 0 1rem;
  }
`
