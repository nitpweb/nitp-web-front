import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TabPage } from "../components/styles/tabpage"
import acadData from "../components/academics/acadData"

const Nirf = () => {
 let i = 0
 return (
  <Layout>
   <SEO title="Other Links" />
   <TabPage>
    <div className="mainDiv">
     {
      <>
       <h1 style={{ fontFamily: `Source Sans Pro` }}>
        10th Convocation, 25th December 2021
       </h1>
       {acadData.convocation.map(item => (
        <div className="row rowmarl3" key={++i}>
         <div className="digital">
          {/* <h3>{item.title}</h3> */}

          {item.data.map(e => (
           <a
            href={e.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: `none` }}
           >
            <p
             style={{
              borderBottom: `1px dotted black`,
              padding: `0.5rem 0`,
              width: `fit-content`,
              margin: `0 1rem`,
              fontWeight: `bold`,
             }}
            >
             {e.para}
            </p>
           </a>
          ))}
         </div>
        </div>
       ))}
      </>
     }
    </div>
   </TabPage>
  </Layout>
 )
}

export default Nirf
