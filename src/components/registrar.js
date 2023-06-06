import React, { useEffect, useState } from "react"
import axios from "axios"
import mail from "./global/img/mail.svg"
import { FacultyProfile } from "./styles/facultyprofile"

const RegistrarPage = () => {
 const [data, setData] = useState()
 useEffect(() => {
  const url = `${process.env.GATSBY_API_URL}/api/faculty/asit.narayan@nitp.ac.in`
  axios
   .get(url)
   .then(res => {
    const detail = res.data
    setData({
     profile: detail.profile,
     qualification: detail.education,
    })
   })
   .catch(e => {
    console.log(e)
   })
 }, [])

 return (
  <>
   {data && (
    <FacultyProfile className="facultypage row">
     <div className="row rowmarl3" style={{ display: "block", width: `100%` }}>
      <h1 style={{ marginTop: `0`, textAlign: `center` }}>Registrar</h1>
     </div>
     <div
      className="faculty-img-row"
      style={{ position: `relative`, left: `2%` }}
     >
      <div className="faculty-img-wrap">
       <img
        src={
         data.profile.image != undefined
          ? `${data.profile.image}`
          : "/faculty.png"
        }
        className="facultypic"
       />
      </div>
      <a href={`mailto:${data.profile.email}`} target="blank">
       <img
        src={mail}
        className="img-fluid facmail"
        style={{ position: `absolute` }}
       />
      </a>
      <h2>{data.profile.name}</h2>
      <h3>Registrar</h3>
     </div>

     <div className="faculty-details-row">
      <div className="fac-card" data-aos="">
       <h3>
        {data.profile.department == "Officers"
         ? "Responsibilities:-"
         : "Research Interest:-"}
       </h3>
       <h3>Email:-</h3>
       <p>{data.profile.email}</p>
       <h3>Phone:-</h3>
       <p>{data.profile.ext_no}</p>
      </div>
      {data.qualification && data.qualification.length != 0 ? (
       <div className="fac-card" data-aos="">
        <h3>Educational Qualification</h3>
        <div className="factable">
         <table>
          <tr>
           <td>
            <h4>Certification</h4>
           </td>
           <td>
            <h4>Institute Name</h4>
           </td>
           <td>
            <h4>Passing Year</h4>
           </td>
          </tr>
          {data.qualification.map(item => {
           return (
            <tr>
             <td>
              <li>{item.certification}</li>
             </td>
             <td>
              <li>{item.institution}</li>
             </td>
             <td>
              <li>{item.passing_year}</li>
             </td>
            </tr>
           )
          })}
         </table>
        </div>
       </div>
      ) : null}
     </div>
    </FacultyProfile>
   )}
  </>
 )
}

export default RegistrarPage
