import React from "react"
import styled from "styled-components"

import { Styles } from "../styles/styles"
import Project from "./project"

const Hero =
  "https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_400/v1566532969/portfolio/undraw_slider_5bgj.svg"

const Main = () => {
  return (
    <MainBody>
      <Comp src={Hero} alt="" />
      <h1>Projects</h1>
      <Project />
    </MainBody>
  )
}

export default Main

const Comp = styled.img`
  width: 100%;
  padding: 2rem 1rem 1rem 1rem;
  @media (min-width: 568px) and (orientation: landscape) {
    padding: 4rem 2rem;
    height: 100vh;
  }
`

const MainBody = styled.main`
  padding-bottom: 2rem;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  h1 {
    font-size: 2.5rem;
    color: ${Styles.Blue};
    padding: 1rem;
  }
  h3 {
    color: #505050;
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    justify-self: flex-start;
  }
  @media (min-width: 568px) and (orientation: landscape) {
    grid-columns: 2;
    width: 50vw;
  }
`
