import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const InternalServerErrorPage = () => {
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
   <SEO title="500: Internal Server Error" />
   <h1>INTERNAL SERVER ERROR</h1>
   <p>
    An unexpected error occurred on the server. We apologize for the
    inconvenience. You are being redirected to the homepage in {second}s.
   </p>
  </Layout>
 )
}

export default InternalServerErrorPage
