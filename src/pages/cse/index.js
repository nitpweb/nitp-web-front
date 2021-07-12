import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Dephomepage from "../../components/departments/dephome"
import {
  routeName,
  title,
  titleDescription,
  about,
  mission,
  labs,
  achievements,
  activities,
  vision,
  contact,
  datalist,
} from "../../components/departments/cse/csehome"
const Cse = () => (
  <Layout>
    <SEO title="CSE" />
    <Dephomepage
      routeName={routeName}
      title={title}
      TitleDescription={titleDescription}
      About={about}
      Mission={mission}
      Vision={vision}
      Contact={contact}
      Labs={labs}
      Achievements={achievements}
      Activities={activities}
      datalist={datalist}
    />
  </Layout>
)

export default Cse