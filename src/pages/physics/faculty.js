import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Phyfaculty from "../../components/departments/phy/phyfaculty"

const Phyfacultypage = () => (
  <Deplayout>
    <SEO title="Physics|Faculty" />
    <Phyfaculty />
  </Deplayout>
)

export default Phyfacultypage
