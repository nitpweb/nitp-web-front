import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ReadStyle } from "../components/styles/ReadStyle"
import news from "../components/global/img/news.jpg"
import downimg from "../components/home/img/download.svg"
import { useQueryParam } from "use-query-params"
import axios from "axios"

const ReadMoreIn = () => {
  const [tab] = useQueryParam("tab")
  const [data, setData] = useState()
  useEffect(() => {
    loadData();
  }, [tab])
  const loadData = () => {
    const url = `${process.env.GATSBY_API_URL}/api/innovation/${tab}`
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
      <Layout>
        <SEO title="Read more" />
        {data?
        <ReadStyle>
          <div className="wrapperDiv">
            <div className="imgDiv">
              <img className="img" src={data.image.length!=0?`https://drive.google.com/thumbnail?id=${link(data.image[0].url)}`:news} alt="" />
            </div>
            <div className="info">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
            <div className="base">
              <div className="author">
                <p>Autor : {data.author}</p>
                <p>Date : {new Date(data.openDate).toLocaleDateString()}</p>
              </div>
              <div className="download">
                {data.attachments ? (
                  <a className="notdown" href={data.attachments} target="blank">
                    <img id="notdownimg" src={downimg} alt="c" />
                    <p>Download</p>
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </ReadStyle>:""}
      </Layout>
    </>
  )
}

export default ReadMoreIn
