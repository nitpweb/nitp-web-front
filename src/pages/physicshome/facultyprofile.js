import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Phyfacultyprofile from "../../components/global/facultyprofile"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const Phyfacultyprofilepage = () => {
  const [id, setNum] = useQueryParam("id", StringParam)
  console.log(id)
  return (
    <Deplayout>
      <SEO title="Phy|Faculty Profile" />
      {id}
      <Phyfacultyprofile
        url={`${process.env.GATSBY_API_URL}/api/faculty/${id}`}
      />
    </Deplayout>
  )
}

export default Phyfacultyprofilepage
