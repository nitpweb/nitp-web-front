import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Archfacultypage = () => (
  <Deplayout>
    <SEO title="Architecture|Faculty" />
    <Facultypage url="arch" dept="Architecture Department" />
  </Deplayout>
)

export default Archfacultypage
