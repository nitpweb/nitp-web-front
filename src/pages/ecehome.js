import React from "react"
import Deplayout from "../components/deplayout"
import SEO from "../components/seo"
import Ecehomepage from "../components/departments/ece/ecehome"

const Ecehome = () => (
  <Deplayout>
    <SEO title="ECE" />
    <Ecehomepage />
  </Deplayout>
)

export default Ecehome
