import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import acadData from "../components/academics/acadData"
import { TabPage } from "../components/styles/tabpage"

const Magazine = () => (
 <Layout>
  <SEO title="Magazine of NIT Patna" />
  <TabPage>
   <div className="mainDiv">
    <div className="layoutrow layoutrow1 rowmarl3" id="magazine">
     <div>
      <div className="row">
       <h1 style={{ marginBottom: `1rem` }}>Magazine of NIT Patna</h1>
      </div>
      {acadData.magazine.map(e => (
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

export default Magazine
