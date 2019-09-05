import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Navigation from "../components/header/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String) {
    sanityPersonal(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      projectName
      urlGitHub
      urlSite
      hero {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      theDetails
    }
  }
`
export default ({ data }) => {
  const Project = data.sanityPersonal
  return (
    <Layout>
      <Wrapper>
        <SEO title="projects: personal" />
        <Navigation position="fixed" bg="#fff" />
        <h1>{Project.projectName}</h1>
        <Img fluid={Project.hero.asset.fluid} alt="" />
        <Main>
          <h2>The Details</h2>
          <p>{project.theDetails}</p>
          <Buttons>
            <button>
              <a
                href={Project.urlSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </button>
            <button>
              <a
                href={Project.urlGitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </button>
          </Buttons>
        </Main>
      </Wrapper>
    </Layout>
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
const Main = styled.main`
  padding: 1rem;
`
const Wrapper = styled.div`
  width: 100vw;
  text-align: center;
  color: #505050;
  /* padding: 1rem; */
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
    font-size: 1rem;
  }
  section {
    display: flex;
    padding: 1rem;
    width: 200px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
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
