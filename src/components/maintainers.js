import axios from "axios"
import React, { useEffect, useState } from "react"
import Developers from "./developers"
import Webcard from "./global/webcard"

const Maintainers = (props) => {
    const {webteam} = props
    const [year, setYear] = useState("2022")
  return (
    <>
      <div className="probutton" style={{margin: "10px 0px"}}>
        <button
          onClick={() => {
            setYear("2022")
          }}
          className={year == "2022" ? "btnactive" : ""}
        >
          2022
        </button>
        <button
          onClick={() => {
            setYear("2021")
          }}
          className={year == "2021" ? "btnactive" : ""}
        >
          2021
        </button>
        <button
          onClick={() => {
            setYear("2020")
          }}
          className={year == "2020" ? "btnactive" : ""}
        >
          2020
        </button>
      </div>

      {(year == "2020" || year == "2021") && <Developers webteam={webteam}/>}

      {year == "2022" && (
        <div className="row layoutrow">
          <div className="row">
            <h2
              style={{ width: `50%`, marginTop: `0` }}
            >
              Student Volunteers
            </h2>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              width: "-webkit-fill-available"
            }}
          >
            {webteam &&
              webteam.slice(4, 7).map(member => {
                return (
                  <Webcard
                    name={member.name}
                    email={member.email}
                    extn={member.ext_no}
                    id={member.email}
                    interests={member.interests}
                    image={member.image}
                    desg={member.desg}
                    url={member.url}
                  />
                )
              })}
          </div>

          <div className="row">
            <h2 style={{ width: `50%`, marginTop: `0` }}>
              Faculties/Officers Involved
            </h2>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              width: "-webkit-fill-available",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div classNam="row">
                <h2>PI Website</h2>
              </div>
              <div className="row">
                {webteam &&
                  webteam.slice(0, 1).map(member => {
                    return (
                      <Webcard
                        name={member.name}
                        email={member.email}
                        extn={member.ext_no}
                        id={member.email}
                        interests={member.interests}
                        image={member.image}
                        desg={member.desg}
                        url={member.url}
                      />
                    )
                  })}
              </div>
            </div>
            <div>
              <div classNam="row">
                <h2>PI MIS</h2>
              </div>
              <div className="row">
                {webteam &&
                  webteam.slice(0, 1).map(member => {
                    return (
                      <Webcard
                        name={member.name}
                        email={member.email}
                        extn={member.ext_no}
                        id={member.email}
                        interests={member.interests}
                        image={member.image}
                        desg={member.desg}
                        url={member.url}
                      />
                    )
                  })}
              </div>
            </div>

            <div>
              <div classNam="row">
                <h2>PI IT Services</h2>
              </div>
              <div className="row">
                {webteam &&
                  webteam.slice(2, 3).map(member => {
                    return (
                      <Webcard
                        name={member.name}
                        email={member.email}
                        extn={member.ext_no}
                        id={member.email}
                        interests={member.interests}
                        image={member.image}
                        desg={member.desg}
                        url={member.url}
                      />
                    )
                  })}
              </div>
            </div>
          </div>

          <div className="row">
            <h2>Scientific Officer</h2>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {webteam &&
              webteam.slice(3, 4).map(member => {
                return (
                  <Webcard
                    name={member.name}
                    email={member.email}
                    extn={member.ext_no}
                    id={member.email}
                    interests={member.interests}
                    image={member.image}
                    desg={member.desg}
                    url={member.url}
                  />
                )
              })}
          </div>
        </div>
      )}
    </>
  )
}

export default Maintainers
