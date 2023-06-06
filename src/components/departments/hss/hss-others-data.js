import React from "react"

const activity = process.env.GATSBY_BASE_URL + "hss/"
const home = process.env.GATSBY_BASE_URL + "hss/labs/"

export const Activities = {
 content: (
  <>
   <ul>
    <li>
     One Day National Seminar on “Women Health: Mental and Physical” on 15th
     September 2022.
    </li>
    <li>
     One Day National Workshop on “National Education Policy 2020” on 2nd
     September 2022.
    </li>
    <li>
     AICTE Training and Learning (ATAL) Academy sponsored Five Days online FDP
     on Capacity Building, 14-18 December 2020.
    </li>
    <li>
     Webinar on “Aatmanirbhar Bharat: A Roadmap for Inclusive Growth” on 2nd
     October 2020.
    </li>
    <li>
     Online Expert Lecture on “Understanding New National Education Policy” on
     5th September 2020.
    </li>
    <li>
     Expert Lecture on “The Humanities for Scientists & Engineers: The
     Relationship between the Natural & Social Sciences” on 28 August 2017.
    </li>
    <li>Expert Lecture on “Human Resource Management” on 28th January 2017.</li>
    <li>
     Expert Lecture on “Sampling Methods in Statistics” on 28th January 2015.
    </li>
    <li>
     Expert Lecture on “Communication Skills: An Important Employability Skill
     for Workplace Success” on 28th August, 2014.
    </li>
   </ul>
   {/* <h1>Invited Lectures</h1>
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
      </p> */}
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
      To involve entire range of knowledge pertinent to human relationship with
      society interaction and teaching towards problems solving of the nation.
     </li>
     <li>
      To develop into well rounded personalities and to propagate knowledge that
      is utilitarian and aesthetic in its makeup.
     </li>
     <li>
      To develop good technological skills with the ability to interact with
      different organs of an organization.
     </li>
     <li>
      To develop essential skills in critical thinking and writing along with
      the knowledge of literature,society, economic value, and philosophies of
      the mind and body.
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
       Developing professional ethics, communication skills and managerial
       knowledge among students to work in corporate world effectively and
       efficiently.
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
   <br />
   <h2>
    Language Laboratory is a designated space for English language learning
    where students access audio-visual materials. It adapts a perfect blend of
    Instructor-Led-Training and Computer-Based-Training. The assessment on
    speaking and listening programme along with reading and writing, listening
    and speaking skills to promote proficiency of language.
   </h2>
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

export const TimeTable = [
 {
  title:
   "Click here for the time table of UG 3rd, 5th and 7th semesters (All Branches), July-December 2022.",
  link:
   "https://drive.google.com/file/d/1-wloDSEABGjEYgzoEOAYat7FPkiSffW_/view?usp=sharing",
 },
 {
  title:
   "Click here for the time table of MTech & PhD (All Branches), July-December 2022.",
  link:
   "https://drive.google.com/file/d/1rTH9iuLex7glBjKZqinMKlhHunp4fljL/view?usp=sharing",
 },
 {
  title:
   "Click here for the time table of all the subjects offered by HSS to 1st year students (All Branches), January-June 2022.",
  link:
   "https://drive.google.com/file/d/1ebFsyL3l2ZXxaLDtYup74gPsJq6P6rM4/view?usp=sharing",
 },
]

export const ActivityImages = [
 <img src={`${activity}02.jpg`} alt="image" />,
 <img src={`${activity}01.jpg`} alt="image" />,
 <img src={`${activity}03.jpg`} alt="image" />,
 <img src={`${activity}04.jpg`} alt="image" />,
 <img src={`${activity}05.jpg`} alt="image" />,
]
