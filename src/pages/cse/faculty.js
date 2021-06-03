import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Csefacultypage = () => (
  <Deplayout>
    <SEO title="CSE|Faculty" />
    <Facultypage url="cse" dept="Computer Science and Engineering" />
  </Deplayout>
)

export default Csefacultypage
