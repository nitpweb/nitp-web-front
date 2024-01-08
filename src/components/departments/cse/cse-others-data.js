import React from "react"

// const home = "https://web.nitp.ac.in/uploads/departments/cse/labs"
const home = process.env.GATSBY_BASE_URL + "cse/labs"
export const Labs = [
 {
  content: (
   <>
    <h2>Computing Lab-1 </h2>
    <br />
    <p>
     {/* Processor: Intel Corei7-4790, RAM: 6 GB, HDD: 500 GB (54 systems) and
          Intel Core i5- 3470, RAM: 2 GB, HDD: 500 GB (6 systems)  */}
     Operating System lab uses the Linux OS (Fedora 16.0) to implement the
     operating system management process, memory function, UNIX and shell
     programming related to OS system call functions. This lab also deals with
     courses like Object- Oriented Programming (OOP), Web Technology, Database
     Management (DBMS), Artificial Intelligence (AI), and Software Engineering.
    </p>
   </>
  ),
  image: (
   <img src={`${home}/DSC_0004.jpg`} id="oslab" height="250px" width="350px" />
  ),
 },
 {
  content: (
   <>
    <br />
    <h2>Computing Lab-2 </h2>
    <br />
    <p>
     {/* Processor: Intel Corei5-3770, RAM: 2 GB, HDD: 500 GB  */}
     Simulation lab uses the IBM Rational Rose software and other software to
     design software modules. This lab also deals some courses like
     Object-Oriented Programming (OOP), Web Technology, Database Management
     (DBMS), Artificial Intelligence (AI), and Software Engineering.
    </p>
   </>
  ),
  image: (
   <img src={`${home}/DSC_0001.jpg`} id="oslab2" height="250px" width="350px" />
  ),
 },
 {
  content: (
   <>
    {/* <br /> */}
    <h2>Network System Lab </h2>
    <br />
    <p>
     {/* Processor: Intel Core2Duo, RAM: 4 GB, HDD: 320 GB Hardware: Network
          System Kit (5 no.).  */}
     The lab has well equipped system for research, which include the Network
     Training Kit. The lab deals with Cyber Security courses.
    </p>
   </>
  ),
  image: (
   <img src={`${home}/DSC_0002.jpg`} id="simu" height="250px" width="350px" />
  ),
 },
 {
  content: (
   <>
    <h2>Soft Computing Lab</h2>
    <br />
    <p>
     {/* Processor: Intel P4 3.00 GHz, RAM: 1 GB, HDD: 80GB Hardware: LAN
          Trainer Kit (10 no.).  */}
     Soft Computing lab use Statistica software for supervised learning analysis
     and data mining and also used the LAN Trainer kit for network topology. The
     lab is focusing on IOT related specific courses.
    </p>
   </>
  ),
  image: (
   <img src={`${home}/DSC_0008.jpg`} id="soft" height="250px" width="350px" />
  ),
 },
 {
  content: (
   <>
    <h2>Research Scholar Lab </h2>
    <br />
    <p>
     {/* Processor: Intel Core2 Duo, RAM: 4 GB, HDD: 320 GB  */}
     The lab uses Statistica for supervised learning analysis and data mining
     work and Qualnet simulator for network simulation work.
    </p>
   </>
  ),
  // image: (
  //   <img
  //     src={`${home}/image005.jpg`}
  //     id="imagep"
  //     height="250px"
  //     width="350px"
  //   />
  // ),
 },
 {
  content: (
   <>
    <br />
    <h2>Image Processing Lab</h2>
    <br />
    <p>
     Hardware: Image Capture Camera, Image Grabber Card along with PCs. The
     analysis and manipulation of a digital image, in order to get an enhanced
     image or to extract some useful information from it with the help of “Image
     Processing Software”.
    </p>
   </>
  ),
  // image: <img src={`${home}/image006.jpg`} />,
 },
 {
  content: (
   <>
    <br />
    <h2>Computing Lab-3 </h2>
    <br />
    <p>
     {/* The lab contains 50 PCs with latest configuration, two rack servers,
          one workstation, five laptops, two voice tabs, two iIPads, two large
          screen display units, two heavy duty printers and many other network
          connected devices. */}
     This lab facilitates training, research, experiments in the domain of
     software testing, mobile application development, cloud computing, network
     security, Big Data analysis and Industrial Automation. This also deals some
     courses like Data Structure and Algorithms, Operating System, Compiler
     Design, and Computer Graphics.
    </p>
   </>
  ),
  // image: (
  //   <img
  //     src={`${home}/image007.jpg`}
  //     id="oslab3"
  //     height="250px"
  //     width="350px"
  //   />
  // ),
 },
 {
  content: (
   <>
    <br />
    <h2>Computing Lab-4</h2>
    <br />
    <p>
     {/* The lab contains 41 PCs of Acer Company with latest configuration as
          Processor: Intel i7, RAM: 8GB, and HDD: 500 GB, and working on Ubuntu
          (14.04 64-bit) OS. */}
     This deals with some courses like Data Structure and Algorithms, Operating
     System, Compiler Design, and Computer Graphics.
    </p>
   </>
  ),
  // image: (
  //   <img
  //     src={`${home}/image008.jpg`}
  //     id="oslab3"
  //     height="250px"
  //     width="350px"
  //   />
  // ),
 },
 {
  content: (
   <>
    <br />
    <h2>Network Security Lab</h2>
    <br />
    <p>
     {/* The lab contains 32 PCs of Acer Company with latest configuration as
          Processor: i7-4790, RAM: 8GB, HDD: 500GB, and working environment on
          Linux. This lab also contain 2 hp Servers of Intel Xeon E3- 1241v3. */}
     The lab has well equipped system for research, which include the Network
     Training Kit. The lab deals with Cyber Security courses.
    </p>
   </>
  ),
  // image: (
  //   <img
  //     src={`${home}/image009.jpg`}
  //     id="oslab3"
  //     height="250px"
  //     width="350px"
  //   />
  // ),
 },
]

export const Achievements = [
 "ISEA Project Phase – I (Completed)",
 "ISEA Project Phase – II (Ongoing)",
 "ICT-Academy Project (Ongoing)",
 `“Digital Literacy” Course under Skill Development Program (PMRY scheme) Completed`,
]

const Projects = [
 {
  "Funding body": "DST   SERB",
  "Area of research":
   "Efficient   Reliable Data Delivery during Forest Fire using Wireless Network",
  "Faculty members involved": "Dr.   Ditipriya Sinha",
  "Funding amount": "11   lakhs",
  Year: "2017-2020",
 },
 {
  "Funding body": "DST   SERB",
  "Area of research":
   "Study   of Road Coverage Problem in Wireless Sensor Network",
  "Faculty members involved": "Dr. Dinesh   Dash",
  "Funding amount": "7.42   lakhs",
  Year: "2016-2019   Completed",
 },
 {
  "Funding body": "SERB (DST)",
  "Area of research":
   "Fault-tolerant   Coordination in Infrastructure-less Network",
  "Faculty members involved": "Dr.   Suddhasil De",
  "Funding amount": "Rs.   20.85 lakhs",
  Year: "2017-   Ongoing",
 },
 {
  "Funding body":
   "Ministry   of Electronics and Information Technology (MeitY), Government of India",
  "Area of research":
   "Information   Security Education and Awareness (ISEA) - Phase 1",
  "Faculty members involved":
   "Dr.   G.K. Choudhary, Dr. Prabhat Kumar (CSE deptt.) (Co-chief Investigator)",
  "Funding amount": "19.32   lakhs",
  Year: "2006-2014   Completed",
 },
 {
  "Funding body":
   "Graphic   Trades Pvt. Ltd. (An ISO 9001, 14001, 20001 & 27001 Certified Company)",
  "Area of research":
   "Cashless   Services without the need of Smart Phone and Internet",
  "Faculty members involved": "Dr.   Prabhat Kumar (P.I.)",
  "Funding amount": "10.07   lakhs   (approx.)",
  Year: "2017-2021",
 },
 {
  "Funding body":
   "Ministry   of Electronics and Information Technology (MeitY)",
  "Area of research":
   "Development   of Algorithms for Speech based Bilingual Keyword Search to Detect Fraud/Spam   Calls",
  "Faculty members involved":
   "PI :   Dr. Gayadhar Pradhan (ECE deptt.) Co-PI : Dr. Jyoti Prakash Singh (CSE   deptt.)",
  "Funding amount": "41.1   lakhs",
  Year: "Completed",
 },
 {
  "Funding body": "DST   SERB",
  "Area of research":
   'A   "plug-and-play" Framework for Phylogenetic Databases with Semantic   Web Extension',
  "Faculty members involved":
   "PI :-   Dr. Akshay Deepak (CSE deptt.) Co-PI : Dr. Kumar Abhishek (CSE deptt.)",
  "Funding amount": "13.59   lakhs",
  Year: "2016-2019 Completed",
 },
 {
  "Funding body": "DEITY",
  "Area of research":
   "Information   Security Awareness Project (ISEA PHASE-II)",
  "Faculty members involved":
   "Dr.   M. P. Singh (Chief Investigator)   Dr.   Kakali Chatterjee (Co-Chief Investigator)",
  "Funding amount": "96   Crores",
  Year: "2015-Ongoing",
 },
 {
  "Funding body": "TEQIP-III",
  "Area of research":
   "Robust   and Secure Copyright Protection Techniques for e-Government Document",
  "Faculty members involved": "Dr.   Amit Kumar Singh",
  "Funding amount": "8.40   lakhs",
  Year: "2019-Ongoing",
 },
 {
  "Funding body": "TEQIP-III",
  "Area of research":
   "Healthcare   Data Lake: An Intelligent Search and Analytics Platform for Improving   Healthcare Plans and Treatments",
  "Faculty members involved": "Dr.   Mukesh Kumar",
  "Funding amount": "9.10   lakhs   (approx.)",
  Year: "2019-Ongoing",
 },
 {
  "Funding body": "TEQIP-III",
  "Area of research":
   "Discovery   of Knowledge Patterns in Student Learning System through Data Mining and Deep   Learning Techniques",
  "Faculty members involved": "Dr.   Somaraju Suvvari",
  "Funding amount": "8.65   lakhs   (approx.)",
  Year: "2020-Ongoing",
 },
 {
  "Funding body": "DRDO",
  "Area of research": "Copyright   protection tool for digital data",
  "Faculty members involved": "Dr.   Amit Kumar Singh",
  "Funding amount": "9.775   lakhs",
  Year: "2020-Ongoing",
 },
]
export const TimeTable = [
 /*{
    title:"Click here for the time table of first year subjects offered by CSED for Dec'22-Feb'23 session.",
    link:"http://web.nitp.ac.in/uploads23/FirstYearTimeTable_AllSubjectsByCSED_July-Dec2022.pdf",
  },*/
 {
  title: "Click here for the time table of CSED (for all semesters)",
  link:
   "https://www.dropbox.com/scl/fo/kmdu6u1erwn18lwo0qe4p/h?rlkey=rl1xo6nzihg0j5yc9zvfidfr0&dl=0",
 },
]
export const Activities = [
 {
  title: <h2>Workshops / Seminars / Training / Course Conducted:</h2>,
  content: (
   <ul>
    <li>
     <span>
      Workshop/Short Term Courses on "Concepts of Cryptographic Engineering"
      from 19<sup>th</sup>
      February 2018 to 23<sup>rd</sup> February 2018.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Artificial Intelligence &amp; Machine
      Learning" from 18<sup>th</sup>
      May 2018 to 22<sup>nd</sup> May 2018.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Deep Learning and applications" from 27
      <sup>th</sup> May 2019 to 31<sup>st</sup> May 2019.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Introduction to Programming: A Pedagogical
      Approach" from 17<sup>th</sup> June 2019 to 22
      <sup>nd</sup> June 2019.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Academia-Future of Industry" from 23
      <sup>rd</sup> August 2019 to 24<sup>th</sup> August 2019.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Natural Language Processing" from 6
      <sup>th</sup> January 2020 to 10<sup>th</sup> January 2020.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Artificial Intelligence &amp; Machine
      Learning" from 12<sup>th</sup>
      February 2020 to 16<sup>th</sup> February 2020.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Cyber Security Using Machine Learning/Big
      Data Analytics" from 17<sup>th</sup> February 2020 to 21<sup>st</sup>{" "}
      February 2020.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Understanding the concept of Node.JS and
      React.JS from 20<sup>th</sup>
      May 2020 to 26<sup>th</sup> May 2020.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Deep learning and its Applications" from
      17<sup>th</sup>
      June 2020 to 22<sup>nd</sup> June 2020.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Machine learning for Computer Vision" from
      29<sup>th</sup>
      June 2020 to 8<sup>th</sup> July 2020.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Advanced Optimization Techniques and
      Hands-on with MATLAB/SCILAB" from 13<sup>th</sup> July 2020 to 24
      <sup>th</sup> July 2020.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Data Science for All" from 27
      <sup>th</sup> July 2020 to 8<sup>th</sup>
      August 2020.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Deep learning &amp; Machine learning
      Application in Computer Vision" from 12<sup>th</sup> August 2020 to 18
      <sup>th</sup>
      August 2020.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Quantum Computing" from 24
      <sup>th</sup> August 2020 to 29<sup>th</sup>
      August 2020.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Python Programming" from 7<sup>th</sup>{" "}
      September 2020 to 18<sup>th</sup> September 2020.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Cyber Security" from 5<sup>th</sup>
      October 2020 to 11<sup>th</sup>
      October 2020.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Machine learning for Computer Vision" from
      1<sup>st</sup>
      February 2021 to 12<sup>th</sup> February 2021.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Data Science for All" from 14
      <sup>th</sup> April 2021 to 23<sup>rd</sup> April 2021.
     </span>
    </li>
    <li>
     <span>
      Workshop/Short Term Courses on "Social Robotics &amp; AI" from 28
      <sup>th</sup> June 2021 to 4<sup>th</sup> July 2021.
     </span>
    </li>
   </ul>
  ),
 },
 ,
 {
  title: <h2>Expert Lectures Conducted:</h2>,
  content: (
   <ul>
    <li>
     Pattern Recognition with relevance to Soft Computing / Granular Data Mining
     with Applications to image processing and Bio-Informatics by Prof. Shankar
     K. Pal, Distinguished Scientist & Former Director, ISI Kolkata.
    </li>
    <li>Soft Computing by Prof. Paramartha Dutta, VBU, Shantineketan.</li>
    <li>
     ABC of Big Data by Prof. Shankar K. Pal, Distinguished Scientist & Former
     Director, ISI Kolkata
    </li>
   </ul>
  ),
 },
 {
  title: <h2>Projects</h2>,
  content: (
   <>
    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Funding Body</th>
       <th>Area of Research</th>
       <th>Faculty members involved</th>
       <th>Funding amount</th>
       <th>Year</th>
      </tr>
     </thead>
     <tbody>
      {Projects.map((row, idx) => {
       return (
        <tr key={idx}>
         <td>{row["Funding body"]}</td>
         <td>{row["Area of research"]}</td>
         <td>{row["Faculty members involved"]}</td>
         <td>{row["Funding amount"]}</td>
         <td>{row["Year"]}</td>
        </tr>
       )
      })}
     </tbody>
    </table>
   </>
  ),
 },
]

const mapOutcomeTable = [
 {
  FIELD1: "PEO1",
  PO1: 3,
  PO2: 3,
  PO3: 3,
  PO4: 2,
  PO5: 3,
  PO6: 1,
  PO7: 1,
  PO8: 1,
  PO9: 3,
  PO10: 3,
  PO11: 3,
  PO12: 2,
 },
 {
  FIELD1: "PEO2",
  PO1: 3,
  PO2: 3,
  PO3: 3,
  PO4: 3,
  PO5: 3,
  PO6: 3,
  PO7: 3,
  PO8: 3,
  PO9: 3,
  PO10: 3,
  PO11: 2,
  PO12: 3,
 },
 {
  FIELD1: "PEO3",
  PO1: 2,
  PO2: 2,
  PO3: 3,
  PO4: 3,
  PO5: 3,
  PO6: 2,
  PO7: 2,
  PO8: 3,
  PO9: 3,
  PO10: 3,
  PO11: 3,
  PO12: 2,
 },
 {
  FIELD1: "PEO4",
  PO1: 3,
  PO2: 3,
  PO3: 2,
  PO4: 3,
  PO5: 3,
  PO6: 3,
  PO7: 3,
  PO8: 3,
  PO9: 1,
  PO10: 2,
  PO11: 2,
  PO12: 3,
 },
]

export const Outcomes_ = [
 {
  title: <h1>Program Educational Objectives</h1>,
  content: (
   <>
    <ul>
     <li>
      <b>PEO1: </b>engage in requirement analysis, designing, implementation,
      testing, deployment, and/or maintaining of software systems in the domain
      of computer science &amp; engineering and allied fields.
     </li>
     <li>
      <b>PEO2: </b>solve socially relevant challenges using computer science and
      engineering expertise, and/or pursue higher education and research
     </li>
     <li>
      <b>PEO3: </b>work productively in a team and as an individual in
      interdisciplinary&nbsp;projects in industry/academia setup
     </li>
     <li>
      <b>PEO4:</b>
      &nbsp;To participate in lifelong learning and career advancement, as well
      as adapting to changing professional and social requirements .
     </li>
    </ul>
   </>
  ),
 },
 {
  title: <h1>Programs Outcomes</h1>,
  content: (
   <>
    <ul>
     <li>
      <b>
       <span>PO1. Engineering knowledge: </span>
      </b>
      <span>A</span>
      <span>
       pply the knowledge of mathematics, science and engineering fundamentals,
       and an engineering specialization to the solution of complex engineering
       problems.
      </span>
     </li>
     <li>
      <b>
       <span>PO2. Problem Analysis:</span>
      </b>
      <span>
       &nbsp;Identify, formulate, review research literature, and analyse
       complex engineering problems reaching substantiated conclusions using
       first principles of mathematics, natural sciences, and engineering
       sciences.
      </span>
     </li>
     <li>
      <b>
       <span>PO3. Design/ development of solutions: </span>
      </b>
      <span>
       Design solutions for complex engineering problems and design system
       components or processes that meet the specified needs with appropriate
       consideration for the public health and safety, and the cultural,
       societal, and environmental considerations.
      </span>
     </li>
     <li>
      <b>
       <span>PO4. Conduct investigations of complex problems:</span>
      </b>
      <span>
       &nbsp;Use research-based knowledge are research methods including design
       of experiments, analysis and interpretation of data, and synthesis of the
       information to provide valid conclusions.
      </span>
     </li>
     <li>
      <b>
       <span>PO5. Modern tool usage:</span>
      </b>
      <span>
       &nbsp;Create, select and apply appropriate techniques, resources, and
       modern engineering and IT tools including prediction and modelling to
       complex engineering activities with an understanding of the limitations.
      </span>
     </li>
     <li>
      <b>
       <span>PO6. The engineer and society: </span>
      </b>
      <span>
       &nbsp;Apply reasoning informed by the contextual knowledge to assess
       societal, health, safety, legal and cultural issues and the consequent
       responsibilities relevant to the professional engineering practice.
      </span>
     </li>
     <li>
      <b>
       <span>PO7. Environment and sustainability: </span>
      </b>
      <span>
       Understand the impact of the professional engineering solutions in
       societal and environmental contexts, and demonstrate the knowledge of,
       and need for sustainable development.
      </span>
     </li>
     <li>
      <b>
       <span>PO8. Ethics: </span>
      </b>
      <span>
       Apply ethical principles and commit to professional ethics and
       responsibilities and norms of the engineering practice.
      </span>
     </li>
     <li>
      <b>
       <span>PO9. Individual and team work: </span>
      </b>
      <span>
       Function effectively as an individual, and as a member or leader in
       diverse teams, and in multidisciplinary settings.
      </span>
     </li>
     <li>
      <b>
       <span>PO10. Communications: </span>
      </b>
      <span>
       Communicate effectively on complex engineering activities with the
       engineering community and with society at large, such as, being able to
       comprehend and write effective reports and design documentation, make
       effective presentations, and give and receive clear instructions.
      </span>
     </li>
     <li>
      <b>
       <span>PO11. Project management and finance: </span>
      </b>
      <span>
       Demonstrate knowledge and understanding of the engineering and management
       principles and apply these to one�s own work, as a member and leader in a
       team, to manage projects and in multidisciplinary environments.
      </span>
     </li>
     <li>
      <b>
       <span>PO12. Life-long learning: </span>
      </b>
      <span>
       Recognize the need for, and have the preparation and ability to engage in
       independent and life-long learning in the broadest context of
       technological change.
      </span>
     </li>
    </ul>
   </>
  ),
 },
 {
  title: <h1>Mapping of Program Outcomes</h1>,
  content: (
   <>
    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th></th>
       {Object.keys(mapOutcomeTable[0])
        .slice(1)
        .map(key => (
         <th>{key}</th>
        ))}
      </tr>
     </thead>
     <tbody>
      {mapOutcomeTable.map((row, idx) => {
       return (
        <tr key={idx}>
         {Object.values(mapOutcomeTable[0]).map(key => (
          <td>{key}</td>
         ))}
        </tr>
       )
      })}
     </tbody>
    </table>
   </>
  ),
 },
 {
  title: <h1>Program Specific Outcome</h1>,
  content: (
   <>
    <ul>
     <li>
      <b>PSO1: </b>
      <span>
       Analyze, design, model, develop, test, and manage complex software and
       information management systems.
      </span>
     </li>
     <li>
      <b>PSO2: </b>
      <span>
       Develop sustainable, intelligent, and secure computing solutions for real
       time challenges.
      </span>
     </li>
    </ul>
   </>
  ),
 },
]
