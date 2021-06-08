import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Dephomepage from "../../components/departments/dephome"
import {
  routeName,
  title,
  titleDescription,
  about,
  mission,
  vision,
  contact,
  datalist
} from "../../components/departments/ce/cehome"
const Ce = () => (
  <Deplayout>
    <SEO title="CE" />
    <Dephomepage
      routeName={routeName}
      title={title}
      TitleDescription={titleDescription}
      About={about}
      Mission={mission}
      Vision={vision}
      Contact={contact}
      datalist={datalist}
    />
  </Deplayout>
)
export default Ce
