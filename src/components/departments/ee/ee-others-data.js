import React from "react"

// const home = "http://www.nitp.ac.in/"
const home = process.env.GATSBY_BASE_URL + "ee/labs/"

const Tables = {
 studentSelectedForInternships: [
  {
   "Roll No": 2002079,
   Name: "Om Kumar",
   "Academic / Industrial": "Industrial",
   Organisation: "NALCO, Anugul",
  },
  {
   "Roll No": 2002023,
   Name: "Sujeet Kumar",
   "Academic / Industrial": "Industrial",
   Organisation: "NTPC, Muzaffarpur",
  },
  {
   "Roll No": 2002021,
   Name: " Chandan Kumar",
   "Academic / Industrial": "Industrial",
   Organisation: "NTPC, Muzaffarpur",
  },
  {
   "Roll No": 2002028,
   Name: "Mallela Srujana ",
   "Academic / Industrial": "Industrial",
   Organisation: "BHEL",
  },
  {
   "Roll No": 2002110,
   Name: "Akash Kumar ",
   "Academic / Industrial": "Industrial",
   Organisation: "IOCL, Barauni",
  },
  {
   "Roll No": 2002063,
   Name: "Ankunj Suraj",
   "Academic / Industrial": "Academic",
   Organisation: "IIT Hyderabad",
  },
  {
   "Roll No": 2102021,
   Name: "Ayush Raj",
   "Academic / Industrial": "Industrial",
   Organisation: "NTPC, Bhagalpur",
  },
  {
   "Roll No": 2102046,
   Name: " Ratan deep",
   "Academic / Industrial": "Industrial",
   Organisation: "IOCL, Baruni",
  },
  {
   "Roll No": 2102059,
   Name: "Shatrughan Kasaudhan ",
   "Academic / Industrial": "Industrial",
   Organisation: "NTPC, Tanda",
  },
  {
   "Roll No": 2102097,
   Name: " Abhishek Kumar Sudhanshu",
   "Academic / Industrial": "Industrial",
   Organisation: "PGCIL, Patna",
  },
  {
   "Roll No": 2102125,
   Name: "Anubhav Kumar ",
   "Academic / Industrial": "Industrial",
   Organisation: "PGCIL, Patna",
  },
  {
   "Roll No": 2102128,
   Name: "Mayank Kumar",
   "Academic / Industrial": "Industrial",
   Organisation: "Damodar Velley Corporation Ltd.",
  },
  {
   "Roll No": 2102027,
   Name: "Ankur Kumar ",
   "Academic / Industrial": "Industrial",
   Organisation: "NTPC, Patna",
  },
  {
   "Roll No": 2102079,
   Name: "Praveen kumar ",
   "Academic / Industrial": "Industrial",
   Organisation: "E.C Railway Danapur",
  },
  {
   "Roll No": 2102098,
   Name: "Vedansh Kumar Srivastava ",
   "Academic / Industrial": "Industrial",
   Organisation: "BHEL, Bhopal",
  },
  {
   "Roll No": 2102004,
   Name: "Utsav Kumar ",
   "Academic / Industrial": "Industrial",
   Organisation: "PGCIL, Patna",
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

 //  staffmember: [
 //   {
 //    "S.No.": 1,
 //    Name: "Sri Atul Kumar",
 //    Designation: "Sr. Technical Assistant",
 //    "Contact details": "atulkumar@nitp.ac.in",
 //    Qualification: "B.Tech in Mechanical Engineering",
 //    //Status: "completed"
 //   },
 //   {
 //    "S.No.": 2,
 //    Name: "Shad Ali Sabari ",
 //    Designation: "Sr. Technical Assistant ",
 //    "Contact details": "shad@nitp.ac.in  ",
 //    Qualification: " B.Tech in Mechanical Engineering",
 //    //Status: "Completed",
 //   },
 //   {
 //    "S.No.": 3,
 //    Name: "Md. Wahajul Haque ",
 //    Designation: " Sr. Technical Assistant",
 //    "Contact details": "wahajul@nitp.ac.in ",
 //    Qualification:
 //     "B.Tech in Mechanical Engineering and Pursuing Ph.D. at NIT Patna ",
 //    //Status: "Completed",
 //   },
 //   {
 //    "S.No.": 4,
 //    Name: " Sri Surendra Kumar",
 //    Designation: "Technical Assistant ",
 //    "Contact details": "surendra.me@nitp.ac.in ",
 //    Qualification: "B.E in Mechanical Engineering ",
 //    Status: "Completed",
 //   },
 //   {
 //    "S.No.": 5,
 //    Name: "Sri Amresh kumar ",
 //    Designation: "Technical Assistant ",
 //    "Contact details": "amresh.me@nitp.ac.in ",
 //    Qualification: " Diploma in Mechanical Engineering & I.Sc",
 //    Status: "Completed",
 //   },
 //   {
 //    "S.No.": 6,
 //    Name: " Sri Vaidhnath Kumar",
 //    Designation: " Technical Assistant",
 //    "Contact details": "vaidhnath.me@nitp.ac.in ",
 //    Qualification: "B.Tech in Mechanical Engineering ",
 //    Status: "Completed",
 //   },
 //   {
 //    "S.No.": 7,
 //    Name: "Sri Subodh Kumar ",
 //    Designation: " Junior Assistant",
 //    "Contact details": "subodh.ja@nitp.ac.in",
 //    Qualification: " B.A. ( Honours ) in History",
 //    Status: "Completed",
 //   },
 //   {
 //    "S.No.": 8,
 //    Name: "Sri UpendraLal ",
 //    Designation: "Sr. Technician ",
 //    "Contact details": " upendralalnit@gmail.com",
 //    Qualification: "Intermediate  ",
 //    Status: "Completed",
 //   },
 //   {
 //    "S.No.": 9,
 //    Name: " Sri Bharat Bhushan Sharma",
 //    Designation: " Sr. Office Attendant",
 //    "Contact details": " ",
 //    Qualification: " ",
 //    Status: "Completed",
 //   },
 //   {
 //    "S.No.": 10,
 //    Name: "Sri Birendra Singh ",
 //    Designation: "Office Attendant, SG-II ",
 //    "Contact details": "Birendrasinghnitp@gmail.com",
 //    Qualification: " ",
 //    Status: "Completed",
 //   },
 //  ],
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
   <h3>Laboratory Facilities Available in the Department:-</h3>

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
    <li>Industrial Drives and Control Lab</li>
    <li>
     Advanced Instrumentation Lab
     <li>Power system Lab (upcoming) </li>
    </li>
   </ol>
   <h3>Research Laboratories</h3>
   <p>
    The Department of Electrical Engineering has multiple
    laboratories/facilities which are engaged in interesting and cutting-edge
    research projects. The details of those laboratories are as follows:
    <br />
    <br />
    <h3>
     <strong>1. Advanced Instrumentation Lab: </strong>
    </h3>
    <br />
    Dr. Arunangshu Ghosh with his team of students is working towards the
    development of a portable electronic tongue for estimation of tea quality
    and spoilage detection of food samples. The other work in progress is
    development of the Potentiostat System for General Purpose Electro-Chemical
    Applications. These systems are developed to develop automated systems for
    quality analysis of different agricultural and food samples. Besides,
    technology using near infrared spectroscopy based development (NIR) is also
    being carried out for developing non-invasive, portable and optical
    solutions for quality analysis of food samples. Software like Matlab,
    LABView, and MPLAB are regularly used to train students for carrying out
    researches in this lab. Two externally sponsored research projects have been
    completed successfully in this laboratory.
    <br />
    <br />
    <h3>
     <strong>2. Control Lab: </strong>
    </h3>
    A project design and development of low-cost BLDC motor drive for solar PV
    based irrigation system. One externally sponsored research project has been
    completed successfully in this laboratory
    <br />
    <h3>
     <strong> 3. Industrial Drives and Control Lab:</strong>
    </h3>
    The group of students led by Dr. Vimlesh Verma works towards the development
    of control techniques for electrical machine drives. High end hardware
    simulators like HIL, and software like DSpace are a part of this lab. One
    externally sponsored research project has been completed successfully in
    this laboratory.
    <br />
    <h3>
     <strong>4.SCADA Lab:</strong>
    </h3>
    This space is equipped with the facilities where Interfacing of wind
    turbines with power systems and realization of hardware of grid using
    supervisory control can be done by masters and PhD students.
    <br />
    <h3>
     <strong> 5. NIT Patna campus smart metered distribution system:</strong>
    </h3>
    This enables us to get the real time measurement of power, current,
    frequency, voltage and other electrical parameters throughout the system at
    different nodes. The dataset created acts as an asset and allows us to work
    further on load forecasting, demand side management, generation and
    distribution planning, also renewable generation planning). One externally
    sponsored research project under Dr. Mala De has been completed successfully
    in this laboratory.
    <br />
    <h3>
     <strong> 6. Power electronics Lab:</strong>
    </h3>
    A team of students along with Dr. Ambarisha Mishra is working on a six-phase
    induction motor drive.
    <br /> 
   </p>
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
     <strong>Notable achievements by students: </strong>
    </h2>
    <ul>
     <li>Abhash Kumar – secured All India Rank 1 in GATE EE 2020.</li>
     <li>
      Sudhakar Kumar – secured All India Rank 9th Engineering Service
      Examination (ESE 2015).
     </li>
     <li>
      Amratansh Gupta – secured All India Rank 88 in GATE 2020 and currently he
      is a Ph.D. researcher with Department of Electronics and Informatics of
      Vrije Universiteit Brussel.
     </li>
    </ul>
    <h2>
     <strong>Consistent performance in GATE</strong>
    </h2>
    <ul>
     <li>
      GATE 2024 Performers
      <ul>
       <li>
        {" "}
        Mayank Jaiman (Roll No. Graduating Year: 2022) secured AIR 25 in the
        discipline of EE.
       </li>
       <li>
        Manish Choudhary (Roll No.1802113 Graduating Year: 2022) AIR 519.
       </li>
       <li>
        {" "}
        Jitendra Kumar (Roll No.1802102, Graduating Year: 2022) (Maruti Suzuki
        India Ltd.) AIR 600{" "}
       </li>
       <li> Adarsh Kumar (Roll No.1802005, Graduating Year: 2022) AIR 711.</li>
      </ul>
     </li>
     <li>
      {" "}
      Lakshay Narnauli (Roll No. 1402023, Graduating Year: 2018) (IOCL) AIR 288
      in GATE 2023.{" "}
     </li>
     <li>
      {" "}
      Manish Bajya (Roll No. 1802109, Graduating Year: 2022) (KRIBHCO) secured
      AIR-887 Rank in GATE-EE 2022.
     </li>
     <li>
      {" "}
      Rajan Kumar Pandey (Roll No.1802023 Graduating Year: 2022) at Capgemini as
      Associate -II Software Engineer cleared GATE 2021.
     </li>
    </ul>
   </>
  ),
 },
 {
  content: (
   <>
    <h2>
     <strong>Performers at their workplace </strong>
    </h2>
    <ul>
     <li>
      Anjali (Roll No. 1902045; Graduating Year:2023) working as Pre-Sales
      Consultant at O9 Solutions Management Pvt Ltd received SPOT Award
     </li>
     <li>
      Tanishq Singh (Roll No. 1802100 Graduating Year: 2022) Winner of Tata
      Crucible Hackathon 2022 East Region, Winner of IMS case study challenge
      2022, Applause/Spot Awards in Deloitte for exceptional performance.
     </li>
     <li>
      Akansh Omar (Roll No. 1802117 Graduating Year: 2022) Received Applause
      Award and Spot Award.
     </li>
     <li>
      Digvijay Verma (Roll No. 1702033 Graduating Year: 2021) working at Maruti
      Suzuki India Limited as Assistant Manager bagged Star Executive Award in
      Tata Power Delhi Distribution Limited for reducing commercial loss by 12%.
      He also won Gold Award in ICQC 2023- For project of curbing Theft in
      village area distribution network.
     </li>
     <li>
      Rashika Singh (Roll No. 1702101 Graduating Year: 2021) working at Alstom
      Transport India Limited as V&V Designer won Bronze Award in December 2022
      for exceptional work in NCRTC-RRTS Project of India.
     </li>
     <li>
      Amratansh Gupta (Roll No. 1402061 Graduating Year: 2018) as Semiconductor
      Research at IMEC; He received JN Tata Scholar Award (2023), Secured All
      India Rank 88 in GATE-EC 2020, and published Two IEEE Transactions on
      Electron Devices Journal Papers from Master thesis at IISc Bangalore.
     </li>
     <li>
      Tarkeshwer Narayan Gaur (Roll No. 140061 Graduating Year: 2018) at
      Highradius Technologies Pvt Ltd as Senior Consultant- II (Solution
      Architect) emerged as Employee of the quarter (HighFlyer Award).
     </li>
     <li>
      Pranjal Kumar (Roll no. 1702084 Graduating Year: 2021) at L&T Construction
      as Senior Engineer- Electrical Rated as top performer in the FY22-23.
     </li>
     <li>
      Anil Kumar (Roll no. 1802088 Graduating Year: 2022) at Zetwerk
      manufacturing private limited as SDE-1 received Appreciation award.
     </li>
    </ul>
    <h2>
     <strong>Students Selected for Industrial / Academic Internship:</strong>
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
     {/* <li>
      Saragdhara Bhattacharya, MunjiLalithaKumari,
      <strong>M MChoudhary</strong>;{" "}
      <strong>
       &ldquo;Design of power system stabilizer by frequency response and
       state-space method&rdquo;
      </strong>
      ; <em>IEEE ISCO16 Coimbatore Feb 02, 2016</em>
     </li> */}
     <li>
      {" "}
      Kamakshi Prashadini Swain, Prakash Lakhara, Kapish Khetan, Siddhant
      Mishra, Mala De, “Efficient hybrid pricing for optimal DSM of home energy
      management system utilizing load precedence” International Transactions on
      Electrical Energy Systems, volume 31, No. 3, Jan. 2021.
     </li>
     <li>
      {" "}
      Shweta Kumari, Pulakraj Aryan and G. Lloyds Raja, Design and simulation of
      a novel FOIMC-PD/P double-loop control structure for CSTRs and
      bioreactors, Int. J. Chem. React. Eng., 2021,
      doi.org/10.1515/ijcre-2021-0140.{" "}
     </li>
     <li>
      {" "}
      Prakash, A., & Meena, G. (2021). Observer design for apex height and
      vertical velocity of a single-leg hopping robot during stance phase.
      Robotica, Cambridge University Press, 1-12. doi:10.1017/S0263574721001429.{" "}
     </li>
     <li>
      {" "}
      B. S. Shiva, C. D. Kumar & V. Verma, “Single Sensor Based Vector
      Controlled PMSM Drive”, IEEE -PEDES, Jaipur, Dec. – 2020.{" "}
     </li>
     <li>
      {" "}
      B. S. Shiva, C. D. Kumar & V. Verma, “Speed Sensorless Vector Controlled
      PMSM Drive with A Single Current Sensor”, IEEE -PEDES, Jaipur, Dec. –
      2020.{" "}
     </li>
     <li>
      {" "}
      C. D. Kumar, B. S. Shiva & V. Verma, “Vector Control of PMSM Drive with
      Single Current Sensor”, In the Conf. Proc. of SCES 2020, MNNIT Allahabad,
      India.
     </li>
     <li>
      {" "}
      Y. A. Khan, I. S. Twinkle, S. Kumar & V. Verma, “Comparative Analysis of
      Different Converter Topologies for an SRM Drive with Conventional and
      Vector Control Schemes”, In the Conf. Proc. of IEEE-ICEFEET 2020, NIT
      Patna, India.
     </li>
     <li>
      {" "}
      Sweta Kumari and Rajib Kumar Mandal, Effectiveness of Space Vector PWM in
      Three-Phase Inverter, ICEFEET-2020
     </li>
     <li>
      {" "}
      Ashutosh Kumar Singh, Rajib Kumar Mandal, Ravi Raushan and Pratyush Gauri,
      Design and Analysis of the Gate Driver Circuit for Power Semiconductor
      Switches, ICEFEET 2020
     </li>
     <li>
      {" "}
      Ashutosh Kumar Singh, Rajib Kumar Mandal, Ravi Raushan and Pratyush Gauri,
      Grid Connected Photovoltaic Systems with Multilevel Inverter, ICEFEET 2020{" "}
     </li>
     <li>
      {" "}
      Md Irfan Ahmed, Prateem Pan, Ramesh Kumar and R. K. Mandal, Wind
      Generation Forecasting Using Python, ICEFEET-2020{" "}
     </li>
     <li>
      AK Singh, RK Mandal, V Raj, P Gauri, Design of Autonomous Electric Vehicle
      Detecting the Roadside Buildings, 2020 IEEE First International Conference
      on Smart Technologies for Power{" "}
     </li>
     <li>
      {" "}
      Sariki Murali, Ravi Shankar, Shivam Shrivastav, Utkarsh Dhawal and Vishal
      Kannaujia, LFC Scheme for A Deregulated Multi-Area Power System using
      Cascaded Fractional Order Controller, ICEFEET-2020{" "}
     </li>
     <li>
      {" "}
      A. Mishra, Anita Bharti, Anjali Kumari, Apurba Paul, “Transmission Line
      Inspection Robot:A Novel Approach,” 6th International Conference on
      Nanoelectronics Circuits & Communication Systems (NCCS-2020), IETE & ISVE
      Ranchi Centre, 19-20 Dec 2020.{" "}
     </li>
     <li>
      {" "}
      M. S. Ahmed and A. Mishra, "Analysis of 5-Phase IM Drive with Reduced
      Switch 5-Level Inverter," 2020 IEEE Students Conference on Engineering &
      Systems (SCES), Prayagraj, India, 2020, pp. 1-5.
     </li>
     <li>
      {" "}
      S. Ahmad and A. Mishra, "Mathematical Modelling, Simulation and Control of
      Five-Phase Induction Motor Drives," 2020 International Conference on
      Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET),
      Patna, India, 2020, pp. 1-4.{" "}
     </li>
     <li>
      {" "}
      A. Mishra, Sartaj Ahmed, Vikram Kuma, “Performance Investigation of
      Multi-phase IM Drive with Five-level Inverter under Fault Conditions”, 6th
      International Conference on Nanoelectronics Circuits & Communication
      Systems (NCCS-2020), IETE & ISVE Ranchi Centre, 19-20 Dec 2020.{" "}
     </li>
     <li>
      {" "}
      Dibya Bharti, Meera Sinha, Sukanya, Mala De, “Multiobjective Optimization
      Based Resource Utilization with Loss Minimization in Microgrid”, IEEE
      region 10 Symposium (Tensymp 2019), Tensymp, IEEE PES Society,
      (Piscataway, NJ, USA) Jun. 2019.
     </li>
     <li>
      {" "}
      Madhusudan Kumar and M. De, Optimal Load Scheduling for Industrial
      Load-Analysis for a Generalized Industrial Load Model, 8th International
      Conference ICPS 2019. Jaipur, December - 2019,
      DOI:10.1109/ICPS48983.2019.9067735.{" "}
     </li>
     <li>
      {" "}
      R. Kumar, V. Verma, Y.A. Khan, B. S. Shiva, “Q-MRAS Based Speed Sensorless
      Vector Controlled Synchronous Reluctance Motor Drive”, 1st International
      Conference on International Conference on Power Electronics Applications
      and Technology in Present Energy Scenario (PETPES-2019).{" "}
     </li>
     <li>
      {" "}
      Sanjeev Kumar, Manish Kumar, Arunangshu Ghosh, A New Approach of Modeling
      the Electronic Tongue Sensors for Classification, IEEE Sensors 2018
      Conference, New Delhi, India, October 28-31, 2018, DOI:
      10.1109/ICSENS.2018.8589601.{" "}
     </li>
     <li>
      {" "}
      Manish Kumar, Sanjeev Kumar, Amratansh Gupta, Arunangshu Ghosh,
      Development of Electronic Interface for Sensing Applications with
      Voltammetric Electronic Tongue, IEEE Sensors 2018 Conference, New Delhi,
      India, October 28-31, 2018, DOI: 10.1109/ICSENS.2018.8589506,{" "}
     </li>
     <li>
      {" "}
      Sanjeev Kumar, Prince Kumar, Arunangshu Ghosh, Independent Component
      Regression for the Development of Prediction Model for Analysis of
      Electronic Tongue Response, Fifth International Conference on Emerging
      Applications of Information Technology (EAIT), IIEST, Shibpur, Howrah,
      12-13 Jan, 2018, Pages:1-4, 10.1109/EAIT.2018.8470427, DOI:
      10.1109/EAIT.2018.8470427
     </li>
     <li>
      {" "}
      Vibhas K Vats, Sneha Rai, Suddhasil De, Mala De, “Very Short-Term,
      Short-Term and Mid-Term Load Forecasting for Residential Academic
      Institute: A Case Study”, Nanoelectronics, Circuits and Communication
      Systems (NCCS 2018), LNEE Springer Verlag (Berlin/ Heidelberg, Germany),
      Nov.2018.
     </li>
     <li>
      {" "}
      Vibhas K Vats, Sneha Rai, Dibya Bharti, Mala De, “Mitigating Eect of
      Communication Link Failure in Smart Meter based Load Forecasting”, ICCCA
      2018, IEEE (Piscataway, NJ, USA), Dec. 2018.{" "}
     </li>
     <li>
      {" "}
      S. S. Kashyap and M. De, “Loss Allocation and Loss Minimization for Radial
      Distribution System including DGs”, IET Renewable Power Generation, In
      Press, 2017.{" "}
     </li>
     <li>
      {" "}
      Ambuj Saxena, M. De, Demand Response Management of Residential Loads with
      Integrated Temperature Dependent Appliances, 5th International Conference
      on Emerging Applications of Information Technology (EAIT’18), 1-4, IEEE,
      New York, NY, USA, 2017.{" "}
     </li>
     <li>
      {" "}
      Navjeet Singh, M. De, Kamakshi P. Swain, Analysis of a PV System under
      Partially Shaded Condition using Enhanced PV Model, 7th International
      Conference on Power Systems (ICPS’17), 1-6, IEEE, New York, NY, USA, 2017.{" "}
     </li>
     <li>
      {" "}
      A. Sinha and M. De, "Load shifting technique for reduction of peak
      generation capacity requirement in smart grid," 2016 IEEE 1st
      International Conference on Power Electronics, Intelligent Control and
      Energy Systems (ICPEICES), 2016, pp. 1-5, doi:
      10.1109/ICPEICES.2016.7853528.
     </li>
     <li>
      {" "}
      Md S. Alam and M. De, “Optimal Reactive Power Dispatch using Hybrid
      Loop-Genetic based Algorithm”, Proc. 19th National Power System Conference
      (NPSC) 2016, Bhubaneswar, Odisha (December 19-21, 2016).{" "}
     </li>
     <li>
      {" "}
      K. P. Swain and M. De, “Loss Allocation Method Independent of Dynamic Load
      Variation”, Proc. IEEE 7th India International Conference on Power
      Electronics (IICPE) 2016, Patiala, Punjab (November 17-19, 2016).{" "}
     </li>
     <li>
      S. S. Kashyap and M. De, “A Novel Loss Allocation Method for Radial
      Distribution System with Distributed Generations”, Proc. 1st IEEE
      International Conference on Power Electronics, Intelligent Control and
      Energy Systems (PEICES) 2016, New Delhi (July 4-6, 2016).{" "}
     </li>
     <li>
      {" "}
      A. Sinha and M. De, “Load Shifting Technique for Reduction of Peak
      Generation Capacity Requirement in Smart Grid”, Proc. 1st IEEE
      International Conference on Power Electronics, Intelligent Control and
      Energy Systems (PEICES) 2016, New Delhi (July 4-6, 2016).{" "}
     </li>
     <li>
      {" "}
      K. Shahid and M. De, “Short Term Reactive Power Dispatch Using a Novel
      Pricing Structure for Synchronous Condenser”, Proc. 12th Annual IEEE India
      Conference (INDICON) 2015, New Delhi (December 17-20, 2015).{" "}
     </li>
    </ol>
   </>
  ),
 },
]

// export const Staff = [
//   {
//    title: <h2>Non</h2>,
//    content: (
//     <table className="table-act">
//      <thead>
//       <tr className="syllabus-table-head">
//        <th>S.No.</th>
//        <th>Name</th>
//        <th>Designation</th>
//        <th>Contact details</th>
//        <th>Qualification</th>
//        {/* <th>Photo</th> */}
//       </tr>
//      </thead>
//      <tbody>
//       {Tables.staffmember.map((row, idx) => (
//        <tr key={idx}>
//         <td>{row["S.No."]}</td>
//         <td>{row["Name"]}</td>
//         <td>{row["Designation"]}</td>
//         <td>{row["Contact details"]}</td>
//         <td>{row["Qualification"]}</td>
//         {/* <td>{
//            <img
//       src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1ZTd8RKh4GeeBHokdnK0q01hw2sqo9uXB"
//       alt="hodImage"
//     />
//      }</td> */}
//        </tr>
//       ))}
//      </tbody>
//     </table>
//    ),
//   },
//  ]
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
     Organized Faculty Development Program on <q>Power Electronics</q> through
     NKN during 11th to 20th Dec. 2017 at NIT Patna.
    </li>
    <br />
    <br />

    <li>
     Organized a Short Term Course on{" "}
     <q>Design of Switched Mode Power Converters</q> during 6th to 8th Feb. 2017
     at NIT Patna.
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
      Control Design, Simulation and Data Acquisition using Labview and Sensor
      Interfacing
     </q>{" "}
     during 5th to 6th April 2016 at NIT Patna.
    </li>
    <br />
    <br />

    <li>
     Organized a Workshop on <q>LabView and its Application</q>during 14th to
     18th March 2016 at NIT Patna.
    </li>
    <br />
    <br />

    <li>
     Organized a short term course on{" "}
     <q>
      Advanced Power Electronic Converters for Renewable Energy and Industrial
      Drives
     </q>{" "}
     during 14th to 18th Dec. 2015 at NIT Patna
    </li>
   </ul>
  </>
 ),
}
