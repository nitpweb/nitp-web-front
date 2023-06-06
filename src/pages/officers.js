import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Facultypage from "../components/departments/faculty"

const Officerspage = () => (
 <Layout>
  <SEO title="Officers" />
  <Facultypage url="officers" title="Officers of NIT Patna" />
 </Layout>
)

export default Officerspage
