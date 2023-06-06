import React from "react"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"
import Layout from "../../components/layout"

const Mathfacultypage = () => (
 <Layout>
  <SEO title="Mathematics|Faculty" />
  <Facultypage url="maths" dept="Mathematics" />
 </Layout>
)

export default Mathfacultypage
