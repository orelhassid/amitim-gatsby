const path = require(`path`)
// const chunk = require(`lodash/chunk`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "WpPage") {
    console.log("node onCreateNode", node)
    createNodeField({
      node,
      name: `slug`,
      value: slugGenerator(node.title),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allWpPage {
        edges {
          node {
            id
            title
            slug
            content
          }
        }
      }
    }
  `)

  result.data.allWpPage.edges.forEach(({ node }) => {
    console.log("result.data.allWpPage.edges", node)
    createPage({
      path: slugGenerator(node.title),
      component: path.resolve(`./src/templates/page-template.jsx`),
      context: {
        page: node,
      },
    })
  })
}

function slugGenerator(string) {
  // const english = /^[A-Za-z0-9]*$/;
  const slug = string.toLowerCase().replace(/-+/g, "").replace(/\s+/g, "-")

  console.log("slug", (slug, string))
  return slug
}
