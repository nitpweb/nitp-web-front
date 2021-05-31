import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Eefacultyprofile from "../../components/global/facultyprofile"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const Eefacultyprofilepage = () => {
  const [id, setNum] = useQueryParam("id", StringParam)
  console.log(id)
  return (
    <Deplayout>
      <SEO title="Ee|Faculty Profile" />
      {id}
      <Eefacultyprofile
        url={`${process.env.GATSBY_API_URL}/api/faculty/${id}`}
      />
    </Deplayout>
  )
}

export default Eefacultyprofilepage
