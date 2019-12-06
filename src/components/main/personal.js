import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
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

  const [isFlipped, flip] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${isFlipped ? 180 : 0}deg)`,
    // config: { mass: 5, tension: 500, friction: 80 },
  })
  return (
    <Wrap>
      {data.allSanityPersonal.edges.map(({ node: item }) => (
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
  padding: 1rem;
`

const Card = styled.section`
  width: 90vw;
  max-width: 300px;
  height: 160px;
  /* border: 2px solid tomato; */
  border-radius: 8px;
  will-change: transform, opacity;
  .hero {
    position: absolute;
    width: inherit;
    height: inherit;
    overflow: hidden;
    border-radius: inherit;
    box-shadow: ${Styles.cardBoxShadow};
    .img {
      height: 100%;
    }
  }
  .info {
    box-shadow: ${Styles.cardBoxShadow};
    position: absolute;
    width: inherit;
    height: inherit;
    padding: 0.5rem;
    display: grid;
    text-align: center;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
      padding-bottom: 0.5rem;
    }
    a {
      color: ${Styles.Blue};
      font-weight: 600;
      font-size: 1.25rem;
    }
  }
`
