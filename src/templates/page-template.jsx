import React from "react"
// import { graphql } from "gatsby"

import { Layout, SEO } from "../components/layout"

const PageTemplate = ({ pageContext }) => {
  console.log("Page Template props", pageContext?.page)
  const { title, content } = pageContext?.page

  return (
    <Layout>
      <SEO title={title} description={""} />
      {/* <h1>Hello World! Page Template</h1>
      <h1>{title}</h1> */}
      <main dangerouslySetInnerHTML={{ __html: content }}></main>
    </Layout>
  )
}

export default PageTemplate

// export const pageQuery = graphql``
