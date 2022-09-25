import React from "react"

const activity = process.env.GATSBY_BASE_URL+"hss/"
const home = process.env.GATSBY_BASE_URL+"hss/labs/"

export const Activities = {
  content: (
    <>
      <ul>
      <li>
      	One Day National Seminar on “Women Health: Mental and Physical” on 15th September 2022.
      </li>
      <li>
      	One Day National Workshop on “National Education Policy 2020” on 2nd September 2022.
      </li>
      <li>
      	AICTE Training and Learning (ATAL) Academy sponsored Five Days online FDP on Capacity Building, 14-18 December 2020.
      </li>
      <li>
      	Webinar on “Aatmanirbhar Bharat: A Roadmap for Inclusive Growth” on 2nd October 2020.
      </li>
      <li>
      	Online Expert Lecture on “Understanding New National Education Policy” on 5th September 2020.
      </li>
      <li>
      	Expert Lecture on “The Humanities for Scientists & Engineers: The Relationship between the Natural & Social Sciences” on 28 August 2017.
      </li>
      </ul>
      <h1>Invited Lectures</h1>
      <br />
      <p>
        <p>
          1. The Humanities for Scientists and Engineers:The Relationship between
          the Natural and Social Sciences
        </p>
        <li>
          Speaker: Prof. Dhruv Raina
          <br />
          Professor,School of Social Sciences
          <br />
          Jawahar Lal Nehru University, New Delhi
        </li>
        <li>Date: 28th August 2017</li>
        <li>Vishveshwarya Hall, NIT Patna</li>
      </p>
      <br />
      <p>
        <p> 2. Human Resource Management</p>
        <li>
          Speaker: Prof. Kailash Bihari Shrivastava
          <br />
          Professor,Department of Humanities and Social Sciences
          <br />
          Indian Institute of Technology Kharagpur
        </li>
        <li>Date: 28th January 2017</li>
        <li>Computer Centre, NIT Patna</li>
      </p>
      <br />
      <p>
        <p> 3. Sampling Methods in Statistics</p>
        <li>
          Speaker: Prof. Arun Kumar Sinha
          <br />
          Former Vice Chancellor
          <br />
          Patna University, Patna
        </li>
        <li>Date: 28th January 2015</li>
        <li>Computer Centre, NIT Patna</li>
      </p>
      <br />
      <p>
        <p>
          {" "}
          4. Communication Skills: An Important Employability Skill for
          Workplace Success
        </p>
        <li>
          Speaker: Prof. Shankar Ashish Dutt
          <br />
          Professor, P.G. Department of English
          <br />
          Patna University, Patna
        </li>
        <li>Date: 28th August, 2014</li>
        <li>Seminar Hall, NIT Patna</li>
      </p>
    </>
  ),
}

export const Outcomes_ = [
  {
    title: <h1>Program Objectives</h1>,
    content: (
      <>
        <ul>
          <li>
            To involve entire range of knowledge pertinent to human relationship with society interaction and teaching towards problems solving of the nation.
          </li>
          <li>
            To develop into well rounded personalities and to propagate knowledge that is utilitarian and aesthetic in its makeup.
          </li>
          <li>
            To develop good technological skills with the ability to interact with different organs of an organization.
          </li>
          <li>
           	To develop essential skills in critical thinking and writing along with the knowledge of literature,society, economic value, and philosophies of the mind and body.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <h1>Program Outcomes</h1>,
    content: (
      <>
        <ul>
          <li>
            <span>
            	Producing Technocrats with all round knowledge and development skills.
            </span>
          </li>
          <li>
            <span>
            	Developing professional ethics, communication skills and managerial knowledge among students to work in corporate world effectively and efficiently.
            </span>
          </li>
        </ul>
      </>
    ),
  },
]

export const Labs = {
  title: <h2>Language Lab</h2>,
  content: (
    <>
      <br/>
      <h2>Language Laboratory is a designated space for English language learning where students access audio-visual materials. It adapts a perfect blend of Instructor-Led-Training and Computer-Based-Training. The assessment on speaking and listening programme along with reading and writing,  listening and speaking skills to promote proficiency of language.</h2>
    </>
  ),
  // image: (
  //   <img src=""/>
  // )
}

export const LabImages = [
  <>
    <img src={`${home}01.jpg`} alt="image" />
  </>,
  <>
    <img src={`${home}02.jpg`} alt="image" />
  </>,
  <>
    <img src={`${home}03.jpg`} alt="image" />
  </>,
 
]

export const TimeTable=[
  {
    title:"Click here for the time table of UG 3rd, 5th and 7th semesters (All Branches), July-December 2022.",
    link:"https://drive.google.com/file/d/1-wloDSEABGjEYgzoEOAYat7FPkiSffW_/view?usp=sharing",
  },
  {
    title:"Click here for the time table of MTech & PhD (All Branches), July-December 2022.",
    link:"https://drive.google.com/file/d/1rTH9iuLex7glBjKZqinMKlhHunp4fljL/view?usp=sharing",
  },
  {
    title:"Click here for the time table of all the subjects offered by HSS to 1st year students (All Branches), January-June 2022.",
    link:"https://drive.google.com/file/d/1ebFsyL3l2ZXxaLDtYup74gPsJq6P6rM4/view?usp=sharing",
  },
]

export const Achievements = [
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
            {/* {Projects.map((row, idx) => {
              return (
                <tr key={idx}>
                  <td>{row["Funding body"]}</td>
                  <td>{row["Area of research"]}</td>
                  <td>{row["Faculty members involved"]}</td>
                  <td>{row["Funding amount"]}</td>
                  <td>{row["Year"]}</td>
                </tr>
              )
            })} */}
          </tbody>
        </table>
      </>
    ),
  },
]

// const Projects = [
//   {
//     "Funding body": "DST   SERB",
//     "Area of research":
//       "Efficient   Reliable Data Delivery during Forest Fire using Wireless Network",
//     "Faculty members involved": "Dr.   Ditipriya Sinha",
//     "Funding amount": "11   lakhs",
//     Year: "2017-2020",
//   },
//   {
//     "Funding body": "DST   SERB",
//     "Area of research":
//       "Study   of Road Coverage Problem in Wireless Sensor Network",
//     "Faculty members involved": "Dr. Dinesh   Dash",
//     "Funding amount": "7.42   lakhs",
//     Year: "2016-2019   Completed",
//   },
//   {
//     "Funding body": "SERB (DST)",
//     "Area of research":
//       "Fault-tolerant   Coordination in Infrastructure-less Network",
//     "Faculty members involved": "Dr.   Suddhasil De",
//     "Funding amount": "Rs.   20.85 lakhs",
//     Year: "2017-   Ongoing",
//   },
//   {
//     "Funding body":
//       "Ministry   of Electronics and Information Technology (MeitY), Government of India",
//     "Area of research":
//       "Information   Security Education and Awareness (ISEA) - Phase 1",
//     "Faculty members involved":
//       "Dr.   G.K. Choudhary, Dr. Prabhat Kumar (CSE deptt.) (Co-chief Investigator)",
//     "Funding amount": "19.32   lakhs",
//     Year: "2006-2014   Completed",
//   },
//   {
//     "Funding body":
//       "Graphic   Trades Pvt. Ltd. (An ISO 9001, 14001, 20001 & 27001 Certified Company)",
//     "Area of research":
//       "Cashless   Services without the need of Smart Phone and Internet",
//     "Faculty members involved": "Dr.   Prabhat Kumar (P.I.)",
//     "Funding amount": "10.07   lakhs   (approx.)",
//     Year: "2017-2021",
//   },
//   {
//     "Funding body":
//       "Ministry   of Electronics and Information Technology (MeitY)",
//     "Area of research":
//       "Development   of Algorithms for Speech based Bilingual Keyword Search to Detect Fraud/Spam   Calls",
//     "Faculty members involved":
//       "PI :   Dr. Gayadhar Pradhan (ECE deptt.) Co-PI : Dr. Jyoti Prakash Singh (CSE   deptt.)",
//     "Funding amount": "41.1   lakhs",
//     Year: "Completed",
//   },
//   {
//     "Funding body": "DST   SERB",
//     "Area of research":
//       'A   "plug-and-play" Framework for Phylogenetic Databases with Semantic   Web Extension',
//     "Faculty members involved":
//       "PI :-   Dr. Akshay Deepak (CSE deptt.) Co-PI : Dr. Kumar Abhishek (CSE deptt.)",
//     "Funding amount": "13.59   lakhs",
//     Year: "2016-2019 Completed",
//   },
//   {
//     "Funding body": "DEITY",
//     "Area of research":
//       "Information   Security Awareness Project (ISEA PHASE-II)",
//     "Faculty members involved":
//       "Dr.   M. P. Singh (Chief Investigator)   Dr.   Kakali Chatterjee (Co-Chief Investigator)",
//     "Funding amount": "96   Crores",
//     Year: "2015-Ongoing",
//   },
//   {
//     "Funding body": "TEQIP-III",
//     "Area of research":
//       "Robust   and Secure Copyright Protection Techniques for e-Government Document",
//     "Faculty members involved": "Dr.   Amit Kumar Singh",
//     "Funding amount": "8.40   lakhs",
//     Year: "2019-Ongoing",
//   },
//   {
//     "Funding body": "TEQIP-III",
//     "Area of research":
//       "Healthcare   Data Lake: An Intelligent Search and Analytics Platform for Improving   Healthcare Plans and Treatments",
//     "Faculty members involved": "Dr.   Mukesh Kumar",
//     "Funding amount": "9.10   lakhs   (approx.)",
//     Year: "2019-Ongoing",
//   },
//   {
//     "Funding body": "TEQIP-III",
//     "Area of research":
//       "Discovery   of Knowledge Patterns in Student Learning System through Data Mining and Deep   Learning Techniques",
//     "Faculty members involved": "Dr.   Somaraju Suvvari",
//     "Funding amount": "8.65   lakhs   (approx.)",
//     Year: "2020-Ongoing",
//   },
//   {
//     "Funding body": "DRDO",
//     "Area of research": "Copyright   protection tool for digital data",
//     "Faculty members involved": "Dr.   Amit Kumar Singh",
//     "Funding amount": "9.775   lakhs",
//     Year: "2020-Ongoing",
//   },
// ]

export const ActivityImages = [
  <img src={`${activity}02.jpg`} alt="image" />,
  <img src={`${activity}01.jpg`} alt="image" />,
  <img src={`${activity}03.jpg`} alt="image" />,
  <img src={`${activity}04.jpg`} alt="image" />,
  <img src={`${activity}05.jpg`} alt="image" />,
]

