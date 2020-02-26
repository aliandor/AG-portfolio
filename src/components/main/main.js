import React from "react"
import styled from "styled-components"

import { Styles } from "../styles/styles"
import Project from "./project"
import Personal from "./personal"

const Main = () => {
  return (
    <MainBody>
      <h1>Case Studies</h1>
      {/* <div> */}
      <Project />
      {/* </div> */}
    </MainBody>
  )
}

export default Main

const MainBody = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  h1 {
    font-size: 3rem;
    padding: 1rem;
    text-align: center;
    color: ${Styles.Blue};
  }
  div {
  }
`
