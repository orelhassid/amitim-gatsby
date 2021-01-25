/* eslint-disable import/prefer-default-export, react/prop-types */
import React from "react"
import { Wrapper } from "./src/components/layout"

export const wrapRootElement = ({ element }) => {
  document.body.dir = "rtl"
  return <Wrapper>{element}</Wrapper>
}
