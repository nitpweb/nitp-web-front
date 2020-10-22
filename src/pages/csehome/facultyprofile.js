import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Csefacultyprofile from "../../components/global/facultyprofile"

const Csefacultyprofilepage = ({ location }) => {
  if (location.state) {
    return (
      <Deplayout>
        <SEO title="CSE|Faculty Profile" />
        <Csefacultyprofile url={location.state.url} />
      </Deplayout>
    )
  } else {
    return null
  }
}

export default Csefacultyprofilepage
