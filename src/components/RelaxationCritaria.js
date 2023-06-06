import React from "react"
import { PageLayout } from "./styles/pagelayout"
const home = "http://www.nitp.ac.in"
const RC_Data = {
 title: <h1>Concessions</h1>,
 content: (
  <>
   <div>
    <h3>Concessions Provided for Students</h3>
    <p>
     Relaxation in minimum eligibilities:
     <br />
     B. Tech. / B. Arch. Admission eligibility criteria for SC/ST/PH candidates
     are governed by CCB (Central Counseling Board).
     <br />
     M. Tech. admission eligibility criteria for SC/ST/PH candidates are
     governed by MHRD rules (on the basis of Grade Score).
    </p>
    Reservation of seats
    <ul>
     <li>15% seats are reserved for SC and 7.5% for ST candidates.</li>
     <li>3% seats are reserved for PH candidates.</li>
     <li>27% seats are reserved for OBC candidates.</li>
    </ul>
    <h3>Concessions Provided for Staff</h3>
    <p>
     Reservation in appointment and promotion to SC/ST/PH candidates as per
     Govt. of India rule is applicable at this Institute. Concession in
     application fee for appointment and age relaxation is also applicable at
     this Institute as per Govt. of India rules.
    </p>
   </div>
  </>
 ),
}

const RelaxationCritaria = () => {
 return (
  <>
   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <div className="layoutrow layoutrowmain">
     <div className="row row-new rowmarl3 ">{RC_Data.title}</div>

     <div className="row row-new rowmarl3" style={{ overflow: `auto` }}>
      {RC_Data.content}
     </div>
    </div>
   </PageLayout>
  </>
 )
}

export default RelaxationCritaria
