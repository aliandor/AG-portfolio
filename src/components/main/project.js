import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { Styles } from "../styles/styles"

export default () => {
  const data = useStaticQuery(graphql`
    query Project {
      allSanityProject {
        edges {
          node {
            projectName
            concept
            responsiveImage {
              asset {
                url
              }
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
          <h2>{item.projectName}</h2>
          <img
            src={item.responsiveImage.asset.url}
            alt="grid made up of website components"
          />
          <p>{item.concept}</p>
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
  width: 76vw;
  max-width: 300px;
  background: ${Styles.cardGradient};
  box-shadow: ${Styles.cardBoxShadow};
  border-radius: 5px;
  text-align: center;
  color: #333;
  h2 {
    font-size: 1.25rem;
    padding: 1rem 0.5rem;
  }
  img {
    width: 90%;
  }
  p {
    font-weight: 600;
    font-size: 1rem;
    padding: 1rem;
    /* color: #505050; */
  }
`
