import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Styles } from "../styles/styles"

const Card = () => {
  const [isFlipped, flip] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
  })
}
