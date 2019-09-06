import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Navigation from "../components/header/navigation"
import Layout from "../components/layout"

import { Styles } from "../components/styles/styles"

const Contact = () => {
  return (
    <Layout>
      <SEO title="contact" />
      <Wrapper>
        <Navigation />
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
  width: 200px;
  padding: 2rem;
  align-self: center;
  @media (min-width: 768px) and (orientation: portrait) {
    /* tablet */
    width: 400px;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    /* tablet landscape & laptop*/
    width: 400px;
  }
`

const FormField = styled.div`
  display: flex;
`
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  justify-content: flex-start;
  form {
    display: grid;
    grid-template-rows: 50px 120px 50px;
    grid-row-gap: 1.25rem;
    padding: 1rem;
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
    padding: 1rem;
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
    background: ${Styles.Blue}55;
    border: none;
    padding: 8px;
    &:focus {
      outline: 2px solid ${Styles.Blue};
      &::placeholder {
        opacity: 0;
      }
    }
  }
  textarea {
    height: 120px;
  }
  button {
    width: 100%;
    background: ${Styles.Blue};
    border: none;
    color: white;
    font-weight: 600;
    padding: 0.5rem;
  }
  @media (min-width: 768px) and (orientation: portrait) {
    form {
      grid-row-gap: 2.5rem;
    }
    h1 {
      font-size: 3rem;
    }
    input {
      height: 60px;
    }
    textarea {
      height: 120px;
    }
    button {
      font-size: 1.75rem;
    }
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    form {
      grid-row-gap: 2.5rem;
    }
    h1 {
      font-size: 3rem;
    }
    input {
      height: 60px;
    }
    textarea {
      height: 120px;
    }
    button {
      font-size: 1.75rem;
    }
  }
`
