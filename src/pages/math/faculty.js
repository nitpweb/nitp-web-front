import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Mathfacultypage = () => (
  <Deplayout>
    <SEO title="Mathematics|Faculty" />
    <Facultypage url="maths" dept="Mathematics" />
  </Deplayout>
)

export default Mathfacultypage
