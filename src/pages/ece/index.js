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
 research,
} from "../../components/departments/ece/ecehome"
const Ece = () => (
 <Layout>
  <SEO title="ECE" />
  <Dephomepage
   routeName={routeName}
   title={title}
   TitleDescription={titleDescription}
   About={about}
   Mission={mission}
   Vision={vision}
   Research={research}
   Contact={contact}
   Labs={labs}
   Achievements={achievements}
   Activities={activities}
   datalist={datalist}
  />
 </Layout>
)

export default Ece
