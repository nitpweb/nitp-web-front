import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Facultypage from "../components/departments/faculty"

const Facultiespage = () => (
 <Layout>
  <SEO title="Faculties" />
  <Facultypage url="faculties" title="Faculty of NIT Patna" />
 </Layout>
)

export default Facultiespage
