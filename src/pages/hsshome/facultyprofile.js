import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import HSSfacultyprofile from "../../components/global/facultyprofile"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const HSSfacultyprofilepage = () => {
  const [id, setNum] = useQueryParam("id", StringParam)
  console.log(id)
  return (
    <Deplayout>
      <SEO title="HSS|Faculty Profile" />
      {id}
      <HSSfacultyprofile
        url={`${process.env.GATSBY_API_URL}/api/faculty/${id}`}
      />
    </Deplayout>
  )
}

export default HSSfacultyprofilepage
