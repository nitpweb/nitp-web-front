import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Ecefacultyprofile from "../../components/global/facultyprofile"

const Ecefacultyprofilepage = ({ location }) => {
  if (location.state) {
    return (
      <Deplayout>
        <SEO title="ECE|Faculty Profile" />
        <Ecefacultyprofile url={location.state.url} />
      </Deplayout>
    )
  } else {
    return null
  }
}
export default Ecefacultyprofilepage
