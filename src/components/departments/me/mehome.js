import React from 'react';
import styled, { css } from 'styled-components';
import main from '../img/main.png';
import pc from '../img/pc.svg';
import mountain from '../img/mountain.svg';
import map from '../img/map.svg';
import lens from '../img/lens.svg';
import '../css/home.css';

const Imgstyle = css`display: flexbox; justify-content: center; flex-direction: column; align-items: center`;

const Mehomepage = () => {
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
                    <h3>Bihar College of Engineering (BCE) was established in 1924 and it is the sixth oldest Engineering College in India. The Department of Mechanical Engineering was established in 1952 and the M.Tech Program was started in 1978. BCE was converted to National Institute of Technology Patna in 2004 Initially B.Tech. Program in Mechanical Engineering started with intake of 20, which has now become 125. Presently, the department is also having PhD programmes with total of more than 100 students. </h3>
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
                    <h3>To provide a high-quality educational experience for undergraduate and graduate students that enables them to become leaders in their chosen professions and to make them globally competitive mechanical engineers.
                        <br/>To create, explore, and develop innovations in engineering and science through undergraduate and graduate research. To develop linkages with world class R&D organizations and educational institutions in India and abroad for excellence in teaching, research and consultancy practices. 
                        </h3>
                </div>
            </div>
        </div>
        <div className="smainrow" css={css`@media(max-width:768px){flex-direction:column;}`}>
            <div css={css`align-items:center;`} className="col-6">
                <div className="row">
                    <h1>Vision</h1></div>
                <div className="row" css={css`margin-right:3vw;`}>
                    <h3>
                        To contribute to the society through excellence in scientific and technical education and research
                        <br/><br/>To contribute the country by providing globally competent Mechanical Engineers capable of working in an inter-disciplinary environment which foster spirits of innovation, entrepreneurship and leadership.
                        <br/><br/>To support industry for growth, being the valuable resource for them, and remain a role model for others in the field of Mechanical Engineering.
    </h3>
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
                        Department of Mechanical Engg.,
                        <br/><br/>National Institute Of Technology Patna,
                        <br/>Ashok Rajpath, Patna - 800005.
                        <br/>Email: head.me@nitp.ac.in
                        <br/><br/>Extn: +91-612-(2371715/2715/2371929/
                        <br/>2370419/2370843/2371930) * 441 
                    </h3>
                </div>
            </div>

        </div>
    </div>)

}

export default Mehomepage