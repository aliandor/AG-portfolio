import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Styles } from "../styles/styles"

export default () => {
  const data = useStaticQuery(graphql`
    query Personal {
      allSanityPersonal {
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
      {data.allSanityPersonal.edges.map(({ node: item }) => (
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
  @media (min-width: 768px) and (orientation: portrait) {
    grid-row-gap: 4rem;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    grid-row-gap: 4rem;
  }
`

const Card = styled.section`
  display: grid;
  background: #fff;
  grid-template-rows: 13fr 5fr 7fr 5fr;
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
    @media (min-width: 360px) and (orientation: portrait) {
      width: 100px;
      font-size: 1.25rem;
    }
  }
  @media (min-width: 360px) and (orientation: portrait) {
    width: 80vw;
    height: 360px;
    grid-template-rows: 13fr 6.5fr 10fr 6.5fr;
    p {
      font-size: 1.25rem;
      padding: 0 0.5rem;
    }
    h2 {
      padding: 1rem;
      font-size: 1.65rem;
    }
  }
  @media (min-width: 736px) and (orientation: landscape) {
    width: 290px;
    height: 340px;
  }
  @media (min-width: 768px) and (orientation: portrait) {
    /* tablet */
    width: 80vw;
    max-width: 500px;
    height: 600px;
    grid-template-rows: 13fr 5fr 7fr 5fr;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
    button {
      width: 140px;
      font-size: 1.5rem;
      padding: 0.5rem;
      font-weight: 600;
    }
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    width: 40vw;
    height: 400px;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  button {
    width: 140px;
    font-size: 1.5rem;
    font-weight: 600;
  }
`
