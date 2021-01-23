import { graphql } from "gatsby"

export async function fetchMenu() {
  const { data } = await graphql(`
    query MyQuery {
      menu(id: "dGVybToz") {
        id
        menuItems {
          edges {
            node {
              id
              label
              path
              url
              target
              title
            }
          }
        }
        slug
      }
    }
  `)
  return data
}
