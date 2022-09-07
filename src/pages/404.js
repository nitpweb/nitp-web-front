import React,{useEffect, useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { navigate } from "gatsby"

const NotFoundPage = () => {
  const [second, setSecond] = useState(5);
  var total = 5, i=0;
  function manageTime() {
    setSecond(total-i)
    if (++i < 6) {
      setTimeout(manageTime, 1000)
    }
  }

  useEffect(() => {
    setTimeout(manageTime, 0)

    setInterval(()=>{
      navigate("/");
    }, 5000);
  }, [])

  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You requested a URL which does not exist. You are being redirected to homepage in {second}s.</p>
    </Layout >
  )
}

export default NotFoundPage
