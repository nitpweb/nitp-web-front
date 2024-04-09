import React, { useState, useEffect } from "react"
import bank from "./facilities/img/bank.svg"
import dummy from "./facilities/img/dummy.png"
import medical from "./facilities/img/medical.svg"
import security from "./facilities/img/security.svg"
import wifi from "./facilities/img/wifi.svg"
import woman from "./facilities/img/woman.svg"
import electric from "./facilities/img/electric.svg"
import Facilitymain from "./facilities/img/facilitymainimg"
import Ccimg from "./facilities/img/ccimg"
import PKImg from "./facilities/img/pkimg"
import Dummyimg from "./facilities/img/dummy"
import Sportsimg from "./facilities/img/sportsimg"
import Medicalimg from "./facilities/img/medicalimg"
import Hostelimg from "./facilities/img/hostelimg"
import Labimg from "./facilities/img/labimg"
import Libraryimg from "./facilities/img/libraryimg"
import { PageLayout } from "./styles/pagelayout"
import { TabPage } from "./styles/tabpage"
import Navigate from "./global/Navigate"
import { useQueryParam } from "use-query-params"
import Navlist from "./global/navlist"
const ccdetail =
 "A state-of-the-art Computer Centre started its operation on 27th November 2011. It serves as the central computing facility for the students, research scholars and teachers of the institute. The Centre is well equipped with modern Computers (190 in number), air conditioned labs and stabilized uninterrupted power supply among the other facilities. The Centre has seven labs for all the students and one lab exclusively for PhD scholars of the institute. All labs are equipped with IP cameras to monitor the activities remotely. The Centre has 1 Gbps, 24x7 internet connectivity on optical fiber under National Knowledge Network, Govt. of India.The Centre also has a Virtual Class Room and Desktop VideoConferencing facility. It operates from 8:30 AM to 5:30 PM."
const libdetail =
 "The Central library of the institute owns a vast stock of over 75,000 books catering to the needs of all the relevant fields of engineering. It has a resourceful stock of over 10,000 computer related books and clearly demarcated section for every engineering branch and architecture. In addition to the engineering pertinent books, the central library is self-sufficient in a vivid category of other business and current affairs related magazines, pamphlets and journals which includes TIME and NEWSWEEK.The Central Library is fully automated and all operations are performed with the help of Libsys - Library Automation Software.The students can issue a sufficient no.of books for use throughout the semester and an additional no.of books for special reference."
const sports =
 "A healthy mind resides in a healthy body. The students are encouraged to take up sports actively. A huge ground is maintained meticulously for playing cricket and football. A Tennis court, Basketball court and Badminton court are also present. Several other sports such as Table Tennis, Athletics, Volleyball and others are also conducted. Students of the institute have taken part in various Inter-College tournaments and matches and have shown exemplary performance. They are trained by an experienced coach. An intramural Sports meet allows them to show their mettle and broaden their horizons. The institute believes that playing sports helps the students to build a spirit of teamwork and sportsmanship which will help them to lead better lives. "
const hostel =
 "Residential facilities are provided to students in three boys’ hostels and two girls’ hostel. Presently, all the girls and many of the boys are accommodated in these hostels. The hostels are guarded round the clock by able private security staffs.Patrolling is also done by state security personnel during night. There are also separate wardens for each and every hostel in order to maintain discipline. Each hostel provides a central mess facility for breakfast, lunch and dinner. Uninterrupted water and electricity supply are also provided. Hostels have got separate wi fi connections for providing internet facilities to students 24x7. Newspapers and magazines are put up in the common rooms. Cleanliness and hygiene are taken care of and maintained in every aspect. "
// const wifidetail =
//  "Today's world can't be imagined without internet. Wi Fi access is available in the campus and hostels for use by the students and the employees. It enables students to carry out their projects and search for relevant information. The facility is regularly checked and updated as per requirement. The internet access is provided by BSNL(1 Gbps) , PGCIL(100 Mbps) , RailTel(10 Mbps).The access is password secured and is provided 24x7 to assist and aid students in extensive research work. "
const bankdetail =
 "There is a functional extension branch of Allahabad Bank within the institute premises.It provides all modern banking facilities to cater to the needs of students and the employees in the campus.The fees transactions are also carried out here.Also, an ATM of Allahabad Bank is situated near the gate of the college campus to enable hassle free money withdrawal at any time."
const womancell =
 "As per the directives of the Chairman UGC a Women’s cell has been set up under a committee to ensure safe working environment and inspiring learning environment for the women employees and girl students of the Institute in order to enable them to discharge their academic and professional responsibilities efficiently. The committee constantly monitors the existing arrangements and suggests additional measures to be put into operation to ensure that the Institute is free of any kind of harassment. "
const lab =
 "Technical knowledge is of no worth without practical approach.Every department has laboratories which provide practical experience related to the subjects studied. The students are expected to take the lab courses for better learning. Various instruments, machines and computers are provided in the labs to facilitate the lab work. Lab assistants and Professor in-charge effectively guide the students through their practical work.Every department has an operational computer lab of its own to sharpen programming skills and to get hands - on experience with the use of the softwares required in their respective fields of concern.The labs are equipped with the latest technology and are periodically updated.<br/><br/><strong>Workshops</strong><br/> A huge workshop with all required equipments, machines and tools is spread over a large area in the college.Work related to carpentry, blacksmithy, foundry, fitting etc.is carried out.All the activities are carried out under the vigilance and guidance of experienced instructors."
const securitydetail = (
 <>
  <p>
   <ul typeof=" decimal">
    <li>Prof.&nbsp;Vivekanand Singh&emsp;:&nbsp;Chief Proctor</li>
    <b></b>
    <li>Prof.&nbsp;Prabhat Kumar&emsp;&emsp;:&nbsp;Dy.&nbsp;Chief Proctor</li>
    <b></b>
    <li>
     Dr.&nbsp;A.&nbsp;K.&nbsp;Das&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:&nbsp;Dy.&nbsp;Proctor
    </li>
    <b></b>
    <li>
     Sri J.&nbsp;P.&nbsp; Sharma &emsp;&emsp;&emsp;&emsp;:&nbsp;Assistant
     Registrar
    </li>
    <b></b>
   </ul>
  </p>
  <p>
   The institute administration gives utmost attention to the security of the
   lives of the students and employees. Ex-servicemen security personnel
   provides 24x7 security cover all over the campus which includes the hostels
   and the staff quarters. State security personals carry out regular patrolling
   outside the campus during night time. The girls’ hostels are specially taken
   care of and are carefully guarded. Entry inside the campus is restricted for
   outsiders to prevent security breaches.The security of the institute, hostels
   and its inmates is headed by the Asst.Registrar, Mr.J P Sharma who was a
   defence officer.He served the Indian Air Force for more than 18 years.At
   present, 72 ex - serviceman were recruited by the institute on contract basis
   for additional security.{" "}
  </p>
 </>
)

const medicaldetail =
 " Two permanent doctor has a fixed chamber within the institute premises. He can be consulted by the students and employees for any health related problems on every working day free of cost.<br/><br/>Profile of the health consultants:<br/>Dr.Vikas Kumar Raj<br/>Senior Medical Officer<br/>MBBS, MD, MBA(HCA)<br/>PGD in DP & R and Family Medicine<br/>PGC in Hospital Management Dr.V K Raj<br/><br/>Dr.Santosh Kumar Sudhakar<br/>Medical Officer<br/>MBBS<br/>Ex - Resident of DR.RML Hospital<br/>New Delhi Dr.S K Sudhakar<br/><br/>The institute also maintains a 24x7 ambulance which is used for transferring patients from the institute to Patna Medical College and Hospital(PMCH) in case of any emergency."
const emudetail =
 "To provide Electric power supply to the Institute. EMU maintains all electrical equipment such as Lights, Fans, AC, etc. which are installed in NIT Patna campus. EMU is having an 11KV/415V Electrical Substation (commonly Known as POWER HOUSE), equipped with 02 Nos. 1250KVA Transformer, 02 Nos. 750 KVA Diesel Generator and Separate Electricals Panels for each feeder pillars/Buildings. <br/><br/>Land line- 0612-2371715 Extension No.-116 <br/>br/>For any type of Electrical Complaint kindly fill the form."
const scstcell = (
 <>
  <p>
   The Institute is committed to maintain a work environment wherein faculty
   members, staff and students from different communities can work in a coherent
   environment. It is the Institute's endeavor to ensure that no discrimination
   takes place at the workplace or inside the Institute campus.
  </p>

  <p>
   The Institute has appointed a Liaison Officer who can be contacted in the
   event of any incident of discrimination. Particulars of Liaison Officer are
   as under:
  </p>

  <p>Liaison Officer</p>
  <p> Prof. Fulena Rajak</p>
  <p>Professor, Department of Architecture & Planning</p>
  <p>Email: sc.st.cell@nitp.ac.in</p>
  <p>
   For reporting any grievance related to SC / ST community of NIT Patna, kindly
   use this email ID:
  </p>
  <span style={{ fontWeight: "latin", color: "blue" }}>
   sc.st.cell@nitp.ac.in{" "}
  </span>
 </>
)
const itservicedetail = (
 <>
  <p>
   <ul typeof=" decimal">
    <li>Prof.&nbsp;Prabhat Kumar&emsp;:&nbsp;Professor & Head (CCIS)</li>
    <b></b>
    <li>Dr.&nbsp;Santosh Kumar&emsp;:&nbsp;Scientific Officer</li>
    <b></b>
    <li>Ritesh Kumar&emsp;:&nbsp;Technical Assistant</li>
    <b></b>
    <li>Paritosh Bhushan&emsp;:&nbsp;Technical Assistant</li>
    <b></b>
    <li>Coomar Kislay&emsp;:&nbsp;Technical Assistant</li>
   </ul>
  </p>
  <p>
   The institute IT Service Unit is equipped with most modern and advanced
   infrastructure to provide services to cater to the computing and networking
   needs of the of the institute. In addition to providing IT Solution, this
   units taking care of existing entire campus network (offices as well
   residential flats), Institute Servers, Web Server and other IT services like
   Mail, Webserver to meet the academic requirements and research purpose. High
   speed and uninterrupted Internet access is provide across the campus through
   1-Gbps internet connectivity by POWERGRID & 1-Gbps through NKN.
  </p>
 </>
)

const itservicetable = [
 {
  "S. No.": 1,
  Facility: "High Speed Wi-Fi & Wired Internet Connectivity",
 },
 {
  "S. No.": 2,
  Facility: "CCTV surveillance system",
 },
 {
  "S. No.": 3,
  Facility: "Bio Matric Authentication Devices",
 },
 {
  "S. No.": 4,
  Facility: "IP Phones through ready Network",
 },
 {
  "S. No.": 5,
  Facility: "EPBAX",
 },
]

const tequipData = (
 <>
  <div>
   <h3>
    <b>TEQIP Coordinator : Dr. M. P. Singh, Associate Professor, C.S.E.</b>
   </h3>

   <p>
    NIT Patna has been selected for Technical Education Quality Improvement
    (TEQIP II) Program under subcomponent 1.1 that aims at strengthening
    institution to improve learning outcomes and employability of graduates.
    Memorandum of Understanding (MOU) between the institute and the MHRD has
    already been signed.
   </p>
   <p>
    TEQIP has been instrumental in various R&D consultancy activities,
    infrastructure related activities and teaching learning enhancement
    activities. Several academically weak students have been given extra
    coaching to make up their deficiencies and stand up in academics. Along with
    that, TEQIP has sponsored several short-term courses and has given
    assistance to several postgraduate students to participate and present their
    paper in conferences. The expenditure from TEQIP fund for different
    activities are as follows:
   </p>

   <p>
    <a href="http://www.nitp.ac.in/uploads20/Annex-1 Format for EAP 2020-21_NIT Patna.docx">
     EAP(Dec 2020 to March 2021)
    </a>
   </p>
   <p>
    <a href="http://www.nitp.ac.in/uploads/EAP_2020_NIT_Patna.pdf">
     EAP(Jan 2020 to Sept 2020)
    </a>
   </p>
   <p>
    <a href="http://www.nitp.ac.in/uploads/Good%20Governance%20Development%20Plan%2055d36a22b210c.pdf">
     NIT PATNA GOVERNANCE GUIDELINES DOCUMENT
    </a>
   </p>
   <p>
    <a href="http://www.nitp.ac.in/uploads/Institutional%20Development%20Plan%20201555d3608b351c3.pdf">
     INSTITUTIONAL DEVELOPMENT PROPOSAL
    </a>
   </p>
  </div>
 </>
)

const Facilitiespage = () => {
 const [tab] = useQueryParam("tab")
 const [view, setView] = useState("cc")
 function getView(callback) {
  setView(callback)
 }
 useEffect(() => {
  Navlist.facilities.map(x => {
   x.sub.forEach(element => {
    tab ? (element.data === tab ? setView(tab) : "") : ""
   })
  })
 }, [tab])

 const arrdata = []
 Navlist.facilities.map(x => arrdata.push(...x.sub))
 return (
  <TabPage>
   <Navigate data={arrdata} callback={getView} tab={tab ? tab : "cc"} />
   {/* <Floatmenu /> */}
   <div className="mainDiv">
    <PageLayout>
     {/* <div className="layoutrow layoutrowmain" id="home">
            <div className="col-6 imgcolstyle">
              <div className="row rowmarl3">
                <h1 >Facilities</h1>
              </div>
            </div>
            <div className="col-6 imgcolstyle">
              <Facilitymain />
            </div>
          </div> */}
     {view == "cc" && (
      <div className="layoutrow layoutrow1 digital" id="cc">
       <div className="col-6 imgcolstyle">
        <Ccimg />
       </div>

       <div className="col-6">
        <div className="row rowmarr3">
         <h1>Centre for Computing and Information Services(CCIS)</h1>
        </div>
        <div className="row rowmarr3">
         <p>{ccdetail}</p>
         <br />
        </div>
       </div>
       <div className="col-6 imgcolstyle">
        <img src="https://www.nitp.ac.in/static/93dd1c9418abd80c357b3f6142c9d419/8b23a/prabhat-kumar.png"></img>
       </div>

       <div className="col-6">
        <div className="row rowmarr3">
         <h1>Head (CCIS)</h1>
        </div>
        <br></br>
        <div className="row rowmarr3">
         <p>
          Prof. PRABHAT KUMAR
          <br></br>प्रो. प्रभात कुमार<br></br>
          Professor (Computer Science and Engineering Dept.)<br></br> &
          प्राध्यापक (कंप्यूटर विज्ञान और इंजीनियरिंग विभाग)<br></br>
          Head, Centre for Computing and Information Services (CCIS)<br></br>
          विभागाध्यक्ष, कम्प्यूटिंग और सूचना सेवा केंद्र (सीसीआईएस)
         </p>
         <br />
        </div>
       </div>
      </div>
     )}
     {view == "it" && (
      <div className="layoutrow layoutrow1 digital">
       <div className="col-6 imgcolstyle">
        <PKImg />
       </div>
       <div className="col-6">
        <div className="row rowmarr3">
         <h1>IT Services Unit</h1>
        </div>
        <div className="row rowmarr3">{itservicedetail}</div>
        <div className="row row-new rowmarr3">
         <table>
          <tr>
           {Object.keys(itservicetable[0]).map(heading => (
            <th>{heading}</th>
           ))}
          </tr>
          {itservicetable.map(row => (
           <tr>
            <td>{row["S. No."]}</td>
            <td>{row.Facility}</td>
           </tr>
          ))}
         </table>
        </div>
       </div>
      </div>
     )}
     {view == "tequip" && (
      <div className="layoutrow layoutrow1 digital">
       <div className="col-6" style={{ width: "calc(100% - 6vw)" }}>
        <div className="row rowmarr3">
         <h1>TEQUIP</h1>
        </div>
        <div className="row row-new rowmarr3">{tequipData}</div>
       </div>
      </div>
     )}
     {view == "library" && (
      <div className="layoutrow digital" id="lib">
       <div className="col-6">
        <div className="row rowmarl3">
         <h1>Library</h1>
        </div>
        <div className="row rowmarl3">
         <p>{libdetail}</p>
        </div>
       </div>
       <div className="col-6 imgcolstyle">
        <Libraryimg />
       </div>
       <div className="col-6 imgcolstyle">
        <Libraryimg />
       </div>
       <div className="col-6">
        <div className="row rowmarr3">
         <p>
          <strong>E-RESOURCE SECTION</strong>
          <br />
          <br />
          It also maintains an E-Resource Section which subscribes and maintains
          a wide collection of highly acclaimed e-journals published by some big
          names like:
          <br />
          - AMERICAN SOCIETY OF CIVIL ENGINEERS(ASCE)
          <br />
          - AMERICAN SOCIETY OF MECHANICAL ENGINEERS(ASME)
          <br />
          - IEL
          <br />
          - IEEE
          <br />
          - NATURE
          <br />
          - ACM
          <br />
          - INDIAN STANDARD
          <br />
          - SPRINGER
          <br />
          ...and many more. The total collection of e-journals in the E-Resource
          Section numbers to more than 2700 of diverse categories. This section
          is mainly used for vital information access and research.
         </p>
        </div>
       </div>
       <div className="col-6">
        <div className="row rowmarl3">
         <p>
          <strong>Special features of Central Library</strong>
          <br />
          <br />
          Separate zones for every department.
          <br />
          Separate section for SC/ST under the name of B.R. Ambedkar section.
          <br />
          Separate section for e-journals called the E-Resource Section.
          <br />
          Calm milieu and spacious studying facility within the library.
          <br />
          Centrally air-conditioned.
          <br />
          Library is the member of INDEST and DELNET.
         </p>
        </div>
       </div>
       <div className="col-6 imgcolstyle">
        <Dummyimg />
       </div>
      </div>
     )}
     {view == "medical" && (
      <div className="layoutrow layoutrow1 digital" id="med">
       <div className="col-6 imgcolstyle">
        <Medicalimg />
       </div>
       <div className="col-6">
        <div className="row rowmarr3">
         <h1>Medical Facilities</h1>
        </div>
        <div className="row rowmarr3">
         <p>
          Two permanent doctor has a fixed chamber within the institute
          premises. He can be consulted by the students and employees for any
          health related problems on every working day free of cost.
          <br />
          <br />
          Profile of the health consultants:
          <br />
          Dr.Vikas Kumar Raj
          <br />
          Senior Medical Officer
          <br />
          MBBS, MD, MBA(HCA)
          <br />
          PGD in DP & R and Family Medicine
          <br />
          PGC in Hospital Management Dr.V K Raj
          <br />
          <br />
          Dr.Santosh Kumar Sudhakar
          <br />
          Medical Officer
          <br />
          MBBS
          <br />
          Ex - Resident of DR.RML Hospital
          <br />
          New Delhi Dr.S K Sudhakar
          <br />
          <br />
          The institute also maintains a 24x7 ambulance which is used for
          transferring patients from the institute to Patna Medical College and
          Hospital(PMCH) in case of any emergency.
         </p>
        </div>
       </div>
      </div>
     )}
     {view == "sports" && (
      <div className="layoutrow digital" id="sport">
       <div className="col-6">
        <div className="row rowmarl3">
         <h1>Sport Facilities</h1>
        </div>
        <div className="row rowmarl3">
         <p>{sports}</p>
        </div>
       </div>
       <div className="col-6 imgcolstyle">
        <Sportsimg />
       </div>
      </div>
     )}
     {view == "hostel" && (
      <div className="layoutrow layoutrow1 digital" id="hostel">
       <div className="col-6 imgcolstyle">
        <Hostelimg />
       </div>
       <div className="col-6">
        <div className="row rowmarr3">
         <h1>Hostel & Mess</h1>
        </div>
        <div className="row rowmarr3">
         <p>{hostel}</p>
        </div>
       </div>
      </div>
     )}
     {view == "lab" && (
      <div className="layoutrow digital" id="lab">
       <div className="col-6">
        <div className="row rowmarl3">
         <h1>Laboratories</h1>
        </div>
        <div className="row rowmarl3">
         <p>
          Technical knowledge is of no worth without practical approach.Every
          department has laboratories which provide practical experience related
          to the subjects studied. The students are expected to take the lab
          courses for better learning. Various instruments, machines and
          computers are provided in the labs to facilitate the lab work. Lab
          assistants and Professor in-charge effectively guide the students
          through their practical work. Every department has an operational
          computer lab of its own to sharpen programming skills and to get hands
          - on experience with the use of the softwares required in their
          respective fields of concern. The labs are equipped with the latest
          technology and are periodically updated.
          <br />
          <br />
          <strong>Workshops</strong>
          <br /> A huge workshop with all required equipments, machines and
          tools is spread over a large area in the college.Work related to
          carpentry, blacksmithy, foundry, fitting etc.is carried out.All the
          activities are carried out under the vigilance and guidance of
          experienced instructors.
         </p>
        </div>
       </div>
       <div className="col-6 imgcolstyle">
        <Labimg />
       </div>
      </div>
     )}
     {/* {view == "wifi" && (
      <div className="layoutrow layoutrow1 digital" id="wifi">
       <div className="row imgcolstyle backgroundimage">
        <img src={wifi} className="img-fluid" loading="lazy" />
       </div>
       <div className="row rowmarl3">
        <h1>Wifi</h1>
       </div>
       <div className="row rowmarl3">
        <p>{wifidetail}</p>
       </div>
      </div>
     )} */}
     {view == "bank" && (
      <div className="layoutrow digital" id="bank">
       <div className="row rowmarl3">
        <h1>Bank</h1>
       </div>
       <div className="row rowmarl3">
        <p>{bankdetail}</p>
       </div>
       <div className="row imgcolstyle backgroundimage">
        <img src={bank} className="img-fluid" loading="lazy" />
       </div>
      </div>
     )}
     {view == "security" && (
      <div className="layoutrow digital" id="security">
       <div className="row imgcolstyle backgroundimage">
        <img src={security} className="img-fluid" loading="lazy" />
       </div>
       <div className="row rowmarl3">
        <h1>Security</h1>
       </div>
       <div className="row rowmarl3">
        <p>{securitydetail}</p>
       </div>
      </div>
     )}
     {view == "womancell" && (
      <div className="layoutrow digital" id="wc">
       <div className="row rowmarl3">
        <h1>Woman Cell</h1>
       </div>
       <div className="row rowmarl3">
        <p>{womancell}</p>
       </div>
       <div className="row imgcolstyle backgroundimage">
        <img src={woman} className="img-fluid" loading="lazy" />
       </div>
      </div>
     )}
     {view == "scstcell" && (
      <div className="layoutrow digital" id="wc">
       <div className="row rowmarl3">
        <h1>SC/ST Cell</h1>
       </div>
       <div className="row rowmarl3">
        <p>{scstcell}</p>
       </div>
       <div className="row imgcolstyle backgroundimage">
        <img src={woman} className="img-fluid" loading="lazy" />
       </div>
      </div>
     )}
     {view == "emu" && (
      <div className="layoutrow digital" id="electric">
       <div className="row imgcolstyle backgroundimage">
        <img src={electric} className="img-fluid" loading="lazy" />
       </div>
       <div className="row rowmarl3">
        <h1>Electrical Maintenance Unit (EMU)</h1>
       </div>
       <div className="row rowmarl3">
        <p>
         To provide Electric power supply to the Institute. EMU maintains all
         electrical equipment such as Lights, Fans, AC, etc. which are installed
         in NIT Patna campus. EMU is having an 11KV/415V Electrical Substation
         (commonly Known as POWER HOUSE), equipped with 02 Nos. 1250KVA
         Transformer, 02 Nos. 750 KVA Diesel Generator and Separate Electricals
         Panels for each feeder pillars/Buildings.
         <br />
         <br />
         Land line- 0612-2371715 Extension No.-116
         <br />
         <br />
         For any type of Electrical Complaint kindly fill the{" "}
         <a href="https://drive.google.com/file/d/16WCZjOu7xFhwAEGZAD5LCJ3FaAeOu6Xb/view?usp=sharing">
          <span style={{ fontSize: "24px", textDecoration: "underline" }}>
           form
          </span>
          .
         </a>
        </p>
       </div>
      </div>
     )}
     {view == "esu" && (
      <div className="layoutrow digital" id="electric">
       <div className="row imgcolstyle backgroundimage">
        <img src={electric} className="img-fluid" loading="lazy" />
       </div>
       <div className="row rowmarl3">
        <h1>Estate Service Unit (ESU)</h1>
       </div>
       <div className="row rowmarl3">
        <p>
         <br />
         Complaint Form:
         <br />
         <br />
         Click here to download{" "}
         <a href="http://web.nitp.ac.in/uploads22/ESU_Complain%20Format.pdf">
          ESU Maintenance Complaint form
         </a>
         , kindly fill the form and submit.
        </p>
       </div>
      </div>
     )}
    </PageLayout>
   </div>
  </TabPage>
 )
}

export default Facilitiespage
