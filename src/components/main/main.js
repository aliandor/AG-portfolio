import React from "react"
import styled from "styled-components"

import Styles from "../styles/styles"

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
    </MainBody>
  )
}

export default Main

const MainBody = styled.main`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 300px 100px 100px 1fr;
  justify-items: center;
`

const Hero = styled.img`
  padding-top: 3rem;
`
