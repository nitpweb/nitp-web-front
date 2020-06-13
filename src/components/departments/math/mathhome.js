import React from 'react';
import styled, { css } from 'styled-components';
import main from '../img/main.png';
import pc from '../img/pc.svg';
import mountain from '../img/mountain.svg';
import map from '../img/map.svg';
import lens from '../img/lens.svg';
import '../css/home.css';

const Imgstyle = css`display: flexbox; justify-content: center; flex-direction: column; align-items: center`;

const Mathhomepage = () => {
    return (<div className="depsection">
        <div className="dmainrow" css={css`@media(max-width:768px){flex-direction:column;}`}>
            <div css={css`align-items:center;display:flex;flex-direction:column;justify-content:center`} className="col-6">
                <div className="row">
                    <h1 css={css`font-weight:bold;color: #161616;font-size:3rem`}>Mathematics Department</h1></div>
                <div className="row">
                    <h2 css={css`color:#656565;`}>“The computer was born to solve problems
                    that did not exist before.”</h2></div>
                <div className="row">
                    <h2 css={css`color:#606060;font-weight:bold`}>— Bill Gates</h2></div>
            </div>
            <div css={Imgstyle} className="col-6">
                <img src={main} css={css`max-width:100%;height:auto`} />
            </div>
        </div>
        <div className="dmainrow" css={css`@media(max-width:768px){flex-direction:column;}`}>
            <div css={css`align-items:center;margin-left:8%;margin-right:8%;`}>
                <div className="row" css={css`display:flex;justify-content:center;align-items:center;`}>
                    <h1>About</h1></div>
                <div className="row" css={css`display:flex;justify-content:center;align-items:center;color: #606060;`}>
                    <h3>The Department of Mathematics was established in 1924 and department offer several courses that support other engineering departments.
                    <br/><br/>Recently a new program Integrated M. Sc. in Mathematics is started and running successfully from the academic year 2015-2016.
                    <br/><br/>Current faculty strength of the department is nine and they are experienced in teaching and research in several branches of Mathematics.
                    <br/><br/>Department of Mathematics is one of the backbone of the Institution as it is an essential department for engineering courses up to Ph.D level. 
</h3>
                </div>
            </div>
        </div>
        <div className="dmainrow" >
            <div className="col-6" css={Imgstyle} >
                <img src={mountain} css={css`max-width:100%;height:auto`} />
            </div>
            <div css={css`align-items:center;`} className="col-6">
                <div className="row">
                    <h1>Mission</h1></div>
                <div className="row" css={css`margin-right:3vw;`}>
                    <h3>
                        The Department of Mathematics will offer courses and programs of study that will ensure that the student learner will be able to contribute to today's society. The students will obtain abilities to critically assess numerical and graphical information; learn to formulate strategies for solving problems; and acknowledge the importance of being intellectually curious throughout their adult lives. The Department, through its faculty, will continue to contribute to the body of knowledge of the discipline, whether in traditional research, applied research, or research in the teaching of mathematics.
                        <br/><br/>The main mission of the Department of Mathematics is to offer high quality instruction in mathematics, statistics and the applied sciences to all students that it serves. The department strives to teach the main ideas and methods of mathematics and to build up the students reasoning and analytical skills. The department maintains programs and teaching practices that match those at most Undergraduate/Postgraduate programs at Institute. As the department offers core courses and in addition support other engineering degree programs, our mission is to make sure that these courses are taught at a high standard and meet the needs of those programs. For its majors, the department mission is to provide students with a number of degree programs and a wide spectrum of courses, and to offer them a rigorous training that enables them to pursue graduate degrees or work in jobs that require a high degree of mathematical skills.
                        </h3>
                </div>
            </div>
        </div>
        <div className="dmainrow" css={css`@media(max-width:768px){flex-direction:column;}`}>
            <div css={css`align-items:center;`} className="col-6">
                <div className="row">
                    <h1>Vision</h1></div>
                <div className="row" css={css`margin-right:3vw;`}>
                    <h3>The vision of the Department is to achieve excellence in undergraduate and postgraduate education and research through a synergic combination and thereby lead to development of new knowledge.</h3>
                </div>
            </div>
            <div css={Imgstyle} className="col-6">
                <img src={lens} css={css`max-width:100%;height:auto`} />
            </div>
        </div>
        <div className="dmainrow" >
            <div css={Imgstyle} className="col-6">
                <img src={map} css={css`max-width:100%;height:auto`} />
            </div>
            <div css={css`align-items:center;`} className="col-6">
                <div className="row">
                    <h1>Contact</h1></div>
                <div className="row" css={css`margin-right:3vw;`}>
                    <h3>
                        Department of Mathematics,
                        <br/><br/>National Institute Of Technology Patna,
                        <br/>Ashok Rajpath, Patna - 800005.
                        <br/><br/>Email: head.ma@nitp.ac.in
                        <br/><br/>Extn: +91-612-(2371715/2715/2371929/
                        <br/>2370419/2370843/2371930) * 117 
                    </h3>
                </div>
            </div>

        </div>
    </div>)

}

export default Mathhomepage