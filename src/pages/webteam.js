import Layout from "../components/layout"
import SEO from "../components/seo"
import { useEffect, useState } from "react"
import axios from "axios"
import { PageLayout } from "../components/styles/pagelayout"
import Webcard from "../components/global/webcard"
import { Link } from "gatsby"

const years = [2021, 2022]

const Webteam = () => {
  const [webteam, setWebteam] = useState()
  const [filteredteam, setFilteredteam] = useState()
  const [view, setView] = useState("developers")
  const [year, setYear] = useState(2022)
  let webteamUrl = `${process.env.GATSBY_API_URL}/api/webteam`

  useEffect(() => {
    axios
      .get(webteamUrl)
      .then(res => {
        const web = res.data
        setWebteam(web)
        let filtered = web.filter(member => {
          return member.year == 2021
        })
        setFilteredteam(filtered)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  useEffect(() => {
    if (webteam) {
      let filtered = webteam.filter(member => {
        return member.year == year
      })
      setFilteredteam(filtered)
    }
  }, [year])

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
              </div>
              <div className="row  rowmarl3" style={{ width: `100%` }}>
                <div className="probutton">
                  <button
                    onClick={() => {
                      setView("developers")
                      setYear("2021")
                    }}
                    className={view == "developers" ? "btnactive" : ""}
                  >
                    Developers
                  </button>
                  <button
                    onClick={() => {
                      setView("maintainers")
                      setYear("2022")
                    }}
                    className={view == "maintainers" ? "btnactive" : ""}
                  >
                    Maintainers
                  </button>
                </div>
              </div>
              {view == "maintainers" && (
                <div className="row rowmarl3">
                  <div className="probutton" style={{ margin: "10px 0px" }}>
                    {years.map(item => (
                      <button
                        onClick={() => {
                          setYear(item)
                        }}
                        className={year == item ? "btnactive" : ""}
                      >
                        {item}-{`${(item+1).toString().slice(2,4)}`}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <>
                <div className="row layoutrow">
                  <div className="row rowmarl3">
                    <h2
                      data-aos="zoom-in-right"
                      style={{ width: `50%`, marginTop: `0` }}
                    >
                      Student Volunteers
                    </h2>

                    {view == "developers" && (
                      <Link
                        to="/volunteers"
                        style={{ textDecorationLine: `none`, color: `tomato` }}
                      >
                        <h3
                          style={{
                            padding: `0.25rem 0`,
                            borderBottom: `2px red dotted`,
                            width: `fit-content`,
                            margin: `0`,
                          }}
                        >
                          Previous Student Volunteers
                        </h3>
                      </Link>
                    )}
                  </div>
                  {filteredteam &&
                    filteredteam
                      .filter(member => member.role == "volunteer")
                      .map(member => (
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
                      ))}
                </div>
                <div className="row rowmarl3">
                  <h2 data-aos="zoom-in-right">Faculties/Officers Involved</h2>
                </div>
                <div className="col-6">
                  <div classNam="row">
                    <h2 data-aos="zoom-in-right">PI Website</h2>
                  </div>
                  <div className="row">
                    {filteredteam &&
                      filteredteam
                        .filter(member => member.role == "pi")
                        .map(member => (
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
                        ))}
                  </div>
                </div>
                {view == "developers" && (
                  <div className="col-6">
                    <div classNam="row">
                      <h2 data-aos="zoom-in-right">PI IT Services</h2>
                    </div>
                    <div className="row">
                      {filteredteam &&
                        filteredteam
                          .filter(member => member.role == "pi-it")
                          .map(member => {
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
                )}

                {view == "developers" && (
                  <div className="row layoutrow">
                    <div className="row rowmarl3">
                      <h2 data-aos="zoom-in-right">Scientific Officer</h2>
                    </div>
                    {filteredteam &&
                      filteredteam
                        .filter(member => member.role == "scientificofficer")
                        .map(member => {
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
                )}
              </>
            </div>
          </div>
        </PageLayout>
      </Layout>
    </>
  )
}
export default Webteam
