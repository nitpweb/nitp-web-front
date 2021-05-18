import React, { useState } from "react"
import "./css/slide.css"

const StudentSlide = () => {
  const text =
    "Formed as a college’s development club in NIT Patna, it was established on 2018, with only 10 members. The main reason of taking such a step, i.e. to form the HackSlash Club, was because of the lack of awareness and opportunities for the students to achieve their maximum potential and also to bring their attention to the current need in the field of development and open sourcing contribution. It started out as a weekly meet up in the cafeteria to fully functioning weekend classes and afternoon informative sessions. Currently It is holding over 15 core members and 112 interested members of all years and degree programs in the institute itself. We are currently striving of increasing our reach to all other interested students in other technical institutes in Patna."
  const data = [
    {
      url:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    },
    {
      url:
        "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=830&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
  ]
  let count = 1
  const Slide=(k)=>{
  if(k<1){
    count=7
  }
  if(k>7){
    count=1
  }
  const select=document.getElementById(`s${count}`);
  select.checked=true;
  }
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   loadData();
  // }, [])

  // const loadData = () => {
  //   const url = `${process.env.GATSBY_API_URL}/api/innovation/all`
  //   axios
  //     .get(url)
  //     .then(res => setData([...res.data]))
  //     .catch(e => {
  //       console.log(e)
  //     })

  // }

  return (
    <>
      <div className="main" data-aos="fade">
        <div className="move" onClick={()=>{Slide(--count)}}>
          <i class="arrow left"></i>
        </div>
        <div id="slider">
          <input type="radio" name="slider" id="s1" checked />
          <input type="radio" name="slider" id="s2" />
          <input type="radio" name="slider" id="s3" />
          <input type="radio" name="slider" id="s4" />
          <input type="radio" name="slider" id="s5" />
          <input type="radio" name="slider" id="s6" />
          <input type="radio" name="slider" id="s7" />

          <label for="s1" id="slide1">
            <img className="pic" src={data[0].url} alt=""></img>
          </label>
          <label for="s2" id="slide2">
            <img className="pic" src={data[1].url} alt=""></img>
          </label>
          <label for="s3" id="slide3">
            <img className="pic" src={data[2].url} alt=""></img>
          </label>
          <label for="s4" id="slide4">
            <img className="pic" src={data[3].url} alt=""></img>
          </label>
          <label for="s5" id="slide5">
            <img className="pic" src={data[4].url} alt=""></img>
          </label>
          <label for="s5" id="slide6">
            <img className="pic" src={data[5].url} alt=""></img>
          </label>
          <label for="s5" id="slide7">
            <img className="pic" src={data[6].url} alt=""></img>
          </label>
        </div>
        <div className="move" onClick={()=>{Slide(++count)}}>
          <i class="arrow right"></i>
        </div>
      </div>
      <div className="info col-12">
      <p data-aos="zoom-in-left">{text}</p>
      </div>
    </>
  )
}

export default StudentSlide
