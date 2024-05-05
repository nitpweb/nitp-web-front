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
 activities,
 vision,
 contact,
 research,
 datalist,
} from "../../components/departments/ce/cehome"
const Ce = () => (
 <Layout>
  <SEO title="CE" />
  <Dephomepage
   routeName={routeName}
   title={title}
   TitleDescription={titleDescription}
   Research={research}
   About={about}
   Mission={mission}
   Vision={vision}
   Contact={contact}
   Labs={labs}
   Activities={activities}
   datalist={datalist}
  />
 </Layout>
)
export default Ce
