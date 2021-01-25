import { graphql } from "gatsby"

export const queryMenuItems = graphql`
  query fetchMenu {
    allWpMenu {
      edges {
        node {
          id
          slug
          menuItems {
            nodes {
              id
              url
              label
            }
          }
        }
      }
    }
  }
`
