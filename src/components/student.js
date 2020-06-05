import React from 'react';
import styled,{css} from 'styled-components';
import bag from "./student/img/bag.svg";
import sac from './student/img/sac.png';
import coronapic from './student/img/coronapic.png';
import exchange from './student/img/exchange.svg';
import './student/css/student.css';
import first from './student/img/firstyear.svg';
import antiragging from './student/img/antiragging.svg';

const Studentpage = () =>{
    return (<>
        <div className="mainrow" css={css`background-color:#F7F7F7`}>
        <div css={css`display:flex;justify-content:center;min-height:60vh;display:flex;flex-direction:column;justify-content:center`} className="col-6">
            <img src={bag} css={css`max-width:100%;height:auto`}/>
        </div>
        <div css={css`align-items:center;min-height:60vh;display:flex;flex-direction:column;justify-content:center`} className="col-6">
        <div className="row">
          <h1 css={css`font-weight:bold;color: #161616;font-size:3rem`}>Students</h1></div>   
                  <div className="row">
                <h2 css={css`color:#656565;`}>“You have to dream before your dreams can come true.”</h2></div>  
                <div className="row">
                <h2 css={css`color:#606060;font-weight:bold`}>- APJ Abdul Kalam</h2></div>  
        </div>
        </div>
        <div className="mainrow" css={css`@media(max-width:768px){flex-direction:column}`}>
            <div css={css`align-items:center;min-height:60vh;`} className="col-6">
                <div className="row" css={css`@media(min-width:768px){margin:5vh;}`}>
                    <h1 css={css`font-weight:bold;color: #161616;font-size:3rem`}>Student Activity Center</h1></div>
                <div className="row" css={css`@media(min-width:768px){margin:5vh;}`}>
                    <h3 css={css`color:#656565;`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</h3>
                    </div>
                    </div>
            <div css={css`display:flex;justify-content:center;min-height:60vh`} className="col-6">
                <img src={sac} css={css`max-width:100%;height:auto`} />
            </div>
        </div>
        <div className="mainrow" css={css`background-color:#F7F7F7`}>
           
            <div css={css`justify-content:center;min-height:60vh`} className="col-6">
                <img src={coronapic} css={css`width:80%;height:auto;margin-left:10%`} />
            </div>
            <div css={css`align-items:center;min-height:60vh;`} className="col-6">
                <div className="row">
                    <h1 css={css`font-weight:bold;color: #161616;font-size:3rem`}>Annual Tech-Fest of NIT Patna</h1></div>
                <div className="row" css={css`margin-right:3vw;`}>
                    <h3 css={css`color:#656565;`}>The annual technical fest of NIT Patna has become one of the biggest technical fest of the country. The last edition attracted participants from over 150 institutes from across the country, thus making it the largest technical fest of Bihar and Jharkhand. Aimed at providing a platform for showcasing the best and the latest innovations in the world of technology, various events such as robotics, circuit designing, programming, presentations etc. gives the students to showcase their talent and their practical skills to use.</h3>
                </div>
            </div>
        </div>
        <div className="mainrow">
            <div css={css`justify-content:center;min-height:60vh`} className="col-6">
                <img src={exchange} css={css`height:90%;margin-left:10%`} />
            </div>
            <div css={css`align-items:center;min-height:60vh;`} className="col-6">
                <div className="row">
                    <h1 css={css`font-weight:bold;color: #161616;font-size:3rem`}>Student Exchange Program</h1></div>
                <div className="row" css={css`margin-right:3vw;`}>
                    <h3 css={css`color:#656565;`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</h3>
                </div>
            </div>
        </div>
        <div className="mainrow" css={css`justify-content:center;background-color: #F7F7F7;padding-bottom:5vh;height:25vh`}>
            <img src={antiragging} css={css`margin-right:5%;height:98%;max-width:40%`}/>
            <img src={first} css={css`margin-left:5%;height:98%;max-width:40%`}/>
        </div>
    </>)

}

export default Studentpage