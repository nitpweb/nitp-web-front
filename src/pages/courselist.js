import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useQueryParam } from "use-query-params"

import { TabPage } from "../components/styles/tabpage"
import acadData from "../components/academics/acadData"

const CourseList = () => {
  const [data, setData] = useState("ug")
  const [tab] = useQueryParam("tab")

  useEffect(() => {
      setData(tab)
  }, [tab])

  return (
    <Layout>
      <SEO title="course list" />
      <TabPage>
        <div className="mainDiv">
          <div className="row rowmarl3">
            {data == "ug"
              ? acadData.courseUG.map(item => (
                  <div className="digital">
                    <h1
                      style={{
                        fontFamily: `Source Sans Pro`,
                        color: `#941b0c`,
                      }}
                    >
                      {item.title}
                    </h1>
                    <br />
                    {item.data.map(e => (
                      <>
                        <a
                          href={e.link}
                          target="_blank"
                          style={{
                            textDecoration: `none`,
                            fontFamily: `Source Sans Pro`,
                          }}
                        >
                          <p
                            style={{
                              fontWeight: `bold`,
                              borderBottom: `1px dotted black`,
                              paddingBottom: `0.5rem`,
                              margin: `0`,
                            }}
                          >
                            {e.para}
                          </p>
                        </a>
                      </>
                    ))}
                  </div>
                ))
              : ""}
            {data == "pg"
              ? acadData.coursePG.map(item => (
                  <div className="digital">
                    <h1
                      style={{
                        fontFamily: `Source Sans Pro`,
                        color: `#941b0c`,
                      }}
                    >
                      {item.title}
                    </h1>
                    <br />
                    {item.data.map(e => (
                      <>
                        <a
                          href={e.link}
                          target="_blank"
                          style={{
                            textDecoration: `none`,
                            fontFamily: `Source Sans Pro`,
                          }}
                        >
                          <p
                            style={{
                              fontWeight: `bold`,
                              borderBottom: `1px dotted black`,
                              paddingBottom: `0.5rem`,
                              margin: `0`,
                            }}
                          >
                            {e.para}
                          </p>
                        </a>
                      </>
                    ))}
                  </div>
                ))
              : ""}
            {data == "phd"
              ? acadData.coursePHD.map(item => (
                  <div className="digital">
                    <h1
                      style={{
                        fontFamily: `Source Sans Pro`,
                        color: `#941b0c`,
                      }}
                    >
                      {item.title}
                    </h1>
                    <br />
                    {item.data.map(e => (
                      <>
                        <a
                          href={e.link}
                          target="_blank"
                          style={{
                            textDecoration: `none`,
                            fontFamily: `Source Sans Pro`,
                          }}
                        >
                          <p
                            style={{
                              fontWeight: `bold`,
                              borderBottom: `1px dotted black`,
                              paddingBottom: `0.5rem`,
                              margin: `0`,
                            }}
                          >
                            {e.para}
                          </p>
                        </a>
                      </>
                    ))}
                  </div>
                ))
              : ""}
            {data == "imsc"
              ? acadData.courseMsc.map(item => (
                  <div className="digital">
                    <h1
                      style={{
                        fontFamily: `Source Sans Pro`,
                        color: `#941b0c`,
                      }}
                    >
                      {item.title}
                    </h1>
                    <br />
                    {item.data.map(e => (
                      <>
                        <a
                          href={e.link}
                          target="_blank"
                          style={{
                            textDecoration: `none`,
                            fontFamily: `Source Sans Pro`,
                          }}
                        >
                          <p
                            style={{
                              fontWeight: `bold`,
                              borderBottom: `1px dotted black`,
                              paddingBottom: `0.5rem`,
                              margin: `0`,
                            }}
                          >
                            {e.para}
                          </p>
                        </a>
                      </>
                    ))}
                  </div>
                ))
              : ""}
          </div>
        </div>
      </TabPage>
    </Layout>
  )
}

export default CourseList
