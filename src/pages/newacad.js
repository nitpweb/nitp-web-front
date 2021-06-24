import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useQueryParam } from "use-query-params"

import { TabPage } from "../components/styles/tabpage"
import acadData from "../components/academics/acadData"

const Newacad = () => {
  const [tab] = useQueryParam("tab")
  const [data, setData] = useState("digital")

  useEffect(() => {
    setData(tab)
  }, [tab])

  return (
    <Layout>
      <SEO title="Digital Initiatives" />
      <TabPage>
        {data == "digital" ? (
          <div className="mainDiv">
            <h1 style={{ fontFamily: `Source Sans Pro`, color: `#941b0c` }}>
              Digital Initiatives of NIT Patna
            </h1>
            {acadData.datad.map(item => (
              <div className="row rowmarl3">
                <div id="digital">
                  <h3>{item.title}</h3>

                  {item.links.map(e => (
                    <a href={e} style={{ textDecoration: `none` }}>
                      <p>{e}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {data == "curricula" ? (
          <div className="mainDiv">
            <h1 style={{ fontFamily: `Source Sans Pro`, color: `#941b0c` }}>
              Regulation & Curricula
            </h1>
            {acadData.dataUG.map(item => (
              <div className="row rowmarl3">
                <div id="digital">
                  <h3>{item.title}</h3>

                  {item.data.map(e => (
                    <a href={e.link} style={{ textDecoration: `none` }}>
                      <p
                        style={{
                          borderBottom: `1px dotted black`,
                          paddingBottom: `0.35rem`,
                          width: `fit-content`,
                        }}
                      >
                        {e.para}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
            {acadData.dataPG.map(item => (
              <div className="row rowmarl3">
                <div id="digital">
                  <h3>{item.title}</h3>

                  {item.data.map(e => (
                    <a href={e.link} style={{ textDecoration: `none` }}>
                      <p
                        style={{
                          borderBottom: `1px dotted black`,
                          paddingBottom: `0.35rem`,
                          width: `fit-content`,
                        }}
                      >
                        {e.para}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
            {acadData.dataPHD.map(item => (
              <div className="row rowmarl3">
                <div id="digital">
                  <h3>{item.title}</h3>

                  {item.data.map(e => (
                    <a href={e.link} style={{ textDecoration: `none` }}>
                      <p
                        style={{
                          borderBottom: `1px dotted black`,
                          paddingBottom: `0.35rem`,
                          width: `fit-content`,
                        }}
                      >
                        {e.para}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
            {acadData.dataNotice.map(item => (
              <div className="row rowmarl3">
                <div id="digital">
                  <h3>{item.title}</h3>

                  {item.data.map(e => (
                    <a href={e.link} style={{ textDecoration: `none` }}>
                      <p
                        style={{
                          borderBottom: `1px dotted black`,
                          paddingBottom: `0.35rem`,
                          width: `fit-content`,
                        }}
                      >
                        {e.para}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </TabPage>
    </Layout>
  )
}

export default Newacad
