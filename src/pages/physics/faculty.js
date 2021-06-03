import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Phyfacultypage = () => (
  <Deplayout>
    <SEO title="Physics|Faculty" />
    <Facultypage url="phy" dept="Physics Department" />
  </Deplayout>
)

export default Phyfacultypage
