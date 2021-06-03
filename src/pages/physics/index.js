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
} from "../../components/departments/phy/phyhome"
const Phy = () => (
  <Deplayout>
    <SEO title="Physics" />
    <Dephomepage
      routeName={routeName}
      title={title}
      TitleDescription={titleDescription}
      About={about}
      Mission={mission}
      Vision={vision}
      Contact={contact}
    />
  </Deplayout>
)

export default Phy
