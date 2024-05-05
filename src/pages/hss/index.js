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
 // achievements,
 activities,
 vision,
 Outcomes,
 contact,
 timetable,
 datalist,
 research,
} from "../../components/departments/hss/hsshome"
const Hss = () => (
 <Layout>
  <SEO title="HSS" />
  <Dephomepage
   routeName={routeName}
   title={title}
   TitleDescription={titleDescription}
   About={about}
   Research={research}
   Outcomes={Outcomes}
   Mission={mission}
   Vision={vision}
   Contact={contact}
   Labs={labs}
   // Achievements={achievements}
   Activities={activities}
   TimeTable={timetable}
   datalist={datalist}
  />
 </Layout>
)

export default Hss
