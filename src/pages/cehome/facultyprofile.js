import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Cefacultyprofile from "../../components/global/facultyprofile"

const Cefacultyprofilepage = ({ location }) => {
  if (location.state) {
    return (
      <Deplayout>
        <SEO title="CE|Faculty Profile" />
        <Cefacultyprofile url={location.state.url} />
      </Deplayout>
    )
  } else {
    return null
  }
}

export default Cefacultyprofilepage
