import React from "react"
import Deplayout from "../components/Deplayout"
import SEO from "../components/seo"
import Chemhomepage from "../components/departments/chem/chemhome"

const Chemhome = () => (
  <Deplayout>
    <SEO title="Chemistry" />
    <Chemhomepage />
  </Deplayout>
)

export default Chemhome
