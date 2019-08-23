import React from "react"
import styled from "styled-components"

import { Styles } from "../styles/styles"

const Cards = () => {
  return <Card></Card>
}

export default Cards

const Card = styled.section`
  width: 76vw;
  max-width: 300px;
  height: 260px;
  background: ${Styles.cardGradient};
  box-shadow: ${Styles.cardBoxShadow};
  border-radius: 5px;
`
