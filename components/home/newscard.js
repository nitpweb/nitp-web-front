import React from 'react';

const Newscard=(inf)=>{
    return (
        <div className="newscard-box">
            <img src="/home/img/image 2.png" alt="Hello" className="card-img"></img>
            <div className="news-read">2 days ago..</div>
            <div className="newscard-head"><h4>{inf.head}</h4>
             <h6>{inf.detail}</h6>
                <div className="newscard-readmore">Read more..</div>
            </div>

        </div>
    )
}
export default Newscard;