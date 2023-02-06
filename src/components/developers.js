import axios from "axios"
import React, { useEffect, useState } from "react"
import Webcard from "./global/webcard"

const Developers = () => {
    const [webteam, setWebteam] = useState()
    let webteamUrl = `${process.env.GATSBY_API_URL}/api/webteam`
  
    useEffect(() => {
      axios
        .get(webteamUrl)
        .then(res => {
          const web = res.data
          setWebteam(web)
        })
        .catch(e => {
          console.log(e)
        })
    }, [])
  return (
    <div className="row layoutrow">
      <div className="row">
        <h2 data-aos="zoom-in-right" style={{ width: `50%`, marginTop: `0` }}>
          Student Volunteers
        </h2>
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
          webteam.slice(4).map(member => {
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
          width: "100%",
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
  )
}

export default Developers
