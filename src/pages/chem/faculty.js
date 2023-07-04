import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Chemfacultypage = () => (
 <Layout>
  <SEO title="Chemistry|Faculty" />
  <Facultypage url="che" dept="Chemistry Department" />
 </Layout>
)

export default Chemfacultypage
