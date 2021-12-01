import Layout from "../components/layout"
import Webcard from "../components/global/webcard"
import SEO from "../components/seo"
import { PageLayout } from "../components/styles/pagelayout"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "gatsby"

const Webteam = () => {
  const [webteam, setWebteam] = useState()
  let webteamUrl = `${process.env.GATSBY_API_URL}/api/webteam`

  useEffect(() => {
    axios
      .get(webteamUrl)
      .then(res => {
        const web = res.data
        setWebteam(web)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <>
      <Layout>
        <SEO title="Web Team" />
        <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
          <div className="webteam-page">
            <div className="layoutrow layoutrowmain">
              <div className="col-6" style={{ width: `100%` }}>
                <div className="row rowmarl3">
                  <h1 data-aos="zoom-in-right">Web Team</h1>
                </div>
                <div className="row rowmarl3">
                  <h2 data-aos="zoom-in-right">
                    The Team behind the website of NIT Patna
                  </h2>
                </div>
              </div>{" "}
              <div className="row layoutrow">
                <div className="row rowmarl3">
                  <h2 data-aos="zoom-in-right" style={{width:`50%`,marginTop:`0`}}>Student Volunteers</h2>
                  <Link to="/volunteers" style={{ textDecorationLine: `none`, color: `tomato` }}><h3 style={{ padding: `0.25rem 0`, borderBottom: `2px red dotted`, width: `fit-content`,margin:`0` }}>Previous Student Volunteers</h3></Link>
                </div>
                {webteam &&
                  webteam.slice(4).map(member => {
                    return (
                      <Webcard
                        name={member.name}
                        email={member.email}
                        extn={member.ext_no}
                        id={member.email}
                        interests={member.interests}
                        image={member.image}
                        desg={member.desg}
                        url={member.url}
                      />
                    )
                  })}
              </div>
              <div className="row rowmarl3">
                <h2 data-aos="zoom-in-right">Faculties/Officers Involved</h2>
              </div>
              <div className="col-6">
                <div classNam="row">
                  <h2 data-aos="zoom-in-right">PI Website</h2>
                </div>
                <div className="row">
                  {webteam &&
                    webteam.slice(0, 1).map(member => {
                      return (
                        <Webcard
                          name={member.name}
                          email={member.email}
                          extn={member.ext_no}
                          id={member.email}
                          interests={member.interests}
                          image={member.image}
                          desg={member.desg}
                          url={member.url}
                        />
                      )
                    })}
                </div>
              </div>
              <div className="col-6">
                <div classNam="row">
                  <h2 data-aos="zoom-in-right">PI IT Services</h2>
                </div>
                <div className="row">
                  {webteam &&
                    webteam.slice(2, 3).map(member => {
                      return (
                        <Webcard
                          name={member.name}
                          email={member.email}
                          extn={member.ext_no}
                          id={member.email}
                          interests={member.interests}
                          image={member.image}
                          desg={member.desg}
                          url={member.url}
                        />
                      )
                    })}
                </div>
              </div>
              <div className="row layoutrow">
                <div className="row rowmarl3">
                  <h2 data-aos="zoom-in-right">Scientific Officer</h2>
                </div>
                {webteam &&
                  webteam.slice(3, 4).map(member => {
                    return (
                      <Webcard
                        name={member.name}
                        email={member.email}
                        extn={member.ext_no}
                        id={member.email}
                        interests={member.interests}
                        image={member.image}
                        desg={member.desg}
                        url={member.url}
                      />
                    )
                  })}
              </div>
            </div>
          </div>

        </PageLayout>
      </Layout>
    </>
  )
}
export default Webteam
