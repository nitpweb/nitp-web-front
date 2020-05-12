import React from 'react';
import Newscard from './home/newscard';

import './home/css/home.css';
import Importantlink from './home/importantlink';
import nitpimg from './home/img/nitp.svg';


const Home=()=>{
    return (
        <div>
            <div>
                <div className="bgimgwrap"><img className="nitpbackimg" src={nitpimg} alt="NATIONAL INSTITUTE OF TECHNOLOGY PATNA" /></div>
            </div>
            <Importantlink />            
            <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
        </div>
    )
}

export default Home;