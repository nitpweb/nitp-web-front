import React from "react"
import Home from "../components/home"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Initial_popup from "../components/home/initial_popup"

const IndexPage = () => (
  <>
    <Initial_popup/>
    <Layout>
      <SEO title="NIT Patna" />
      <Home />
    </Layout>
  </>
)

export default IndexPage
