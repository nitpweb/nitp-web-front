import React from "react"
const Tables = {
 fundedProjects: [
  {
   "Sl. No": 1,
   "Name of the projects":
    "Development Multifunctional Perovskite Materials for Device Application",
   "Name of the faculty": "Dr. D.K. Mahato",
   "Major funding agency": "DRDO",
   "Completed / Ongoing": "Ongoing",
   "Grant Sanctioned (INR in Lakhs)": 16.5552,
  },
  {
   "Sl. No": 2,
   "Name of the projects":
    "Study Spin Injection & Spin Dynamics in Semiconductors for Spintronic Application",
   "Name of the faculty": "Dr. Samrat Mukherjee",
   "Major funding agency": "CSIR",
   "Completed / Ongoing": "Ongoing",
   "Grant Sanctioned (INR in Lakhs)": 18.94,
  },
  {
   "Sl. No": 3,
   "Name of the projects":
    "Characterizations of Magnetically Doped Semiconductor for possible Spintronic Applications",
   "Name of the faculty": "Dr. Samrat Mukherjee",
   "Major funding agency": "UGC",
   "Completed / Ongoing": "Ongoing",
   "Grant Sanctioned (INR in Lakhs)": 12.43,
  },
  {
   "Sl. No": 4,
   "Name of the projects":
    'Facile Synthesis and Characterization of Magnetically Modulated Luminescent Nanocomposites{" "}',
   "Name of the faculty": "Dr. Samrat Mukherjee",
   "Major funding agency": "AICTE",
   "Completed / Ongoing": "Completed",
   "Grant Sanctioned (INR in Lakhs)": 8.5,
  },
 ],
}

export const Activities = {
 content: (
  <>
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
    {Tables.fundedProjects.map((row, idx) => (
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
  </>
 ),
}
export const Achievements = {
 content: (
  <>
   <div>
    <ul type="square">
     <li>
      <h3>
       Dr. Alok Kumar Pan has been awarded{" "}
       <b>RAMANUJAN FELLOWSHIP from DST-SERB</b> in 2015.
      </h3>
     </li>
    </ul>
   </div>
  </>
 ),
}
