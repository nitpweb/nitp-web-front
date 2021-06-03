import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Eefacultypage = () => (
  <Deplayout>
    <SEO title="EE|Faculty" />
    <Facultypage url="ee" dept="Electrical Engineering"/>
  </Deplayout>
)

export default Eefacultypage
