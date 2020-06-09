/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./styles/base.css"
import Logo from './header/logo'
import Navigation from './header/navigation'
import Footer from "./footer"

const Layout = ({ className, children }) => {
  return (
    <div>
      <Logo />
      <div className={className}>{children}</div>
      <Navigation />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
