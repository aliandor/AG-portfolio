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
  /* min-height: 50vh; */
  padding: 1rem;
  /* background: tomato; */
`

const Card = styled.div`
  will-change: transform, opacity;
  width: 100%;
  height: auto;
  border-radius: 5px;
  height: 170px;
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
    /* margin: auto 0; */
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.25rem;
      padding: 0 1rem 0.6rem 1rem;
    }
    a {
      font-size: 1.25rem;
      font-weight: 800;
      color: ${Styles.Blue};
    }
  }
`
