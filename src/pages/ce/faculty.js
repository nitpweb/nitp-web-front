import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Cefacultypage = () => (
 <Layout>
  <SEO title="CE|Faculty" />
  <Facultypage url="ce" dept="Civil Engineering" />
 </Layout>
)

export default Cefacultypage
