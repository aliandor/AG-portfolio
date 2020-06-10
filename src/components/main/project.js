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
  padding: 2rem; 
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
`

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
 img {
   width: 100%;
   height: 150px;
   object-fit: cover;
   border-radius: 5px 5px 0 0;
 }
 div {
   padding: 1rem;
   text-align: center;
   p {
     width: 240px;
     margin: 0 auto;
     padding: 1rem;
   }
   a {
     color: ${Styles.Main};
     text-transform: uppercase;
   }
 }
`
