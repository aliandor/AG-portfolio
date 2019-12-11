import React from "react"
import styled from "styled-components"

import { Styles } from "../styles/styles"
import Project from "./project"
import Personal from "./personal"

const Hero =
  "https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_400/v1566532969/portfolio/undraw_slider_5bgj.svg"

const Main = () => {
  return (
    <MainBody>
      {/* <Comp src={Hero} alt="" /> */}
      <h1>Work</h1>
      <Project />
      <h1>Personal Projects</h1>
      <Personal />
    </MainBody>
  )
}

export default Main

const Comp = styled.img`
  width: 100%;
  max-width: 280px;
  padding: 2rem 1rem 1rem 1rem;
`

const MainBody = styled.main`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  h1 {
    font-size: 2rem;
    color: ${Styles.Blue};
    padding: 2rem;
  }
  h3 {
    color: #505050;
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    justify-self: flex-start;
  }
`
