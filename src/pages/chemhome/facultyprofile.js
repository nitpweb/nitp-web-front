import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Chemfacultyprofile from "../../components/global/facultyprofile"

const Chemfacultyprofilepage = ({ location }) => {
  if (location.state) {
    return (
      <Deplayout>
        <SEO title="Chemistry|Faculty Profile" />
        <Chemfacultyprofile url={location.state.url} />
      </Deplayout>
    )
  } else {
    return null
  }
}

export default Chemfacultyprofilepage
