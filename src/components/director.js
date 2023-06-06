import React, { useEffect, useState } from "react"
import axios from "axios"
import mail from "./global/img/mail.svg"
import { FacultyProfile } from "./styles/facultyprofile"

const Directorpage = () => {
 const [data, setData] = useState()
 useEffect(() => {
  const url = `${process.env.GATSBY_API_URL}/api/faculty/pkjain@nitp.ac.in`
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
      <h1 style={{ marginTop: `15px`, textAlign: `center` }}>Our Director</h1>
     </div>
     <div
      className="faculty-img-row"
      style={{
       position: `relative`,
       left: `${
        window.location.pathname === "/administration/" ||
        window.location.pathname === "/administration"
         ? "3%"
         : "2%"
       }`,
      }}
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
        // style={{ position: `absolute` }}
       />
      </a>
      <h2>{data.profile.name}</h2>
      <h3>Director</h3>

      {data.profile.cv && (
       <div>
        <a href={data.profile.cv} target="blank">
         <button className="cv-btn" color="primary" variant="contained">
          View Profile
         </button>
        </a>
       </div>
      )}
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
      <h1>About</h1>
      <div className="fac-card" data-aos="">
       <p id="dir" style={{ textAlign: "justify" }}>
        Prof. Pradip K. Jain joined as a Lecturer of Electronics Engineering at
        Institute of Technology, Banaras Hindu University in 1981, and became
        Professor in the Year 2001. He has made significant contribution in the
        areas of analysis, modeling and development of high power microwave
        tubes and gyrotron devices. Currently, He is Director of National
        Institute of Technology, Patna. He also served as Dean, Research and
        Development of Indian Institute of Technology (BHU), Varanasi,
        Coordinator of the Centre of Research in Microwave Tubes, Coordinator,
        Center of Advanced Study, and Head of Department of Electronics
        Engineering, IIT (BHU) besides acting as Chairman of the various
        Institute level committees over the years. Prof. Jain is actively and
        extensively engaged in collaborative research and development activities
        with other national laboratories in this area, like, CEERI (CSIR,
        Pilani), Various DRDO Laboratories, IPR (DAE, Gandhinagar) and
        successfully executed a number of sponsored research projects. His
        current research interests include high power microwave devices and
        circuits. Prof. Jain was a Visiting Scientist at Massachusetts Institute
        of Technology, Cambridge, US and at the Pennsylvania State University,
        US in the years 2008 and 2007, respectively. He has so far guided 20
        doctoral theses, published more than 100 research papers in SCI journals
        and 200 in the conference proceedings beside a patent and authoring six
        book/monograph chapters. Dr. Jain is a senior member of IEEE, fellow of
        Institution of Electronics and Telecommunications Engineers of India,
        Fellow of Institution of Engineers of India and also a fellow of Vacuum
        Electron Devices and Application Society.
       </p>
      </div>
      <h1>Director's Message</h1>
      <div className="fac-card" data-aos="">
       <p id="dir" style={{ textAlign: `justify` }}>
        It is my pleasure to introduce one of the oldest Technological
        Institutes of North India, National Institute of Technology Patna, whose
        history goes back to 1876 when four survey schools were established in
        Dacca, Hoogly, Cuttack and Patna. The schools at Hoogly and Cuttack
        failed but those at Dacca and Patna continued to prosper. In 1882, a
        separate altogether, named as Bihar Industrial School, was opened in the
        premises of the survey school in Patna college campus. In July 1886,
        these two separate institutions were merged and given the name of Bihar
        School of Engineering under the leadership of Mr. A Ewbank, the then
        principal of Patna College. Between 1892 and 1902, a functional building
        which is at present the main administrative building of NIT Patna, was
        built with Rs. 100,000/- donation from Nawab Lulf Ali Khan of Patna
        City. The balance amount of Rs. 38,000/- came from the Prince of Wales
        reception fund. Prof. C. R. Walford was the Principal of this college
        from 1900 to 1926. In 1924, the engineering school upgraded to Bihar
        College of Engineering under Patna University. In 2004, MHRD, Government
        of India upgraded Bihar College of Engineering to National Institute of
        Technology Patna and in 2007 it came under the act ‘NIT Act 2007’and
        declared Institute of National Importance.
        <br />
        <br /> At present NIT Patna is offering undergraduate programs (B. Tech
        & B. Arch) and Post graduate program (M. Tech & MRUP) along with Ph.D.
        Programs. Total number of students is nearly 3000. The institute has
        state-of-art laboratories, in each department. This great institute has
        produced large number of alumni who served the nation with distinction
        like Mr. M. B. Verma, former Program Director of Prestigious LCA Project
        of DRDO, Dr. Ratan K. Sinha, Chairman, Atomic Energy Commission of
        India, Mr. C. Prasad, Ex. D G CPWD to name a few. The Institute has a
        very active linkage industry from its inception. Different PSUs are
        awarding scholarships to our students. The institute is going to sign
        MoU with FICCI and CII for collaboration soon. All our passed out
        graduates are serving the Indian Industry and PSUs with distinction. I
        wish the Institute all the success.
       </p>
       <h4>Prof. Pradip Kumar Jain,</h4>
       <h4>Director NIT Patna</h4>
      </div>
     </div>
    </FacultyProfile>
   )}
  </>
 )
}

export default Directorpage
