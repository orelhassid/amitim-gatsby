/* eslint-disable import/prefer-default-export, react/prop-types */
import React from "react"
import { Wrapper } from "./src/components/layout"

export const wrapRootElement = ({ element }) => {
  return <Wrapper>{element}</Wrapper>
}
