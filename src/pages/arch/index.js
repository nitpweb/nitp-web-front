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
 vision,
 contact,
 datalist,
 research,
} from "../../components/departments/arch/archhome"
const Arch = () => (
 <Layout>
  <SEO title="Architecture" />
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
   datalist={datalist}
  />
 </Layout>
)

export default Arch
