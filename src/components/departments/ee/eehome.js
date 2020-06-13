import React from 'react';
import styled, { css } from 'styled-components';
import main from '../img/main.png';
import pc from '../img/pc.svg';
import mountain from '../img/mountain.svg';
import map from '../img/map.svg';
import lens from '../img/lens.svg';
import '../css/home.css';

const Imgstyle = css`display: flexbox; justify-content: center; flex-direction: column; align-items: center`;

const Eehomepage = () => {
    return (<div className="studentsection">
        <div className="smainrow" css={css`@media(max-width:768px){flex-direction:column;}`}>
            <div css={css`align-items:center;display:flex;flex-direction:column;justify-content:center`} className="col-6">
                <div className="row">
                    <h1 css={css`font-weight:bold;color: #161616;font-size:3rem`}>Computer Science & Engineering</h1></div>
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
        <div className="smainrow" css={css`@media(max-width:768px){flex-direction:column;}`}>
            <div css={css`align-items:center;margin-left:8%;margin-right:8%;`}>
                <div className="row" css={css`display:flex;justify-content:center;align-items:center;`}>
                    <h1>About</h1></div>
                <div className="row" css={css`display:flex;justify-content:center;align-items:center;color: #606060;`}>
                    <h3>The Department of Electrical Engineering was established in 1945 under Patna University with an intake of 20 students leading to Bachelor of Science(Engineering) degree of four year duration.The four year course was later changed to five year integrated course in 1960 with intake of 30 students and it continued up to 1972. Again four year course was introduced in 1972 with the same intake capacity of 30 students. The intake was increased from 30 to 40 students in 2005-06 sessions and further in 2006-07 the intake capacity has been increased to 60 students.
                    <br/><br/>In the year 1978 AICTE approved Post Graduate (PG) course leading to M. Sc. (Engg) Degree in two specializations: (i) Power System Engineering and (ii) Control System Engineering with an intake capacity of 10 in each specialization.The intake in PG program was further increased to 18 students per specialization in 2004-05.The Microprocessor Laboratory and Power electronics laboratory were setup to meet the requirement of course curriculum and research activity.The advancement and application of electronics and microcomputer in the field of electrical engineering necessitated a major revision of the syllabus for the UG program in 1977. A course in Microprocessor was introduced along with many subjects in electronics leading to orientation required for the modem technology, such as Analog Electronics, Digital Electronics, Introduction to Communication and Digital Signal Processing.
                    <br/><br/>The Electrical Engineering department has well qualified faculty, majority of them are with Ph. D and M. Tech degree with specialization in the field of electrical power, control system and microcomputer based instrumentation & control. The department has well qualified panel of visiting faculty from academics and industry. They visit to the department at regular interval to deliver expert lectures and discuss recent trends in the field of Electrical Engg, Power system -generation, transmission and distribution, Thyristorised controlled electrical drives used in industry, microcomputer applications in instrumentation and control etc. In recent past, the faculty and students of the department have many publications in journals and conferences (Approx. Forty). Many books on different electrical engineering subjects have been authored by the faculties of the department. Till date the department has produces five Ph. Ds under Patna University. From 2009 Doctoral program started under NIT Act 2007 and students have been admitted and are continuing research. </h3>
                </div>
            </div>
        </div>
        <div className="smainrow" >
            <div className="col-6" css={Imgstyle} >
                <img src={mountain} css={css`max-width:100%;height:auto`} />
            </div>
            <div css={css`align-items:center;`} className="col-6">
                <div className="row">
                    <h1>Mission</h1></div>
                <div className="row" css={css`margin-right:3vw;`}>
                    <h3>To create and maintain a sustainable development in infrastructure, academic environment human resources and governance.</h3>
                </div>
            </div>
        </div>
        <div className="smainrow" css={css`@media(max-width:768px){flex-direction:column;}`}>
            <div css={css`align-items:center;`} className="col-6">
                <div className="row">
                    <h1>Vision</h1></div>
                <div className="row" css={css`margin-right:3vw;`}>
                    <h3>
                        <br/>To offer quality education for Under-Graduate, Post-Graduate and Doctoral programmes in  electrical engineering.
                        <br/>To provide educational experiences which are stimulating and in accordance with the needs of the century.
                        <br/>To promote technical manpower through educative exposures like short term courses, workshops, seminars, interactive communication, etc. and thus facilitating students for leadership in profession and society.
                        <br/>To inculcate state-of-the-art infrastructural facilities in the arena of research and development and to promote Industry interaction.
                        <br/>To bridge the gap between industry and academia by framing curricula and syllabi based on industrial and societal needs so that students are well equipped to meet the challenges in education, profession and life
                        <br/>To instill moral and ethical values among the faculty and students</h3>
                </div>
            </div>
            <div css={Imgstyle} className="col-6">
                <img src={lens} css={css`max-width:100%;height:auto`} />
            </div>
        </div>
        <div className="smainrow" >
            <div css={Imgstyle} className="col-6">
                <img src={map} css={css`max-width:100%;height:auto`} />
            </div>
            <div css={css`align-items:center;`} className="col-6">
                <div className="row">
                    <h1>Contact</h1></div>
                <div className="row" css={css`margin-right:3vw;`}>
                    <h3>
                        Department of Electronics & Communications Engg.,
                        <br/><br/>National Institute Of Technology Patna,
                        <br/>Ashok Rajpath, Patna - 800005.
                        <br/>Email: head.ec@nitp.ac.in
                        <br/><br/>Extn: +91-612-(2371715/2715/2371929/
                        <br/>2370419/2370843/2371930) * 177 
                    </h3>
                </div>
            </div>

        </div>
    </div>)

}

export default Eehomepage