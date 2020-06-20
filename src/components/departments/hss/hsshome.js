import React from "react"
import main from "../img/main.png"
import pc from "../img/pc.svg"
import mountain from "../img/mountain.svg"
import map from "../img/map.svg"
import lens from "../img/lens.svg"
import "../css/home.css"

const Hsshomepage = () => {
  return (
    <div className="depsection">
      <div className="dmainrow dmainrowmain">
        <div className="col-6">
          <div className="row">
            <h1>Humanities & Social Sciences</h1>
          </div>
          <div className="row">
            <h2>
              “The computer was born to solve problems that did not exist
              before.”
            </h2>
          </div>
          <div className="row">
            <h2 id="aut">— Bill Gates</h2>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img src={main} className="img-fluid" loading="lazy" />
        </div>
      </div>
      <div className="dmainrow">
        <div className="depabout">
          <div className="row">
            <h1>About</h1>
          </div>
          <div className="row">
            <h3>
              With an interdisciplinary perspective at the heart of its
              approach, the Department of Humanities and Social Sciences at NIT
              Patna provides intellectual and cultural foundations for the study
              of human relations with society interaction and teaching towards
              problem solving of the nation in contemporary contexts. The
              Department, with its diverse expertise offers students in the B.
              Tech programme courses aimed at developing essential skills in
              critical thinking and writing along with the knowledge of
              literature, society, economic value, and philosophies of the mind
              and body. The Department also offers Doctoral programmes in
              humanities and social sciences especially in English, Economics,
              Sociology and Human resource management besides elective courses
              for the undergraduate programmes of the institute.
            </h3>
          </div>
        </div>
      </div>
      <div className="dmainrow dmainrow1">
        <div className="col-6 imgcolstyle">
          <img src={mountain} className="img-fluid" loading="lazy" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1>Mission</h1>
          </div>
          <div className="row rowmarr3">
            <h3>
              To provide quality teaching, learning, and research in the field
              of Humanities and Social Sciences by
              creating,preserving,transmitting and utilizing knowledge
              especially to engineering students so that intellectually capable
              and imaginatively gifted leaders can emerge in the technical
              education and industry.
            </h3>
          </div>
        </div>
      </div>
      <div className="dmainrow">
        <div className="col-6">
          <div className="row">
            <h1>Vision</h1>
          </div>
          <div className="row rowmarr3">
            <h3>
              The Department aspires to be a national exemplar in undergraduate
              teaching and research in the humanities and social sciences. Upon
              completion of the program, the students will be prepared to
              compete, sustain and advance their communities and the world.
            </h3>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img src={lens} className="img-fluid" loading="lazy" />
        </div>
      </div>
      <div className="dmainrow dmainrow1">
        <div className="col-6 imgcolstyle">
          <img src={map} className="img-fluid" loading="lazy" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1>Contact</h1>
          </div>
          <div className="row rowmarr3">
            <h3>
              Department of Humanities & Social Sciences
              <br />
              <br />
              National Institute Of Technology Patna,
              <br />
              Ashok Rajpath, Patna - 800005.
              <br />
              <br />
              Email: head.hs@nitp.ac.in
              <br />
              <br />
              Contact no: +91-9934065068
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hsshomepage
