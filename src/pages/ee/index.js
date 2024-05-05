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
 Outcomes,
 research,
} from "../../components/departments/ee/eehome"
const Ee = () => (
 <Layout>
  <SEO title="Ee" />
  <Dephomepage
   routeName={routeName}
   title={title}
   TitleDescription={titleDescription}
   About={about}
   Mission={mission}
   Vision={vision}
   Contact={contact}
   Research={research}
   Labs={labs}
   Achievements={achievements}
   Activities={activities}
   datalist={datalist}
   Outcomes={Outcomes}
  />
 </Layout>
)

export default Ee
