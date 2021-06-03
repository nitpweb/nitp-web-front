import "../components/global/css/faculty.css"
import web from "../components/global/img/web.svg"
import Layout from "../components/layout"
import weblist from "../../static/weblist"
import Webcard from "../components/global/webcard"
import SEO from "../components/seo"

const Webteam = () => {
  return (
    <>
      <Layout>
        <SEO title="Web Team" />
        <div style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
          <div className="dmainrow dmainrowmain">
            <div className="col-6">
              <div className="row rowmarl3">
                <h1 data-aos="zoom-in-right">Web Team</h1>
              </div>
              <div className="row rowmarl3">
                <h1 data-aos="zoom-in-right">
                  The Team behind the website of NIT Patna
                </h1>
              </div>
            </div>
            <div className="col-6 imgcolstyle">
              <img
                data-aos="zoom-in"
                src={web}
                className="img-fluid"
                style={{ maxHeight: `50vh` }}
                loading="lazy"
              />
            </div>
          </div>
          <div className="row facultyrow">
            {weblist && (
              <Webcard
                name={weblist[0].name}
                email={weblist[0].email}
                extn={weblist[0].ext_no}
                id={weblist[0].email}
                interests={weblist[0].interests}
                image={weblist[0].image}
                desg={weblist[0].desg}
                url={weblist[0].url}
              />
            )}
          </div>
          <div className="row facultyrow">
            {weblist &&
              weblist.slice(1,).map(member => {
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
      </Layout>
    </>
  )
}
export default Webteam
