import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Noticepage from "../components/noticepage"

const Notice = () => (
 <Layout>
  <SEO title="Notices" />
  <Noticepage type="all" />
 </Layout>
)

export default Notice
