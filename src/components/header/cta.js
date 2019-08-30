import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Styles } from "../styles/styles"

const Cta = () => {
  return (
    <ContactBtn>
      <Link to="/contact">CONTACT ME</Link>
    </ContactBtn>
  )
}

export default Cta

const ContactBtn = styled.button`
  position: relative;
  background: white;
  border: none;
  width: 160px;
  height: 50px;
  grid-row: 3;
  justify-self: center;
  align-self: center;
  a {
    color: ${Styles.Blue};
    font-size: 1.25rem;
    font-weight: 600;
  }
  @media (min-width: 350px) and (orientation: portrait) {
    width: 200px;
    height: 60px;
    a {
      font-size: 1.55rem;
    }
  }
  @media (min-width: 768px) and (orientation: portrait) {
    /* tablet */
    width: 400px;
    height: 90px;
    a {
      font-size: 2rem;
    }
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    /* tablet landscape & laptop*/

    width: 300px;
    height: 80px;
    a {
      font-size: 1.8rem;
    }
  }
`
