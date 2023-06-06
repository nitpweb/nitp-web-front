import React, { useEffect, useState } from "react"
import { ReadStyle } from "./styles/ReadStyle"
import downimg from "./home/img/download.svg"
import axios from "axios"

const ReadInn = ({ id }) => {
 const [data, setData] = useState()
 useEffect(() => {
  loadData()
 }, [id])
 const loadData = () => {
  const url = `${process.env.GATSBY_API_URL}/api/innovation/${id}`
  axios
   .get(url)
   .then(res => setData(res.data[0]))
   .catch(e => {
    console.log(e)
   })
 }
 const link = k => {
  k = k.substr(0, k.length - 18)
  k = k.substr(32, k.length)
  return k
 }
 console.log(data)
 return (
  <>
   {data ? (
    <ReadStyle>
     <div className="wrapperDiv">
      <img
       className="img imgDiv"
       src={
        data.image.length != 0
         ? `https://drive.google.com/uc?export=view&id=${link(
            data.image[0].url
           )}`
         : news
       }
       alt=""
      />
      <div className="info">
       <h2>{data.title}</h2>
       <p>{data.description}</p>
      </div>
      <div className="base">
       <div className="author">
        {/* <p>Autor : {data.author}</p> */}
        <p>Date : {new Date(data.timestamp).toLocaleDateString()}</p>
       </div>
       <div className="download">
        {data.attachments &&
         data.attachments.map(item => (
          <a className="notdown" href={item.url} target="blank">
           <img id="notdownimg" src={downimg} alt="c" />
           <p>{item.caption ? item.caption : "Download"}</p>
          </a>
         ))}
       </div>
      </div>
     </div>
    </ReadStyle>
   ) : (
    ""
   )}
  </>
 )
}

export default ReadInn
