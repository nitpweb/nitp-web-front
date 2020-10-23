import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Mefacultyprofile from "../../components/global/facultyprofile"

const Mefacultyprofilepage = ({ location }) => {
  if (location.state) {
    return (
      <Deplayout>
        <SEO title="ME|Faculty Profile" />
        <Mefacultyprofile url={location.state.url} />
      </Deplayout>
    )
  } else {
    return null
  }
}

export default Mefacultyprofilepage
