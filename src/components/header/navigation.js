import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./logo"

const Navigation = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <Link to="about">
          <img
            src="https://res.cloudinary.com/dnsdvh13n/image/upload/v1567029438/portfolio/profile.svg"
            alt="profile by Juan Carlos Altamirano from the Noun Project"
          />
        </Link>
        <Link to="contact">
          <img
            src="https://res.cloudinary.com/dnsdvh13n/image/upload/v1567629319/portfolio/email.svg"
            alt="Email by Alfred Brave from the Noun Project"
          />
        </Link>
      </div>
    </Nav>
  )
}

export default Navigation

const Nav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 1rem;
  @media (min-width: 768px) and (orientation: portrait) {
    /* tablet */
    padding: 1rem 2rem;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    padding: 1rem 2rem;
  }
  div {
    /* border: 1px solid; */
    width: 66px;
    height: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 768px) and (orientation: portrait) {
      /* tablet */
      width: 77px;
      img {
        width: 2rem;
      }
    }
    @media (min-width: 1024px) and (orientation: landscape) {
      /* tablet landscape & laptop*/
      font-size: 2rem;
      width: 77px;
      img {
        width: 2rem;
      }
    }
  }
`
