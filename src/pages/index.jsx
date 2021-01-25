import React from "react"
// import { graphql } from "gatsby"
// import { fetchMenu } from "../api"
import { Layout } from "../components/layout"

export default function index(props) {
  console.log("props", props)
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  )
}

// export const query = graphql`
//   query fetchMenu {
//     allWpMenu {
//       edges {
//         node {
//           id
//           slug
//           menuItems {
//             nodes {
//               id
//               url
//               label
//             }
//           }
//         }
//       }
//     }
//   }
// `
