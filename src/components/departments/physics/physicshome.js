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

const Physicshomepage = () => {
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
              Physics Department
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
              The Department of Physics was established in 1924 and since then
              has been functioning as an important part of the institute. As of
              now, the Department has eight faculty members and four support
              staffs at different levels.
              <br />
              <br />
              At present, there are 12 students enrolled in Integrated M. Sc.
              And 8 students enrolled in the Ph. D. program.
              <br />
              <br />
              The Department is mentored by Prof. K.L.Chopra ,Ex-Director,IIT
              Kharagpur.
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
              To train the students to be lifelong learners who will contribute
              to the creation of new knowledge, new technology, and innovation
              through excellence in research in emerging areas and disciplines.
              <br />
              <br />
              To educate students to be future leaders in science, technology,
              industry, education and other professions and succeed in a
              globally competitive environment.
              <br />
              <br />
              To create National and International collaborations for research
              engagement in strategic areas of research
              <br />
              <br />
              To create National and International collaborations for research
              engagement in strategic areas of research
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
              The vision of the Department is to achieve excellence in
              undergraduate and postgraduate education and research through a
              synergic combination and thereby lead to development of new
              knowledge.
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
              Department of Physics,
              <br />
              <br />
              National Institute Of Technology Patna,
              <br />
              Ashok Rajpath, Patna - 800005.
              <br />
              <br />
              Email: head.ph@nitp.ac.in
              <br />
              <br />
              Extn: +91-612-(2371715/2715/2371929/
              <br />
              2370419/2370843/2371930) * 163
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Physicshomepage
