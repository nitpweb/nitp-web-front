import React from "react"
import { TabPage } from "../../styles/tabpage"
import Table from "../../table"
import { research } from "./archhome"
// const home = "http://www.nitp.ac.in/"
const home = process.env.GATSBY_BASE_URL + "arch/labs/"
const Tables = {
 research: [
  {
   "Sr.No.": 1,
   Name: " Prof. Fulena Rajak",
   "Research Profile": "Architecrture and Conservation",
  },
  {
   "Sr.No.": 2,
   Name: " Prof. Manoj Kumar",
   "Research Profile":
    "Urban and Rural Planning, Regional Planning, Energy Efficient Architecture",
  },
  {
   "Sr.No.": 3,
   Name: " Dr. Bijay Kumar Das",
   "Research Profile": "Thermal Comfort, Temple Architecture, Climate Change",
  },
  {
   "Sr.No.": 4,
   Name: " Dr. Kamini Sinha",
   "Research Profile":
    "Heritage and Urban Conservation,  Architectural Pedagogy, Sustainable & Vernacular Architecture",
  },
  {
   "Sr.No.": 5,
   Name: " Dr. Shailendra K. Mandal",
   "Research Profile":
    "Climate Change, Hydroclimatic risks, Urban Resilience, Water Security and Sustainability",
  },
  {
   "Sr.No.": 6,
   Name: " Dr. Ajay Kumar",
   "Research Profile":
    "Urban Planning ( Transportation, Sustainable Development, Housing, Urban Core, Urban Street, Quality of Life, Infrastructure Planning etc.) Architecture ( Sustainable built environment) Housing ( Residential Satisfaction, Neighbourhood Development)",
  },
  {
   "Sr.No.": 7,
   Name: "  Dr. Anjai Sharma",
   "Research Profile":
    "1. Disasters and Heritage Vulnerability 2. Smart Sustainable Urban Planning 3. Architecture",
  },
  {
   "Sr.No.": 8,
   Name: " Dr. Mazharul Haque",
   "Research Profile":
    "Architecture, Sustainable Architecture & Healthcare Architecture",
  },
  {
   "Sr.No.": 9,
   Name: "Dr. Ravish Kumar",
   "Research Profile":
    "Temple Architecture, Construction Project Management and Sustainable Architecture",
  },
  {
   "Sr.No.": 10,
   Name: " Dr. Md. Danish",
   "Research Profile": "Heritage, Sustainability, Transport Planning ",
  },
  {
   "Sr.No.": 11,
   Name: " Dr. Kranti Kumar Maurya",
   "Research Profile": "Urban and Rural Planning, Governance, Smart Cities",
  },
 ],
}
export const Labs = {
 content: (
  <>
   <h2>Departmental Laboratories</h2>
   <br />
   <p>
    The Department has 4 lecture room, 8 Studios and 5 laboratories. Apart from
    these there are a number of common class rooms, laboratories and
    infrastructure of the Institute which are as per Council of Architecture
    norms. Besides these Department has enough spaces, which are available for
    the meet the requirements of all the faculty members, staff, office and
    students.{" "}
   </p>
   <br />
   <p>
    Architecture Department, NIT Patna has well-equipped laboratories for the
    academic and research requirements of UG and PG students.{" "}
   </p>
   <ol>
    <li>
     <b>Building Material Lab</b>
    </li>
    <br />
    <li>
     <b>Climatology Lab</b>
    </li>
    <br />
    <li>
     <b>Computer Lab</b>
    </li>
    <br />
    <li>
     <b>Construction Yard</b>
    </li>
    <br />
    <li>
     <b>Departmental library</b>
    </li>
    <br />
    <li>
     <b>Model Making Lab</b>
    </li>
    <br />
   </ol>
  </>
 ),
}
export const Research = {
 content: (
  <>
   <p>
    The Doctoral program in the department of Architecture and Planning at
    National Institute of Technology Patna welcomes individuals with excellent
    academic record, strong motivation, and a penchant for innovative research.
    This prepares the students for careers as researchers as well as
    academicians
   </p>
   {/* <br></br> */}
   <p>
    The department has 11 faculty members with PhD degrees, specialized in
    various domains related to architecture, rural planning, urban planning as
    well as regional planning, supervise research scholars on cutting edge
    research on burning issues of the present times. The students get exposure
    to researches and consultancies going on in the department and opportunities
    to undergo training workshops, short-term courses, conferences, guest
    lectures etc. in the institute, in the country, as well as outside the
    country.
   </p>
   <p>
    The department/institute provides various facilities for research as well as
    collaborations with other organizations within the city as well as the
    country and outside, facilities for purchase of equipment. Apart from
    high-quality publications, students may also file patents related to their
    research. Full time students admitted to PhD program are eligible for
    fellowships that cover all their expenses. The institute provides excellent
    facilities including computer lab, climatology lab, and library-with
    subscriptions to journals in various domains.
   </p>
   <p>
    Doctoral program places its students in teaching, research and consulting
    roles in various organizations. Part time PhD degrees are also availed by
    those already employed.
   </p>
   <p>
    Advertisements can be found on the institute website twice a year. Once in
    May and the second in November. Once applied, they have to take written
    examination for appearing for interview.
   </p>
   <table className="table-act">
    <thead>
     <tr className="syllabus-table-head">
      <th>Sr. No.</th>
      <th>Name</th>
      <th>Research Profile</th>
     </tr>
    </thead>{" "}
    <tbody>
     {Tables.research.map((row, idx) => (
      <tr key={idx}>
       <td>{row["Sr.No."]}</td>
       <td>{row["Name"]}</td>
       <td>{row["Research Profile"]}</td>
      </tr>
     ))}
    </tbody>
   </table>
  </>
 ),
}
export const LabImages = [
 <img src={`${home}DSC_0663.jpg`} />,
 <img src={`${home}DSC_0666.jpg`} />,
 <img src={`${home}DSC_0675.jpg`} />,
 <img src={`${home}DSC_0680.jpg`} />,
 <img src={`${home}DSC_0686.jpg`} />,
 // <img src={`${home}images/a_model.jpg`} />,
]
