import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Styles } from "../components/styles/styles"
import Layout from "../components/layout"
import Navigation from "../components/header/navigation"

const About = () => {
  const Hero =
    "https://res.cloudinary.com/dnsdvh13n/image/upload/v1592014121/portfolio/aboutmeHero.png"
  return (
    <Layout>
      <Wrapper>
        <SEO title="about" />
        <h1>About me</h1>
        <Link className="backBtn" to="/">
          back
        </Link>
        {/* <Navigation /> */}
        <HeroImg
          src={Hero}
          alt="a self of Alfonso watching fireworks with his child."
        />
        <Intro>
          Hello, my name is <span>Alfonso</span>.
        </Intro>
        <main>
          <P>I am a self taught UI/UX developer,</P>
          <P>living in Los Angeles.</P>
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
            <li>Version control</li>
            <li>Linux cli</li>
            <li>Figma</li>
            <li>Wireframes</li>
            <li>Mock-ups / Prototypes</li>
          </ul>
        </main>
      </Wrapper>
    </Layout>
  )
}

export default About

const Intro = styled.h1`
  text-align: center;
  font-size: 2rem;
  padding: 1.5rem;
  /* color: #505050; */
  span {
    font-size: inherit;
    color: ${Styles.Main};
  }
`

const P = styled.p`
  padding: 0.5rem 0;
  max-width: 500px;
  padding: 0.25rem 1rem;
`
const Wrapper = styled.div`
  width: 100vw;
  /* height: 80vh; */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  h1 {
    font-size: 2rem;
    padding: 1rem;
  }
  .backBtn {
    position: absolute;
    left: 2rem;
    top: 4.5rem;
    opacity: 0.7;
  }
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
  @media (min-width: 768px) and (orientation: landscape) {
    height: auto;
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
    width: 250px;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    margin-top: 100px;
    width: 250px;
  }
`

const VectorImg = styled.img`
  width: 100%;
  max-width: 200px;
  margin: 1rem 1rem 2rem 1rem;
  @media (min-width: 768px) and (orientation: portrait) {
    max-width: 250px;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    max-width: 250px;
  }
`
