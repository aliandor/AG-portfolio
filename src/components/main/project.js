import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Styles } from "../styles/styles"

export default () => {
  const data = useStaticQuery(graphql`
    query Project {
      allSanityProject {
        edges {
          node {
            cardImage {
              asset {
                url
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
          <img src={item.cardImage.asset.url} alt="websites landing page" />
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
  /* grid-template-columns: 1fr 1fr; */
  grid-template-rows: 1fr 50px 80px 50px;
  width: 76vw;
  height: 336px;
  max-width: 300px;
  background: ${Styles.cardGradient};
  box-shadow: ${Styles.cardBoxShadow};
  border-radius: 5px;
  color: #fafafa;
  h2 {
    font-size: 1.35rem;
    font-weight: 600;
    padding: 0.5rem;
    grid-column: 1/-1;
  }
  img {
    grid-column: 1/-1;
    width: 100%;
    height: 150px;
  }
  p {
    grid-column: 1/-1;
    font-weight: 600;
    font-size: 1rem;
    padding: 0 0.5rem;
    /* align-self: center; */
  }
  button {
    background: #fafafa;
    border: none;
    width: 80px;
    height: 24px;
    color: ${Styles.Blue};
    font-weight: 400;
    font-size: 1.125rem;
    border-radius: 5px;
  }
  a {
    justify-self: flex-end;
    justify-self: center;
  }
`
