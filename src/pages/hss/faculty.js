import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Hssfacultypage = () => (
  <Deplayout>
    <SEO title="HSS|Faculty" />
    <Facultypage url="hss" dept="Humanitites & Social Sciences" />
  </Deplayout>
)

export default Hssfacultypage
