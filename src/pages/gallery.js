import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainGallery from "../components/gallery/Extendedgallery"

const ExtendedGallery = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <MainGallery />
    </Layout>
  )
}

export default ExtendedGallery
