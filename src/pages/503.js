import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServiceUnavailablePage = () => {
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
   <SEO title="503: Service Unavailable" />
   <h1>SERVICE UNAVAILABLE</h1>
   <p>
    The server is currently unavailable. Please try again later. You are being
    redirected to the homepage in {second}s.
   </p>
  </Layout>
 )
}

export default ServiceUnavailablePage
