import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Phyfacultyprofile from "../../components/global/facultyprofile"

const Phyfacultyprofilepage = ({ location }) => {
  if (location.state) {
    return (
      <Deplayout>
        <SEO title="CSE|Faculty Profile" />
        <Phyfacultyprofile url={location.state.url} />
      </Deplayout>
    )
  } else {
    return null
  }
}

export default Phyfacultyprofilepage
