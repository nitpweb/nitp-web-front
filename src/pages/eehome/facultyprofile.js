import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Eefacultyprofile from "../../components/global/facultyprofile"

const Eefacultyprofilepage = ({ location }) => {
  if (location.state) {
    return (
      <Deplayout>
        <SEO title="EE|Faculty Profile" />
        <Eefacultyprofile url={location.state.url} />
      </Deplayout>
    )
  } else {
    return null
  }
}
export default Eefacultyprofilepage
