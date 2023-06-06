import React from "react"

const Tables = {
 projectsRunning: [
  {
   "Sl. No": 1,
   "Name of the projects":
    "Next Generation E-content of Numerical Methods and Applications",
   "Name of the faculty": "Prof. S. K. Singh",
   "Major funding agency": "MHRD",
   "Completed / Ongoing": "Completed",
   "Grant Sanctioned (INR in Lakhs)": 5,
  },
  {
   "Sl. No": 2,
   "Name of the projects":
    "Numerical Analysis for Singularly Perturbed Parabolic Partial Differential Equations",
   "Name of the faculty": "Dr. S. Gowrisankar",
   "Major funding agency": "SERB-DST",
   "Completed / Ongoing": "Approved",
   "Grant Sanctioned (INR in Lakhs)": 17,
  },
 ],
 invitedLectures: [
  {
   "Sl. No.": 1,
   Faculty: "Prof. S. Chakrabarty , Maths Department",
   Institute: "NIT Rourkela",
  },
  {
   "Sl. No.": 2,
   Faculty: "Prof. A. K. Ganguly , Maths Department",
   Institute: "Patna University",
  },
  {
   "Sl. No.": 3,
   Faculty: "Prof. K. N. Rai , Maths Department",
   Institute: "IIT BHU",
  },
  {
   "Sl. No.": 4,
   Faculty: "Prof. S. Natesan , Maths Department",
   Institute: "IIT Guwahati",
  },
  {
   "Sl. No.": 5,
   Faculty: "Prof. K. N. Rai , Maths Department",
   Institute: "IIT BHU",
  },
  {
   "Sl. No.": 6,
   Faculty: "Prof. S. Bhatacharyya , Maths Department",
   Institute: "IIT Kharagpur",
  },
  {
   "Sl. No.": 7,
   Faculty: "Prof. Santhana , Maths Department",
   Institute: "IIT Kanpur",
  },
  {
   "Sl. No.": 8,
   Faculty: "Prof. Karmeshu , Maths & Computer Science Department",
   Institute: "J. N. U Delhi",
  },
 ],
}

export const Activities = {
 content: (
  <>
   <div>
    <h2>Seminars and Workshops Organized by the Department</h2>

    <ul>
     <li>
      <b>Inspire Science Camp for School Children (15-19 Dec; 2014) </b>
     </li>
     <li>
      Short term course on
      <b>
       Time Series Analysis & its Applications jointly organized with Computer
       Science & Civil Engineering Department during June 2014.
      </b>
     </li>
     <li>
      Nationwide sensitization workshop on
      <b>Mathematics for Teachers and Activists</b> during 2-3 March; 2014
     </li>
     <li>
      Nationwide sensitization workshop on
      <b>Mathematics for Teachers and Activists</b> during 2-3 March; 2014)
     </li>
    </ul>
   </div>
   <h2>Externally Funded Projects Running in the Department</h2>
   <table className="table-act">
    <tr className="syllabus-table-head">
     <th>Sl. No</th>
     <th>Name of the projects</th>
     <th>Name of the faculty</th>
     <th>Major funding agency</th>
     <th>Completed / Ongoing</th>
     <th>Grant Sanctioned (INR in Lakhs)</th>
    </tr>
    {Tables.projectsRunning.map((row, idx) => (
     <tr key={idx}>
      <td>{row["Sl. No"]}</td>
      <td>{row["Name of the projects"]}</td>
      <td>{row["Name of the faculty"]}</td>
      <td>{row["Major funding agency"]}</td>
      <td>{row["Completed / Ongoing"]}</td>
      <td>{row["Grant Sanctioned (INR in Lakhs)"]}</td>
     </tr>
    ))}
   </table>
   <div className="row ">
    <h2>Invited Lectures</h2>
   </div>
   <div>
    <table className="table-act">
     <tr className="syllabus-table-head">
      <th>Sl. No.</th>
      <th>Faculty</th>
      <th>Institute</th>
     </tr>
     {Tables.invitedLectures.map((row, idx) => (
      <tr key={idx}>
       <td>{row["Sl. No."]}</td>
       <td>{row.Faculty}</td>
       <td>{row.Institute}</td>
      </tr>
     ))}
    </table>
   </div>
  </>
 ),
}
