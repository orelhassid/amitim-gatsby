import React from "react"
// import { graphql } from "gatsby"

import { Layout } from "../components/layout"

const PageTemplate = ({ pageContext }) => {
  console.log("Page Template props", pageContext?.page)
  const { title } = pageContext?.page

  return (
    <Layout>
      {/* <SEO title={post.title} description={post.excerpt} /> */}
      <h1>Hello World! Page Template</h1>
      <h1>{title}</h1>
    </Layout>
  )
}

export default PageTemplate

// export const pageQuery = graphql``
