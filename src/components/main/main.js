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
      <div className="work">
        <h1>Work</h1>
        <Project />
      </div>
      <div className="projects">
        <h1>Personal Projects</h1>
        <Personal />
      </div>
    </MainBody>
  )
}

export default Main

const MainBody = styled.main`
  width: 100vw;
  padding: 1rem 0;
  h1 {
    font-size: 2rem;
    text-align: center;
    color: ${Styles.Blue};
  }
`
