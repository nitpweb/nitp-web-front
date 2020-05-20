import React from 'react';
import newspic from '../../assets/img/image 2.png';

const Newscard=(inf)=>{
    return (
        <div className="newscard-box">
            <img src={newspic} alt="Hello" className="card-img"></img>
            <div className="news-read">2 days ago..</div>
            <div className="newscard-head"><h4>{inf.head}</h4>
             <h6>{inf.detail}</h6>
                <div className="newscard-readmore">Read more..</div>
            </div>

        </div>
    )
}
export default Newscard;