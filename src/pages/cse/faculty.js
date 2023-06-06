import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Csefacultypage = () => (
 <Layout>
  <SEO title="CSE|Faculty" />
  <Facultypage url="cse" dept="Computer Science and Engineering" />
 </Layout>
)

export default Csefacultypage
