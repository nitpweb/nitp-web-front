import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Dephomepage from "../components/departments/dephome"
import {
 routeName,
 title,
 titleDescription,
 about,
 MoU,
 Administration,
 RCC,
 CallForProposal,
 AssociateInstitutes,
 Gallery,Contact,datalist
    
} from "../components/academics/IsroRac"
import IsroHome from "../components/academics/isroHome"

const isroRacs = () => (
 <Layout>
  <SEO title="ISRO" />
  <IsroHome
   routeName={routeName}
   title={title}
   TitleDescription={titleDescription}
   About={about}
   Administration={Administration}
   MoU={MoU}
   RCC={RCC}
   CallForProposal={CallForProposal}
   AssociateInstitutes={AssociateInstitutes}
   Gallery={Gallery}
   Contact={Contact}
   datalist={datalist}
  />
 </Layout>
)

export default isroRacs;
