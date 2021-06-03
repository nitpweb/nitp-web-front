import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Archfacultypage = () => (
  <Deplayout>
    <SEO title="ME|Faculty" />
    <Facultypage url="me" dept="Mechanical Engineering" />
  </Deplayout>
)

export default Archfacultypage
