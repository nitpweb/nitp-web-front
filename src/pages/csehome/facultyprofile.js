import React from "react"
import Deplayout from "../../components/deplayout"
import SEO from "../../components/seo"
import Csefacultyprofile from "../../components/global/facultyprofile"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const Csefacultyprofilepage = () => {
  const [id, setNum] = useQueryParam("id", StringParam)
  console.log(id);
    return (
      <Deplayout>
        <SEO title="CSE|Faculty Profile" />
        {id}
        <Csefacultyprofile url={`${process.env.GATSBY_API_URL}/api/faculty/${id}`} />
      </Deplayout>
    )
}

export default Csefacultyprofilepage
