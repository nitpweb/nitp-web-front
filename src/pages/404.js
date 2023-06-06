import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { navigate } from "gatsby"

const NotFoundPage = () => {
 const [second, setSecond] = useState(6)
 function manageTime() {
  setSecond(second => second - 1)
  if (second >= 0) {
   setTimeout(manageTime, 1000)
  }
 }

 useEffect(() => {
  setTimeout(manageTime, 0)

  setTimeout(() => {
   navigate("/")
  }, 5000)
 }, [])

 return (
  <Layout>
   <SEO title="404: Not found" />
   <h1>NOT FOUND</h1>
   <p>
    You requested a URL which does not exist. You are being redirected to
    homepage in {second}s.
   </p>
  </Layout>
 )
}

export default NotFoundPage
