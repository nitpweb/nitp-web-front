import React from "react"
import styled, { css } from "styled-components"
import main from "../img/main.png"
import pc from "../img/pc.svg"
import mountain from "../img/mountain.svg"
import map from "../img/map.svg"
import lens from "../img/lens.svg"
import "../css/home.css"

const Imgstyle = css`
  display: flexbox;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Chemhomepage = () => {
  return (
    <div className="depsection">
      <div
        className="dmainrow"
        css={css`
          @media (max-width: 768px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
          className="col-6"
        >
          <div className="row">
            <h1
              css={css`
                font-weight: bold;
                color: #161616;
                font-size: 3rem;
              `}
            >
              Chemistry Department
            </h1>
          </div>
          <div className="row">
            <h2
              css={css`
                color: #656565;
              `}
            >
              “The computer was born to solve problems that did not exist
              before.”
            </h2>
          </div>
          <div className="row">
            <h2
              css={css`
                color: #606060;
                font-weight: bold;
              `}
            >
              — Bill Gates
            </h2>
          </div>
        </div>
        <div css={Imgstyle} className="col-6">
          <img
            src={main}
            css={css`
              max-width: 100%;
              height: auto;
            `}
          />
        </div>
      </div>
      <div
        className="dmainrow"
        css={css`
          @media (max-width: 768px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            align-items: center;
            margin-left: 8%;
            margin-right: 8%;
          `}
        >
          <div
            className="row"
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <h1>About</h1>
          </div>
          <div
            className="row"
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              color: #606060;
            `}
          >
            <h3>
              The Chemistry department was established in 1924, at the same time
              the institute was founded. Until recently the department has been
              an auxiliary department with limited capacity, running a modest
              Ph.D. program and offering B. Tech. chemistry course to UG
              students. In the past 3-4 years the department has seen a lot of
              expansion, and with increasing faculty strength the number of UG
              courses offered to B. Tech students has increased. Also, the
              department's own teaching program, 5 year Integrated M.Sc. in
              Chemistry, has been started in the current academic year
              (2015-16), and research activity is gradually being expanded. The
              department has been and will remain committed to quality teaching
              and research with a conscious effort to achieve excellence.
            </h3>
          </div>
        </div>
      </div>
      <div className="dmainrow">
        <div className="col-6" css={Imgstyle}>
          <img
            src={mountain}
            css={css`
              max-width: 100%;
              height: auto;
            `}
          />
        </div>
        <div
          css={css`
            align-items: center;
          `}
          className="col-6"
        >
          <div className="row">
            <h1>Mission</h1>
          </div>
          <div
            className="row"
            css={css`
              margin-right: 3vw;
            `}
          >
            <h3>
              To develop and promote innovations in Education at all levels, and
              generate fundamental and applied knowledge by engaging in
              scientific research by adopting suitable steps.
              <br />
              <br />
              To promote academic growth by offering state-of-the-art education
              in undergraduate, postgraduate and doctoral programmes.
              <br />
              <br />
              To pursue quality research output by developing necessary and
              adequate research facilities and undertaking collaborative /
              sponsored research projects.
              <br />
              <br />
              Maintaining and enhancing the diversity of students, staff,
              faculty and curricula.
            </h3>
          </div>
        </div>
      </div>
      <div
        className="dmainrow"
        css={css`
          @media (max-width: 768px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            align-items: center;
          `}
          className="col-6"
        >
          <div className="row">
            <h1>Vision</h1>
          </div>
          <div
            className="row"
            css={css`
              margin-right: 3vw;
            `}
          >
            <h3>
              {" "}
              To serve the country through this institution by pursuing
              excellence in scientific and technical education and research.
              <br />
              <br />
              To make this department a center of excellence for cutting edge
              fundamental and applied research.
            </h3>
          </div>
        </div>
        <div css={Imgstyle} className="col-6">
          <img
            src={lens}
            css={css`
              max-width: 100%;
              height: auto;
            `}
          />
        </div>
      </div>
      <div className="dmainrow">
        <div css={Imgstyle} className="col-6">
          <img
            src={map}
            css={css`
              max-width: 100%;
              height: auto;
            `}
          />
        </div>
        <div
          css={css`
            align-items: center;
          `}
          className="col-6"
        >
          <div className="row">
            <h1>Contact</h1>
          </div>
          <div
            className="row"
            css={css`
              margin-right: 3vw;
            `}
          >
            <h3>
              Department of Chemistry,
              <br />
              <br />
              National Institute Of Technology Patna, Ashok Rajpath, Patna -
              800005.
              <br />
              <br />
              Email: head.ch@nitp.ac.in
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chemhomepage
