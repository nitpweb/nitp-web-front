import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Chemfaculty from "../../components/departments/chem/chemfaculty"

const Chemfacultypage = () => (
  <Deplayout>
    <SEO title="Chemistry|Faculty" />
    <Chemfaculty />
  </Deplayout>
)

export default Chemfacultypage
