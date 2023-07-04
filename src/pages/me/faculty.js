import React from "react"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"
import Layout from "../../components/layout"

const Archfacultypage = () => (
 <Layout>
  <SEO title="ME|Faculty" />
  <Facultypage url="me" dept="Mechanical Engineering" />
 </Layout>
)

export default Archfacultypage
