import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TabPage } from "../components/styles/tabpage"

const Nirf = () => {
 let i = 0
 return (
  <Layout>
   <SEO title="Other Links" />
   <TabPage>
    <div className="mainDiv">
     {
      <>
       <h1 style={{ fontFamily: `Source Sans Pro` }}>SC/ST Grievance cell</h1>
       <div className="col-2">
        <div className="row rowmarr5" style={{ fontSize: "1.25rem" }}>
         <p>
          <span style={{ fontWeight: "bold" }}>
           For reporting any grievance related to SC / ST community of NIT
           Patna, kindly use this email ID:{" "}
          </span>{" "}
          <span style={{ fontWeight: "latin", color: "blue" }}>
           sc.st.cell@nitp.ac.in{" "}
          </span>
         </p>
        </div>
       </div>
      </>
     }
    </div>
   </TabPage>
  </Layout>
 )
}

export default Nirf
