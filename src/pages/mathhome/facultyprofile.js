import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Mathfacultyprofile from "../../components/global/facultyprofile"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const Mathfacultyprofilepage = () => {
  const [id, setNum] = useQueryParam("id", StringParam)
  console.log(id)
  return (
    <Deplayout>
      <SEO title="Math|Faculty Profile" />
      {id}
      <Mathfacultyprofile
        url={`${process.env.GATSBY_API_URL}/api/faculty/${id}`}
      />
    </Deplayout>
  )
}

export default Mathfacultyprofilepage
