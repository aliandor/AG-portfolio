import React from "react"
import styled from "styled-components"

import { Styles } from "../styles/styles"

import Cards from "./card"

const Project = ({ title }) => {
  return (
    <Projects>
      <h2>{title}</h2>
      <Cards />
      {/* <Cards /> */}
    </Projects>
  )
}

export default Project

const Projects = styled.section`
  h2 {
    font-size: 2rem;
  }
`
