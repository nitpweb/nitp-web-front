import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Cefacultypage = () => (
  <Deplayout>
    <SEO title="CE|Faculty" />
    <Facultypage url="ce" dept="Civil Engineering" />
  </Deplayout>
)

export default Cefacultypage
