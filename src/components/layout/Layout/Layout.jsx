import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import parse from "html-react-parser"
import Navigation from "../Navigation/Navigation"
import "../../../theme/styles.css"

const Layout = ({ children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper">
      <Navigation />

      <main>{children}</main>
    </div>
  )
}

export default Layout

/* <header className="global-header">
  {isHomePage ? (
    <h1 className="main-heading">
      <Link to="/">{parse(title)}</Link>
    </h1>
  ) : (
    <Link className="header-link-home" to="/">
      {title}
    </Link>
  )}
</header> */
