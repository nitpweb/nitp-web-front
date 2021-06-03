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
} from "../../components/departments/me/mehome"
const Me = () => (
  <Deplayout>
    <SEO title="Me" />
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

export default Me
