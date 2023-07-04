import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Facultypage from "../../components/departments/faculty"

const Eefacultypage = () => (
 <Layout>
  <SEO title="EE|Faculty" />
  <Facultypage url="ee" dept="Electrical Engineering" />
 </Layout>
)

export default Eefacultypage
