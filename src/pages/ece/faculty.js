import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Ecefacultypage = () => (
  <Deplayout>
    <SEO title="ECE|Faculty" />
    <Facultypage url="ece" dept="Electronics and Communication Engineering" />
    <Ecefaculty />
  </Deplayout>
)

export default Ecefacultypage
