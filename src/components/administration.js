import React, { useState } from "react"
// import adminpic from "./administration/img/main.svg"
import Adcard from "./administration/adcard"
// import Floatmenu from "./administration/floatmenu"
import Director from "./director"
import { AdminStyle } from "./styles/AdminStyle"
import Navigate from "./global/Navigate"
import AdministrationData from "./administration/const"

const Administrationpage = () => {
  const [view, setView] = useState([])
  console.log(view)
  function getView(callback) {
    setView(callback)
  }
  console.log()
  return (
    <>
      <AdminStyle>
        <Navigate data={AdministrationData} callback={getView} />

        <div className="mainDiv">
          {view.length!=0 && view[0].name
            ? view.map(item => {
                return (
                  <div className="col-4">
                    <Adcard
                      name={item.name}
                      designation={item.designation}
                      type={item.type}
                    />
                  </div>
                )
              })
            : <Director id="director" />}
        </div>
      </AdminStyle>
      {/* <Director/> */}
    </>
    // <div className="adminsection">
    //   <Floatmenu />
    //   <div className="admainrow admainrowmain" id="home">
    //     <div className="col-6">
    //       <div className="row rowmarl3">
    //         <h1 data-aos="zoom-in-right">Administration</h1>
    //       </div>
    //       <div className="row rowmarl3">
    //         <h2 data-aos="zoom-in-right">
    //           “Education is not the learning of facts, but the training of minds
    //           to think”
    //         </h2>
    //       </div>
    //       <div className="row rowmarl3">
    //         <h2 data-aos="zoom-in-right" id="aut">
    //           - Albert Einstein
    //         </h2>
    //       </div>
    //     </div>
    //     <div className="col-6 imgcolstyle">
    //       <img
    //         data-aos="zoom-in"
    //         src={adminpic}
    //         className="img-fluid"
    //         loading="lazy"
    //       />
    //     </div>
    //   </div>
    //   <Director id="director" />
    //   <div className="admainrow addeanrow" id="dean">
    //     <div className="row rowmarl3">
    //       <h1 data-aos="zoom-in-right">Deans</h1>
    //     </div>
    //     {Deansinfo.map(item => (
    //       <div className="col-4">
    //         <Adcard
    //           name={item.name}
    //           designation={item.designation}
    //           type={item.type}
    //         />
    //       </div>
    //     ))}
    //   </div>
    //   <div className="admainrow addeanrow" id="bod">
    //     <div className="row rowmarl3">
    //       <h1 data-aos="zoom-in-right">Board of Directors</h1>
    //     </div>
    //     {BOD.map(item => (
    //       <div className="col-4">
    //         <Adcard
    //           name={item.name}
    //           designation={item.designation}
    //           type={item.type}
    //         />
    //       </div>
    //     ))}
    //   </div>
    //   <div className="admainrow addeanrow" id="bwc">
    //     <div className="row rowmarl3">
    //       <h1 data-aos="zoom-in-right">Building and Works Committee</h1>
    //     </div>
    //     {BWC.map(item => (
    //       <div className="col-4">
    //         <Adcard
    //           name={item.name}
    //           designation={item.designation}
    //           type={item.type}
    //         />
    //       </div>
    //     ))}
    //   </div>
    //   <div className="admainrow addeanrow" id="idc">
    //     <div className="row rowmarl3">
    //       <h1 data-aos="zoom-in-right">Institute Disciplinary Committee</h1>
    //     </div>
    //     {IDC.map(item => (
    //       <div className="col-4">
    //         <Adcard
    //           name={item.name}
    //           designation={item.designation}
    //           type={item.type}
    //         />
    //       </div>
    //     ))}
    //   </div>
    //   <div className="admainrow addeanrow" id="fc">
    //     <div className="row rowmarl3">
    //       <h1 data-aos="zoom-in-right">Finance Committee</h1>
    //     </div>
    //     {FC.map(item => (
    //       <div className="col-4">
    //         <Adcard
    //           name={item.name}
    //           designation={item.designation}
    //           type={item.type}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}
export default Administrationpage
