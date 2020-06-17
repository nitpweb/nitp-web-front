import React from 'react';
import first from "./about/img/first.svg";
import second from './about/img/second.svg';
import third from './about/img/third.svg';
import fourth from './about/img/fourth.svg';
import './about/css/about.css';

const aboutusinfo1 ="National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. NIT Patna marked its humble beginning in 1886 with the establishment of pleaders survey training school which was subsequently promoted of Bihar College of Engineering Patna in 1924. This made this institute the 6th Oldest Engineering Institute of India. The graduate level curriculum was later elevated to the post graduate level in 1978. The institute is situated on the south bank of holy river Ganges behind Gandhi Ghat, one of the most important and reverential place of Patna. The Gandhi Ghat is associated with the immersion of ashes of father of the Nation Mahatma Gandhi in the river Ganges. The campus has a picturesque river view with historic building presenting a spectacle of architectural delight and natural beauty.";
const aboutusinfo2 ="National Institute of Technology Patna has been declared as an Institute of National Importance and has been granted a fully Autonomous Status by MHRD, Government of India. The Institute has also been declared as a Centre of Excellence of impart high level education training , research and development in science, engineering technology and humanities. It is imparting high quality education & values at UG (B.Tech), PG (M.Tech) & Ph .D programmes through its experienced faculty well versed in their respective field of engineering an technology with well equipped laboratories . At present the Institute has seven disciplines viz. Architecture, Civil Engineering, Compute Science & Engg., Electrical Engg., Electronics & Communication Engg., Information Technology and Mechanical Engg., and well established departments of physics, Mathematics and Humanities and Social Science.";
const aboutusinfo3 ="National Institute of Technology Patna aims at setting out very high education standards and holds long record of academic excellence. The pedagogical aspects have been formulated to suit not only the needs of the contemporary industrial requirements but also to develop human potential to its fullest extent in a range of professions. Extra curricular activities are planed through games and sports, cultural programmes and NSS activities. Cultural activities provide a platform to know about the culture of various states and regions of the country and opportunity for national integration.";
const aboutusinfo4 ="Ever since its rechristening, NIT Patna has been on the fast track of development and has undergone numerous facelifts because of which placement records have witnessed unprecedented growth and is touching new heights as the graph of placement is increasing remarkably.";

const missioninfo1 = "To contribute to India and the World through excellence in scientific and technical education and research; to serve as a valuable resource for industry and society; and to remain a source of pride for all Indians.";
const missioninfo2 = "To generate new knowledge by engaging in cutting-edge research and to promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programmes";
const missioninfo3 = "To identify, based on an informed perception of Indian, regional and global needs, areas of specialization upon which the Institute can concentrate";
const missioninfo4 = "To undertake collaborative projects which offer opportunities for long term interaction with academia and industry";
const missioninfo5 = "To develop human potential to its fullest extent so that intellectually capable and imaginatively gifted leaders can emerge in a range of profession";

const valuesinfo1 = "Academic integrity and accountability.";
const valuesinfo2 = "Respect and tolerance for the views of every individual.";
const valuesinfo3 = "Attention to issues of national relevance as well as of global concern.";
const valuesinfo4 = "Breadth of understanding, including knowledge of the human sciences.";
const valuesinfo5 = "Appreciation of intellectual excellence and creativity.";
const valuesinfo6 = "An unfettered spirit of explorating, rationality and enterprise.";

const campusinfo = "NIT Patna is situated on the South bank of river Ganges behind Gandhi Ghat, one of the most important and sacred places of Patna . The Institute campus is 8 Km from the Patna junction railway station and 20 Km from the Jai Prakash Narayan International Airport, Patna . The entrance to the institute is from Ashok Rajpath and it is about 3Km from the famous Gandhi Maidan. The Institute is residential in nature and provides residential facilities to its students as well as teachers as per availability. Its large campus has a picturesque river view with eyecatching historic buildings presenting a spectacle of architectural and natural beauty.";

const Aboutpage = () => {
  return (
    <div className="studentsection">
      <div className="smainrow">
        <div className="col-6">
          <div className="row">
            <h1>About Us</h1>
          </div>
          <div className="row">
            <h3>{aboutusinfo1}</h3>
          </div>
          <div className="row">
            <h3>{aboutusinfo2}</h3>
          </div>
          <div className="row">
            <h3>{aboutusinfo3}</h3>
          </div>
          <div className="row">
            <h3>{aboutusinfo4}</h3>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img src={first} className="img-fluid" />
        </div>
      </div>
      <div className="smainrow smainrow1">
        <div className="col-6 imgcolstyle">
          <img src={second} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1>Mission & Vision</h1>
          </div>
          <div className="row rowmarr3">
            <h3>{missioninfo1}</h3>
          </div>
          <div className="row rowmarr3">
            <h3>{missioninfo2}</h3>
          </div>
          <div className="row rowmarr3">
            <h3>{missioninfo3}</h3>
          </div>
          <div className="row rowmarr3">
            <h3>{missioninfo4}</h3>
          </div>
          <div className="row rowmarr3">
            <h3>{missioninfo5}</h3>
          </div>
        </div>
      </div>
      <div className="smainrow">
        <div className="col-6">
          <div className="row">
            <h1>Values</h1>
          </div>
          <div className="row">
            <h3>{valuesinfo1}</h3>
          </div>
          <div className="row">
            <h3>{valuesinfo2}</h3>
          </div>
          <div className="row">
            <h3>{valuesinfo3}</h3>
          </div>
          <div className="row">
            <h3>{valuesinfo4}</h3>
          </div>
          <div className="row">
            <h3>{valuesinfo5}</h3>
          </div>
          <div className="row">
            <h3>{valuesinfo6}</h3>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img src={third} className="img-fluid" />
        </div>
      </div>
      <div className="smainrow smainrow1">
        <div className="col-6 imgcolstyle">
          <img src={fourth} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1>Campus</h1>
          </div>
          <div className="row rowmarr3">
            <h3>{campusinfo}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage
