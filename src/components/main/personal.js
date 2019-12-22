import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Styles } from "../styles/styles"

// trying changing gatsby images to fixed

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

  const [isFlipped, flip] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
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
            <img src={item.hero.asset.url} alt="" />
          </animated.div>
          <animated.div
            className="info"
            style={{
              opacity,
              transform: transform.interpolate(t => `${t} rotateX(180deg)`),
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
`
const Card = styled.div`
  width: 100%;
  max-width: 400px;

  height: 159px;
  .hero {
    box-shadow: ${Styles.cardBoxShadow};
    backface-visibility: hidden;
    height: inherit;
    border-radius: 5px;
    position: absolute;
    width: calc(100% - 2rem);
    max-width: inherit;
    img {
      height: inherit;
      max-height: 180px;
      border-radius: 5px;
      width: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
  .info {
    padding: 1rem;
    width: calc(100% - 2rem);
    max-width: inherit;
    border-radius: 5px;
    box-shadow: ${Styles.cardBoxShadow};
    backface-visibility: hidden;
    position: absolute;
    height: inherit;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.25rem;
      overflow: scroll;
    }
    a {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${Styles.Blue};
      width: 100px;
      margin: auto;
    }
  }
`
