import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      projectName
      urlGitHub
      urlSite
      color
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
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      challenge
      solution
      codeImage {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const Product = data.sanityProject

  const CTA = {
    border: `2px solid ${Product.color}`,
    padding: `0.35rem 0`,
    color: Product.color,
    justifySelf: `flex-end`,
  }

  const Secondary = {
    background: "none",
    border: "none",
    color: Product.color,
    fontWeight: "200",
  }

  return (
    <Layout>
      <Wrapper>
        <SEO title="projects: work" />
        <Link className="backBtn" to="/">
          back
        </Link>
        <h1>{Product.projectName}</h1>
        <Img
          className="hero"
          style={{
            maxHeight: 400,
          }}
          fluid={Product.hero.asset.fluid}
          alt=""
        />
        <Main>
          <h2>The Details</h2>
          <p>{Product.theDetails}</p>
          <Buttons>
            <button style={CTA}>
              <a
                href={Product.urlSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </button>
            <button style={Secondary}>
              <a
                href={Product.urlGitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </button>
          </Buttons>
          <Img
            fluid={Product.responsiveImage.asset.fluid}
            style={{
              width: "70vw",
              height: "auto",
              margin: "0 auto",
            }}
            alt="responsive views of the website"
          />
          <h2 style={{ paddingTop: "1rem" }}>Role</h2>
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
          <h2>The Challenge</h2>
          <p>{Product.challenge}</p>
          <br />
          <h2>The Solution</h2>
          <p>{Product.solution}</p>
          <br />
          <Img
            fluid={Product.codeImage.asset.fluid}
            style={{
              width: "90vw",
              height: "auto",
              margin: "0 auto",
            }}
            alt="bits of code relating to the solution answer."
          />
        </Main>
      </Wrapper>
    </Layout>
  )
}

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  padding: 1rem 0 2rem 0;
  @media (min-width: 768px) and (orientation: portrait) {
    /* tablet */
    grid-column-gap: 2rem;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    grid-column-gap: 2rem;
  }
`
const Main = styled.main`
  padding: 1rem;
`
const Wrapper = styled.div`
  width: 100vw;
  text-align: center;
  color: #505050;
  .backBtn {
    position: absolute;
    left: 2rem;
    top: 4.5rem;
    color: #fefffe;
    opacity: 0.7;
  }
  .hero {
    @media (min-width: 700px) {
      width: 92vw;
      max-width: 1000px;
      margin: 0 auto;
    }
  }
  h1 {
    text-align: center;
    font-size: 1.75rem;
    padding: 1rem 0 1rem 1rem;
  }
  h2 {
    font-size: 1.5rem;
    &:first-of-type {
      padding: 1rem 0 0 0;
    }
  }
  p {
    padding: 0.5rem 0;
    font-size: 1rem;
    @media (min-width: 700px) {
      width: 680px;
      margin: 0 auto;
    }
  }
  section {
    /* tech stack icons */
    display: flex;
    padding: 1rem 0 2rem 0;
    width: 300px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
    img {
      width: 100%;
      max-width: 42px;
      max-height: 42px;
    }
  }
  button {
    width: 90px;
    padding: 0.25rem 0;
    font-weight: 600;
  }
  @media (min-width: 768px) and (orientation: portrait) {
    /* tablet */
    h1 {
      font-size: 3rem;
      padding: 74px 0 1rem 1rem;
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
      padding: 1rem;
    }
    button {
      width: 150px;
      padding: 0.5rem;
      a {
        font-size: 1.5rem;
      }
    }
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    h1 {
      font-size: 3rem;
      padding: 74px 0 1rem 1rem;
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
      padding: 1rem;
    }
    button {
      width: 150px;
      padding: 0.5rem;
      a {
        font-size: 1.5rem;
      }
    }
  }
`
