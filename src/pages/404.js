import React,{useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { navigate } from "gatsby"

const NotFoundPage = () => {
  useEffect(() => {
    setInterval(5000);
    navigate("/");
  }, [])
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You requested a URL which does not exist. You are being redirected to homepage in 5s.</p>
    </Layout >
  )
}

export default NotFoundPage
