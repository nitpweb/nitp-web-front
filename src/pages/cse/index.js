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
 research,
 labs,
 achievements,
 activities,
 vision,
 Outcomes,
 contact,
 timetable,
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
   Outcomes={Outcomes}
   Mission={mission}
   Vision={vision}
   Contact={contact}
   Research={research}
   Labs={labs}
   Achievements={achievements}
   Activities={activities}
   TimeTable={timetable}
   datalist={datalist}
  />
 </Layout>
)

export default Cse
