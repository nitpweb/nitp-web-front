import React, { useState, useEffect } from "react"
import tandpcell from "./placements/img/tandpcell.jpg"
import { PageLayout } from "./styles/pagelayout"
import { TabPage } from "./styles/tabpage"
import Navigate from "./global/Navigate"
import Placementlist from "./placements/const"
import { useQueryParam } from "use-query-params"

const Placementpage = () => {
 const [tab] = useQueryParam("tab")
 const [view, setView] = useState("about")
 console.log(view)
 function getView(callback) {
  setView(callback)
 }
 useEffect(() => {
  Placementlist.forEach(x => {
   x.title === tab ? setView(tab) : ""
  })
 }, [tab])
 return (
  <TabPage>
   <Navigate data={Placementlist} callback={getView} tab={tab} />
   <div className="mainDiv">
    {/* <div className="layoutrow layoutrowmain">
            <div className="col-6">
              <div className="row">
                <h1>Placements</h1>
              </div>
              <div className="row">
                <h2>
                  “The computer was born to solve problems that did not exist
                  before.”
                </h2>
              </div>
              <div className="row">
                <h2 id="aut">— Bill Gates</h2>
              </div>
            </div>
            <div className="col-6 imgcolstyle">
              <img src={tandpcell} className="img-fluid" loading="lazy" />
            </div>
          </div> */}
    {view == "About" && (
     <div className="layoutrow">
      <div className="layoutabout">
       <div className="row">
        <h1>About</h1>
       </div>
       <div className="row">
        <p>
         The Training and Placement cell of NIT PATNA forms an integral part in
         shaping the careers of the students of the institute. It organizes and
         coordinates campus placement program to fulfill its commitment of a job
         to every aspirant. Not only that it also encourages and works towards
         the continuing education for the college employees.
         <br />
         <br />
         The Placement and Training cell ensures that every student undergoes
         compulsory vocational training and summer internship at the best
         research institutes and reputed technical organizations of the country.
         By coordinating with various industries and research institutes the
         students get themselves acclimatized to the various technological
         advancements taking place worldwide.
         <br />
         <br />
         The Placement and Training cell runs efficiently under the able
         guidance and watch able eyes.
         <br />
         <br />
         Mettl is our official online assessment partner for placements,
         conducting Mettl's Employability Test in our campus.{" "}
        </p>
       </div>
      </div>
     </div>
    )}
    {view == "Director's Message" && (
     <div className="layoutrow">
      <div className="col-6 imgcolstyle">
       <img src={tandpcell} className="img-fluid" loading="lazy" />
      </div>
      <div className="col-6">
       <div className="row rowmarr3">
        <h1>Director's Message</h1>
       </div>
       <div className="row rowmarr3">
        <p>
         It is my pleasure to introduce one of the oldest Technological
         Institutes of North India National Institute of Technology Patna whose
         history goes back to 1876 when four survey schools were established in
         Dacca, Hoogly, Cuttack and Patna. The schools at Hoogly and Cuttack
         failed but those at Dacca and Patna continued to prosper. In 1882, a
         separate altogether, named as Bihar Industrial School, was opened in
         the premises of the survey school in Patna college campus. In July
         1886, these two separate institutions were merged and given the name of
         Bihar School of Engineering under the leadership of Mr. A Ewbank, the
         then principal of Patna College. Between 1892 and 1902, a functional
         building which is at present the main administrative building of NIT
         Patna, was built with Rs. 100,000/- donation from Nawab Lulf Ali Khan
         of Patna City. The balance amount of Rs. 38,000/- came from the Prince
         of Wales reception fund.
         <br />
         <br />
         Prof. C. R. Walford was the Principal of this college from 1900 to
         1926. In 1924, the engineering school upgraded to Bihar College of
         Engineering under Patna University. In 2004, MHRD, Government of India
         upgraded Bihar College of Engineering to National Institute of
         Technology Patna and in 2007 it came under the act ‘NIT Act 2007’and
         declared Institute of National Importance. At present NIT Patna is
         offering undergraduate programs (B. Tech & B. Arch) and Post graduate
         program (M. Tech & MRUP) along with Ph. D Programs. Total number of
         students are nearly 3000. The institute has state-of-art laboratories,
         in each department. This great institute has produced large number of
         alumni who served the nation with distinction like Mr. M. B. Verma,
         former Program Director of Prestigious LCA Project of DRDO, Dr. Ratan
         K. Sinha, Chairman Atomic Energy Commission of India, Mr. C. Prasad,
         Ex. D G CPWD to name a few.
         <br />
         <br />
         The Institute has a very active linkage with industry from its
         inception. Different PSUs are awarding scholarships to our students.
         The institute has established Center of Excellence in Computer
         Engineering in collaboration with Hewlett Packard.
         <br />
         <br />
         All our passed out graduates are serving the Indian Industry and PSUs
         with distinction.
         <br />
         <br />I appreciate the efforts of our vibrant Training and Placement
         Cell who are in constant touch with industries for the training and
         placement of our students. I am sure our recruiters find our students
         very competent and they will be visiting us regularly.
         <br />
         <br />
         We look forward towards enduring and fruitful relationship with our
         esteemed recruiters
         <br />
         <br />I wish Training & Placement Cell all the success.
         <br />
         <br />
         <strong>Prof. Pradip Kumar Jain</strong>
         <br />
         <br />
         <strong>Director, NIT Patna</strong>
        </p>
       </div>
      </div>
     </div>
    )}
    {view == "TPO's Message" && (
     <div className="layoutrow">
      <div className="col-6">
       <div className="row rowmarl3">
        <h1>TPO Message</h1>
       </div>
       <div className="row rowmarl3">
        <p>
         The National Institute of Technology Patna, the eighteenth of the
         thirty member NIT fraternity started functioning in 2004. In this short
         span of time, NIT Patna has established itself as a premier
         technological institute in India. NIT Patna inherits the historical
         glory of Bihar College of Engineering, Patna. NIT Patna has an
         impeccable campus placement records. Our students have secured
         challenging and highly paid positions in top ranking companies/
         organizations in India and abroad. Their abilities are well recognized
         as per excellent reports from the esteemed recruiters.
         <br />
         <br />
         NIT Patna offers courses in Bachelor's, Master's & Doctoral levels. We
         have B. Tech in Civil Engineering, Computer Science & Engineering,
         Electronics & Communication Engineering, Electrical Engineering,
         Mechanical Engineering, Information Technology and B.Arch in
         Architecture. NIT Patna has Master Courses in all Engineering &
         Architecture Departments.. The Institute has a very active linkage with
         industry from its inception. Different PSUs are awarding scholarships
         to our students.
         <br />
         <br />
         <br />
         <br />
         NIT Patna has been achieving & setting benchmarks not only for its
         excellent academic and extracurricular activities but also for its
         research, consultancy and developmental activities. We’re happy that
         NIT Patna ranked 5 (five) among NITs & ranked 37 (thirty seven) among
         all Engineering Institutes in India by Times Engineering Survey
         (Source: http://www.times-engineering-survey.com). NIT Patna has been
         recognised as “Outstanding Engineering Institute (North)” by the ABP
         NEWs National Awards, 2014. Digital Learning Magazine placed NIT Patna
         in 40th position among Govt. Engineering Institutions in June, 2014. In
         2013, Dainik Bhaskar has also recognised NIT Patna “Outstanding
         Engineering Institute (North)”under its National Education Leadership
         Awards. Recently, NIT Patna ranked 16 as per DATAQUEST India among Top
         Government T-school in India (May, 2015).
         <br />
         <br />
         <br />
         <br />
         Training & Placement Cell, NIT Patna has partnered with BRITISH COUNCIL
         for Professional Development Course for all students.
         <br />
         <br />
         <br />
         <br />
         NIT Patna has a full-fledged Training & Placement Cell with all modern
         facilities to conduct the campus placement activities. Our campus
         placement activities for the session 2015- 2016 will begin from the
         fourth week of August, 2014 and the process will continue till May
         2016. Since our students are on great demand, we will appreciate if you
         would consider visiting our campus at an early date.
         <br />
         <br />
         <br />
         <br />
         We look forward to hear from you soon.
         <br />
         <br />
         <strong>Dr. Samrat Mukherjee</strong>
         <br />
         <br />
         Professor – In charge,
         <br />
         <br />
         Training & Placement Cell
         <br />
         <br />
         National Institute of Technology Patna
         <br />
         <br />
         email: samrat@nitp.ac.in{" "}
        </p>
       </div>
      </div>
      <div className="col-6 imgcolstyle">
       <img src={tandpcell} className="img-fluid" loading="lazy" />
      </div>
     </div>
    )}
    {view == "Placement Officers" && (
     <div className="layoutrow layoutfoot">
      <div className="row rowmarl3">
       <h1>Placement Officers</h1>
      </div>
      <div className="col-6">
       <div className="row rowmarl3">
        <p>
         Dr. Samrat Mukherjee
         <br />
         <br />
         Professor Incharge, Training & Placement Cell
         <br />
         <br />
         Associate Professor, Department of Physics
         <br />
         <br />
         National Institute Of Technology, Patna-800005 , Bihar
         <br />
         <br />
         E-mail: placement@nitp.ac.in,
         <br />
         <br />
         samrat@nitp.ac.in
         <br />
         <br />
         Direct (L) / Fax: 0612-2678114
         <br />
         <br />
         Mob: +91-9973791523
        </p>
       </div>
      </div>
      <div className="col-6">
       <div className="row rowmarr3">
        <p>
         Dr. Subrata Das
         <br />
         <br />
         Training Placement Officer, Training & Placement Cell
         <br />
         <br />
         Assistant Professor, Department of Chemistry
         <br />
         <br />
         National Institute Of Technology, Patna-800005 , Bihar
         <br />
         <br />
         E-mail: placement@nitp.ac.in,
         <br />
         <br />
         subratad@nitp.ac.in
         <br />
         <br />
         Mob: +91-7070093212
        </p>
       </div>
      </div>
     </div>
    )}
   </div>
  </TabPage>
 )
}

export default Placementpage
