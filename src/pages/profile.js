import React from "react"
import SEO from "../components/seo"
import Facultyprofile from "../components/global/facultyprofile"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const Csefacultyprofilepage = () => {
 const [id, setNum] = useQueryParam("id", StringParam)
 console.log(id)
 if (String(id).endsWith("nitp.ac.in")) {
  return (
   <>
    <SEO title="Faculty Profile" />
    <Facultyprofile url={`${process.env.GATSBY_API_URL}/api/faculty/${id}`} />
   </>
  )
 } else {
  return null
 }
}

export default Csefacultyprofilepage
