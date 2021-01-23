import React from "react"

import { Box, Button, useMediaQuery, useTheme } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

export default function Navigation(props) {
  console.log("props", props)
  return (
    <AppBar position="sticky" component="nav">
      <Toolbar>
        <Link href="/">
          <Button color="inherit" variant="text">
            Home Page
          </Button>
        </Link>
        <Link to="/">Home Page</Link>
        {/* <Link href="/posts/hello-world">
          <Button color="inherit" variant="text">
            Hello world
          </Button>
        </Link> */}
      </Toolbar>
    </AppBar>
  )
}
