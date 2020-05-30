import React from "react"
import styled from "styled-components"

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
  padding: 2rem 0 1rem 0;
  a {
    color: rebeccapurple;
    font-weight: 500;
  }
`
