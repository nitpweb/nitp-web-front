import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { string } from "prop-types"
import { TabPage } from "../components/styles/tabpage"

const ComponentName = ({ data }) => (
 <Layout>
  <SEO title="site map" />
  <TabPage>
   <div className="mainDiv">
    <>
     {data.allSitePage.edges.map(item => (
      <>
       {String(item.node.path).slice(1, -1) != "404" &&
       String(item.node.path).slice(1, -1) != "dev-404-page" &&
       String(item.node.path).slice(1, -1) != "" &&
       String(item.node.path).slice(1, -1) != "404.htm" &&
       String(item.node.path).slice(1, -1) != "sitemap" ? (
        <div className="row rowmarl3 digital">
         <Link
          to={item.node.path}
          style={{
           textTransform: "capitalize",
           paddingLeft: `2rem`,
           fontFamily: `Source Sans Pro`,
           textDecoration: `none`,
           fontWeight: `600`,
          }}
         >
          ▪ {String(item.node.path).slice(1, -1)}
         </Link>
         <br />
        </div>
       ) : (
        ""
       )}
      </>
     ))}
    </>
   </div>
  </TabPage>
 </Layout>
)

export const query = graphql`
 {
  allSitePage {
   edges {
    node {
     path
    }
   }
  }
 }
`

export default ComponentName
