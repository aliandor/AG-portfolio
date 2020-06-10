import React from "react"
import styled from "styled-components"
import { Styles } from './styles/styles'

const Footer = () => {
  return (
    <Foot>
      <p>
        Made with
        <a
          href="https://www.gatsbyjs.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          Gatsby
        </a>
      </p>
    </Foot>
  )
}

export default Footer
const Foot = styled.footer`
  text-align: center;
  padding: 2rem;
  a {
    color: ${Styles.Main};
    font-weight: 500;
  }
`
