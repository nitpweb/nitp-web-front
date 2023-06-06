import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Ecefacultypage = () => (
 <Layout>
  <SEO title="ECE | Faculty" />
  <Facultypage url="ece" dept="Electronics and Communication Engineering" />
 </Layout>
)

export default Ecefacultypage
