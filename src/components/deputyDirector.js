import React, { useEffect, useState } from "react"
import axios from "axios"
import mail from "./global/img/mail.svg"
import { FacultyProfile } from "./styles/facultyprofile"

const RegistrarPage = () => {
 const [data, setData] = useState()
 useEffect(() => {
  const url = `${process.env.GATSBY_API_URL}/api/faculty/skverma@nitp.ac.in`
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
      <h1 style={{ marginTop: `0`, textAlign: `center` }}>Deputy Director</h1>
     </div>
     <div
      className="faculty-img-row"
      style={{ position: `absolute`, left: `15%` }}
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
       <img src={mail} className="img-fluid facmail" />
      </a>
      <h2>{data.profile.name}</h2>
      <h3>Deputy Director</h3>
     </div>

     <div className="faculty-details-row">
      <div className="fac-card" data-aos="">
       <h3>Research Interest:-</h3>
       <p>{data.profile.research_interest}</p>
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
      <h1>About Him</h1>
      <div className="fac-card" data-aos="">
       <p id="dir" style={{ textAlign: `justify` }}>
        Prof. S. K. Verma is the Deputy Director, NIT Patna. He holds B.Sc
        (Engg.), M.Sc (Engg.) and Ph.D (Engg.) from BIT, Sindri, Ranchi
        University, Ranchi. His Specialization is âHeat Power Engineeringâ. His
        area of research includes Solar Energy, Stirling Cycle Engine and
        Computational Fluid Dynamics. He has contributed in the development of
        the Institute by taking responsibility at key positions like Head of the
        Department (Mechanical Engineering), Dean (Student Welfare), Dean
        (Academic) and Chairman (ACoFAR). He has membership of Professional
        Societies like the Institution of Engineers (India), Indian Society of
        Mechanical Engineers, Indian Society for Technical Education, Solar
        Energy Society of India and American Society of Mechanical Engineers. He
        has published the research papers in the National and International
        Journals and also has presented papers in the International and National
        conferences. He has guided M.Sc (Engg.) / M.Tech and Ph.D research
        scholars. He is a renowned scholar in his field.
       </p>
      </div>
     </div>
    </FacultyProfile>
   )}
  </>
 )
}

export default RegistrarPage
