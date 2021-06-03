import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Chemfacultypage = () => (
  <Deplayout>
    <SEO title="Chemistry|Faculty" />
    <Facultypage url="che" dept="Chemistry Department" />
  </Deplayout>
)

export default Chemfacultypage
