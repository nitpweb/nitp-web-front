import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Archfacultypage = () => (
 <Layout>
  <SEO title="Architecture|Faculty" />
  <Facultypage url="arch" dept="Architecture Department" />
 </Layout>
)

export default Archfacultypage
