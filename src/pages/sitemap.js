import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ComponentName = ({ data }) => (
  <Layout>
  <SEO title="site map" />
  <div className="row rowmarl3" style={{marginTop:`4rem`}}>
  <pre>{data.allSitePage.edges.map(item=><><Link to={item.node.path} style={{textTransform: `capitalize`,paddingLeft:`2rem`,fontFamily:`Source Sans Pro`,textDecoration:`none`,fontWeight:`600`,margin:`0.3rem 0`}}>▪ {" "} {String(item.node.path).slice(1,-1)}</Link><br/></>)}</pre>
  </div>
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
