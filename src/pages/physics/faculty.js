import React from "react"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"
import Layout from "../../components/layout"

const Phyfacultypage = () => (
 <Layout>
  <SEO title="Physics|Faculty" />
  <Facultypage url="phy" dept="Physics Department" />
 </Layout>
)

export default Phyfacultypage
