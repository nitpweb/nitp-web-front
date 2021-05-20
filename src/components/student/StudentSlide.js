import React, { useState } from "react"
import "./css/slide.css"

const StudentSlide = () => {
  
  const data = [
    {
      url:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      Title: "HackSlash",
      description: "this is a dummy description",
      link:"#"
    },
    {
      url:
        "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      Title: "DSC",
      description: "this is a dummy description",
      link:"#"
    },
    {
      url:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      Title: "Robotics Club",
      description: "this is a dummy description",
      link:"#"
    },
    {
      url:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      Title: "IEEE",
      description: "this is a dummy description",
      link:"#"
    },
    {
      url:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=830&q=80",
      Title: "Art & Literary",
      description: "this is a dummy description",
      link:"#"
    },
    {
      url:
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      Title: "club 6",
      description: "this is a dummy description",
      link:"#"
    },
    {
      url:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      Title: "club 7",
      description: "this is a dummy description",
      link:"#"
    },
  ]
  let count = 1
  const Slide = k => {
    if (k < 1) {
      count = 7
    }
    if (k > 7) {
      count = 1
    }
    const select = document.getElementById(`s${count}`)
    select.checked = true
  }

  setInterval(() => {
    Slide(++count)
  }, 3000);
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
      
        <div className="club">
          <a href={data[0].link}>{data[0].Title}</a>
          <a href={data[1].link}>{data[1].Title}</a>
          <a href={data[2].link}>{data[2].Title}</a>
          <a href={data[3].link}>{data[3].Title}</a>
          <a href={data[4].link}>{data[4].Title}</a>
          <a href={data[5].link}>{data[5].Title}</a>
          <a href={data[6].link}>{data[6].Title}</a>
        </div>
        <div className="slide">
          <div
            className="move"
            onClick={() => {
              Slide(--count)
            }}
          >
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
          <div
            className="move"
            onClick={() => {
              Slide(++count)
            }}
          >
            <i class="arrow right"></i>
          </div>
        </div>
      <div className="info col-12">
        <p data-aos="zoom-in-left">{`${data[0].description}. ${data[1].description}. ${data[2].description}. ${data[3].description}. ${data[4].description}. ${data[5].description}. ${data[6].description}. `}</p>
      </div>
    </>
  )
}

export default StudentSlide
