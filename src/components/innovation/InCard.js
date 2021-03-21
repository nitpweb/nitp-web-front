import React from 'react';

const Incard = (props) => {

    return (
        <>
            <div className="card">
                <div className="part1">
                    <img src={props.link1} alt="img" />
                </div>
                <div className="part2">
                    <div className="text"><p id="heading">{props.heading}</p>
                        <p>{props.date}</p>
                    </div>
                    <div className="pic">
                        <img src={props.link2} alt="img" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Incard;