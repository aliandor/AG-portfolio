import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Styles } from "../styles/styles"

export default () => {
  const data = useStaticQuery(graphql`
    query Personal {
      allSanityPersonal {
        edges {
          node {
            hero {
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
      {data.allSanityPersonal.edges.map(({ node: item }) => (
        <Card>
          <img src={item.hero.asset.url} alt="" />
          <div>
            <h2>{item.projectName}</h2>
            <p>{item.summary}</p>
            <Link to={`/${item.slug.current}`}>View</Link>
          </div>
        </Card>
      ))}
    </Wrap>
  )
}

// todo:
// 1. responsive card styling

const Wrap = styled.div`
  width: 100vw;
  padding: 1rem;
  display: grid;
  grid-row-gap: 2rem;
`
const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: ${Styles.cardBoxShadow};
  display: grid;
  grid-template-rows: 150px 150px;
  max-width: 300px;
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
  h2 {
    padding: 0 1rem;
    font-size: 1.25rem;
  }
  div {
    display: grid;
    text-align: center;
    p,
    a {
      padding: 1rem;
    }
    a {
      font-weight: 600;
      color: ${Styles.Blue};
      text-transform: uppercase;
    }
  }
`
