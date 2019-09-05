const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
            projectName
            concept
            role
            theDetails
          }
        }
      }
    }
  `).then(result => {
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
}

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allSanityPersonal(filter: { slug: { current: { ne: null } } }) {
//         edges {
//           node {
//             slug {
//               current
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allSanityProject.edges.forEach(({ node }) => {
//       createPage({
//         path: node.slug.current,
//         component: path.resolve(`./src/templates/personal.js`),
//         context: {
//           slug: node.slug.current,
//         },
//       })
//     })
//   })
// }
