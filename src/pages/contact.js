import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import Navigation from "../components/header/navigation"
import Logo from "../components/header/logo"

import { Styles } from "../components/styles/styles"

const Contact = () => {
  const Font = createGlobalStyle`
  body {
    font: "nunito", sans-serif;
  }`
  return (
    <Wrapper>
      {/* <ContactNav>
        <Link to="/">
          <Logo color="#4FACFE">{`<AG>`}</Logo>
        </Link>
      </ContactNav> */}
      <Font />
      <form name="contact-me" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact-me" />
        <h1>Contact me</h1>
        <div>
          <label for="name">Name</label>
          <input id="name" name="user_name" placeholder="Name" required />
        </div>
        <div>
          <label for="text">Message</label>
          <textarea name="user_text" id="text" placeholder="Message" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <img
        srcset="https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_300/v1567235246/portfolio/contactPageHero.png 300w,
      https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_600/v1567235246/portfolio/contactPageHero.png 600w,
      https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_900/v1567235246/portfolio/contactPageHero.png 900w"
        sizes="100%"
        src="https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,q_auto:best,w_300/v1567235246/portfolio/contactPageHero.png"
        alt="illustration of person looking at messages"
      />
    </Wrapper>
  )
}

export default Contact

const ContactNav = styled(Navigation)`
  padding-bottom: 4rem;
  a {
    padding: 1rem 0;
  }
`

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 1rem;
  display: grid;
  grid-template-rows: 10vh 50vh 40vh;
  form {
    display: grid;
  }
  div {
    &:focus-within {
      label {
        opacity: 1;
      }
    }
  }

  h1 {
    font-size: 2rem;
  }
  img {
    height: 40vh;
    max-height: 200px;
    align-self: flex-end;
    justify-self: flex-end;
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
    padding: 0.5rem;
    /* outline */
    &:focus {
      outline: 2px solid ${Styles.Blue};
      &::placeholder {
        opacity: 0;
      }
    }
  }
  input {
    margin-bottom: 0.5rem;
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
    font-size: 1.25rem;
    padding: 0.25rem;
  }
`
