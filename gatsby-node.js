const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const Projects = graphql(`
    {
      allSanityProject {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.allSanityProject.edges.forEach(({ node }) => {
      createPage({
        path: node.slug.current,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          slug: node.slug.current,
        },
      })
    })
  })

  const Personal = graphql(`
    {
      allSanityPersonal {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.allSanityPersonal.edges.forEach(({ node }) => {
      createPage({
        path: node.slug.current,
        component: path.resolve(`./src/templates/personal.js`),
        context: {
          slug: node.slug.current,
        },
      })
    })
  })
  return Promise.all([Projects, Personal])
}
