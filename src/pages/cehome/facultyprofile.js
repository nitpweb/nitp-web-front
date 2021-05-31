import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Cefacultyprofile from "../../components/global/facultyprofile"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const Cefacultyprofilepage = () => {
  const [id, setNum] = useQueryParam("id", StringParam)
  console.log(id)
  return (
    <Deplayout>
      <SEO title="Ce|Faculty Profile" />
      {id}
      <Cefacultyprofile
        url={`${process.env.GATSBY_API_URL}/api/faculty/${id}`}
      />
    </Deplayout>
  )
}

export default Cefacultyprofilepage
