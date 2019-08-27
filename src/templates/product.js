import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Styles } from "../components/styles/styles"
import Logo from "../components/header/logo"

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      projectName
      hero {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      theDetails
      role
      date
      concept
      tech {
        asset {
          url
        }
      }
      responsiveImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      challenge
      solution
      codeImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const Product = data.sanityProject
  return (
    <div>
      <Wrapper>
        <header>
          <nav>
            <Link to="/">
              <Logo color="#505050">{`<AG>`}</Logo>
            </Link>
            <Info>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </Info>
          </nav>
          <h1>{Product.projectName}</h1>
          <Img
            fluid={Product.hero.asset.fluid}
            alt="a grid components of the website"
          />
        </header>
        <main>
          <h2>The Details</h2>
          <p>{Product.theDetails}</p>
          <div>
            <button>Visit</button>
            <button>Code</button>
          </div>
          <h2>Role</h2>
          <p>{Product.role}</p>
          <h2>Date</h2>
          <p>{Product.date}</p>
          <h2>Concept</h2>
          <p>{Product.concept}</p>
          <h2>Tech Stack</h2>
          <section>
            {Product.tech.map(image => (
              <img src={image.asset.url} alt="tech stack icon" />
            ))}
          </section>
          <Img
            fluid={Product.responsiveImage.asset.fluid}
            alt="responsive views of the website"
          />
          <h2>The Challenge</h2>
          <p>{Product.challenge}</p>
          <h2>The Solution</h2>
          <p>{Product.solution}</p>
          <Img
            fluid={Product.codeImage.asset.fluid}
            alt="bits code relating to the solution answer."
          />
        </main>
      </Wrapper>
    </div>
  )
}

const Info = styled.div`
  a {
    padding: 0 0.25rem;
    font-size: 1.25rem;
    &:nth-child(2) {
      color: ${Styles.Blue};
    }
  }
`

const Wrapper = styled.div`
  width: 100vw;
  text-align: center;
  color: #505050;
  nav {
    width: 100vw;
    position: fixed;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    background: white;
    box-shadow: ${Styles.cardBoxShadow};
    z-index: 2;
  }
  main {
    padding: 1rem;
  }
  h1 {
    text-align: left;
    font-size: 1.75rem;
    padding: 64px 0 1rem 1rem;
  }
  h2 {
    font-size: 1.5rem;
    &:first-of-type {
      padding: 1rem 0 0 0;
    }
  }
  p {
    padding: 0.5rem 0;
  }
  section {
    display: flex;
    padding: 1rem;
    width: 200px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
  }
`
