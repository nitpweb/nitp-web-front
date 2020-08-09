import React from "react"
import Deplayout from "../components/deplayout"
import SEO from "../components/seo"
import Mehomepage from "../components/departments/me/mehome"

const Mehome = () => (
  <Deplayout>
    <SEO title="ME" />
    <Mehomepage />
  </Deplayout>
)

export default Mehome
