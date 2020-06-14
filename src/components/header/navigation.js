import React, { useState } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import styled from "styled-components"
import { Styles } from "../styles/styles"

const Icons = {
  email:
    "https://res.cloudinary.com/dnsdvh13n/image/upload/v1592100584/portfolio/email.png",
  about:
    "https://res.cloudinary.com/dnsdvh13n/image/upload/v1592100584/portfolio/about.svg",
  home:
    "https://res.cloudinary.com/dnsdvh13n/image/upload/v1592100584/portfolio/home.svg",
}

const Navigation = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Nav
      initial={{ y: 140 }}
      drag="y"
      dragConstraints={{ bottom: 140, top: 0 }}
      onDragStart={() => setMenuOpen(!menuOpen)}
      onDragEnd={() => setMenuToggle(!menuToggle)}
      animate={{ y: menuToggle ? 0 : 140 }}
    >
      <Button
        onClick={() => setMenuToggle(!menuToggle)}
        whileHover={{ scale: 1.1 }}
        animate={{ y: -44 }}
        style={{ y: menuToggle ? 0 : -40 }}
      />

      <Link to="/">
        <img
          src={Icons.home}
          alt="home icon by tracy tam from the Noun Project"
        />
      </Link>
      <Link to="contact">
        <img src={Icons.email} alt="Email by Kidiladon from the Noun Project" />
      </Link>
      <Link to="about">
        <img
          src={Icons.about}
          alt="profile by Тимур Минвалеев from the Noun Project"
        />
      </Link>
    </Nav>
  )
}

export default Navigation

const Nav = styled(motion.div)`
  width: 100%;
  height: 140px;
  background: #333437;
  /* background: white; */
  display: grid;
  border-radius: 25px 25px 0 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px 1fr;
  align-items: center;
  justify-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  a,
  img {
    background: inherit;
    width: 50px;
  }
  img {
    width: 100%;
    height: auto;
  }
`
const Button = styled(motion.button)`
  grid-column: 1/-1;
  background: ${Styles.Main};
  box-shadow: ${Styles.cardBoxShadow};
  border: none;
  width: 60px;
  height: 10px;
  padding: 6px;
  border-radius: 10px;
  color: white;
`
