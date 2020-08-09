import React from "react"
import Deplayout from "../components/deplayout"
import SEO from "../components/seo"
import Physicshomepage from "../components/departments/physics/physicshome"

const Physicshome = () => (
  <Deplayout>
    <SEO title="Physics" />
    <Physicshomepage />
  </Deplayout>
)

export default Physicshome
