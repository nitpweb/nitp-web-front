export const routeName = "ee"
export const title = "Electrical Engineering"

import { Achievements, Activities, Labs, News_Events, LabImages } from "./ee-others-data"
import Slider from "../../Slider/Slider"
import React from "react"

export const titleDescription = () => {
  return (
    <>
      <div className="row rowmarl3">
        <h2 data-aos="zoom-in-right">
          “The computer was born to solve problems that did not exist before.”
        </h2>
      </div>
      <div className="row rowmarl3">
        <h2 data-aos="zoom-in-right" id="aut">
          — Bill Gates
        </h2>
      </div>
    </>
  )
}
export const about = () => {
  return (
    <>
      The Department of Electrical Engineering was established in 1945 under
      Patna University with an intake of 20 students leading to Bachelor of
      Science(Engineering) degree of four year duration.The four year course was
      later changed to five year integrated course in 1960 with intake of 30
      students and it continued up to 1972. Again four year course was
      introduced in 1972 with the same intake capacity of 30 students. The
      intake was increased from 30 to 40 students in 2005-06 sessions and
      further in 2006-07 the intake capacity has been increased to 60 students.
      <br />
      <br />
      In the year 1978 AICTE approved Post Graduate (PG) course leading to M.
      Sc. (Engg) Degree in two specializations: (i) Power System Engineering and
      (ii) Control System Engineering with an intake capacity of 10 in each
      specialization.The intake in PG program was further increased to 18
      students per specialization in 2004-05.The Microprocessor Laboratory and
      Power electronics laboratory were setup to meet the requirement of course
      curriculum and research activity.The advancement and application of
      electronics and microcomputer in the field of electrical engineering
      necessitated a major revision of the syllabus for the UG program in 1977.
      A course in Microprocessor was introduced along with many subjects in
      electronics leading to orientation required for the modem technology, such
      as Analog Electronics, Digital Electronics, Introduction to Communication
      and Digital Signal Processing.
      <br />
      <br />
      The Electrical Engineering department has well qualified faculty, majority
      of them are with Ph. D and M. Tech degree with specialization in the field
      of electrical power, control system and microcomputer based
      instrumentation & control. The department has well qualified panel of
      visiting faculty from academics and industry. They visit to the department
      at regular interval to deliver expert lectures and discuss recent trends
      in the field of Electrical Engg, Power system -generation, transmission
      and distribution, Thyristorised controlled electrical drives used in
      industry, microcomputer applications in instrumentation and control etc.
      In recent past, the faculty and students of the department have many
      publications in journals and conferences (Approx. Forty). Many books on
      different electrical engineering subjects have been authored by the
      faculties of the department. Till date the department has produces five
      Ph. Ds under Patna University. From 2009 Doctoral program started under
      NIT Act 2007 and students have been admitted and are continuing research.
    </>
  )
}
export const mission = () => {
  return (
    <>
      To achieve sustainable growth towards academic excellence in the field of Electrical Engineering.
      {/* To create and maintain a sustainable development in infrastructure,
      academic environment human resources and governance. */}
    </>
  )
}

export const vision = () => {
  return (
    <>
      {/* To offer quality education for Under-Graduate, Post-Graduate and Doctoral
      programmes in electrical engineering.
      <br />
      To provide educational experiences which are stimulating and in accordance
      with the needs of the century.
      <br />
      To promote technical manpower through educative exposures like short term
      courses, workshops, seminars, interactive communication, etc. and thus
      facilitating students for leadership in profession and society.
      <br />
      To inculcate state-of-the-art infrastructural facilities in the arena of
      research and development and to promote Industry interaction.
      <br />
      To bridge the gap between industry and academia by framing curricula and
      syllabi based on industrial and societal needs so that students are well
      equipped to meet the challenges in education, profession and life
      <br />
      To instill moral and ethical values among the faculty and students */}
      To offer quality education in electrical engineering to meet the requirements of industry, society and nation.
      <br />
      To provide contemporary technical knowhow by regular upgradation of curriculum as per the needs of industry and educative exposures like short term courses, conferences, etc.
      <br />
      To establish state-of-the-art infrastructural facilities in the arena of academics and research.
      <br />
      To inculcate leadership, moral and ethical values among the students.
      <br />
    </>
  )
}

export const contact = () => {
  return (
    <>
      Department of Electrical Enggineering
      <br />
      <br /> National Institute Of Technology Patna
      <br />
      <br /> Ashok Rajpath, Patna - 800005
      <br />
      <br /> Email: head.ee@nitp.ac.in <br />
      <br />
      Extn: +91-612-(2371715/2715/2371929/ <br /> 2370419/2370843/2371930) * 153
    </>
  )
}

// export const labs = () => {
//   return (
//     <>
//       {" "}
//       <div className="row rowmarl3">
//         <div
//           className="col-6"
//           style={{ textAlign: "left", fontSize: `1.1rem` }}
//         >
//           {Labs[0].content}
//         </div>
//         <div className="col-6">{Labs[0].image}</div>
//       </div>
//     </>
//   )
// }

export const labs = () => {
  return (
    <>
      {" "}
      <div className="row rowmarl3">
        {" "}
        <div className="col-6">{Labs.content}</div>
        <div className="col-6">
          <Slider dataSlider={LabImages} />
        </div>{" "}
      </div>
    </>
  )
}

export const achievements = () => {
  return (
    <>
      {" "}
      <br />
      <br />
      <div style={{ fontSize: `1.2rem`, overflow: "auto" }}>
        {Achievements.map((acht, idx) => (
          <React.Fragment key={idx}>
            <div className="rowmarl3" style={{ overflow: "auto" }}>
              {acht.content}
            </div>

            <br />
          </React.Fragment>
        ))}
      </div>
    </>
  )
}
export const Outcomes = () => {
  return (<>
  <div className="row rowmarl3 rowmarr3 digital">
    <h3 style={{width:`100%`}}>Programme Educational Objectives (PEO) for UG (B.Tech - EE)</h3>
    <li>The programme is devoted to impart learning and understanding of different segments of Electrical Engineering.</li>
    <li>The programme aims to provide students with the opportunity to apply advanced techniques and develop skills to explore new problems in Electrical Engineering. It aims to produce graduates, who are employable in Industries and/or can pursue higher studies.</li>
    <li>The programme is expected to empower students to collaborate with different sectors of the field that shall lead to innovation for solving social, technical and business challenges in an optimized and environment friendly way.</li>
    <li>The programme is designed to encourage students to pursue life-long learning and develop professional ethics, communication skills, leadership quality, and team work capability through continuing education toward self-improvement.</li>

    <h3 style={{width:`100%`}}>PROGRAM OUTCOME (POs) for UG (B.Tech - EE)</h3>
    <p>Engineering Graduates will be able to:</p>
    <p><b>PO1:</b> Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</p>
    <p><b>PO2:</b> Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</p>
    <p><b>PO3:</b> Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</p>
    <p><b>PO4:</b> Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</p>
    <p><b>PO5:</b> Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.</p>
    <p><b>PO6:</b> The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</p>
    <p><b>PO7:</b> Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</p>
    <p><b>PO8:</b> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</p>
    <p><b>PO9:</b> Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</p>
    <p><b>PO10:</b> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</p>
    <p><b>PO11:</b> Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</p>
    <p><b>PO12:</b> Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</p>

    <h3 style={{width:`100%`}}>Programme Specific Outcomes (PSO) for UG (B.Tech - EE)</h3>
    <p>Engineering Graduates will be able to:</p>
    <p><b>PSO1:</b> Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</p>
    <p><b>PSO2:</b> Selection, design and prototype Power electronic systems and electrical machine drives for applications related to industrial, traction, electrical vehicle and renewable energy.</p>
    <p><b>PSO3:</b>  Design and development of Instrumentation, Control and Automation systems for industries and intelligent systems.</p>
    </div>
  </>)
}

export const activities = () => {
  return (
    <>
      <div className="rowmarl3" style={{ overflow: "auto" }}>
        {Activities[0].content}
      </div>
      <div
        style={{
          marginTop: `80px`,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="http://www.nitp.ac.in/images/elec_acti.jpg"
          alt="image"
          style={{ width: "90%" }}
        />
      </div>
      <div className="row rowmarl3">
        <h1 data-aos="zoom-in-right" style={{ fontSize: `3rem` }}>
          News & Events
        </h1>
      </div>
      <div className=" row rowmarl3" style={{ fontSize: `1.2rem` }}>
        {News_Events.content}
      </div>{" "}
    </>
  )
}

export const datalist = [
  {
    title: "About",
    data: "about",
    // img: "/department/about.svg",
  },
  {
    title: "Syllabus",
    relPath: "/ee/syllabus",
    // img: "/department/syllabus.svg",
  },
  {
    title: "Faculty",
    relPath: "/ee/faculty",
    // img: "/department/faculty.svg",
  },
  {
    title: "Notice",
    data: "happening",
    // img: "/department/activities.svg",
  },
  {
    title: "Contact",
    data: "contact",
    // img: "/department/contact.svg",
  },
  {
    title: "Labs",
    data: "labs",
    // img: "/department/labs.svg",
  },
  {
    title: "Achievements",
    data: "achievements",
    // img: "/department/achievements.svg",
  },
  {
    title: "Activities",
    data: "activities",
    // img: "/department/activities.svg",
  },
  {
    title: "Mission & Vision",
    data: "missionvision",
    // img: "/department/mission.svg",
  },
]
