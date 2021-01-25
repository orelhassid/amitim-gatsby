import React from "react"

import { Button } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { graphql, Link, useStaticQuery } from "gatsby"
import { slugGenerator } from "../../../utils/string"
export default function Navigation(props) {
  const data = useStaticQuery(graphql`
    query fetchMenuItems {
      allWpMenuItem {
        edges {
          node {
            id
            label
            url
          }
        }
      }
    }
  `)
  const items = data.allWpMenuItem.edges

  return (
    <AppBar position="sticky" component="nav">
      <Toolbar>
        {items.map(({ node: item }) => (
          <Button
            key={item.id}
            color="inherit"
            variant="text"
            component={Link}
            to={`/${slugGenerator(item.label)}`}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}
