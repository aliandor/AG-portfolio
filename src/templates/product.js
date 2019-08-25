import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      projectName
      concept
      role
      theDetails
    }
  }
`

export default ({ data }) => {
  const Product = data.sanityProject
  return (
    <div>
      <h1>{Product.projectName}</h1>
      <p>{Product.concept}</p>
      <p>{Product.role}</p>
      <p>{Product.theDetails}</p>
    </div>
  )
}
