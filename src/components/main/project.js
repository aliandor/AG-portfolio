import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
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

  const [isFlipped, flip] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
    // config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <Wrap>
      {data.allSanityProject.edges.map(({ node: item }) => (
        <Card onClick={() => flip(isFlipped => !isFlipped)}>
          <animated.div
            className="hero"
            style={{
              opacity: opacity.interpolate(o => 1 - o),
              transform,
            }}
          >
            <Img
              className="img"
              fluid={item.hero.asset.fluid}
              alt="websites landing page"
            />
          </animated.div>
          <animated.div
            className="info"
            style={{
              opacity,
              transform: transform.interpolate(t => `${t} rotateY(180deg)`),
            }}
          >
            <h2>{item.projectName}</h2>
            <p>{item.summary}</p>
            <Link isFlipped to={`/${item.slug.current}`}>
              View
            </Link>
          </animated.div>
        </Card>
      ))}
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
  padding: 1rem;
  max-width: 600px;
`

const Card = styled.section`
  will-change: transform, opacity;
  width: 100%;
  height: 180px;
  border-radius: 5px;
  .hero {
    position: absolute;
    width: inherit;
    height: inherit;
    overflow: hidden;
    border-radius: inherit;
    box-shadow: ${Styles.cardBoxShadow};
    .img {
    }
  }
  .info {
    box-shadow: ${Styles.cardBoxShadow};
    border-radius: inherit;
    backface-visibility: hidden;
    position: absolute;
    width: inherit;
    height: inherit;
    padding: 1rem;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    h2 {
      font-size: 5vh;
    }
    p {
      font-size: 3.5vh;
    }
    a {
      font-size: 3.5vh;
      font-weight: 800;
      color: ${Styles.Blue};
      width: 100px;
    }
  }
`
