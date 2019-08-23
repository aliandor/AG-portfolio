import React from "react"
import styled from "styled-components"

import { Styles } from "../styles/styles"
import Project from "./project"

const Main = () => {
  return (
    <MainBody>
      <Hero
        srcset="
            https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_300/v1566532969/portfolio/undraw_slider_5bgj.svg 300w,
            https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_600/v1566532969/portfolio/undraw_slider_5bgj.svg 600w,
            https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_900/v1566532969/portfolio/undraw_slider_5bgj.svg 900w"
        sizes="90vw"
        src="https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_300/v1566532969/portfolio/undraw_slider_5bgj.svg"
      />
      <h1>Projects</h1>
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
  grid-template-rows: 300px 100px 1fr;
  justify-items: center;
  h1 {
    font-size: 2.5rem;
    color: ${Styles.Blue};
  }
`

const Hero = styled.img`
  padding-top: 3rem;
`
