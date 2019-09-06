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
  grid-template-columns: 1fr;
  grid-template-rows: 140px 40px 60px 50px;
  box-shadow: ${Styles.cardBoxShadow};
  width: 240px;
  height: 300px;
  color: #505050;
  h2 {
    font-weight: 600;
    /* border: 1px solid; */
    font-size: 1.25rem;
    padding: 0.5rem;
  }
  p {
    padding: 0 0.5rem;
    /* border: 1px solid; */
  }
  a {
    justify-self: center;
  }
  button {
    background: ${Styles.cardGradient};
    border: none;
    color: white;
    width: 100px;
    padding: 0.25rem 0;
    font-weight: 600;
  }
  @media (min-width: 400px) and (orientation: portrait) {
    width: 270px;
  }
  @media (min-width: 768px) and (orientation: portrait) {
    /* tablet */
    grid-template-rows: 200px 50px 120px 50px;
    width: 400px;
    height: 460px;
    h2 {
      padding: 1rem;
      font-size: 1.75rem;
    }
    p {
      padding: 1rem;
      font-size: 1.5rem;
    }
    button {
      width: 160px;
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    grid-template-rows: 200px 50px 120px 50px;
    width: 400px;
    height: 460px;
    h2 {
      padding: 1rem;
      font-size: 1.75rem;
    }
    p {
      padding: 1rem;
      font-size: 1.5rem;
    }
    button {
      width: 160px;
      font-size: 1.5rem;
    }
  }
`
