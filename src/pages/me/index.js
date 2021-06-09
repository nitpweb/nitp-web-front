import React from "react"
import SEO from "../../components/seo"
import Dephomepage from "../../components/departments/dephome"
import {
  routeName,
  title,
  titleDescription,
  about,
  mission,
  vision,
  contact,
  datalist
} from "../../components/departments/me/mehome"
import Layout from "../../components/layout"
const Me = () => (
  <Layout>
    <SEO title="Me" />
    <Dephomepage
      routeName={routeName}
      title={title}
      TitleDescription={titleDescription}
      About={about}
      Mission={mission}
      Vision={vision}
      Contact={contact}
      datalist={datalist}
    />
  </Layout>
)

export default Me
