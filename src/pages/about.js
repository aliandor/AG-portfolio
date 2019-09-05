import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"

import { Styles } from "../components/styles/styles"
import Layout from "../components/layout"
import Navigation from "../components/header/navigation"

const About = () => {
  const Hero =
    "https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,w_200/v1567529960/portfolio/aboutmeHero_1.jpg"
  const Vector =
    "https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:good,w_300/v1567529960/portfolio/aboutmeIllustration.png"
  return (
    <Layout>
      <Wrapper>
        <SEO title="about" />
        <Navigation />
        <HeroImg
          src={Hero}
          alt="Alfonso watching fireworks with his child on his shoulders"
        />
        <Intro>
          Hello, my name is <span>Alfonso</span>.
        </Intro>
        <main>
          <P>I make websites.</P>
          <P>I'm a family man living in Los Angeles.</P>
          <P>
            I nerd out over a clean user interface and great user experience.
          </P>
          <P>
            I help my clients reach their target audience, by creating
            minimalist, informative, and fast modern websites.
          </P>
          <P>I specialize in JAM stack websites made with:</P>
          <ul>
            <li>Gatsby</li>
            <li>Styled-components</li>
            <li>Netlify</li>
            <li>Headless CMS</li>
            <li>Figma for design.</li>
          </ul>
          <P>What I can do for you:</P>
          <ul>
            <li>Web Development</li>
            <li>Web Design or redesign</li>
            <li>E-commerce</li>
            <li>Headless CMS - for content editing.</li>
            <li>SEO</li>
          </ul>
        </main>
        <VectorImg src={Vector} alt="" />
      </Wrapper>
    </Layout>
  )
}

export default About

const Intro = styled.h1`
  text-align: center;
  font-size: 2rem;
  padding: 1.5rem;
  color: #505050;
  span {
    font-size: inherit;
    color: ${Styles.Blue};
  }
`

const P = styled.p`
  padding: 0.5rem 0;
  max-width: 500px;
  padding: 0.25rem 1rem;
`
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  ul {
    padding: 1rem;
    list-style-position: inside;
    list-style-type: circle;
    li {
      padding: 0.25rem 0;
      font-weight: 400;
    }
  }
  @media (min-width: 768px) and (orientation: portrait) {
    h1 {
      font-size: 3rem;
      width: 80%;
    }
    p {
      font-size: 1.5rem;
    }
    ul > li {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    h1 {
      font-size: 3rem;
      width: 60%;
    }
    p {
      font-size: 1.5rem;
      max-width: 600px;
    }
    ul > li {
      font-size: 1.5rem;
    }
  }
`

const HeroImg = styled.img`
  width: 160px;
  margin-top: 26px;
  @media (min-width: 768px) and (orientation: portrait) {
    margin-top: 100px;
  }
`

const VectorImg = styled.img`
  width: 100%;
  max-width: 200px;
  margin: 1rem 1rem 2rem 1rem;
`
