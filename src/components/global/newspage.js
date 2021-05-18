import React from "react"
import "./css/newspage.scss"
import newspic from "./img/news.jpg"
import axios from "axios"

class Newspage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [],
    }
  }
  componentDidMount() {
    let noticesUrl = `${process.env.GATSBY_API_URL}/api/news/all`
    axios
      .get(noticesUrl)
      .then(res => {
        const news = res.data
        this.setState({ news: news })
      })
      .catch(e => {
        console.log(e)
      })
  }
     link = (k) => {
    k = k.substr(0, k.length - 18);
    k = k.substr(32, k.length);
    return (k);
  }
  render() {
    return (
      <>
        <div className="newspage row">
          <div className="head row">
            <h1>News</h1>
          </div>
          {this.state.news.map(news => {
            const newtime = new Date().getTime()
            
            let d = Math.round((newtime - news.openDate) / 3600000)
            if (d > 24) {
              d = `${Math.round(d / 24)} days ago`
            } else if (d < 1) {
              d = `Just now`
            } else if (d < 2) {
              d = `${d} hour ago`
            } else {
              d = `${d} hours ago`
            }
            if (news.title != "" && news.image.length!=0) {
              return (
                <div className="newscard row">
                  <div className="news-img-wrap">
                    <img src={`https://drive.google.com/thumbnail?id=${this.link(news.image[0].url)}`} alt="Hello" loading="lazy"></img>
                  </div>
                  <div className="news-details">
                    <h1>{news.title}</h1>
                    <p>{news.description}</p>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </>
    )
  }
}

export default Newspage
