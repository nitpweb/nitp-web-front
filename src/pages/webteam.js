import Layout from "../components/layout"
import SEO from "../components/seo"
import { useEffect, useState } from "react"
import axios from "axios"
import { TabPage } from "../components/styles/tabpage"
import Developers from "../components/developers"
import Maintainers from "../components/maintainers"


const Webteam = () => {
  const [webteam, setWebteam] = useState()
  const [view, setView] = useState("developers")
  const [year, setYear] = useState("2022")
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
        <TabPage>
          <div className="mainDiv">
            <div className="row rowmarl3">
              <div className="digital">
                <div className="col-6" style={{ width: `100%` }}>
                  <div className="row">
                    <h1 data-aos="zoom-in-right">Web Team</h1>
                  </div>
                  <div className="row">
                    <h2 data-aos="zoom-in-right">
                      The Team behind the website of NIT Patna
                    </h2>
                  </div>
                </div>

                <div className="probutton">
                  <button
                    onClick={() => {
                      setView("developers")
                    }}
                    className={view == "developers" ? "btnactive" : ""}
                  >
                    Developers
                  </button>
                  <button
                    onClick={() => {
                      setView("maintainers")
                    }}
                    className={view == "maintainers" ? "btnactive" : ""}
                  >
                    Maintainers
                  </button>
                </div>
                {view == "developers" && (
                    // <div className="row layoutrow">
                    //   <div className="row">
                    //     <h2 data-aos="zoom-in-right" style={{width:`50%`,marginTop:`0`}}>Student Volunteers</h2>
                    //   </div>
                    //   <div style={{position:"relative", display:"flex", justifyContent: "space-around", flexWrap:"wrap"}}>
                    //       {webteam &&
                    //     webteam.slice(4).map(member => {
                    //       return (
                    //         <Webcard
                    //           name={member.name}
                    //           email={member.email}
                    //           extn={member.ext_no}
                    //           id={member.email}
                    //           interests={member.interests}
                    //           image={member.image}
                    //           desg={member.desg}
                    //           url={member.url}
                    //         />
                    //       )
                    //     })}
                    //   </div>

                    //   <div className="row">
                    //     <h2 style={{width:`50%`,marginTop:`0`}}>Faculties/Officers Involved</h2>
                    //   </div>
                    //   <div style={{position:"relative", display:"flex", justifyContent: "space-between", width:"max-content",flexWrap:"wrap"}}>
                    //     <div>
                    //       <div classNam="row">
                    //         <h2>PI Website</h2>
                    //       </div>
                    //       <div className="row">
                    //         {webteam &&
                    //           webteam.slice(0, 1).map(member => {
                    //             return (
                    //               <Webcard
                    //                 name={member.name}
                    //                 email={member.email}
                    //                 extn={member.ext_no}
                    //                 id={member.email}
                    //                 interests={member.interests}
                    //                 image={member.image}
                    //                 desg={member.desg}
                    //                 url={member.url}
                    //               />
                    //             )
                    //           })}
                    //       </div>
                    //     </div>
                        
                    //     <div>
                    //     <div classNam="row">
                    //       <h2>PI IT Services</h2>
                    //     </div>
                    //     <div className="row">
                    //       {webteam &&
                    //         webteam.slice(2, 3).map(member => {
                    //           return (
                    //             <Webcard
                    //               name={member.name}
                    //               email={member.email}
                    //               extn={member.ext_no}
                    //               id={member.email}
                    //               interests={member.interests}
                    //               image={member.image}
                    //               desg={member.desg}
                    //               url={member.url}
                    //             />
                    //           )
                    //         })}
                    //     </div>
                    //     </div>
                    //   </div>
                      
                    //   <div className="row">
                    //     <h2>Scientific Officer</h2>
                    //   </div>
                    //   <div style={{position:"relative", display:"flex", justifyContent: "space-around", flexWrap:"wrap"}}>
                    //   {webteam &&
                    //     webteam.slice(3, 4).map(member => {
                    //       return (
                    //         <Webcard
                    //           name={member.name}
                    //           email={member.email}
                    //           extn={member.ext_no}
                    //           id={member.email}
                    //           interests={member.interests}
                    //           image={member.image}
                    //           desg={member.desg}
                    //           url={member.url}
                    //         />
                    //       )
                    //     })}
                    //     </div>
                    // </div>
                    <Developers webteam={webteam}/>
                )}
                {view == "maintainers"
                  ? (
                    <Maintainers webteam={webteam}/>
                  )
                  : ""}
              </div>
            </div>
          </div>
        </TabPage>
        {/* <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
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

        </PageLayout> */}
      </Layout>
    </>
  )
}
export default Webteam
