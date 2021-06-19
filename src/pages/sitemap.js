import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const ComponentName = ({ data }) => <pre>{data.allSitePage.edges.map(item=><><Link to={item.node.path} style={{textTransform: `capitalize`}}>{String(item.node.path).slice(1,-1)}</Link><br/></>)}</pre>

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
