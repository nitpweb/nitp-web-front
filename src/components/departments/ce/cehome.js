import React from 'react';
import styled, { css } from 'styled-components';
import main from '../img/main.png';
import pc from '../img/pc.svg';
import mountain from '../img/mountain.svg';
import map from '../img/map.svg';
import lens from '../img/lens.svg';
import '../css/home.css';

const Imgstyle = css`display: flexbox; justify-content: center; flex-direction: column; align-items: center`;

const Cehomepage = () => {
    return (<div className="depsection">
        <div className="dmainrow" css={css`@media(max-width:768px){flex-direction:column;}`}>
            <div css={css`align-items:center;display:flex;flex-direction:column;justify-content:center`} className="col-6">
                <div className="row">
                    <h1 css={css`font-weight:bold;color: #161616;font-size:3rem`}>Civil Engineering</h1></div>
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
                    <h3>The Department of Civil Engineering is the oldest and vibrant department of the institute, which was established along with the inception of the Institute in the year 1924. The Institute was formerly known as the Bihar College of Engineering Patna, a constituent engineering college under Patna University, until 27thJan 2004. It was rechristened to National Institute of Technology Patna on 28th Jan 2004 as an Autonomous Institute under MHRD, Govt. of India.
                    <br/><br/>The Department of Civil Engineering is committed to provide quality teaching and research opportunities toits undergraduate, postgraduate and doctoral students. Apart from UG programme, the department also offers M. Tech and Doctoralprogrammes in the areas of Structural Engineering, Transportation Engineering, Water Resource Engineering,Environmental Engineering and Geotechnical Engineering. The intake strength of the Civil Engineering Department is 92 for undergraduate (BTech)and 112forpostgraduate (MTech). Presently, 25 PhD scholars are enrolled with the department for pursuing their doctoral researchprogram.The teaching and education is directed towards their successful career in International and National Industries/ Institutions, Public and Private sectors,and enable them to qualify various competitive examinations such as IES, IAS, GATE examinations etc.
                    <br/><br/>The Department is actively involved in international and national research projects, and high valued consultancy works for the Government, Private Sector and Industries.The department also offers its expertise in various consultancy works and research projects fordifferent industries and organisations in the locale. The Department supports in upbringing of society and other educational institutes by providing training, workshops, technology transfer, capacity building, and awareness programs. 
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
                        To serve by producing excellent engineers, innovators, entrepreneurs and academicians for the growth of the industry and the society.
                        <br />To develop sense of competitiveness, self-confidence, sincerity, punctuality and ethical values among students.
                        <br />To undertake innovative collaborative projects with industries, government agencies and other organisations to cater the needs of society and solve real field problems.
                        <br />To develop research and teaching potential to the fullest extent.
                        <br />To remain a role model in the field of Civil Engineering.  
                        </h3>
                </div>
            </div>
        </div>
        <div className="dmainrow" css={css`@media(max-width:768px){flex-direction:column;}`}>
            <div css={css`align-items:center;`} className="col-6">
                <div className="row">
                    <h1>Vision</h1></div>
                <div className="row" css={css`margin-right:3vw;`}>
                    <h3>To serve the Nation and the world, through excellence education and advanced research in all the streams of Civil Engineering.</h3>
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
                        Department of Civil Engg.,
                        <br/><br/>National Institute Of Technology Patna,
                        <br/>Ashok Rajpath, Patna - 800005.
                        <br/><br/>Email: head.ce@nitp.ac.in
                        <br/><br/>Extn: +91-612-(2371715/2715/2371929/
                        <br/>2370419/2370843/2371930) * 126 
                    </h3>
                </div>
            </div>

        </div>
    </div>)

}

export default Cehomepage