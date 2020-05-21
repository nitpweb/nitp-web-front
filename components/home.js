import React from 'react';
import Newscard from './home/newscard';
import Importantlink from './home/importantlink';
const Home=()=>{
    return (
        <div>
            <div>
                <div className="bgimgwrap"><img className="nitpbackimg" src="/home/img/nitp.png" alt="NATIONAL INSTITUTE OF TECHNOLOGY PATNA" /></div>
            </div>
            <Importantlink/>
            <div className="news-head">
                News
                <p>view all</p>
            </div>
            <div className="news-row">
                <div className="news-viewbox">
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                </div>
            </div>
        </div>
    )
}

export default Home;