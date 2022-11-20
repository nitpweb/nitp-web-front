import React from "react"

// const home = "http://www.nitp.ac.in/php/"
const home = process.env.GATSBY_BASE_URL+"chem/labs/"
const activity = process.env.GATSBY_BASE_URL+"chem/"

export const Labs = {
  content: (
    <>
      <h2>
        <strong>&nbsp; &nbsp; &nbsp;Individual Faculty Research Lab</strong>:-
      </h2>

      <ol>
        <li>Applied Chemistry Lab (Dr. Subrata Das)</li>
        <li>Bioorganic Lab (Dr. Rima Thakur)</li>
        <li>Biophysical Chemistry Lab (Dr. Niki Sweta Jha)</li>
        <li>Green Synthesis Lab (Dr. Tasneem Parvin)</li>
        <li>Inorganic Lab (Dr. Mukesh Choudhary)</li>
        <li>Physical Chemistry Exptl. Lab (Dr. Aniruddha Paul)</li>
        <li>Supramolecular Materials Lab (Dr. Suvankar Dasgupta)</li>
        <li>Synthetic Research Lab (Dr. Khursheed Ahmad)</li>
      </ol>
    </>
  ),
}
// export const LabImages = [
//   <>
//     <img src={`${home}cheimg/Dr. Parvin Lab.jpg`} alt="image" />
//     <div className="text">Dr. Parvin Lab</div>
//   </>,
//   <>
//     <img src={`${home}cheimg/Dr. Jha Lab.png`} alt="image" />
//     <div className="text">Dr. Jha Lab</div>
//   </>,
//   <>
//     <img src={`${home}cheimg/Dr. Dasgupta Lab.jpg`} alt="image" />
//     <div className="text">Dr. Dasgupta Lab</div>
//   </>,
//   <>
//     <img src={`${home}cheimg/subrata.jpg`} alt="image" />
//     <div className="text">Dr. Das Lab</div>
//   </>,
//   <>
//     <img src={`${home}cheimg/Dr. Chowdhury Lab.jpg`} alt="image" />
//     <div className="text">Dr. Chowdhury Lab</div>
//   </>,
//   <>
//     <img src={`${home}cheimg/Dr. Thakur Lab.png`} alt="image" />
//     <div className="text">Dr. Thakur Lab</div>
//   </>,
//   <>
//     <img src={`${home}cheimg/pic-3_BTech lab.JPG`} alt="image" />
//     <div className="text">B.Tech Lab</div>
//   </>,
//   <>
//     <img src={`${home}cheimg/pic-4_MSc Synthesis lab.JPG`} alt="image" />
//     <div className="text">M.Sc Synthesis Lab</div>
//   </>,
//   <>
//     <img src={`${home}cheimg/pic-5_MSc Characterization lab.jpg`} alt="image" />
//     <div className="text">M.Sc Characterization lab</div>
//   </>,
//   <>
//     <img
//       src={`${home}cheimg/pic-6_Departmental Instrument Lab.jpg`}
//       alt="image"
//     />
//     <div className="text">Departmental Instrument Lab</div>
//   </>,
//   <>
//     <img
//       src={`${home}cheimg/pic-7_Departmental Individual Faculty Research Lab.jpg`}
//     />
//     <div className="text">Dep. Of Faculty Research Lab</div>
//   </>,
// ]

export const LabImages = [
  <>
    <img src={`${home}subrata.jpg`} alt="image" />
  </>,
  <>
    <img src={`${home}Dr. Jha Lab.png`} alt="image" />
  </>,
  <>
    <img src={`${home}Dr. Parvin Lab.jpg`} alt="image" />
  </>,
  <>
    <img src={`${home}Dr. Chowdhury Lab.jpg`} alt="image" />
  </>,
  <>
    <img src={`${home}Dr. Dasgupta Lab.jpg`} alt="image" />
  </>,
  <>
    <img src={`${home}pic-3_BTech lab.jpg`} alt="image" />
  </>,
  <>
    <img src={`${home}pic-4_MSc Synthesis lab.jpg`} alt="image" />
  </>,
  <>
    <img src={`${home}pic-5_MSc Characterization lab.jpg`} alt="image" />
  </>,
  <>
    <img src={`${home}pic-6_Departmental Instrument Lab.jpg`} alt="image" />
  </>,
  <>
    <img src={`${home}pic-7_Departmental Individual Faculty Research Lab.jpg`} alt="image" />
  </>,
]

export const ActivityImages = [
  <img src={`${activity}02.jpg`} alt="image" />,
  <img src={`${activity}01.jpg`} alt="image" />,
  <img src={`${activity}06.jpg`} alt="image" />,
  <img src={`${activity}03.jpg`} alt="image" />,
  <img src={`${activity}04.jpg`} alt="image" />,
  <img src={`${activity}05.jpg`} alt="image" />,
  <img src={`${activity}07.jpg`} alt="image" />,
  <img src={`${activity}08.jpg`} alt="image" />,
  <img src={`${activity}10.jpg`} alt="image" />,
  <img src={`${activity}09.jpg`} alt="image" />,
  <img src={`${activity}11.jpg`} alt="image" />,
]

const SponseredProjectsTable = [
  {
    "Sl. No.": 1,
    "Name of Faculty": "Dr. Subrata Das",
    "Title of Project":
      'Metallosupramolecular complexes with bioactive pyrimidine derivatives: Materials for advanced applications{" "}',
    "Sponsored Agency": "DST-SERB, Govt. of India, Ongoing (2019-2022)",
    "Amount (Rs.)": "42.85 Lacs",
  },
  {
    "Sl. No.": 2,
    "Name of Faculty": "Dr. Tasneem Parvin",
    "Title of Project":
      "Exploration of bifunctional thiourea-amine organocatalysts in asymmetric multicomponent reactions",
    "Sponsored Agency": "DST-SERB, Govt. of India. Completed(2016-2019)",
    "Amount (Rs.)": "51.95 Lakh",
  },
  {
    "Sl. No.": 3,
    "Name of Faculty": "Dr. Suvankar Dasgupta",
    "Title of Project": "Host-Guest Chemistry for Stimuli-Responsive System",
    "Sponsored Agency": "DST-SERB, Govt. of India, (2016-)",
    "Amount (Rs.)": "36.21 Lacs",
  },
  {
    "Sl. No.": 4,
    "Name of Faculty": "Dr. Aniruddha Paul",
    "Title of Project":
      "Surface-Immobilized Growth of Anisotropic Noble Metal Nanoparticles: Spectroscopic Investigation and Application",
    "Sponsored Agency": "DST-SERB, Govt. of India, (2016-)",
    "Amount (Rs.)": "45.16 Lacs",
  },
  {
    "Sl. No.": 5,
    "Name of Faculty": "Dr. Rima Thakur",
    "Title of Project":
      "Stereoselective Strategies towards beta-glycosylation: En route synthesis of bioactive compounds",
    "Sponsored Agency": "DST-SERB, Govt. of India, completed (2016-2019)",
    "Amount (Rs.)": "37.62 Lacs",
  },
  {
    "Sl. No.": 6,
    "Name of Faculty": "Dr. Mukesh Choudhary",
    "Title of Project":
      "Synthesis, characterization, crystal structure, superoxide dismutase and antimicrobial activities of some new copper(II) and nickel(II) complexes containing ONN donor Schiff bases and bidentate N, N, donor co-ligands",
    "Sponsored Agency": "CSIR, New Delhi, Completed (2016-2019)",
    "Amount (Rs.)": "8 Lacs",
  },
  {
    "Sl. No.": 7,
    "Name of Faculty": "Dr. Niki Sweta Jha",
    "Title of Project":
      "Biophysical and electrochemical characterization of G-quadruplex and small molecules binding",
    "Sponsored Agency": "DST-SERB, Govt. of India, Completed",
    "Amount (Rs.)": "20.76 lacs",
  },
  {
    "Sl. No.": 8,
    "Name of Faculty": "Dr. Subrata Das",
    "Title of Project":
      "Nitroso-Diels-Alder (NDA) reactions for the synthesis of some heterocyclic compounds",
    "Sponsored Agency": "DST-SERB, New Delhi, Completed (2013-2017)",
    "Amount (Rs.)": "12 Lacs",
  },
  {
    "Sl. No.": 9,
    "Name of Faculty": "Dr. Tasneem Parvin",
    "Title of Project":
      "Design and development of multifunctional organocatalysts for asymmetric synthesis",
    "Sponsored Agency": "DST-SERB, New Delhi, Completed (2010-2014)",
    "Amount (Rs.)": "19.90 Lacs",
  },
]

export const Activity = {
  content: (
    <>
      <h2>Conference and Workshop</h2>

      <p style={{ display: "block", width: `100%` }}>
        The Department has an active conference and workshop program that
        features eminent faculty and researchers from various reputed
        institutes. PhD scholars and Integrated MSc students are particularly
        encouraged to participate in such activities and have interactive
        sessions with the speakers to broaden their research thinking.
      </p>
      <ul>
        <li>
          Workshop on &ldquo;Recent Trends in Green Chemistry and
          Technology&rdquo;, 27-28<sup>th</sup> November 2015:
        </li>
      </ul>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Coordinator: Dr. Tasneem
        Parvin
      </p>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Co-Coordinator: Dr. Subrata
        Das
      </p>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Co-Coordinator: Dr. Khursheed
        Ahmad
      </p>
      <ul>
        <li>
          Workshop on &ldquo;Recent Trends in Synthetic Chemistry and its
          Relevance&rdquo;, 10-11<sup>th</sup> December 2015:
        </li>
      </ul>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Coordinator: Dr. Mukesh
        Choudhary
      </p>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Co-Coordinator: Prof. Sitaram
        Sharma
      </p>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Co-Coordinator: Dr. Khursheed
        Ahmad
      </p>
      <ul>
        <li>
          Workshop on &ldquo;Strengthening of Institute-Industry
          Interaction&rdquo;, 24<sup>th</sup> October 2016:
        </li>
      </ul>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Convener: Dr. Subrata Das
      </p>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Co-Convener: Dr. Pradip Kr.
        Sukul
      </p>
      <ul>
        <li>
          Workshop on &ldquo;Fundamentals and Applications in Biomolecular
          Spectroscopy&rdquo;, 25-26<sup>th</sup> October 2016:
        </li>
      </ul>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Convener: Dr. Niki Sweta Jha,
        Dr. Tasneem Parvin &amp; Dr. Pradip Kr. Sukul
      </p>
      <ul>
        <li>
          Foundation Day Lecture given by Prof. S. P. Rath (IIT Kanpur) on
          &ldquo;Metals in Biology&rdquo;, 27<sup>th</sup> January 2017.
        </li>
        <li>
          Six Day Short Term course on &ldquo;Strengthening of
          Institute-Industry Interaction-II&rdquo;, 30<sup>th</sup> Jan-4
          <sup>th</sup> February 2017:
        </li>
      </ul>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Convener: Dr. Pradip Kr. Sukul
      </p>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Co-Convener: Dr. Subrata Das
      </p>
      <ul>
        <li>
          Conference on &ldquo;Recent Advancement in Functional Materials and
          Nanotechnology (<em>RAFMN-2017</em>)&rdquo;, 15-17<sup>th</sup>{" "}
          February 2017:
        </li>
      </ul>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Convener: Dr. Subrata Das &amp;
        Dr. Aniruddha Paul
      </p>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Secretary: Dr. Pradip Kr. Sukul
      </p>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Treasurer: Dr. Suvankar
        Dasgupta
      </p>
      <ul>
        <li>
          Five Day Short Term course on “Strengthening of Institute-Industry
          Interaction-III”, 08-12<sup>th</sup>October 2018:
        </li>
      </ul>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Coordinator: Dr. Subrata Das
      </p>
      <p style={{ display: "block", width: `100%` }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Convener: Dr. Pradip Kr.Sukul
      </p>

      <h2>Sponsored Projects / Status</h2>
      <table className="table-act">
        <thead>
          <tr className="syllabus-table-head">
            <th>Sl. No.</th>
            <th>Name of Faculty</th>
            <th>Title of Project</th>
            <th>Sponsored Agency</th>
            <th>Amount (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          {SponseredProjectsTable.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row["Sl. No."]}</td>
                <td>{row["Name of Faculty"]}</td>
                <td>{row["Title of Project"]}</td>
                <td>{row["Sponsored Agency"]}</td>
                <td>{row["Amount (Rs.)"]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div>
        <h3>News</h3>
        <p>
          <h3>
            <ul>
              <li>
                Department of Chemistry welcomes applications for PhD from
                NET/GATE qualified MSc./M.Tech. students.
              </li>
            </ul>
          </h3>
        </p>
      </div>
    </>
  ),
}

export const Achievements = {
  content: (
    <ul>
      <li>Patent granted on "A METHOD FOR CONTAMINATED WATER USING PHOTOSTABLE SUPERPARAMAGNETIC NANOMATERIAL."</li>
    </ul>
  ),
}

export const Others = {
  content: (
    <>
      <div>
        <p style={{ fontSize: `1.3rem` }}>
          <strong>PhD students:</strong>
        </p>
        <ol>
          <li>Sangeeta (PhD guide: Dr. Khursheed Ahmad)</li>
          <li>Mosidur Rahaman Molla (PhD guide: Dr. Rima Thakur)</li>
          <li>Pramanand Kumar (PhD guide: Dr. Subrata Das)</li>
          <li>Manisha Prakashini (PhD guide: Dr. Suvankar Dasgupta)</li>
          <li>Sweta (PhD guide: Prof. Sitaram Sharma)</li>
          <li>Vedeshwar Narayan Singh (PhD guide: Prof. Sitaram Sharma)</li>
          <li>Rajeev Kumar Shandilya (PhD guide: Dr. Aniruddha Paul)</li>
          <li>Awdhesh Dwivedi (PhD guide: Dr. Niki Sweta Jha)</li>
          <li>Pradeep Das (PhD guide: Dr. Rima Thakur)</li>
          <li>Mukesh Kumar Mishra (PhD guide: Dr. Khursheed Ahmad)</li>
          <li>Krishna Kumar Mahto (PhD guide: Dr. Khursheed Ahmad)</li>
          <li>Darakshan (PhD guide: Dr. Tasneem Parvin)</li>
          <li>Rasendra Shukla (Project guide: Dr. Suvankar Dasgupta)</li>
          <li>Susital Mal (Project guide: Dr. Subrata Das)</li>
        </ol>
        <p style={{ fontSize: `1.3rem` }}>
          <strong>PhD Alumni:</strong>
        </p>
        <ol>
          <li>Sulakshna Bharti(PhD guide: Dr. Mukesh CHoudhary)</li>
          <li>Ruchi Bharti, 2016 (PhD guide: Dr. Tasneem Parvin)</li>
          <li>Debojyoti Chakraborty, 2015 (PhD guide: Prof. Sitaram Sharma)</li>
          <li>Madhu Bala, 2014 (PhD guide: Dr. Khursheed Ahmad)</li>
          <li>Pooja Kumari (PhD guide: Dr. Tasneem Parvin)</li>
          <li>Mahesh Kumar Mishra (PhD guide: Prof. Sitaram Sharma)</li>
          <li>Noorussabah (PhD guide: Dr. Khursheed Ahmad) </li>
          <li>Brajesh Kumar (PhD guide: Dr. Subrata Das)</li>
          <li>Bharti Mohan (PhD guide: Dr. Mukesh Choudhary)</li>
          <li>Rahul Yadav (PhD guide: Dr. Tasneem Parvin)</li>
        </ol>
      </div>
      <div>
        <p style={{ fontSize: `1.3rem` }}>
          <strong>MSc Students:</strong>
        </p>
        <p style={{ fontSize: `1.3rem` }}>
          <strong>&nbsp; &nbsp;2015 Batch:</strong>
        </p>
        <ol>
          <li>RAJNI KUMARI (1508001)</li>
          <li>SHUBHAM RAJ (1508003)</li>
          <li>SIVA DEEPTHI MACHIRAJU (1508010)</li>
          <li>MUKESH JAISAWAL (1508014)</li>
          <li>NITISH KUMAR (1508015)</li>
          <li>AJEET KUMAR (1508017)</li>
          <li>ALKA KUMARI (1508020)</li>
          <li>MUKESH KUMAR (1508021)</li>
          <li>ANIKET RAJ (1508023)</li>
          <li>ANUBHAV KUMAR (1508024)</li>
          <li>RITESH BHARTI (1508026)</li>
        </ol>
        <p style={{ fontSize: `1.3rem` }}>
          <strong>2016 Batch:</strong>
        </p>
        <ol>
          <li>Prakash Kumar Sahu (1608001)</li>
          <li>Arya Kumari (1608005)</li>
          <li>Pushpa Kumari (1608006)</li>
          <li>Shravan Kumar (1608003)</li>
          <li>Aman Raj (1608004)</li>
          <li>Himanshu Kumar (1608008)</li>
          <li>Yogendra Pal&nbsp; Singh&nbsp; (1608007)</li>
          <li>Gopal Kumar&nbsp; Chaudhary (1508022)</li>
        </ol>
      </div>

      <div>
        <p style={{ fontSize: `1.3rem` }}>
          <strong>Non-Teaching Staff</strong>
        </p>
        <ol>
          <li>Biswanath Yadav (Casual LDC)</li>
          <li>Randhir Bharti (Manpower Clerk)</li>
          <li>Ramphal Kamti (Peon)</li>
        </ol>
      </div>
    </>
  ),
}
