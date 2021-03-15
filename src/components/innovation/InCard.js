import React from 'react';
import Ellipse from "./img/Ellipse.png"
import Rectangle from "./img/Rectangle.png"

const Incard = () => {

    return (
        <>
            <div className="card">
                <div className="part1">
                    <img src={Rectangle} alt="img" />
                </div>
                <div className="part2">
                    <div className="text"><p id="heading">Giving Robots Human-Like Perception of Their Physical Environments</p>
                        <p>Dec 15, 2020 | Technology</p>
                    </div>
                    <div className="pic">
                        <img src={Ellipse} alt="img" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Incard;