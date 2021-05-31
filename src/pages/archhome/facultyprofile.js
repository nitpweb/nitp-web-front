import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Archfacultyprofile from "../../components/global/facultyprofile"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const Archfacultyprofilepage = () => {
  const [id, setNum] = useQueryParam("id", StringParam)
  console.log(id)
  return (
    <Deplayout>
      <SEO title="Arch|Faculty Profile" />
      {id}
      <Archfacultyprofile
        url={`${process.env.GATSBY_API_URL}/api/faculty/${id}`}
      />
    </Deplayout>
  )
}

export default Archfacultyprofilepage
