import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Newspage from "../components/global/newspage"
import { useQueryParam } from "use-query-params"
import ReadNews from "../components/readnews"

const News = () => {
 const [id] = useQueryParam("id")

 return (
  <Layout>
   <SEO title="News" />
   {id && String(id).length != 0 ? <ReadNews id={id} /> : <Newspage />}
  </Layout>
 )
}

export default News
