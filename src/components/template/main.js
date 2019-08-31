import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled, { createGlobalStyle } from "styled-components"

export default () => {
  const data = useStaticQuery(graphql`
    query($slug: String) {
      sanityProject(slug: { current: { eq: $slug } }) {
        projectName
        urlGitHub
        urlSite
        color
        hero {
          asset {
            url
            fluid {
              srcSet
              sizes
              src
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
  `)
  const Product = data.sanityProject

  const CTA = {
    background: `${Product.color}`,
    padding: `0.35rem 0`,
    border: `none`,
    color: "white",
    justifySelf: `flex-end`,
  }

  const Secondary = {
    background: "none",
    color: Product.color,
    border: `2px solid ${Product.color}`,
  }
  return (
    <main>
      <h2>The Details</h2>
      <p>{Product.theDetails}</p>
      <Buttons>
        <button style={CTA}>
          <a href={Product.urlSite} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        </button>
        <button style={Secondary}>
          <a href={Product.urlGitHub} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </button>
      </Buttons>
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
  )
}

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  padding: 1rem 0;
  @media (min-width: 768px) and (orientation: portrait) {
    /* tablet */
    grid-column-gap: 2rem;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    grid-column-gap: 2rem;
  }
`
