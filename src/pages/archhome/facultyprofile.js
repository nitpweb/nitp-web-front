import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Archfacultyprofile from "../../components/global/facultyprofile"

const Archfacultyprofilepage = ({ location }) => {
  if (location.state) {
    return (
      <Deplayout>
        <SEO title="Architecture|Faculty Profile" />
        <Archfacultyprofile url={location.state.url} />
      </Deplayout>
    )
  } else {
    return null
  }
}

export default Archfacultyprofilepage
