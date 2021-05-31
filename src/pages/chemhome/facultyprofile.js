import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Chemfacultyprofile from "../../components/global/facultyprofile"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const Chemfacultyprofilepage = () => {
  const [id, setNum] = useQueryParam("id", StringParam)
  console.log(id)
  return (
    <Deplayout>
      <SEO title="Chem|Faculty Profile" />
      {id}
      <Chemfacultyprofile
        url={`${process.env.GATSBY_API_URL}/api/faculty/${id}`}
      />
    </Deplayout>
  )
}

export default Chemfacultyprofilepage
