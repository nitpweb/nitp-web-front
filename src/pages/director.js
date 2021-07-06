import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Directorpage from "../components/director"
import { TabPage } from "../components/styles/tabpage"
const Director = () => (
  <Layout>
    <SEO title="Director's Desk" />
    <TabPage>
    <div className="mainDiv">
    <Directorpage />
    </div>
    </TabPage>
  </Layout>
)

export default Director
