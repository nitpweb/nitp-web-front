import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ForbiddenPage = () => {
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
   <SEO title="403: Forbidden" />
   <h1>FORBIDDEN</h1>
   <p>
    You are not authorized to access this resource. You are being redirected to
    the homepage in {second}s.
   </p>
  </Layout>
 )
}

export default ForbiddenPage
