import React from "react"
import { fetchMenu } from "../api"

export default function index(props) {
  console.log("props", props)
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export const pageQuery = fetchMenu()
