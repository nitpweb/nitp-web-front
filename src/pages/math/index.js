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
 activities,
 vision,
 contact,
 datalist,
 research,
} from "../../components/departments/math/mathhome"
const Math = () => (
 <Layout>
  <SEO title="Mathematics" />
  <Dephomepage
   routeName={routeName}
   title={title}
   TitleDescription={titleDescription}
   About={about}
   Mission={mission}
   Vision={vision}
   Contact={contact}
   Research={research}
   Activities={activities}
   datalist={datalist}
  />
 </Layout>
)

export default Math
