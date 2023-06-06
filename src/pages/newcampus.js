import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Noticepage from "../components/noticepage"

const NewCampus = () => (
 <Layout>
  <SEO title="New Campus Notices " />
  <Noticepage type="newcampus" title="New Campus Notices" />
 </Layout>
)

export default NewCampus
