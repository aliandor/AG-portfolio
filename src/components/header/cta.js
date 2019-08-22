import React from "react"
import styled from "styled-components"
import { Styles } from "../styles/styles"

const Cta = () => {
  return <ContactBtn>Contact Me</ContactBtn>
}

export default Cta

const ContactBtn = styled.button`
  position: relative;
  top: 15px;
  background: white;
  border: none;
  width: 160px;
  height: 50px;
  grid-column: 1/-1;
  color: ${Styles.Blue};
  font-size: 1.25rem;
  font-weight: 600;
  @media (min-width: 350px) and (orientation: portrait) {
    top: 0px;
    width: 200px;
    height: 60px;
    font-size: 1.55rem;
  }
`
