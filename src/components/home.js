import React from 'react';
import Newscard from './home/newscard';
import chanakya from './home/img/chanakya.svg';
import ieee from './home/img/ieee.svg';
import asme from './home/img/asme.svg';
import corona from './home/img/corona.svg';
import josaa from './home/img/josaa.svg';
import teqip from './home/img/teqip.svg';
import nss from './home/img/nss.svg';
import './home/css/home.css';



const Home=()=>{
    return (
        <body>
            <div className="link-row">
                <div className="link-col">
                    <img className="implink" src={chanakya} alt="chanakya"></img>
                    <img className="implink" src={asme} alt="asme"></img>
                    <img className="implink" src={corona} alt="corona"></img>
                    <img className="implink" src={ieee} alt="ieee"></img>
                </div>
                <div className="link-col">
                    <img className="implink" src={josaa} alt="josaa"></img>
                    <img className="implink" src={teqip} alt="teqip"></img>
                    <img className="implink" src={nss} alt="nss"></img>
                    <img className="implink" src={chanakya} alt="chanakya"></img>

                </div>
            </div>
            <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
        </body>
    )
}

export default Home;