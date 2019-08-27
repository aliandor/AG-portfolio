import React from "react"
import styled from "styled-components"

import { Styles } from "../styles/styles"
import Project from "./project"

const Hero =
  "https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_400/v1566532969/portfolio/undraw_slider_5bgj.svg"

const Main = () => {
  return (
    <MainBody>
      <img src={Hero} alt="" />
      <h1>Projects</h1>
      <h3>Work</h3>
      <Project />
    </MainBody>
  )
}

export default Main

const MainBody = styled.main`
  padding-bottom: 2rem;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  img {
    width: 100%;
    padding: 2rem 1rem 1rem 1rem;
  }
  h1 {
    font-size: 2.5rem;
    color: ${Styles.Blue};
  }
  h3 {
    color: #505050;
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    justify-self: flex-start;
  }
`
