import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Mathfacultyprofile from "../../components/global/facultyprofile"

const Mathfacultyprofilepage = ({ location }) => {
  if (location.state) {
    return (
      <Deplayout>
        <SEO title="Math|Faculty Profile" />
        <Mathfacultyprofile url={location.state.url} />
      </Deplayout>
    )
  } else {
    return null
  }
}
export default Mathfacultyprofilepage
