import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Navigation from "../components/header/navigation"
import Logo from "../components/header/logo"
import Layout from "../components/layout"

import { Styles } from "../components/styles/styles"

const Contact = () => {
  return (
    <Layout>
      <Wrapper>
        <ContactNav>
          <Link to="/">
            <Logo color="#4FACFE">{`<AG>`}</Logo>
          </Link>
          <Link to="/about">
            <NavImg
              src="https://res.cloudinary.com/dnsdvh13n/image/upload/v1567029438/portfolio/profile.svg"
              alt="profile by Juan Carlos Altamirano from the Noun Project"
            />
          </Link>
        </ContactNav>
        <h1>Contact me</h1>
        <form name="contact-me" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="contact-me" />
          <FormField>
            <label for="name">Name</label>
            <input id="name" name="user_name" placeholder="Name" required />
          </FormField>
          <FormField>
            <label for="text">Message</label>
            <textarea
              name="user_text"
              id="text"
              placeholder="Message"
              required
            />
          </FormField>
          <button type="submit">Submit</button>
        </form>
        <Hero
          srcset="https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_300/v1567235246/portfolio/contactPageHero.png 300w,
      https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_600/v1567235246/portfolio/contactPageHero.png 600w,
      https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_900/v1567235246/portfolio/contactPageHero.png 900w"
          sizes="100%"
          src="https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_300/v1567235246/portfolio/contactPageHero.png"
          alt="illustration of person looking at messages"
        />
      </Wrapper>
    </Layout>
  )
}

export default Contact

//  TODO: work on landscape look //

const Hero = styled.img`
  width: 60vh;
  max-width: 200px;
  padding: 2rem;
  align-self: flex-end;
  @media (min-width: 375px) and (orientation: portrait) {
    max-width: 260px;
  }
`

const FormField = styled.div`
  display: flex;
`

const ContactNav = styled(Navigation)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 50px;
  padding: 1rem 0;
`

const NavImg = styled.img`
  @media (min-width: 568px) and (orientation: landscape) {
    height: 20px;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    height: 40px;
  }
`

const Wrapper = styled.div`
  height: 100vh;
  padding: 0 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  justify-content: flex-start;
  form {
    display: grid;
    grid-row-gap: 1.25rem;
  }
  div {
    &:focus-within {
      label {
        opacity: 1;
        transform: translateX(0rem) translateY(-1.1rem);
      }
    }
  }
  h1 {
    font-size: 2rem;
    padding-bottom: 1rem;
    color: #505050;
  }
  label {
    position: absolute;
    transform: translateX(0.5rem) translateY(-1.1rem);
    color: #505050;
    opacity: 0;
  }
  input,
  textarea {
    width: 100%;
    height: 100%;
    background: ${Styles.Blue}55;
    border: none;
    padding: 0.5rem;
    &:focus {
      outline: 2px solid ${Styles.Blue};
      &::placeholder {
        opacity: 0;
      }
    }
  }
  textarea {
    height: 100px;
  }
  button {
    width: 100%;
    background: ${Styles.Blue};
    border: none;
    color: white;
    font-weight: 600;
    padding: 0.5rem;
  }
`
