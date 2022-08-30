import React from "react"
const home = "http://www.nitp.ac.in/php/"

const Tables = {
  sponsoredProjects: [
    {
      "S.No.": 1,
      "Name of the Project":
        "Modelling and nonlinear dynamic analysis of wrinkled graphene resonators",
      "Name of the PI": "Dr. Anand Bhushan",
      "Sponsoring Agency": "Science and Engineering Research Board",
      "Sanctioned Amount(in lakh)": 12.9275,
      Status: "Completed",
    },
    {
      "S.No.": 2,
      "Name of the Project":
        "Friction Stir Welding of Dissimilar Heat Treatable Aluminium Alloys",
      "Name of the PI": "Dr. Vikas Upadhyay",
      "Sponsoring Agency": "Science and Engineering Research Board, DST, GOI",
      "Sanctioned Amount(in lakh)": 8.41,
      Status: "Completed (2017-2020)",
    },
    {
      "S.No.": 3,
      "Name of the Project":
        "Experiment and Analysis of Energy Saving Variable Displacement Electro-Hydrostatics Actuation (VDEHA) System",
      "Name of the PI": "Dr. Nimai Pada Mandal",
      "Sponsoring Agency": "DST",
      "Sanctioned Amount(in lakh)": 24.2468,
      Status: "Ongoing",
    },
    {
      "S.No.": 4,
      "Name of the Project": "SEED Project",
      "Name of the PI": "Dr. Anindya Malas",
      "Sponsoring Agency": "NIT Patna, TEQIP III",
      "Sanctioned Amount(in lakh)": 6,
      Status: "Ongoing",
    },
    {
      "S.No.": 5,
      "Name of the Project":
        "Studies on hard-facing of Inconel 718 on stainless steel 321 and 347 grades for nuclear reactor components",
      "Name of the PI": "Dr. A. Karpagaraj",
      "Sponsoring Agency": "SERB",
      "Sanctioned Amount(in lakh)": 29.74,
      Status: "Ongoing",
    },
    {
      "S.No.": 6,
      "Name of the Project":
        'Wire Arc Additive Manufacturing (WAAM) of Stainless Steel 316L Components for Nuclear Plant Applications.{" "}',
      "Name of the PI": "Dr. A. Karpagaraj",
      "Sponsoring Agency": "TEQIP-III/NITP",
      "Sanctioned Amount(in lakh)": 10,
      Status: "Ongoing",
    },
  ],
  shortTermCourse: [
    {
      "S.No.": 1,
      "Name of the Faculty": {
        Coordinator: "Dr. Abhishek Singh and Dr. Sharifuddin Mondal",
        "Organizing Secretary": "Prof. Om Prakash",
      },
      "Organized Workshop/FDP/STC/Conference/GIAN program":
        'Short Term Course on Gas Turbine - Development, Operation and Maintenance for Power & Propulsion - 2015 (GT-DOMPP-2015){" "}',
      Duration: "May 18-22, 2015",
    },
    {
      "S.No.": 2,
      "Name of the Faculty": {
        Coordinator: "Dr. Vikas Upadhyay, Dr. Nilamber Kumar Singh",
      },
      "Organized Workshop/FDP/STC/Conference/GIAN program":
        'Advanced Materials, Processing and Characterization (AMPC-2016) organized under the aegis of TEQIP-II from{" "}',
      Duration: "February 18 - 20, 2016",
    },
    {
      "S.No.": 3,
      "Name of the Faculty": {
        "Joint Secretary": " Dr. Abhishek Singh and Dr. Anupam Das",
        "Organizing Secretary": "Dr. A.N Sinha",
      },
      "Organized Workshop/FDP/STC/Conference/GIAN program":
        "SHORT TERM COURSE ON ADVANCED MANUFACTURING PRACTICES - 2016, (AMP-2016)",
      Duration: "March 07-12, 2016",
    },
    {
      "S.No.": 4,
      "Name of the Faculty": {
        Chairman: "Dr. Amit Kumar and Dr. M.P. Singh",
        Secretary:
          "Dr. Abhishek Singh, Mr. Arun Kumar, Dr. Vikas Upadhyay and Dr. Gowrisankar S.",
      },
      "Organized Workshop/FDP/STC/Conference/GIAN program":
        "International Conference on Advances and Soft Computing Applications in Design and Manufacturing (ASCADM-2018)",
      Duration: "June 04-06, 2018",
    },
    {
      "S.No.": 5,
      "Name of the Faculty": {
        Chairman: "Prof. Om Prakash",
        Coordinators: " Dr. A. Karpagaraj, Dr. A.K. Das, Dr. Rahul Goyal ",
        "Organizing Secretary": "Dr. Vimal K E K",
      },
      "Organized Workshop/FDP/STC/Conference/GIAN program":
        "Renewable Energy and Applications-2018 (REA 2018)",
      Duration: "December 19-23, 2018",
    },
    {
      "S.No.": 6,
      "Name of the Faculty": {
        Coordinator: "Dr. Abhishek Singh and Dr. Amit Kumar",
      },
      "Organized Workshop/FDP/STC/Conference/GIAN program":
        "One-week e-workshop on “Recent Trends in Mechanical Engineering – 2020 (RTME-2020)",
      Duration: "July 20-24, 2020",
    },
    {
      "S.No.": 7,
      "Name of the Faculty": {
        Coordinator: "Dr. Abhishek Singh and Dr. Amit Kumar",
        Convener: "Dr. Shailesh Mani Pandey and Dr. Ambrish Maurya",
      },
      "Organized Workshop/FDP/STC/Conference/GIAN program":
        "One-week online e-short term course on “Advances in Design & Manufacturing Engineering – 2020 (ADME-2020)",
      Duration: "August 03 – 07- 2020",
    },
    {
      "S.No.": 8,
      "Name of the Faculty": {
        Coordinator: "Dr. Yogesh Kumar",
        Convener: "Dr. Amit Kumar",
        Chairman: "Prof. S. K. Verma",
      },
      "Organized Workshop/FDP/STC/Conference/GIAN program":
        "Online FDP on DEEKSHARAMBH (Student Induction Program)",
      Duration: "August 10-14, 2020",
    },
    {
      "S.No.": 9,
      "Name of the Faculty": {
        Coordinator: "Dr. Yogesh Kumar",
        Convener: "Dr. Amit Kumar",
        Chairman: "Prof. S. K. Verma",
      },
      "Organized Workshop/FDP/STC/Conference/GIAN program":
        "Online FDP on Universal Human Values for DEEKSHARAMBH (Student Induction Program)",
      Duration: "September 21-25, 2020",
    },
  ],
}

export const Labs = [
  {
    title: (
      <h2>
        <b>LIST OF LABORATORIES</b>
      </h2>
    ),
    content: (
      <ol type="1" style={{ fontSize: `1.2rem` }}>
        <li>
          <p>Strength of Material.</p>
        </li>
        <li>
          <p>Internal Combustion Gas Turbine Lab.</p>
        </li>
        <li>
          <p>Engine Testing Lab.</p>
        </li>
        <li>
          <p>Heat and Mass Transfer Lab.</p>
        </li>
        <li>
          <p>Renewable Energy Lab.</p>
        </li>
        <li>
          <p>Applied Thermodynamics Lab.</p>
        </li>
        <li>
          <p>Refrigeration and Air Conditioning Lab.</p>
        </li>
        <li>
          <p>Dynamics of Machinery Lab.</p>
        </li>
        <li>
          <p>Fuel Cell Lab.</p>
        </li>
        <li>
          <p>CAM Lab.</p>
        </li>
        <li>
          <p>Flexible Manufacturing System Lab.</p>
        </li>
        <li>
          <p>Welding Shop.</p>
        </li>
        <li>
          <p>Fitting Shop.</p>
        </li>
        <li>
          <p>Carpentry Shop.</p>
        </li>
        <li>
          <p>Black Smithy Shop.</p>
        </li>
        <li>
          <p>Machine Shop.</p>
        </li>
      </ol>
    ),
  },
]

export const LabImages = [
  // <img src={`${home}mech_lab_pics/01.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/02.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/03.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/04.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/05.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/06.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/07.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/08.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/09.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/10.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/11.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/12.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/13.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/14.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/15.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/16.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/19.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/20.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/21.jpg`} alt="image" />,

  // <img src={`${home}mech_lab_pics/22.jpg`} alt="image" />,

  <img src={`${process.env.GATSBY_BASE_URL}me/labs/DSC_0952.jpg`} alt="image" />,

  <img src={`${process.env.GATSBY_BASE_URL}me/labs/DSC_0959.jpg`} alt="image" />,

  <img src={`${process.env.GATSBY_BASE_URL}me/labs/DSC_0966.jpg`} alt="image" />,

  <img src={`${process.env.GATSBY_BASE_URL}me/labs/DSC_0972.jpg`} alt="image" />,

  <img src={`${process.env.GATSBY_BASE_URL}me/labs/DSC_0976.jpg`} alt="image" />,

  <img src={`${process.env.GATSBY_BASE_URL}me/labs/DSC_0977.jpg`} alt="image" />,
]

export const Achievements = [
  {
    title: <h2>Sponsored Project List:</h2>,
    content: (
      <table className="table-act">
        <thead>
          <tr className="syllabus-table-head">
            <th>S.No.</th>
            <th>Name of the Project</th>
            <th>Name of the PI</th>
            <th>Sponsoring Agency</th>
            <th>Sanctioned Amount(in lakh)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Tables.sponsoredProjects.map((row, idx) => (
            <tr key={idx}>
              <td>{row["S.No."]}</td>
              <td>{row["Name of the Project"]}</td>
              <td>{row["Name of the PI"]}</td>
              <td>{row["Sponsoring Agency"]}</td>
              <td>{row["Sanctioned Amount(in lakh)"]}</td>
              <td>{row.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },

  {
    title: <h2>CLUBS ACHIEVEMENTS </h2>,
    content: (
      <ul>
        <li>
          In HPVC INDIA 2014, we stood 6th overall from all the 41 colleges
          participating, ranging from IITs to BITSs and NITs and various other
          prestigious colleges.
        </li>
        <li>5th position in ENDURANCE Event in HPVC - 2014.</li>
        <li>5th position in DRAG Event in HPVC - 2014.</li>
        <li>
          ASME HPVC Secured an overall rank of 7th in 2019 and 10th in 2020.
        </li>
        <li>
          4th Position in Student Design Competition(SDC) in ASME E-Fest 2020.
        </li>
        <li>4th Position in IAM3D in ASME 2020.</li>
        <li>Team AAVEGA stood 55th in Virtual Supra SAEINDIA 2015.</li>
        <li>
          Team AAVEGA stood 19th in Supra SAEINDIA 2015 and 2nd among all the
          NITs and IITs.
        </li>
        <li>2nd Rank in the design Event in HPVC 2015.</li>
      </ul>
    ),
  },
]
export const Activities = [
  {
    title: (
      <h2>
        {" "}
        List of Short - Term Courses / Faculty Development Program / Workshop /
        Gian Program:
      </h2>
    ),

    content: (
      <table className="table-act">
        <tbody>
          <tr className="syllabus-table-head">
            <th>S.No.</th>
            <th>Name of the Faculty</th>
            <th>Organized Workshop/FDP/STC/Conference/GIAN program</th>
            <th>Duration</th>
          </tr>

          {Tables.shortTermCourse.map((row, idx) => (
            <tr key={idx}>
              <td>{row["S.No."]}</td>
              <td>
                {Object.keys(row["Name of the Faculty"]).map((title, idx) => (
                  <React.Fragment key={idx}>
                    <strong>{title}:</strong>{" "}
                    {row["Name of the Faculty"][title]}
                    <br />
                  </React.Fragment>
                ))}
              </td>
              <td>
                {row["Organized Workshop/FDP/STC/Conference/GIAN program"]}
              </td>
              <td>{row.Duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
]
