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
} from "../../components/departments/arch/archhome"
const Arch = () => (
  <Deplayout>
    <SEO title="Architecture" />
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

export default Arch
