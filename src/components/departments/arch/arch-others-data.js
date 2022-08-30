import React from "react"

// const home = "http://www.nitp.ac.in/"
const home = process.env.GATSBY_BASE_URL+"arch/labs/"
export const Labs = {
  content: (
    <>
      <h2>Departmental Laboratories</h2>
      <br />
      <p>
        The Department has 4 lecture room, 8 Studios and 5 laboratories. Apart
        from these there are a number of common class rooms, laboratories and
        infrastructure of the Institute which are as per Council of Architecture
        norms. Besides these Department has enough spaces, which are available
        for the meet the requirements of all the faculty members, staff, office
        and students.{" "}
      </p>
      <br />
      <p>
        Architecture Department, NIT Patna has well-equipped laboratories for
        the academic and research requirements of UG and PG students.{" "}
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

export const LabImages = [
  <img src={`${home}DSC_0663.jpg`} />,
  <img src={`${home}DSC_0666.jpg`} />,
  <img src={`${home}DSC_0675.jpg`} />,
  <img src={`${home}DSC_0680.jpg`} />,
  <img src={`${home}DSC_0686.jpg`} />,
  // <img src={`${home}images/a_model.jpg`} />,
]
