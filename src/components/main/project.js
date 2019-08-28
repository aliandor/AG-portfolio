import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Styles } from "../styles/styles"

export default () => {
  const data = useStaticQuery(graphql`
    query Project {
      allSanityProject {
        edges {
          node {
            hero {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            projectName
            summary
            slug {
              current
            }
          }
        }
      }
    }
  `)

  return (
    <Wrap>
      {data.allSanityProject.edges.map(({ node: item }) => (
        <Card>
          <Img fluid={item.hero.asset.fluid} alt="websites landing page" />
          <h2>{item.projectName}</h2>
          <p>{item.summary}</p>
          <Link to={`/${item.slug.current}`}>
            <button>View</button>
          </Link>
        </Card>
      ))}
    </Wrap>
  )
}

const Wrap = styled.section`
  display: grid;
  grid-row-gap: 2rem;
`

const Card = styled.section`
  display: grid;
  background: #fff;
  grid-template-rows: 140px 50px auto auto;
  box-shadow: ${Styles.cardBoxShadow};
  width: 240px;
  height: 300px;
  color: #505050;
  text-align: center;
  h2 {
    font-size: 1.35rem;
    padding: 0.5rem;
  }
  button {
    background: ${Styles.cardGradient};
    border: none;
    color: white;
    width: 80px;
    padding: 0.25rem 0;
  }
  @media (min-width: 360px) and (orientation: portrait) {
    width: 80vw;
    height: 340px;
    grid-template-rows: 140px 70px auto auto;
    h2 {
      padding: 1rem;
      font-size: 1.65rem;
    }
  }
`
