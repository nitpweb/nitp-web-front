import React,{useState}from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useQueryParam } from "use-query-params"

import { TabPage } from "../components/styles/tabpage"
import acadData from "../components/academics/acadData"

const Newacad = () => {
  const [id] = useQueryParam("id")
  

  return (
    <Layout>
      <SEO title="Digital Initiatives" />
      <TabPage>
{id=="digital"?<div className="mainDiv">
          <h1 style={{ fontFamily: `Source Sans Pro`, color:`#941b0c` }}>
            Digital Initiatives of NIT Patna
          </h1>
          {acadData.data0.map(item => (
            <div id="digital">
              <h3>{item.title}</h3>

              {item.links.map(e => (
                <a href={e} style={{textDecoration:`none`}}>
                  <p>{e}</p>
                </a>
              ))}
            </div>
          ))}
        </div>:""}
      </TabPage>
    </Layout>
  )
}

export default Newacad
