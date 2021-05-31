import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import MEfacultyprofile from "../../components/global/facultyprofile"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const MEfacultyprofilepage = () => {
  const [id, setNum] = useQueryParam("id", StringParam)
  console.log(id)
  return (
    <Deplayout>
      <SEO title="ME|Faculty Profile" />
      {id}
      <MEfacultyprofile
        url={`${process.env.GATSBY_API_URL}/api/faculty/${id}`}
      />
    </Deplayout>
  )
}

export default MEfacultyprofilepage
