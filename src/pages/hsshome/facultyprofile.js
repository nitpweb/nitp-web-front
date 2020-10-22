import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Hssfacultyprofile from "../../components/global/facultyprofile"

const HSSfacultyprofilepage = ({ location }) => {
  if (location.state) {
    return (
      <Deplayout>
        <SEO title="HSS|Faculty Profile" />
        <Hssfacultyprofile url={location.state.url} />
      </Deplayout>
    )
  } else {
    return null
  }
}

export default HSSfacultyprofilepage
