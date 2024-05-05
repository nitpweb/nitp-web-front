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
 others,
 vision,
 contact,
 datalist,
 research,
} from "../../components/departments/chem/chemhome"
const Chemistry = () => (
 <Layout>
  <SEO title="Chemistry" />
  <Dephomepage
   routeName={routeName}
   title={title}
   TitleDescription={titleDescription}
   About={about}
   Mission={mission}
   Research={research}
   Vision={vision}
   Contact={contact}
   Labs={labs}
   Achievements={achievements}
   Activities={activities}
   Extras={others}
   datalist={datalist}
  />
 </Layout>
)

export default Chemistry
