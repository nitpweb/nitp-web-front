import React, { useState } from "react"
import Img from "./Img"
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
    {
      url:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
  ]
  let count = 0
  const [x, setX] = useState(0)
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
      <div>
        <div className="main col-12" data-aos="fade">
          <div
            className="move"
            onClick={() => {
                x < 0 ? setX(x + 250) : setX((data.length) * -250 + 750)
            }}
          >
            <i class="arrow left"></i>
          </div>
          <div className="part1">
            {data.map((item, index) => (
              <Img url={item.url} id={++count} key={index} trans={x} />
            ))}
          </div>
          <div
            className="move"
            onClick={() => {
                x > (data.length) * -250 + 750 ? setX(x - 250) : setX(0)
            }}
          >
            <i class="arrow right"></i>
          </div>
        </div>
        <div className="info col-12">
          <p data-aos="zoom-in-left">{text}</p>
        </div>
      </div>
    </>
  )
}

export default StudentSlide
