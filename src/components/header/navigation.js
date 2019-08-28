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

const Brand = styled.p`
  color: ${props => props.color};
  font-size: 1.25rem;
  font-weight: 400;

  width: calc(100vw - 2rem);

  /* background: lime; */

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
`
