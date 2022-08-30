import React from "react"

// const home = "http://www.nitp.ac.in/"
const home = process.env.GATSBY_BASE_URL+"ee/labs/"

const Tables = {
  studentSelectedForInternships: [
    {
      "Roll No": 1422014,
      Name: "SRIRAM RANGARAJAN",
      "Academic / Industrial": "Academic",
      Organisation: "IIT Bombay",
    },
    {
      "Roll No": 1421001,
      Name: "MUNJI LALITHA KUMARI",
      "Academic / Industrial": "Industrial",
      Organisation: "KPIT Technologies, Bangalore",
    },
    {
      "Roll No": 1421005,
      Name: "SUBHRA CHANDAN BEHERA",
      "Academic / Industrial": "Industrial",
      Organisation: "KPIT Technologies",
    },
    {
      "Roll No": 1421006,
      Name: "DEBASISH MOHAPATRA",
      "Academic / Industrial": "Industrial",
      Organisation: "KPIT Technologies",
    },
    {
      "Roll No": 1421017,
      Name: "KISHAN KUMAR",
      "Academic / Industrial": "Industrial",
      Organisation: "KPIT Technologies",
    },
  ],
  projectSanctioned: [
    {
      "Name of the Project":
        "Fault Tolerant Control of Permanent Magnet Synchronous Motor Drive in Electric Vehicles",
      "Name of the PI": "Dr. Vimlesh Verma",
      Collaboration: "None",
      "Sponsoring Agency": "SERB - DST",
      "Sanctioned Amount(in lakh)": "32 Lakhs",
      Status: "Sanctioned",
    },
    {
      "Name of the Project":
        "Development of Potentiostat System for General Purpose Electro-Chemical Applications",
      "Name of the PI":
        "PI - Prof. Rajib Bandhyopadhyay(JU)Co-PI – Dr Arunangshu Ghosh (NITP)",
      Collaboration: "Jadavpur University",
      "Sponsoring Agency": "DST",
      "Sanctioned Amount(in lakh)": "23 Lakh",
      Status: "On-going",
    },
  ],
  shortTermCourse: [
    {
      Title: "DSP Applications on ARM Platform",
      "Developed/Organized By": "Dr Arunangshu Ghosh",
      Duration: "7 days (26/08/2016 to 01/09/2016)",
      "Resource Persons":
        "Prof. S K Sinha (Retd. Prof. IISc Bangalore)  Prof. Donald Reay (Heriot-Watt University; Edinburgh, UK.",
    },
    {
      Title:
        "Short term course(Intelligent sensing technologies and Instrumentation)",
      "Developed/Organized By": "Dr Arunangshu Ghosh",
      Duration: "5 days (05/0l/2016 to 09/01/2016)",
      "Resource Persons": "IITs, JU, NIT and Industries (CDAC)",
    },
    {
      Title:
        "Short term course(Advanced Power Electronics converters for renewable energy and Industrial Drives)",
      "Developed/Organized By": "Dr Vimlesh Verma",
      Duration: "5 days (14/12/2015 to 18/12/2015)",
      "Resource Persons": "Faculties from IITs, NITs and Industries (ABB)",
    },
    {
      Title: "Short term course(Advances in Industrial Control)",
      "Developed/Organized By": "Dr Nishat Anwar",
      Duration: "5 days (27/l 1/2015 to 1/12/2015)",
      "Resource Persons":
        "Faculties from IITs , AMU, NITs and Foreign University.",
    },
    {
      Title:
        "Short term course Reliability, Availability, Maintainability and Safety (RAMS)",
      "Developed/Organized By": "Dr Mala De",
      Duration: "2 days (18/04/2015 to 19/04/2015)",
      "Resource Persons":
        "Dr. Ajeet Kr PandeyDr. Mukul Verma,Experts from Industries",
    },
    {
      Title: "Summer School",
      "Developed/Organized By": "Dr G K Choudhury",
      Duration: "1 week (19/10/2012 to 23/10/2012)",
      "Resource Persons": "Faculties from IITs and NITs",
    },
  ],
  expertLectures: [
    {
      Title:
        "Expert classes and discussion session on Power Electronics and Industrial Drives & control",
      Duration: "4 days (25/02/2016 to 28/02/2016)",
      "Resource Persons": "Prof. S. K Sinha (Retd Professor IISC Banglore)",
    },
    {
      Title:
        "DC Motor Speed Control Problem and Discussion on end-to-end Controller Design",
      Duration: "4 days (25/02/216 to 28/02/2016)",
      "Resource Persons": "Prof. S.K Sinha (Retd. Prof. IISc Bangalore)",
    },
    {
      Title: "Power Electronics & Industrial Drive Control",
      Duration: "5 days (03/02/2015 to 09/02/2015)",
      "Resource Persons": "J R P Gupta(Professor, DTU)",
    },
    {
      Title:
        "General overview on Aerospace Industries and equipment and Information on higher studies requirement in USA",
      Duration: "1 day on 20/03/2015",
      "Resource Persons":
        "Mr. Fariz Kalim, Manager Project Management and Hardware Development, TELEDYNE CONTROLS",
    },
    {
      Title: "Commercial Aspects of Solar Energy in Indian Market",
      Duration: "1 day on18/03/2015",
      "Resource Persons": "Mr. S. Talapatra(Industry Expert)",
    },
    {
      Title: "Microcontrollers/ PIC processor/ ARM Processor",
      Duration: "1 day on 12/03/2015",
      "Resource Persons": "Radha Narayan Rao(Industry Expert)",
    },
    {
      Title:
        "Embedded System Design and implementation – case study and discussion",
      Duration: "1 day on 29/01/2015",
      "Resource Persons": "Prof. S.K Sinha (Retd. Prof. IISc Bangalore)",
    },
  ],
}
// export const Labs = [
//   {
//     content: (
//       <>
//         <h2>Laboratory Facilities Available in the Department:-</h2>

//         <ol type="1">
//           <li>Elements of Electrical Engg. Lab.</li>
//           <li>Electrical M/C Lab</li>
//           <li>Power System Protection Lab</li>
//           <li>Power Electronics Lab</li>
//           <li>Computer Lab</li>
//           <li>Microprocessor and Microcontroller Lab</li>
//           <li>Network theory Lab</li>
//           <li>Control System Lab</li>
//           <li>Measurement Lab</li>
//           <li>High Voltage Lab</li>
//           <li>SCADA Lab</li>
//         </ol>
//       </>
//     ),
//     // image: (
//     //   <img src={`${home}images/image_ele.jpg`} style={{ width: "100%" }}></img>
//     // ),
//   },
//   {
//     content: (
//       <>
//         <h2>
//           The following facilities are available in the department for carrying
//           out research:-
//         </h2>
//         <br />
//         <ol type="1">
//           <li>
//             A high end SCADA Lab is provided to the students to carry out
//             experiments related to their research.
//           </li>
//           <li>
//             Available simulation softwares include, MATLAB, Power World
//             Simulator, Cadence-OrCAD, PSIM, LabView(NI).
//           </li>
//           <li>
//             The hardware interface currently available in the department is
//             Typhoon, HIL.
//           </li>
//           <li>
//             Three high end Labs with state-of-the-art facilities are coming up
//             shortly. This include, Advanced Industrial Drives Lab, Advanced
//             Control System lab and Advanced Instrumentation lab.
//           </li>
//           <br />
//           <br />
//           The laboratory under this department includes Basic Electrical
//           Engg.,Electrical Machines, Network Theory, Signals & Systems, and
//           Instrumentation, High Voltage Engg., Microprocessor, Switchgear &
//           protection labs. All labs are equipped with machines and instruments
//           to meet the requirement of UG and PG course Curriculum as well as
//           research & development work being under taken by students and faculty.
//           The department has a Computer Lab with all hardware and software
//           facilities to meet the requirements of system modeling and analog and
//           digital circuit simulation. The department has Analog and Digital
//           Circuit Simulation software for analysis, PCB layout, MATLAB software
//           for modeling, simulation of signals and systems and Power World
//           Simulator for power system study.
//           <br />
//           The aim of the department is to equip the different labs for modern
//           course curriculum in the field of engineering & technology. In order
//           to carryout research, development and consultancy work in active
//           participation with the industry. The department is in process of
//           establishing labs for computer based process control and digital
//           signal processing. Very recently the department has established a high
//           end SCADA lab with a expense of more than 5 crores which is used for
//           final year ug and pg laboratories and also for research purpose by PhD
//           scholars of the department.
//           <br />
//           We are planning to start training courses for industry personnel and
//           academicians in this facility to generate revenue for the department/
//           college.
//         </ol>
//       </>
//     ),
//   },
// ]

export const Labs = {
  content: (
    <>
      <h2>Laboratory Facilities Available in the Department:-</h2>

      <ol type="1">
        <li>Elements of Electrical Engg. Lab.</li>
        <li>Electrical M/C Lab</li>
        <li>Power System Protection Lab</li>
        <li>Power Electronics Lab</li>
        <li>Computer Lab</li>
        <li>Microprocessor and Microcontroller Lab</li>
        <li>Network theory Lab</li>
        <li>Control System Lab</li>
        <li>Measurement Lab</li>
        <li>High Voltage Lab</li>
        <li>SCADA Lab</li>
      </ol>
    </>
  ),
}

export const LabImages = [
  <img src={`${home}DSC_0056.jpg`} />,
  <img src={`${home}DSC_0057.jpg`} />,
  <img src={`${home}DSC_0058.jpg`} />,
  <img src={`${home}DSC_0061.jpg`} />,
  <img src={`${home}DSC_0063.jpg`} />,
  // <img src={`${home}images/a_model.jpg`} />,
]

export const Achievements = [
  {
    content: (
      <>
        <h2>
          <strong>STUDENT ACHIEVEMENTS </strong>
        </h2>
        <ul>
          <li>
            Exceptional achievements in <strong>GATE</strong>, with AIR 300 in
            GATE '15, AIR 334 in GATE &lsquo;16.
          </li>
          <li>
            <strong>Sudhakar Kumar</strong> &ndash; A PG Student secured{" "}
            <strong>
              9<sup>th</sup> Rank
            </strong>{" "}
            in Indian Engineering Service (<strong>IES 2015</strong>).
          </li>
          <li>
            Students Selected for higher studies in reputed institute like IIT
            Kharagpur, IIT Guwahati, IT-BHU etc.
          </li>
          <li>
            Students take part in various fests across the country showcasing
            their skills in robotics, paper presentations and public speaking.
          </li>
        </ul>
      </>
    ),
  },
  {
    content: (
      <>
        <h2>
          <strong>Some of the students&rsquo; awards and achievements:</strong>
        </h2>
        <ul>
          <li>
            Adarsh Tiwari &ndash; A student of EE Department is a group member
            of the team that successfully managed to create a racing car for
            SUPRA' 15.
          </li>
          <li>
            Saurabh Dubey - A student of EE Department Selected among top 10
            national finalists in{" "}
            <strong>National Engineering Challenge 2016</strong> Organized by -
            The Gate Academy, Prizes -- Certificate of appreciation + 1 Tablet (
            TabGATE)
          </li>
          <li>
            Saurabh Dubey - A student of EE Department awarded and recognized as
            one of the top 10 in KTH Master's Challenge 2015 Summer Edition
            2015, organized by - KTH Royal Institute of Technology , Sweden for
            the track of "Electric Power Engineering" <br /> Prize - Certificate
            of Appreciation and dinner event with KTH Institute's officials
          </li>
        </ul>
        <h2>
          <strong>
            Students Selected for Industrial / Academic Internship:
          </strong>
        </h2>
      </>
    ),
  },
  {
    content: (
      <>
        <table className="table-act">
          <thead>
            <tr className="syllabus-table-head">
              <th>Roll No</th>
              <th>Name</th>
              <th>Academic / Industrial</th>
              <th>Organisation</th>
            </tr>
          </thead>
          <tbody>
            {Tables.studentSelectedForInternships.map((row, idx) => (
              <tr key={idx}>
                <td>{row["Roll No"]}</td>
                <td>{row.Name}</td>
                <td>{row["Academic / Industrial"]}</td>
                <td>{row.Organisation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ),
  },
  {
    content: (
      <>
        <h2>
          <strong>List of Publications by Students:</strong>
        </h2>
        <ol type="1">
          <li>
            Saragdhara Bhattacharya, MunjiLalithaKumari,
            <strong>M MChoudhary</strong>;{" "}
            <strong>
              &ldquo;Design of power system stabilizer by frequency response and
              state-space method&rdquo;
            </strong>
            ; <em>IEEE ISCO16 Coimbatore Feb 02, 2016</em>
          </li>
          <li>
            Jayanti Choudhary<strong>, D</strong>
            <em>
              .K. Singh, S.N. Verma, <strong>Kamil Ahmad</strong> &ldquo;
            </em>
            <strong>
              Artificial Intelligence Based Control of a Shunt Active Power
              Filter&rdquo;{" "}
            </strong>{" "}
            <em>2nd International Conference on Intelligent</em>
            <em>Computing,Communication Convergence (ICCC-2016)</em>
          </li>
          <li>
            <strong>Munji Lalitha Kumari, Sragdhara Bhattacharya</strong> , U.S
            Triar
            <strong>
              ; &ldquo;Stabilization of boost convertor with output filter using
              LQR based state-feedback controller&rdquo;,
            </strong>{" "}
            <em>IEEE ISCO16, Coimbatore Feb 02, 2016</em>
          </li>
          <li>
            <strong>Subhra Chandan Behera</strong>, G. K. Choudhary, R.K Mandal;{" "}
            <strong>
              &ldquo;PID Controller Based Automatic Reactive Power Control of a
              Wind-Diesel Hybrid Power System&rdquo;
            </strong>
            ,{" "}
            <em>
              {" "}
              International Journal of Advanced Research in Electrical,
              Electronics and Instrumentation Engineering (An ISO 3297: 2007
              Certified Organization) Vol. 4, Issue 11, November 2015{" "}
            </em>
          </li>
          <li>
            <strong>Subhra Chandan Behera</strong> , G.K Choudhary, R.K Mandal;
            <strong>
              &ldquo;Fuzzy based vector PI controller to mitigate the harmonics
              issue of a distribution system using Three-phase hybrid&rdquo;
            </strong>
            ;{" "}
            <em>
              International Conference on Advances in Electrical, Electronics,
              Information, Communication and Bio-Informatics (AEEICB16)
            </em>
          </li>
          <li>
            <strong>D Bharti</strong> , M De; <strong>&ldquo;</strong>{" "}
            <a
              href="https://scholar.google.co.in/citations?view_op=view_citation&amp;hl=en&amp;user=c-cVLgEAAAAJ&amp;sortby=pubdate&amp;citation_for_view=c-cVLgEAAAAJ:eQOLeE2rZwMC"
              target="_blank"
            >
              {" "}
              <strong>
                A new graph theory based loss allocation framework for bilateral
                power market using diakoptics
              </strong>{" "}
            </a>{" "}
            <strong>&rdquo;; </strong>{" "}
            <em>
              International Journal of Electrical Power &amp; Energy Systems 77,
              2016, 395-403.
            </em>
          </li>
          <li>
            <strong>Kumar Shahid</strong>, M De; <strong>&ldquo;</strong>{" "}
            <a
              href="https://scholar.google.co.in/citations?view_op=view_citation&amp;hl=en&amp;user=c-cVLgEAAAAJ&amp;sortby=pubdate&amp;citation_for_view=c-cVLgEAAAAJ:WF5omc3nYNoC"
              target="_blank"
            >
              {" "}
              <strong>
                Short Term Reactive Power Dispatch Using a Novel Pricing
                Structure for Synchronous Condenser
              </strong>{" "}
            </a>{" "}
            <em>
              &rdquo;,INDICON 2015, Proceedings of the 12th Annual IEEE India
              Conference, 17-20th December 2015, JamiaMiliaIslamia, New Delhi.
            </em>
          </li>
          <li>
            <strong>Kumar Sagar</strong> , Manjima Bhattacharya;{" "}
            <strong>
              &ldquo;A classical approach to find the optimal location and size
              of DG along with a proposed on-off controller
            </strong>
            &rdquo;; <em>IEEE conference, ICPEICES, DTU, July -2016</em>
          </li>
          <li>
            <strong>Alpana Sinha, </strong> M De, &ldquo;Load Shifting Technique
            for reduction of Peak Generation Capacity Requirement in Smart
            Grid&rdquo;, <em>IEEE conference, ICPEICES, DTU, July -2016.</em>
          </li>
          <li>
            <strong>Shashank Shekhar Kashyap, </strong> M De, &ldquo;A Novel
            Loss Allocation Method for Radial Distribution System with
            Distributed Generations&rdquo;,
            <em>IEEE conference, ICPEICES, DTU, July -2016.</em>
          </li>
          <li>
            <strong>Md.Hasmat</strong> <strong>Ali</strong>, A.K.Sahani, Study,
            Implementation and comparison of Different Multipliers based on
            Array KCM and Vedic Mathematics Using EDA Tools.. IJSRP. vol 3
            (Issue-6), June - 2013,ISSN 2250-3153.
          </li>
          <li>
            <strong>Devendra Kumar</strong>, Ashiwani Kumar, Unit Commitment Of
            Thermal Power Plant In Integration with Wind and Solar Plant Using
            Genetic Algorithm. International Journal of Engineering Research
            &amp;Technology (IJERT). Volume-3(Issue-7), July -
            2014,page-664-669, ISSN:2278-0181.
          </li>
          <li>
            <strong>Dileep kumar</strong>, Ashiwani Kumar, Control and
            Simulation of Smart Backup System for photovoltaic System in Matlab.
            International Journal of Engineering Research &amp;Technology
            (IJERT). Volume-3(Issue-7), July - 2014,page- 1312-1315,
            ISSN:2278-0181.
          </li>
          <li>
            <strong>Lokesh Kumar Yadav</strong>, Ashiwani Kumar, Comparative
            Analysis of Voltage Stability using Classical Methods and Particle
            Swarm Optimization. International Journal of Engineering Research
            &amp;Technology(IJERT). Volume-3(Issue-7), July - 2014,Page - 262
            -268, ISSN:2278-0181.
          </li>
          <li>
            <strong>Digamber Singh</strong>, Ashiwani Kumar, Bidding Strategy
            For Competitive Electricity Market By Using Optimization Technique
            (PSO &amp; APSO). International Journal of Engineering Research
            &amp;Technology (IJERT). Volume-3(Issue-5), May - 2014,Page- 1541-
            1548, ISSN:2278-0182.
          </li>
          <li>
            <strong>Dileep kumar</strong>, Ashiwani Kumar, Modelling,Control and
            Simulation of Integrated photovoltaic cell-Fuel cell &ndash; Battery
            based Distribution system. UACEE International journal of
            Advancements in Electronics and Electrical Engineering.
            Volume-1(Issue-2), December - 2012,Page- 68-73, ISSN:2319-7498.
          </li>
          <li>
            <strong>Digamber Singh</strong>, Ashiwani Kumar, Optimization
            Technique (PSO &amp; APSO) To Crack Bidding Problem For Participant
            In Electricity Market, International Conference on Industrial
            Electronics and Electrical Engineering (ICIEEE-2014).
            Singapore,September - 2014, .
          </li>
          <li>
            <strong>Dileep Kumar</strong>, Ashiwani Kumar, Control and
            Simulation of Integrated Photovalitic cell-battery-Fuel based
            distribution system for Controlled Ac loads, ICEECS,International
            Conference on Electrical, Electronics and Computer Science.
            Bhuneshwar, India,September - 2012, .
          </li>
          <li>
            <strong>Dileep Kumar</strong>, Ashiwani Kumar, Modelling,Control and
            Simulation of Integrated photovoltaic cell-Fuel cell &ndash; Battery
            based Distribution system, EEC 2012(International conference on
            advances in Electrical ,Electronics and computer Engineering.
            Dehradun, India,july - 2012, .
          </li>
          <li>
            <strong>Raushan Kumar, Amrita Sinha</strong>, G K Choudhary ,
            Dynamic modeling and simulation of an autonomous Hybrid power
            system. Int. J. of Renewable Energy Technology -2015 . , Accepted -
            2015,.
          </li>
          <li>
            <strong>Yadav Sushma,</strong> Choudhary G.K, R.K Mandal, Review on
            Fault Current Limiter. International journal of engineering Research
            &amp; technology. - 2014,.
          </li>
          <li>
            <strong>Meena, Gagan Deep</strong>, Choudhary, G. K. and Gupta,
            Manoj, Neural Network Based Recognition of Partial Discharge
            Patterns. International Journal of Advanced Engineering Research and
            Studies (E-ISSN2249-8974). IJAERS/. 1(2), March - 2012,121-126, .
          </li>
          <li>
            <strong>Kumar, Ankur</strong>, Choudhary, G. K. and Sinha, Amrita,
            Adaptive Noise Suppression in Voice communication using ASSNFIS
            System. International Journal of Electrical &amp; Electronics
            Engineering (IJEEE), ISSN(print):2231-5284. 1(4) - 2012,79-83, .
          </li>
          <li>
            <strong>Yadav Sushma</strong>, Choudhary G.K ,&amp;Mandal R.K,
            Determination of Appropriate location of Superconducting Fault
            Current Limiter in the Smart grid, International Conference on
            Industrial Electronics and Electrical Engineering ICIEEE. - 2014,.
          </li>
          <li>
            <strong>Kumar Ranjeet</strong>, Sinha Amrita &amp;Choudhary, G. K.,
            A new digital distance relaying algorithm for first-zone protection
            for series-compensated double-circuit transmission lines&rdquo;
            Proceeding, IEEE Computer Society, 3rd International Conference on
            Advances in Computing and Communications. 102-106, - 2013,.
          </li>
          <li>
            <strong>SushmaYadav</strong>, Rajib Kumar Mandal and Girish Kumar
            Choudhary , &ldquo;Determination of Appropriate Location of
            Superconducting Fault Current Limiter in the Smart Grid&rdquo;,
            Smart Electric Grid (ISEG), 2014 International Conference(IEEE).
            Page(s): 1 &ndash; 9, - 2014, .
          </li>
          <li>
            <strong>Pritanjali Kumari</strong>, U. S. Triar, AN EFFICIENT METHOD
            FOR PAPR REDUCTION IN OFDM SYSTEMS WITH REDUCED COMPLEXITY.
            International Journal of Electrical &amp; Electronics Engg., . 1(4)
            - 2012,92-98, ISSN (PRINT): 2231 &ndash; 5284.
          </li>
        </ol>
      </>
    ),
  },
]
export const Activities = [
  {
    content: (
      <>
        <h2>List of Projects Sanctioned / On-going:&nbsp;-</h2>
        <table className="table-act">
          <thead>
            <tr className="syllabus-table-head">
              <th>Name of the Project</th>
              <th>Name of the PI</th>
              <th>Collaboration</th>
              <th>Sponsoring Agency</th>
              <th>Sanctioned Amount(in lakh)</th>
              <th>Status</th>{" "}
            </tr>
          </thead>{" "}
          <tbody>
            {Tables.projectSanctioned.map((row, idx) => (
              <tr key={idx}>
                <td>{row["Name of the Project"]}</td>
                <td>{row["Name of the PI"]}</td>
                <td>{row.Collaboration}</td>
                <td>{row["Sponsoring Agency"]}</td>
                <td>{row["Sanctioned Amount(in lakh)"]}</td>
                <td>{row.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>&nbsp;The List of Short Term Courses organized:-</h2>
        <table className="table-act">
          <thead>
            <tr className="syllabus-table-head">
              <th>Title</th>
              <th>Developed/Organized By</th>
              <th>Duration</th>
              <th>Resource Persons</th>
            </tr>
          </thead>
          <tbody>
            {Tables.shortTermCourse.map((row, idx) => (
              <tr key={idx}>
                <td>{row.Title}</td>
                <td>{row["Developed/Organized By"]}</td>
                <td>{row.Duration}</td>
                <td>{row["Resource Persons"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>
          List of Expert Lectures by Renowned Academicians and Industry
          Representatives:-
        </h2>

        <table className="table-act">
          <thead>
            <tr className="syllabus-table-head">
              <th>Title</th>
              <th>Duration</th>
              <th>Resource Persons</th>
            </tr>
          </thead>
          <tbody>
            {Tables.expertLectures.map((row, idx) => (
              <tr key={idx}>
                <td>{row.Title}</td>
                <td>{row.Duration}</td>
                <td>{row["Resource Persons"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ),
  },
]
export const News_Events = {
  content: (
    <>
      <h2>Workshop/Short Term Courses Organized:</h2>
      <ul type="circle">
        <li>
          Organized Faculty Development Program on <q>Power Electronics</q>{" "}
          through NKN during 11th to 20th Dec. 2017 at NIT Patna.
        </li>
        <br />
        <br />

        <li>
          Organized a Short Term Course on{" "}
          <q>Design of Switched Mode Power Converters</q> during 6th to 8th Feb.
          2017 at NIT Patna.
        </li>
        <br />
        <br />

        <li>
          Organized a Short Term Course on <q>Institute-Industry Interaction</q>{" "}
          during 5th to 9th Dec. 2016 at NIT Patna.
        </li>
        <br />
        <br />

        <li>
          Organized a Workshop on{" "}
          <q>
            Control Design, Simulation and Data Acquisition using Labview and
            Sensor Interfacing
          </q>{" "}
          during 5th to 6th April 2016 at NIT Patna.
        </li>
        <br />
        <br />

        <li>
          Organized a Workshop on <q>LabView and its Application</q>during 14th
          to 18th March 2016 at NIT Patna.
        </li>
        <br />
        <br />

        <li>
          Organized a short term course on{" "}
          <q>
            Advanced Power Electronic Converters for Renewable Energy and
            Industrial Drives
          </q>{" "}
          during 14th to 18th Dec. 2015 at NIT Patna
        </li>
      </ul>
    </>
  ),
}
