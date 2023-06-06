import React from "react"
import Innovationpage from "../components/global/Innovationpage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useQueryParam } from "use-query-params"
import ReadInn from "../components/readinn"

const Innovation = () => {
 const [id] = useQueryParam("id")

 return (
  <Layout>
   <SEO title="Innovation" />
   <div className="InnovationPage">
    {id && String(id).length != 0 ? <ReadInn id={id} /> : <Innovationpage />}
   </div>
  </Layout>
 )
}

export default Innovation
