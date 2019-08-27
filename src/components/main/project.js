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
          <span></span>
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
  width: 260px;
  height: 320px;
  background: ${Styles.cardGradient};
  background: #fff;
  /* box-shadow: ${Styles.cardBoxShadow}; */
  border: 1px solid #eee;
  border-radius: 5px;
  color: #ddd;
  color: #505050;
  text-align: center;
  h2 {
    font-size: 1.45rem;
    font-weight: 600;
    padding: 0.5rem 0 0 0.5rem;
    grid-column: 1/-1;
  }
  img {
    grid-column: 1/-1;
    width: 100%;
    height: 150px;
  }
  p {
    grid-column: 1/-1;
    font-weight: 400;
    font-size: 1rem;
    padding: 0 0.5rem;
  }
  a {
    justify-self: start;
    color: #fafafa;
    font-weight: 600;
    text-align: center;
    padding: 0 0.5rem;
    justify-self: center;
    button {
      width: 80px;
      height: 26px;
      background: white;
      background: ${Styles.cardGradient};

      border: none;
      color: ${Styles.Blue};
      color: white;
      font-weight: bold;
      border-radius: 5px;
    }
  }
`
