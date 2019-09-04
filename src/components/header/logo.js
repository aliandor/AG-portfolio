import React from "react"
import styled from "styled-components"

const Logo = () => {
  return <Brand>{`<AG>`}</Brand>
}

export default Logo

const Brand = styled.div`
  color: #505050;
  font-size: 1.25rem;
  font-weight: 400;
  @media (min-width: 768px) and (orientation: portrait) {
    /* tablet */
    font-size: 2.5rem;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    font-size: 2.5rem;
  }
`
