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
      {data.allSanityProject.edges.map(({ node: item }) => (
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

const Wrap = styled.div`
  /* background: tomato; */
  width: 100vw;
  display: grid;
  grid-gap: 1rem;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: ${Styles.cardBoxShadow};
  display: grid;
  grid-template-rows: 150px 150px;
  width: 300px;
  justify-self: center;
  padding-bottom: 1rem;
  img {
    width: 100%;
    /* max-height: 130px; */
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
