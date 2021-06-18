import axios from "axios"
import React, { useEffect, useState } from "react"
import Facultycard from "../global/facultycard"
import faculty from "./img/faculty.svg"
import { PageLayout } from "../styles/pagelayout"
import styled from "styled-components"

const Facultypage = ({ title, url, dept }) => {
  const [faculties, setFaculties] = useState()

  let facultiesUrl = `${process.env.GATSBY_API_URL}/api/faculty/${url}`
  useEffect(() => {
    axios
      .get(facultiesUrl)
      .then(res => {
        const faculty = res.data
        setFaculties(faculty)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  const FacultyStyle = PageLayout

  return (
    <>
      <FacultyStyle style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
        <div className="layoutrow layoutrowmain">
          <div className="col-6">
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">{title ? title : "Faculties"}</h1>
            </div>
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">-{dept}</h1>
            </div>
          </div>
          <div className="col-6 imgcolstyle">
            <img
              data-aos="zoom-in"
              src={faculty}
              className="img-fluid"
              style={{ maxHeight: `50vh` }}
              loading="lazy"
            />
          </div>
        </div>
        <div className="row facultyrow">
          {faculties &&
            faculties.map(faculty => {
              return (
                <Facultycard
                  name={faculty.name}
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
      </FacultyStyle>
    </>
  )
}
export default Facultypage
