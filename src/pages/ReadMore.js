import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ReadStyle } from "../components/styles/ReadStyle"
import news from "../components/global/img/news.jpg"
import downimg from "../components/home/img/download.svg"

const ReadMore = () => (
  <Layout>
    <SEO title="Read more" />
    <ReadStyle>
      <div className="wrapperDiv">
        <div className="imgDiv">
          <img className="img" src={news} alt="" />
        </div>
        <div className="info">
          <h2>Title title title title title title title title title title</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="base">
          <div className="author">
            <p>Autor : Akshay Deepak</p>
            <p>venue : NIT patna</p>
          </div>
          <div className="download">
            
            <a className="notdown" href={"#"} target="blank">
            <img id="notdownimg" src={downimg} alt="c"/><p>Hello</p>
              </a>
            
          </div>
        </div>
      </div>
    </ReadStyle>
  </Layout>
)

export default ReadMore
