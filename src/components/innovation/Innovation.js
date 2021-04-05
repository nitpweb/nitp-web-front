import React,{useState} from 'react';
import "./css/main.css";
import Union1 from "./img/Union1.svg";
import Union from "./img/Union.svg";
import Group444 from "./img/Group444.svg";
import Group445 from "./img/Group445.svg";
import Arrow from "./img/Arrow.svg"
import InCard from './InCard';

const Innovation = () => {

    const data = [
        {
            link1: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/sales-and-tech-header.jpg",
            link2: "https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png",
            heading: "Giving Robots Human-Like Perception of Their Physical Environments",
            date: "Dec 15, 2020 | Technology"
        },
        {
            link1: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/sales-and-tech-header.jpg",
            link2: "https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png",
            heading: "Giving Robots Human-Like Perception of Their Physical Environments",
            date: "Dec 15, 2020 | Technology"
        },
        {
            link1: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/sales-and-tech-header.jpg",
            link2: "https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png",
            heading: "Giving Robots Human-Like Perception of Their Physical Environments",
            date: "Dec 15, 2020 | Technology"
        },
        {
            link1: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/sales-and-tech-header.jpg",
            link2: "https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png",
            heading: "Giving Robots Human-Like Perception of Their Physical Environments",
            date: "Dec 15, 2020 | Technology"
        },
        {
            link1: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/sales-and-tech-header.jpg",
            link2: "https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png",
            heading: "Giving Robots Human-Like Perception of Their Physical Environments",
            date: "Dec 15, 2020 | Technology"
        },
        {
            link1: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/sales-and-tech-header.jpg",
            link2: "https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png",
            heading: "Giving Robots Human-Like Perception of Their Physical Environments",
            date: "Dec 15, 2020 | Technology"
        },
        {
            link1: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/sales-and-tech-header.jpg",
            link2: "https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png",
            heading: "Giving Robots Human-Like Perception of Their Physical Environments",
            date: "Dec 15, 2020 | Technology"
        },
        {
            link1: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/sales-and-tech-header.jpg",
            link2: "https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png",
            heading: "Giving Robots Human-Like Perception of Their Physical Environments",
            date: "Dec 15, 2020 | Technology"
        },
        {
            link1: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/sales-and-tech-header.jpg",
            link2: "https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png",
            heading: "Giving Robots Human-Like Perception of Their Physical Environments",
            date: "Dec 15, 2020 | Technology"
        },
        {
            link1: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/sales-and-tech-header.jpg",
            link2: "https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png",
            heading: "Giving Robots Human-Like Perception of Their Physical Environments",
            date: "Dec 15, 2020 | Technology"
        },
        {
            link1: "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/sales-and-tech-header.jpg",
            link2: "https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png",
            heading: "Giving Robots Human-Like Perception of Their Physical Environments",
            date: "Dec 15, 2020 | Technology"
        }
    ]
    data.reverse();
    const[x,setX]=useState(0)
    function Card(val,index) {
        return(
            <InCard
            link1={val.link1}
            link2={val.link2}
            heading={val.heading}
            date={val.date}
            key={index}
            trans={x}/>
        )
    }
    
    function scroll() {
        if(x+900<=(data.length)*300){
            setX(x+300);
            
        }
        else{
            setX(0)
            console.log(data.length);
        }
    }

    return (
        <>
            <div className="innovation">
                <p id="head">Innovation</p>
                <img src={Union1} id="one" />
                <img src={Union} id="two" />
                <img src={Group445} id="three" />
                <img src={Group444} id="four" />
                <div className="child">
                {data.map(Card)}
                    <div className="child1" onClick={scroll}>
                        <img id="arrow" src={Arrow} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Innovation;