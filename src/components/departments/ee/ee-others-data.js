import React from "react"

// const home = "http://www.nitp.ac.in/"
const home = process.env.GATSBY_BASE_URL + "ee/labs/"

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
   "Sr. No.": 1,
   "Project Scheme and Sponsoring Agency":
    "Department of Science and Technology (DST)",
   "File Number": "89830",
   "Title of the Project": "DST-FIST 2023",
   "Amount (INR)": "82,76,000",
   "Name of Investigator": "Dr. Rajib Kumar Mandal",
   Status: "Approved October 2023",
   "Start Date": "-",
   "End Date": "-",
   Duration: "5.0",
  },
  {
   "Sr. No.": 2,
   "Project Scheme and Sponsoring Agency":
    "Science and Engineering Research Board (SERB)",
   "File Number": "EEQ/2022/000555",
   "Title of the Project":
    "Design of Switched-Capacitor Based Boosting Inverter for PV Applications with Fewer Components",
   "Amount (INR)": "33,93,434",
   "Name of Investigator": "Dr. Rajib Kumar Mandal",
   Status: "Ongoing",
   "Start Date": "14.02.2023",
   "End Date": "13.02.2026",
   Duration: "3.0",
  },
  {
   "Sr. No.": 3,
   "Project Scheme and Sponsoring Agency":
    "Bihar Council on Science and Technology (BCST)",
   "File Number": "BCST-RD-01/2022-797",
   "Title of the Project":
    "A smart and connected Electrochemical device for quality analysis of agricultural products",
   "Amount (INR)": "2,00,000",
   "Name of Investigator": "Dr. Arunangshu Ghosh,",
   Status: "Ongoing",
   "Start Date": "14.10.2023",
   "End Date": "3.10.2025",
   Duration: "2.0",
  },
  {
   "Sr. No.": 4,
   "Project Scheme and Sponsoring Agency": "Department of Biotechnology (DBT)",
   "File Number": "BT/PR49634/MED/32/851/2023",
   "Title of the Project":
    "Development of a novel soft -robotic joint for potential assistive applications using piezoelectric composite elastomer based synthetic muscle fibres",
   "Amount (INR)": "32,76,000 ",
   "Name of Investigator": "Dr. Arunangshu Ghosh",
   Status: "Approved on July 2023",
   "Start Date": "-",
   "End Date": "-",
   Duration: "1.5",
  },
  {
   "Sr. No.": 5,
   "Project Scheme and Sponsoring Agency": "Startup Research grants",
   "File Number": "SRG/2021/001837",
   "Title of the Project":
    "Design and development of indigenous low-cost phasor measurement unit ",
   "Amount (INR)": "32,17,000",
   "Name of Investigator": "Dr. M Senthil Kumar",
   Status: "Ongoing",
   "Start Date": "14.11.2021",
   "End Date": "13.11.2024",
   Duration: "3.0",
  },
  {
   "Sr. No.": 6,
   "Project Scheme and Sponsoring Agency": "Startup Research grants",
   "File Number": "SRG/2021/002110",
   "Title of the Project":
    "Bio-inspired electronic synaptic cells for neuromorphic and bio-medical applications",
   "Amount (INR)": "29,00,000",
   "Name of Investigator": "Dr. Amitesh Kumar",
   Status: "Ongoing",
   "Start Date": "14.11.2021",
   "End Date": "13.11.2024",
   Duration: "3.0",
  },
  {
   "Sr. No.": 7,
   "Project Scheme and Sponsoring Agency":
    "Biotechnology Ignition Grant (BIG), BIRAC, DBT, Govt. of India",
   "File Number": "BIRAC/KIIT01201/BIG-17/20",
   "Title of the Project":
    "Development of portable spectroscopic instruments for on-site estimation of quality compounds in tea",
   "Amount (INR)": "49,55,000",
   "Name of Investigator": "Dr. Arunangshu Ghosh-CoPI",
   Status: "Completed",
   "Start Date": "20.12.2021",
   "End Date": "19.12.2023",
   Duration: "2.0",
  },
  {
   "Sr. No.": 8,
   "Project Scheme and Sponsoring Agency":
    "Early Career Research Award, SERB, DST, Govt. of India",
   "File Number": "ECR/2017/001027",
   "Title of the Project":
    "Sustainable Smart Grid Framework for Energy Management Sytem Incorporating available Renewable Resources",
   "Amount (INR)": "20,19,600",
   "Name of Investigator": "Dr. Mala De",
   Status: "Completed",
   "Start Date": "15.07.2017",
   "End Date": "14.01.2021",
   Duration: "3.5",
  },
  {
   "Sr. No.": 9,
   "Project Scheme and Sponsoring Agency":
    "Early Career Research Award, SERB, DST, Govt. of India",
   "File Number": "ECR/2016/000900",
   "Title of the Project":
    "Fault Tolerant Control of Permanent Magnet Synchronous Motor Drive in Electric Vehicles ",
   "Amount (INR)": "29,45,180",
   "Name of Investigator": "Dr. Vimlesh Verma",
   Status: "Completed",
   "Start Date": "29.09.2016",
   "End Date": "28.03.2020",
   Duration: "3.5",
  },
  {
   "Sr. No.": 10,
   "Project Scheme and Sponsoring Agency":
    "Early Career Research Award, SERB, DST, Govt. of India",
   "File Number": "ECR/2016/001547",
   "Title of the Project":
    "Design and development of a low cost BLDC motor drive for solar PV based irrigation system",
   "Amount (INR)": "42,17,530",
   "Name of Investigator": "Dr. Nishat Anwar",
   Status: "Completed",
   "Start Date": "28.03. 2017",
   "End Date": "27.09. 2020",
   Duration: "3.5",
  },
  {
   "Sr. No.": 11,
   "Project Scheme and Sponsoring Agency":
    "TEQIP Collaborative Research Scheme, NPIU, Govt. of India",
   "File Number": "-",
   "Title of the Project":
    "Development of portable and industry viable torsional vibration measurement system",
   "Amount (INR)": "13,35,000",
   "Name of Investigator": "Dr. Nishat Anwar",
   Status: "Completed",
   "Start Date": "8.06.2019",
   "End Date": "30.09.2020",
   Duration: "1.25",
  },
  {
   "Sr. No.": 12,
   "Project Scheme and Sponsoring Agency": "Seed Project Grant, NIT Patna",
   "File Number": "NITP/3040/19",
   "Title of the Project":
    "High Performance Vector Controlled Multiphase AC Machines",
   "Amount (INR)": "10,00,000",
   "Name of Investigator": "Dr. Ambarisha Mishra",
   Status: "Completed",
   "Start Date": "02.09. 2019",
   "End Date": "01.09.2021",
   Duration: "2.0",
  },
  {
   "Sr. No.": 13,
   "Project Scheme and Sponsoring Agency":
    "TEQIP-AICTE, Collaborative research scheme",
   "File Number": "-",
   "Title of the Project":
    "Investigation into QoS for Next Generation Networks",
   "Amount (INR)": "10,62,000",
   "Name of Investigator": "Dr. Ravi Shankar",
   Status: "Completed",
   "Start Date": "-",
   "End Date": "-",
   Duration: "2.25",
  },
  {
   "Sr. No.": 14,
   "Project Scheme and Sponsoring Agency":
    "Instrument Development Program, DST, Govt. of India",
   "File Number": "IDP/SEN/05/2015",
   "Title of the Project":
    "Development of Potentiostat System for General Purpose Electro-Chemical Applications",
   "Amount (INR)": "23,33,600",
   "Name of Investigator": "Dr.Arunangshu Ghosh-CoPI ",
   Status: "Completed",
   "Start Date": "21.07. 2016",
   "End Date": "20.07. 2019",
   Duration: "3.0",
  },
  {
   "Sr. No.": 15,
   "Project Scheme and Sponsoring Agency":
    "Early Career Research Award, SERB, DST, Govt. of India",
   "File Number": "CR/2016/001813",
   "Title of the Project":
    "Development of a portable electronic tongue for estimation of tea quality and spoilage detection of food samples",
   "Amount (INR)": "15,95,000",
   "Name of Investigator": "Dr. Arunangshu Ghosh",
   Status: "Completed",
   "Start Date": "17.03.2017",
   "End Date": "6.09.2020",
   Duration: "3.5",
  },
 ],
 totalAmount: [
  {
   "Total Project Value": "TOTAL VALUE OF PROJECTS (INR)",
   "Amount (INR)": "42,725,344/-",
  },
 ],
 consultancy: [
  {
   "Name of the faculty": "Prof. Ramesh Kumar, Dr. Rajib Kumar Mandal",
   "Project Title":
    "Vetting of electrical design of new electrical distribution system of Chanakya National Law University, Patna (07.04.2021)",
   "Funding Agency": "Chanakya National Law University, Patna, Bihar",
   "Amount (INR)": "4,60,200",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal, Dr. Nishat Anwar",
   "Project Title":
    "Vetting for MEP schemes/drawings for the construction of 240 bedded hospital building of Dr. Radha Krishan Medical College and Hospital, Hamirpur ( 27.04.2021)",
   "Funding Agency": "Ahluwalia Contracts (India) Limited, New Delhi",
   "Amount (INR)": "5,36,900",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal, Dr. Ravi Shankar",
   "Project Title":
    "Vetting of MEP services design and drawing of all buildings at the proposed permanent campus of IIIT bhagalpur, Bihar ( 13.04.2021)",
   "Funding Agency": "DDF Consultants, Pitampura, New Delhi",
   "Amount (INR)": "5,98,260",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal, Dr. Ravi Shankar",
   "Project Title":
    "Upgradation of Jawaharlal Nehru medical college and Hospital, Bhagalpur, Bihar ( 20.05.2019)",
   "Funding Agency": "Tribeni Constructions Limited, Guwahati, Assam",
   "Amount (INR)": "4,44,860",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal, Dr. Ravi Shankar",
   "Project Title": "Upgradation of PMCH, Patna ( 28.10.2020)",
   "Funding Agency": "C.K. Constructions, Noida, Uttar Pradesh",
   "Amount (INR)": "5,67,580",
  },
  {
   "Name of the faculty": "Prof. Ramesh Kumar, Dr. Rajib Kumar Mandal",
   "Project Title":
    "Proof checking and E & M works regarding the construction of academic and residential complexes for the campus of IIT Patna, Bihta ( 05.02.2019)",
   "Funding Agency": "NCC Limited, Bihta, Patna, Bihar",
   "Amount (INR)": "3,54,000",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal",
   "Project Title":
    "To examine the executed work of supply, installation, testing and commissioning of air-conditioners and associated electrical work at SCI building",
   "Funding Agency": "IGIMS Patna",
   "Amount (INR)": "3,06,800",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal",
   "Project Title":
    "Vetting drawings/ documents of internal and external, electrical civil and mechanical design and drawing for the 240 bedded hospital, academic block, service block, department work and specialized services for Radhakrishnan medical college and hospital at Hamirpur, Himachal Pradesh.",
   "Funding Agency": "Ahulwalia Contracts (Inda, Ltd.)",
   "Amount (INR)": "5,36,900",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal",
   "Project Title":
    "Vetting of MEP services, design and drawings of permanent campus of IIM Sambalpur, Orissa.",
   "Funding Agency": "Dee Vee Projects Ltd., IIM Sambalur",
   "Amount (INR)": "6,37,000",
  },
  {
   "Name of the faculty": "Dr. Ambrisha Mishra",
   "Project Title":
    "Vetting of design and drawing related to Nikrish Pump Canal Project, Buxar, Bihar",
   "Funding Agency": "Flowmore Ltd.",
   "Amount (INR)": "3,01,600",
  },
  {
   "Name of the faculty": "Dr. Ambrisha Mishra",
   "Project Title":
    "Design and drawing related to Jaitpura Pump Canal Project, Kaimur, Bihar ",
   "Funding Agency": "Flowmore Ltd.",
   "Amount (INR)": "2,71,440",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal",
   "Project Title":
    "To examine the executed work of supply, installation, testing and commissioning of air-conditioners and associated electrical work at SCI building",
   "Funding Agency": "IGIMS Patna",
   "Amount (INR)": "3,06,800",
  },
 ],
 confrences: [
  {
   "Name of confrences":
    "3rd International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET)",
   Duration: "21-22 Dec. 2023",
   "International/National": "International",
   Publisher: "IEEE",
   Proceedings: "https://ieeexplore.ieee.org/xpl/conhome/10452149/proceeding",
  },
  {
   "Name of confrences":
    "2nd International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET)",
   Duration: "24-25 June 2022",
   "International/National": "International",
   Publisher: "IEEE",
   Proceedings: "https://ieeexplore.ieee.org/xpl/conhome/9847617/proceeding",
  },
  {
   "Name of confrences":
    "International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET)",
   Duration: "10-11 July 2020",
   "International/National": "International",
   Publisher: "IEEE",
   Proceedings: "https://ieeexplore.ieee.org/xpl/conhome/9177228/proceeding",
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
    1. Advanced Instrumentation Lab: Dr. Arunangshu Ghosh with his team of
    students is working towards the development of a portable electronic tongue
    for estimation of tea quality and spoilage detection of food samples. The
    other work in progress is development of the Potentiostat System for General
    Purpose Electro-Chemical Applications. These systems are developed to
    develop automated systems for quality analysis of different agricultural and
    food samples. Besides, technology using near infrared spectroscopy based
    development (NIR) is also being carried out for developing non-invasive,
    portable and optical solutions for quality analysis of food samples.
    Software like Matlab, LABView, and MPLAB are regularly used to train
    students for carrying out researches in this lab. Two externally sponsored
    research projects have been completed successfully in this laboratory.
    <br />
    2. Control Lab: A project design and development of low-cost BLDC motor
    drive for solar PV based irrigation system. One externally sponsored
    research project has been completed successfully in this laboratory
    <br />
    3. Industrial Drives and Control Lab: The group of students led by Dr.
    Vimlesh Verma works towards the development of control techniques for
    electrical machine drives. High end hardware simulators like HIL, and
    software like DSpace are a part of this lab. One externally sponsored
    research project has been completed successfully in this laboratory.
    <br />
    4. SCADA Lab: This space is equipped with the facilities where Interfacing
    of wind turbines with power systems and realization of hardware of grid
    using supervisory control can be done by masters and PhD students.
    <br />
    5. NIT Patna campus smart metered distribution system: This enables us to
    get the real time measurement of power, current, frequency, voltage and
    other electrical parameters throughout the system at different nodes. The
    dataset created acts as an asset and allows us to work further on load
    forecasting, demand side management, generation and distribution planning,
    also renewable generation planning). One externally sponsored research
    project under Dr. Mala De has been completed successfully in this
    laboratory.
    <br />
    6. Power electronics Lab: A team of students along with Dr. Ambarisha Mishra
    is working on a six-phase induction motor drive.
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
     <strong>STUDENT ACHIEVEMENTS </strong>
    </h2>
    <ul>
     <li>
      Exceptional achievements in <strong>GATE</strong>, with AIR 300 in GATE
      '15, AIR 334 in GATE &lsquo;16.
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
      Students take part in various fests across the country showcasing their
      skills in robotics, paper presentations and public speaking.
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
      Adarsh Tiwari &ndash; A student of EE Department is a group member of the
      team that successfully managed to create a racing car for SUPRA' 15.
     </li>
     <li>
      Saurabh Dubey - A student of EE Department Selected among top 10 national
      finalists in <strong>National Engineering Challenge 2016</strong>{" "}
      Organized by - The Gate Academy, Prizes -- Certificate of appreciation + 1
      Tablet ( TabGATE)
     </li>
     <li>
      Saurabh Dubey - A student of EE Department awarded and recognized as one
      of the top 10 in KTH Master's Challenge 2015 Summer Edition 2015,
      organized by - KTH Royal Institute of Technology , Sweden for the track of
      "Electric Power Engineering" <br /> Prize - Certificate of Appreciation
      and dinner event with KTH Institute's officials
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
      <strong>Munji Lalitha Kumari, Sragdhara Bhattacharya</strong> , U.S Triar
      <strong>
       ; &ldquo;Stabilization of boost convertor with output filter using LQR
       based state-feedback controller&rdquo;,
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
       International Journal of Advanced Research in Electrical, Electronics and
       Instrumentation Engineering (An ISO 3297: 2007 Certified Organization)
       Vol. 4, Issue 11, November 2015{" "}
      </em>
     </li>
     <li>
      <strong>Subhra Chandan Behera</strong> , G.K Choudhary, R.K Mandal;
      <strong>
       &ldquo;Fuzzy based vector PI controller to mitigate the harmonics issue
       of a distribution system using Three-phase hybrid&rdquo;
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
        A new graph theory based loss allocation framework for bilateral power
        market using diakoptics
       </strong>{" "}
      </a>{" "}
      <strong>&rdquo;; </strong>{" "}
      <em>
       International Journal of Electrical Power &amp; Energy Systems 77, 2016,
       395-403.
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
        Short Term Reactive Power Dispatch Using a Novel Pricing Structure for
        Synchronous Condenser
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
       &ldquo;A classical approach to find the optimal location and size of DG
       along with a proposed on-off controller
      </strong>
      &rdquo;; <em>IEEE conference, ICPEICES, DTU, July -2016</em>
     </li>
     <li>
      <strong>Alpana Sinha, </strong> M De, &ldquo;Load Shifting Technique for
      reduction of Peak Generation Capacity Requirement in Smart Grid&rdquo;,{" "}
      <em>IEEE conference, ICPEICES, DTU, July -2016.</em>
     </li>
     <li>
      <strong>Shashank Shekhar Kashyap, </strong> M De, &ldquo;A Novel Loss
      Allocation Method for Radial Distribution System with Distributed
      Generations&rdquo;,
      <em>IEEE conference, ICPEICES, DTU, July -2016.</em>
     </li>
     <li>
      <strong>Md.Hasmat</strong> <strong>Ali</strong>, A.K.Sahani, Study,
      Implementation and comparison of Different Multipliers based on Array KCM
      and Vedic Mathematics Using EDA Tools.. IJSRP. vol 3 (Issue-6), June -
      2013,ISSN 2250-3153.
     </li>
     <li>
      <strong>Devendra Kumar</strong>, Ashiwani Kumar, Unit Commitment Of
      Thermal Power Plant In Integration with Wind and Solar Plant Using Genetic
      Algorithm. International Journal of Engineering Research &amp;Technology
      (IJERT). Volume-3(Issue-7), July - 2014,page-664-669, ISSN:2278-0181.
     </li>
     <li>
      <strong>Dileep kumar</strong>, Ashiwani Kumar, Control and Simulation of
      Smart Backup System for photovoltaic System in Matlab. International
      Journal of Engineering Research &amp;Technology (IJERT).
      Volume-3(Issue-7), July - 2014,page- 1312-1315, ISSN:2278-0181.
     </li>
     <li>
      <strong>Lokesh Kumar Yadav</strong>, Ashiwani Kumar, Comparative Analysis
      of Voltage Stability using Classical Methods and Particle Swarm
      Optimization. International Journal of Engineering Research
      &amp;Technology(IJERT). Volume-3(Issue-7), July - 2014,Page - 262 -268,
      ISSN:2278-0181.
     </li>
     <li>
      <strong>Digamber Singh</strong>, Ashiwani Kumar, Bidding Strategy For
      Competitive Electricity Market By Using Optimization Technique (PSO &amp;
      APSO). International Journal of Engineering Research &amp;Technology
      (IJERT). Volume-3(Issue-5), May - 2014,Page- 1541- 1548, ISSN:2278-0182.
     </li>
     <li>
      <strong>Dileep kumar</strong>, Ashiwani Kumar, Modelling,Control and
      Simulation of Integrated photovoltaic cell-Fuel cell &ndash; Battery based
      Distribution system. UACEE International journal of Advancements in
      Electronics and Electrical Engineering. Volume-1(Issue-2), December -
      2012,Page- 68-73, ISSN:2319-7498.
     </li>
     <li>
      <strong>Digamber Singh</strong>, Ashiwani Kumar, Optimization Technique
      (PSO &amp; APSO) To Crack Bidding Problem For Participant In Electricity
      Market, International Conference on Industrial Electronics and Electrical
      Engineering (ICIEEE-2014). Singapore,September - 2014, .
     </li>
     <li>
      <strong>Dileep Kumar</strong>, Ashiwani Kumar, Control and Simulation of
      Integrated Photovalitic cell-battery-Fuel based distribution system for
      Controlled Ac loads, ICEECS,International Conference on Electrical,
      Electronics and Computer Science. Bhuneshwar, India,September - 2012, .
     </li>
     <li>
      <strong>Dileep Kumar</strong>, Ashiwani Kumar, Modelling,Control and
      Simulation of Integrated photovoltaic cell-Fuel cell &ndash; Battery based
      Distribution system, EEC 2012(International )conference on advances in
      Electrical ,Electronics and computer Engineering. Dehradun, India,july -
      2012, .
     </li>
     <li>
      <strong>Raushan Kumar, Amrita Sinha</strong>, G K Choudhary , Dynamic
      modeling and simulation of an autonomous Hybrid power system. Int. J. of
      Renewable Energy Technology -2015 . , Accepted - 2015,.
     </li>
     <li>
      <strong>Yadav Sushma,</strong> Choudhary G.K, R.K Mandal, Review on Fault
      Current Limiter. International journal of engineering Research &amp;
      technology. - 2014,.
     </li>
     <li>
      <strong>Meena, Gagan Deep</strong>, Choudhary, G. K. and Gupta, Manoj,
      Neural Network Based Recognition of Partial Discharge Patterns.
      International Journal of Advanced Engineering Research and Studies
      (E-ISSN2249-8974). IJAERS/. 1(2), March - 2012,121-126, .
     </li>
     <li>
      <strong>Kumar, Ankur</strong>, Choudhary, G. K. and Sinha, Amrita,
      Adaptive Noise Suppression in Voice communication using ASSNFIS System.
      International Journal of Electrical &amp; Electronics Engineering (IJEEE),
      ISSN(print):2231-5284. 1(4) - 2012,79-83, .
     </li>
     <li>
      <strong>Yadav Sushma</strong>, Choudhary G.K ,&amp;Mandal R.K,
      Determination of Appropriate location of Superconducting Fault Current
      Limiter in the Smart grid, International Conference on Industrial
      Electronics and Electrical Engineering ICIEEE. - 2014,.
     </li>
     <li>
      <strong>Kumar Ranjeet</strong>, Sinha Amrita &amp;Choudhary, G. K., A new
      digital distance relaying algorithm for first-zone protection for
      series-compensated double-circuit transmission lines&rdquo; Proceeding,
      IEEE Computer Society, 3rd International Conference on Advances in
      Computing and Communications. 102-106, - 2013,.
     </li>
     <li>
      <strong>SushmaYadav</strong>, Rajib Kumar Mandal and Girish Kumar
      Choudhary , &ldquo;Determination of Appropriate Location of
      Superconducting Fault Current Limiter in the Smart Grid&rdquo;, Smart
      Electric Grid (ISEG), 2014 International Conference(IEEE). Page(s): 1
      &ndash; 9, - 2014, .
     </li>
     <li>
      <strong>Pritanjali Kumari</strong>, U. S. Triar, AN EFFICIENT METHOD FOR
      PAPR REDUCTION IN OFDM SYSTEMS WITH REDUCED COMPLEXITY. International
      Journal of Electrical &amp; Electronics Engg., . 1(4) - 2012,92-98, ISSN
      (PRINT): 2231 &ndash; 5284.
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
    <h2>List of Research Projects Sanctioned / On-going:&nbsp;-</h2>
    <h5>
     The list of sponsored Research projects carried out by the faculty members
     of the department are provided in the following table:
    </h5>
    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Sr. No.</th>
       <th>Project Scheme and Sponsoring Agency</th>
       <th>File Number</th>
       <th>Title of the Project</th>
       <th>Amount (INR)</th>
       <th>Name of Investigator</th>
       <th>Status</th> <th>Start Date</th>
       <th>End Date</th>
       <th>Duration (Years)</th>
      </tr>
     </thead>{" "}
     <tbody>
      {Tables.projectSanctioned.map((row, idx) => (
       <tr key={idx}>
        <td>{row["Sr. No."]}</td>
        <td>{row["Project Scheme and Sponsoring Agency"]}</td>
        <td>{row["File Number"]}</td>
        <td>{row["Title of the Project"]}</td>
        <td>{row["Amount (INR)"]}</td>
        {/* <td>{row.Collaboration}</td> */}
        <td>{row["Name of Investigator"]}</td>
        <td>{row.Status}</td>
        <td>{row["Start Date"]}</td>
        <td>{row["End Date"]}</td>
        <td>{row.Duration}</td>
       </tr>
      ))}
     </tbody>
     <tbody>
      {Tables.totalAmount.map((row, idx) => (
       <tr key={idx}>
        <td>{row["Total Project Value"]}</td>
        <td>{row["Amount (INR)"]}</td>
       </tr>
      ))}
     </tbody>
    </table>
    <h2>Consultancy Projects:&nbsp;-</h2>
    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Name of the faculty</th>
       <th>Project Title</th>
       <th>Funding Agency</th>
       <th>Amount (INR)</th>
      </tr>
     </thead>{" "}
     <tbody>
      {Tables.consultancy.map((row, idx) => (
       <tr key={idx}>
        <td>{row["Name of the faculty"]}</td>
        <td>{row["Project Title"]}</td>
        <td>{row["Funding Agency"]}</td>
        <td>{row["Amount (INR)"]}</td>
       </tr>
      ))}
     </tbody>
    </table>
    <h2>Conferences:&nbsp;-</h2>
    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Name of confrences</th>
       <th>Duration</th>
       <th>International/National</th>
       <th>Publisher</th>
       <th>Proceedings</th>
      </tr>
     </thead>{" "}
     <tbody>
      {Tables.confrences.map((row, idx) => (
       <tr key={idx}>
        <td>{row["Name of confrences"]}</td>
        <td>{row["Duration"]}</td>
        <td>{row["International/National"]}</td>
        <td>{row["Publisher"]}</td>
        <td>{row["Proceedings"]}</td>
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
