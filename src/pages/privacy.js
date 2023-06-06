import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TabPage } from "../components/styles/tabpage"
import acadData from "../components/academics/acadData"

const Privacy = () => {
 let i = 0
 return (
  <Layout>
   <SEO title="Other Links" />
   <TabPage>
    <div className="mainDiv">
     {acadData.privacy.map(item => (
      <>
       <h1 style={{ fontFamily: `Source Sans Pro` }}>{item.heading}</h1>
       <div className="row rowmarl3 rowmarr3" key={++i}>
        <div className="digital">
         {item.data.map(e => (
          <>
           <h3>{e.title}</h3>
           <p
            style={{
             padding: `0.5rem 0`,
             width: `fit-content`,
             margin: `0 1rem`,
             fontWeight: `bold`,
            }}
           >
            {e.para}
           </p>
          </>
         ))}
        </div>
       </div>
      </>
     ))}
    </div>
   </TabPage>
  </Layout>
 )
}

export default Privacy
