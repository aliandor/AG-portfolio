import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Styles } from "../components/styles/styles"
import Layout from "../components/layout"
import Navigation from "../components/header/navigation"
import Logo from "../components/header/logo"

const About = () => {
  const Hero =
    "https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto,q_auto:best/v1567529960/portfolio/aboutmeHero_1.jpg"
  const Vector =
    "https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:good,w_300/v1567529960/portfolio/aboutmeIllustration.png"
  const Icon =
    "https://res.cloudinary.com/dnsdvh13n/image/upload/v1567029438/portfolio/email.svg"
  return (
    <Layout>
      <Wrapper>
        <ContactNavigation>
          <Link to="/">
            <Logo color={Styles.Blue}>{`<AG>`}</Logo>
          </Link>
          <Link to="/contact">
            <Contact src={Icon} alt="link to contact page" />
          </Link>
        </ContactNavigation>
        <HeroImg
          src={Hero}
          alt="Alfonso watching fireworks with his child on his shoulders"
        />
        <h1>
          Hello, my name is <span>Alfonso</span>.
        </h1>
        <main>
          <p>I make websites.</p>
          <p>I'm a family man living in Los Angeles.</p>
          <p>
            I nerd out over a clean user interface and great user experience.
          </p>
          <p>
            I help my clients reach their target audience, by creating
            minimalist, informative, and fast modern websites.
          </p>
          <p>I specialize in JAM stack websites made with:</p>
          <ul>
            <li>Gatsby</li>
            <li>Styled-components</li>
            <li>Netlify</li>
            <li>Headless CMS</li>
            <li>Figma for design.</li>
          </ul>

          <p>What I can do for you:</p>
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

const ContactNavigation = styled(Navigation)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  position: fixed;
  padding: 0 1rem;
  height: 50px;
  width: 100%;
  @media (min-width: 768px) and (orientation: portrait) {
    padding: 2.5rem 1rem;
    height: 60px;
  }
`

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0 1rem;
  h1 {
    text-align: center;
    font-size: 2rem;
    padding: 1.5rem;
    color: #505050;
    span {
      font-size: inherit;
      color: ${Styles.Blue};
    }
  }
  p {
    padding: 0.5rem 0;
    max-width: 500px;
  }
  ul {
    padding-bottom: 1rem;
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

const Contact = styled.img``

const HeroImg = styled.img`
  width: 180px;
  margin-top: 66px;
  @media (min-width: 768px) and (orientation: portrait) {
    margin-top: 100px;
  }
`

const VectorImg = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 1rem 1rem 2rem 1rem;
`
