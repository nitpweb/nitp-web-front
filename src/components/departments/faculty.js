import axios from "axios"
import React, { useEffect, useState } from "react"
import Facultycard from "../global/facultycard"
import faculty from "./img/faculty.svg"
import { PageLayout } from "../styles/pagelayout"
import { SearchStyle } from "../styles/SearchStyle"

const Facultypage = ({ title, url, dept }) => {
  const [faculties, setFaculties] = useState()
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const department = url == "faculties" || url == "officers"

  let facultiesUrl = `${process.env.GATSBY_API_URL}/api/faculty/${url}`
  useEffect(() => {
    axios
      .get(facultiesUrl)
      .then(res => {
        const faculty = res.data
        faculty.sort(
          (a, b) =>
            String(a.name)
              .replace(/[.*+?^${}()|[\]\\' ']/g, "")
              .toLowerCase() >
            String(b.name)
              .replace(/[.*+?^${}()|[\]\\' ']/g, "")
              .toLowerCase()
        )
        setFaculties(faculty)
        setData(faculty)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  useEffect(() => {
    let result = faculties
    result = result?.filter(item =>
      String(item.name)
        .replace(/[.*+?^${}()|[\]\\]/g, "")
        .toLowerCase()
        .startsWith(String(search).toLowerCase())
    )
    setData(result)
  }, [search])

  const FacultyStyle = PageLayout

  return (
    <>
      <FacultyStyle style={{ marginBottom: `3vh` }}>
        <div className="faculty-page">
          <div className="layoutrow layoutrowmain syllabus-page-head">
            <div className="col-6" style={{ width: `100%` }}>
              <div className="row rowmarl3">
                <h1 data-aos="zoom-in-right" style={{ fontSize: `30px` }}>
                  {title ? title : "Faculties"}
                </h1>
                <div className="row">
                  {" "}
                  <h2 data-aos="zoom-in-right">{dept ? `-${dept}` : ""}</h2>
                </div>
              </div>
              <div className="row rowmarl3">
                <SearchStyle>
                  <div className="form-search">
                    <input
                      type="search"
                      placeholder="Search"
                      onChange={e => setSearch(e.target.value)}
                    />
                  </div>
                </SearchStyle>
              </div>
            </div>

            {/* <div className="col-6 imgcolstyle">
            <img
              data-aos="zoom-in"
              src={faculty}
              className="img-fluid"
              style={{ maxHeight: `50vh` }}
              loading="lazy"
            />
          </div> */}
          </div>
          <div className="row facultyrow">
            {data &&
              data.map(faculty => {
                return (
                  <Facultycard
                    name={faculty.name}
                    subtitle={department ? faculty.department : faculty.email}
                    email={faculty.email}
                    extn={faculty.ext_no}
                    id={faculty.email}
                    research={faculty.research_interest}
                    image={faculty.image}
                    desg={faculty.designation}
                  />
                )
              })}
          </div>
        </div>
      </FacultyStyle>
    </>
  )
}
export default Facultypage
