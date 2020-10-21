import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Ecefaculty from "../../components/departments/ece/ecefaculty"

const Ecefacultypage = () => (
  <Deplayout>
    <SEO title="ECE|Faculty" />
    <Ecefaculty />
  </Deplayout>
)

export default Ecefacultypage
