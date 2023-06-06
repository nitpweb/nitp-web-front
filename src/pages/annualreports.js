import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import acadData from "../components/academics/acadData"
import { TabPage } from "../components/styles/tabpage"

const AnnualReports = () => (
 <Layout>
  <SEO title="Annual Reports" />
  <TabPage>
   <div className="mainDiv">
    <div className="layoutrow layoutrow1 rowmarl3" id="annualreports">
     <div>
      <div className="row">
       <h1 style={{ marginBottom: `1rem` }}>Annual Reports</h1>
      </div>
      {acadData.annualreports.map(e => (
       <div className="row rowmarr3 digital">
        <div>
         <h3>{e.title}</h3>
         {e.data.map(item => (
          <>
           <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: `none` }}
           >
            <li>{item.para}</li>
           </a>
          </>
         ))}
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </TabPage>
 </Layout>
)

export default AnnualReports
