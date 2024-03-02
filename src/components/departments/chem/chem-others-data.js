import { number } from "prop-types"
import React from "react"
import "./CheStyle.css"

const home = "http://www.nitp.ac.in/php/"
//const home = process.env.GATSBY_BASE_URL + "chem/labs/"

const activity = process.env.GATSBY_BASE_URL + "chem/activities/"

const LabImages = process.env.GATSBY_BASE_URL + "chem/labs/"

// ------------------------------ LAB ----------------------------

export const LabImages1 = [
 <img src={`${LabImages}tl_01.jpg`} alt="image" />,
 <img src={`${LabImages}tl_02.jpg`} alt="image" />,
 <img src={`${LabImages}tl_03.jpg`} alt="image" />,
 <img src={`${LabImages}tl_04.jpg`} alt="image" />,
]

export const LabImages2 = [
 <img src={`${LabImages}il_01.jpg`} alt="image" />,
 <img src={`${LabImages}il_02.jpg`} alt="image" />,
 <img src={`${LabImages}il_03.jpg`} alt="image" />,
]

export const LabImages3 = [
 <img src={`${LabImages}rl_01.jpg`} alt="image" />,
 <img src={`${LabImages}rl_02.jpg`} alt="image" />,
 <img src={`${LabImages}rl_03.jpg`} alt="image" />,
 <img src={`${LabImages}rl_04.jpg`} alt="image" />,
 <img src={`${LabImages}rl_05.jpg`} alt="image" />,
 <img src={`${LabImages}rl_06.jpg`} alt="image" />,
 <img src={`${LabImages}rl_07.jpg`} alt="image" />,
 <img src={`${LabImages}rl_08.jpg`} alt="image" />,
]

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

// ------------------------------ ACHIEVEMENTS ----------------------------
const SponseredProjectsTable = [
 {
  "Sr. No.": 1,
  "Name of PI": "Dr. Rima Thakur",
  "Title of Project":
   "Radical Mediated Glycal Functionalization towards Synthesis of C2-Modified Sugars.",
  "Project No./Time Period": "SPG/2021/004607 July 2022 - July 2025",
  "Amount (Rs.)": "45.21 Lakhs",
  Agency: "SERB-DST",
 },

 {
  "Sr. No.": 2,
  "Name of PI": "Dr. Niki Sweta Jha",
  "Title of Project":
   "Tunable loading of oligonucleotide with gold and magnetic silica sphere derived gold nanostructured materials as sensing probe for detection of Target DNA. ",
  "Project No./Time Period": "01(3071)/21/EMR-II March 2022 – March 2025",
  "Amount (Rs.)": "21.25 Lakhs",
  Agency: "CSIR",
 },
 {
  "Sr. No.": 3,
  "Name of PI": "Dr. Suvankar Dasgupta",
  "Title of Project":
   "Analysis of Stopper Size for Smaller Crown Ethers in MIM. ",
  "Project No./Time Period": "R21-1196462483August 2021 – August 2023",
  "Amount (Rs.)": "3.92 Lakhs",
  Agency: "RSC Research fund",
 },
 {
  "Sr. No.": 4,
  "Name of PI": "Dr. Subrata Das",
  "Title of Project":
   "Bio-sensing application of Graphene (GR) analogous systems: Estimating device potential. ",
  "Project No./Time Period":
   "54/14/15/2020-BRNS/35054 September 2020 – September 2023",
  "Amount (Rs.)": "32.00 Lakhs",
  Agency: "BRNS-DAE",
 },
 {
  "Sr. No.": 5,
  "Name of PI": "Dr. Subrata Das",
  "Title of Project":
   "Metallosupramolecular complexes with bioactive pyrimidine derivatives: Materials for advanced applications. ",
  "Project No./Time Period": "EEQ/2019/000294 December 2019 – December 2022",
  "Amount (Rs.)": "43.00 Lakhs",
  Agency: "SERB-DST",
 },
 {
  "Sr. No.": 6,
  "Name of PI": "Dr. Suvankar Dasgupta",
  "Title of Project": "Host-Guest Chemistry for Stimuli-Responsive Systems. ",
  "Project No./Time Period": "ECR/2016/001724 Feb 2017 – June 2020",
  "Amount (Rs.)": "36.21 Lakhs",
  Agency: "SERB-DST",
 },
 {
  "Sr. No.": 7,
  "Name of PI": "Dr. Aniruddha Paul",
  "Title of Project":
   "Surface-Immobilized Growth of Anisotropic Noble Metal Nanoparticles: Spectroscopic Investigation and Application. ",
  "Project No./Time Period": "ECR/2016/001597 Feb 2017 – Feb 2020",
  "Amount (Rs.)": "45.16 Lakhs",
  Agency: "SERB-DST",
 },
 {
  "Sr. No.": 8,
  "Name of PI": "Dr. Rima Thakur",
  "Title of Project":
   "Stereoselective Strategies Towards b-glycosylation: En route Synthesis of Bioactive Compounds. ",
  "Project No./Time Period": "ECR/2016/000623 Nov 2016 – Nov 2019",
  "Amount (Rs.)": "37.62 Lakhs",
  Agency: "SERB-DST",
 },
 {
  "Sr. No.": 9,
  "Name of PI": "Dr. Tasneem Parvin",
  "Title of Project":
   "Exploration of bifunctional thiourea-amine orgnocatalysts in asymmetric multicomponent ",
  "Project No./Time Period": "EMR/2016/000960 Sept 2016 – Sept 2019",
  "Amount (Rs.)": "51.95 Lakhs",
  Agency: "SERB-DST",
 },
 {
  "Sr. No.": 10,
  "Name of PI": "Dr. Subrata Das",
  "Title of Project":
   "Nitroso-Diels-Alder (NDA) reaction for the synthesis of some heterocyclic compounds. ",
  "Project No./Time Period": "SB/FT/CS-133/2012 April 2013 – March 2017",
  "Amount (Rs.)": "13.00 Lakhs",
  Agency: "SERB-DST",
 },
]

export const Achievements = {
 content: (
  <div>
   <div className="Headg">Externally Sponsored Projects:</div>
   <table className="table-act">
    <thead>
     <tr className="syllabus-table-head">
      <th>Sr. No.</th>
      <th>Name of PI</th>
      <th>Title of Project</th>
      <th>Project No./ Time Period</th>
      <th>Amount Sactioned(₹)</th>
      <th>Funding Agency</th>
     </tr>
    </thead>
    <tbody>
     {SponseredProjectsTable.map((row, idx) => {
      return (
       <tr key={idx}>
        <td>{row["Sr. No."]}</td>
        <td>{row["Name of PI"]}</td>
        <td>{row["Title of Project"]}</td>
        <td>{row["Project No./Time Period"]}</td>
        <td>{row["Amount (Rs.)"]}</td>
        <td>{row["Agency"]}</td>
       </tr>
      )
     })}
    </tbody>
   </table>

   <ol id="Achievements-List" type="1">
    <div className="Headg">Patents:</div>
    <li>
     <span className="List-red">Subrata Das</span>, P. K. Sukul and A. Mondal.{" "}
     <strong>
      “Superhydrophobic Photostable Dye Coated Magnetic Nano Materials for
      Separating Contaminated Oil”.
     </strong>{" "}
     <span className="blue">
      Indian Patent. 2017. Patent No: 332217 (Granted).
     </span>
    </li>

    <li>
     <span className="List-red">Subrata Das</span>, Shibu Naskar, S. Mal, T. Das
     and P. Kumar. <strong>“An Improved Batch-flow photo-reactor”.</strong>{" "}
     <span className="blue">
      Indian Patent. 2022. Patent no: 412866 (Granted).
     </span>
    </li>

    <li>
     <span className="List-red">Subrata Das</span>, A. Sarkar and Abhimunya.{" "}
     <strong>
      “Method and system for reducing pollutants in exhaust emissions of
      internal combustion engine”.
     </strong>{" "}
     <span className="blue">
      Indian Patent. 2014. Patent App. No: 1455/MUM/2014. (Published).
      (Examination report submitted on July 2019).
     </span>
    </li>

    <li>
     <span className="List-red">Subrata Das</span>, Parmanand Kumar, Raj Kumar,
     Susital Mal, Tushar Das and Shubham Raj.{" "}
     <strong>
      “Violuric acid functionalized reduced graphene oxide as an adsorbent for
      the removal of toxic metal ions”.
     </strong>{" "}
     <span className="blue">
      Indian Patent. 2023. Indian Patent App. no: 202331006034. (Published).
      Examination report submitted.
     </span>
    </li>

    <li>
     <span className="List-red">Subrata Das</span>, Tushar Das, Susital Mal,
     Prakash Kumar, Debabrata Mandal.{" "}
     <strong>
      “Graphene quantum dots as nanozymes for neuronal stress suppression”.
     </strong>{" "}
     <span className="blue">
      2023. Indian Patent App. no: 202331025091. (Published).
     </span>
    </li>

    <li>
     <span className="List-red">Tasneem Parvin</span>, Darakshan, Ujjain
     Chaurasia and Aatka Mehar,{" "}
     <strong>
      “Indole linked benzo indoledione derivatives and one-pot synthesis method
      thereof.”
     </strong>{" "}
     <span className="blue">
      Indian Patent, 2023, Application No. 202331043395. (Published).
     </span>
    </li>
   </ol>
  </div>
 ),
}

// ------------------------------- ACTIVITY -------------------------------

export const Activity = {
 content: (
  <div>
   <div className="Headg">Upcoming Events:</div>
   <div className="Headg">Recent Activities:</div>
   <ol className="Activity-list" type="1">
    <li>
     <h3>Department Lecture Series 7</h3>
     <p>
      <strong>Date: </strong>5th January, 2024 <strong>Venue :</strong>Computer
      Center
     </p>
     <p>
      <strong>Speaker: </strong>Prof. Raja Shanmugam, Professor, Department of
      Chemistry, IISER Kolkata{" "}
     </p>
     <p>
      <strong>Title: </strong>Designing Norbornene Based Functional Polymers
     </p>
     <img className="ac-images" src={`${activity}ac_01.jpg`} alt="image" />
    </li>

    <li>
     <h3>Department Lecture Series 6 </h3>
     <p>
      <strong>Date: </strong> 28th November, 2023 <strong>Venue :</strong>
      Computer Center
     </p>
     <p>
      <strong>Speaker: </strong>Prof. Partha Hazra, Professor, Department of
      Chemistry, IISER Pune{" "}
     </p>
     <p>
      <strong>Title: </strong>Triplet Exciton Harvesting in Novel Organic
      Luminogens for New Generation OLED Applications
     </p>
     <img className="ac-images" src={`${activity}ac_02.jpg`} alt="image" />
    </li>

    <li>
     <h3>Department Lecture Series 5</h3>
     <p>
      <strong>Date: </strong>4th October, 2023 <strong>Venue :</strong> Computer
      Center
     </p>
     <p>
      <strong>Speaker: </strong>Prof. (Dr.) Partha Basu, Department Chair
      Professor of Chemistry, Indiana University, Indianapolis, USA{" "}
     </p>
     <p>
      <strong>Title: </strong>Bio-organic Chemistry
     </p>
     <img className="ac-images" src={`${activity}ac_03.jpg`} alt="image" />
    </li>

    <li>
     <h3>Department Lecture Series 4</h3>
     <p>
      <strong>Date: </strong>25th July, 2023 <strong>Venue :</strong> Computer
      Center
     </p>
     <p>
      <strong>Speaker: </strong>Prof. Krishna Nand Singh, Professor, Department
      of Chemistry, Banaras Hindu University, Varanasi{" "}
     </p>
     <p>
      <strong>Title: </strong>Organic Synthesis: Challenges and Remedies
     </p>
    </li>

    <li>
     <h3>Department Lecture Series 3</h3>
     <p>
      <strong>Date: </strong> 4th July, 2023 <strong>Venue :</strong> Computer
      Center
     </p>
     <p>
      <strong>Speaker: </strong>Prof. Vinod K. Tiwari, Professor, Department of
      Chemistry, Banaras Hindu University, Varanasi{" "}
     </p>
     <p>
      <strong>Title: </strong>Synthetic Chemists and Our Society
     </p>
     <img className="ac-images" src={`${activity}ac_04.jpg`} alt="image" />
    </li>

    <li>
     <h3>Department Lecture Series 2</h3>
     <p>
      <strong>Date: </strong>12th June, 2023 <strong>Venue :</strong> Computer
      Center
     </p>
     <p>
      <strong>Speaker: </strong>Prof. Suvarn S. Kulkarni, Institute Chair
      Professor, Department of Chemistry, IIT Bombay{" "}
     </p>
     <p>
      <strong>Title: </strong>Simple Solutions to Complex Problems
     </p>
     <img className="ac-images" src={`${activity}ac_05.jpg`} alt="image" />
    </li>

    <li>
     <h3>Department Lecture Series 1</h3>
     <p>
      <strong>Date: </strong>3rd May, 2023 <strong>Venue :</strong> Computer
      Center
     </p>
     <p>
      <strong>Speaker: </strong>Dr. Sumanta Kumar Sahu, Associate Professor, IIT
      (ISM) Dhanbad{" "}
     </p>
     <p>
      <strong>Title: </strong>: Multicolor Emissive Carbon Dots for White Light
      Emitting Diode: A Prospective
     </p>
    </li>
   </ol>
  </div>
 ),
}

// ------------------------------ More Info ----------------------------

export const Others = {
 content: (
  <div>
   <div className="Headg">Ph.D. Alumini:</div>

   <div className="Headg">Ph.D. Thesis Awarded:</div>
   <ol type="1" className="phd-thesis-awarded-list">
    <li>
     <p>
      <strong>Scholar: </strong>Manisha Prakashni{" "}
      <span>
       <strong>Supervisor: </strong>Dr. Suvankar Dasgupta{" "}
      </span>{" "}
      <span>
       <strong>Year: </strong>2024
      </span>
     </p>
     <p>
      <strong>Thesis Title: </strong> Templated Synthesis of Mechanically
      Interlocked Molecules (MIMs) Involving Dialkylammonium Salts and [23]Crown
      Ethers
     </p>
     {/* <p><strong>Current Status: </strong></p> */}
    </li>

    {/* 2 */}
    <li>
     <p>
      <strong>Scholar: </strong>Dr. Pramanand Kumar{" "}
      <span>
       <strong>Supervisor: </strong>Dr. Subrata Das
      </span>{" "}
      <span>
       <strong>Year: </strong>2023
      </span>
     </p>
     <p>
      <strong>Thesis Title: </strong>Graphene oxide/Reduced graphene oxide-based
      Nanomaterials and Their Applications
     </p>
     <p>
      <strong>Current Status: </strong>Assistant Professor (Guest) in Motihari
      College of Engineering
     </p>
    </li>

    {/* 3 */}

    <li>
     <p>
      <strong>Scholar: </strong>Dr. Padma Sharma{" "}
      <span>
       <strong>Supervisor: </strong>Dr. Niki S. Jha
      </span>{" "}
      <span>
       <strong>Year: </strong>2023
      </span>
     </p>
     <p>
      <strong>Thesis Title: </strong>Biophysical Aspects of Binding of
      Synthesized Ligands as G-Quadruplex Binder
     </p>
     {/* <p><strong>Current Status: </strong></p> */}
    </li>

    {/* 4 */}
    <li>
     <p>
      <strong>Scholar: </strong> Dr. Mosidur Rahman Molla{" "}
      <span>
       <strong>Supervisor: </strong> Dr. Rima Thakur
      </span>{" "}
      <span>
       <strong>Year: </strong>2023
      </span>
     </p>
     <p>
      <strong>Thesis Title: </strong> Design and Development of New Glycosyl
      Donors Bearing Orthogonal Ether-Linked Protecting Groups Towards
      Stereoselective 1,2-trans--O-Glycosylation
     </p>
     <p>
      <strong>Current Status: </strong>Post-doc at University of Florida, USA
     </p>
    </li>

    {/* 5 */}

    <li>
     <p>
      <strong>Scholar: </strong>Dr. Vedeshwar Narayan Singh{" "}
      <span>
       <strong>Supervisor: </strong>Prof. Sita Ram Sharma (Retd.)
      </span>{" "}
      <span>
       <strong>Year: </strong>2023
      </span>
     </p>
     <p>
      <strong>Thesis Title: </strong>Synthesis and Characterization of Novel
      Monocyclic -Lactams
     </p>
     <p>
      <strong>Current Status: </strong>Post-doc at IIT Guwahati (NPDF, SERB)
     </p>
    </li>

    {/* 6 */}
    <li>
     <p>
      <strong>Scholar: </strong>Dr. Rahul Yadav{" "}
      <span>
       <strong>Supervisor: </strong>Dr. Tasneem Parvin{" "}
      </span>{" "}
      <span>
       <strong>Year: </strong>2022
      </span>
     </p>
     <p>
      <strong>Thesis Title: </strong>Synthesis of Pyrazole Fused Polycyclic
      Heterocycles by Multicomponent Reactions
     </p>
     <p>
      <strong>Current Status: </strong>Assistant Professor in Government
      Engineering College Lakhisarai, Bihar
     </p>
    </li>

    {/* 7 */}
    <li>
     <p>
      <strong>Scholar: </strong>Dr. Brajesh Kumar{" "}
      <span>
       <strong>Supervisor: </strong> Dr. Subrata Das
      </span>{" "}
      <span>
       <strong>Year: </strong>2022
      </span>
     </p>
     <p>
      <strong>Thesis Title: </strong>Synthesis, structure and spectroscopic
      analysis of metal complexes of bio-active pyrimidine derivatives
     </p>
     <p>
      <strong>Current Status: </strong>Assistant Professor in Nalanda College of
      Engineering, Chandi
     </p>
    </li>

    {/* 8 */}
    <li>
     <p>
      <strong>Scholar: </strong>Dr. Bharti Mohan{" "}
      <span>
       <strong>Supervisor: </strong>Dr. Mukesh Choudhary{" "}
      </span>
      <span>
       <strong>Year: </strong>2022
      </span>
     </p>
     {/* <p><strong>Thesis Title: </strong></p>
      <p><strong>Current Status: </strong></p> */}
    </li>

    {/* 9 */}
    <li>
     <p>
      <strong>Scholar: </strong>Dr. Noorussabah{" "}
      <span>
       <strong>Supervisor: </strong>Dr. Khursheed Ahmad{" "}
      </span>
      <span>
       <strong>Year: </strong>2022
      </span>
     </p>
     <p>
      <strong>Thesis Title: </strong>Synthesis, Structural Characterization and
      Biological Activities on Some New Transition Metal Complexes Containing
      Nitrogen, Oxygen and Sulfur Donor Ligands
     </p>
     {/* <p><strong>Current Status: </strong></p> */}
    </li>

    {/* 10 */}
    <li>
     <p>
      <strong>Scholar: </strong> Dr. Mahesh Kumar Mishra{" "}
      <span>
       <strong>Supervisor: </strong>Prof. Sita Ram Sharma (Retd.){" "}
      </span>
      <span>
       <strong>Year: </strong>2022
      </span>
     </p>
     {/* <p><strong>Thesis Title: </strong></p>
      <p><strong>Current Status: </strong></p> */}
    </li>

    {/* 11 */}
    <li>
     <p>
      <strong>Scholar: </strong> Dr. Pooja Kumari{" "}
      <span>
       <strong>Supervisor: </strong> Dr. Tasneem Parvin{" "}
      </span>{" "}
      <span>
       <strong>Year: </strong>2020
      </span>
     </p>
     <p>
      <strong>Thesis Title: </strong>Exploration of multicomponent reactions
      (MCRs) for the synthesis of bioactive heterocycles.
     </p>
     {/* <p><strong>Current Status: </strong></p> */}
    </li>

    {/* 12 */}
    <li>
     <p>
      <strong>Scholar: </strong>Dr. Sulakshana Bharti{" "}
      <span>
       <strong>Supervisor: </strong>Dr. Mukesh Choudhary{" "}
      </span>{" "}
      <span>
       <strong>Year: </strong>2018
      </span>
     </p>
     <p>
      <strong>Thesis Title: </strong>Synthesis, Spectroscopic Characterization,
      Crystal Structure and Biological Studies of Some New Mixed Ligand Copper
      (II) and Nickel (II) Complexes Possessing Nitrogen, Oxygen and Sulphur
      Donor Atoms
     </p>
     <p>
      <strong>Current Status: </strong>Assistant Professor, Department of
      Chemistry, Govt. Engineering College, Phojpur, (Bihar){" "}
     </p>
    </li>

    {/* 13 */}
    <li>
     <p>
      <strong>Scholar: </strong>Dr. Ruchi Bharti{" "}
      <span>
       <strong>Supervisor: </strong>Dr. Tasneem Parvin{" "}
      </span>{" "}
      <span>
       <strong>Year: </strong>2016
      </span>
     </p>
     <p>
      <strong>Thesis Title: </strong>Synthesis of functionalized heterocycles
      using organocatalyzed multicomponent reactions.
     </p>
     <p>
      <strong>Current Status: </strong>: Associate Professor, Chandigarh
      University
     </p>
    </li>

    {/* 14 */}
    <li>
     <p>
      <strong>Scholar: </strong>Dr. Debojyoti Chakraborty{" "}
      <span>
       <strong>Supervisor: </strong>Prof. Sita Ram Sharma (Retd.)
      </span>
     </p>
     {/* <p><strong>Thesis Title: </strong></p>
      <p><strong>Current Status: </strong></p> */}
    </li>

    {/* 15 */}
    <li>
     <p>
      <strong>Scholar: </strong> Dr. Madhu Bala{" "}
      <span>
       <strong>Supervisor: </strong> Dr. Khursheed Ahmad{" "}
      </span>
     </p>
     {/* <p><strong>Thesis Title: </strong></p>
      <p><strong>Current Status: </strong></p> */}
    </li>
   </ol>

   <div className="Headg">Thesis Submitted:</div>
   <ol type="1" className="phd-thesis-awarded-list">
    {/* 1 */}
    <li>
     <p>
      <strong>Scholar: </strong> Aprajita{" "}
      <span>
       <strong>Supervisor: </strong>Dr. Mukesh Choudhary{" "}
      </span>
      <span>
       <strong>Year: </strong>2023
      </span>
     </p>
     <p>
      <strong>Thesis Title: </strong>Synthesis, Characterization And Properties
      Of Copper(II)/Nickel(II) Coordination Complexes
     </p>
     <p>
      <strong>Current Status: </strong> Assistant Professor, Department of
      Chemistry, Govt. College of Engineering, Bhagalpur Bihar.
     </p>
    </li>

    {/* 2 */}
    <li>
     <p>
      <strong>Scholar: </strong> Sunil Kumar{" "}
      <span>
       <strong>Supervisor: </strong>Dr. Mukesh Choudhary{" "}
      </span>
      <span>
       <strong>Year: </strong>2023
      </span>
     </p>
     <p>
      <strong>Thesis Title: </strong>Synthesis, Characterization And Antivirus
      Potential Of Novel Copper(II) And Nickel(II) Complexes{" "}
     </p>
    </li>

    {/* 3 */}
    <li>
     <p>
      <strong>Scholar: </strong> Darakshan{" "}
      <span>
       <strong>Supervisor: </strong>Dr. Tasneem Parvin{" "}
      </span>
      <span>
       <strong>Year: </strong>2023
      </span>
     </p>
    </li>
   </ol>
  </div>
 ),
}
