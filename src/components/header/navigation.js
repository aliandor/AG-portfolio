import React, { useState } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import styled from "styled-components"
import { Styles } from "../styles/styles"

const Navigation = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Nav
      initial={{ y: 200 }}
      drag="y"
      dragConstraints={{ bottom: 200, top: 0 }}
      onDragStart={() => setMenuOpen(!menuOpen)}
      onDragEnd={() => setMenuToggle(!menuToggle)}
      animate={{ y: menuToggle ? 0 : 200 }}
    >
      <Button
        onClick={() => setMenuToggle(!menuToggle)}
        whileHover={{ scale: 1.1 }}
        animate={{ y: -44 }}
        style={{ y: menuToggle ? 0 : -40 }}
      />
      <Link to="/">Home</Link>
      <Link to="contact">Contact me</Link>
      <Link to="about">About Me</Link>
    </Nav>
  )
}

export default Navigation

const Nav = styled(motion.div)`
  width: 100%;
  height: 200px;
  background: #333437;
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
  li {
    background: inherit;
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
