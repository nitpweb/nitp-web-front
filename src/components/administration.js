import React from "react"
import adminpic from "./administration/img/main.svg"
import Adcard from "./administration/adcard"
import "./administration/css/administration.css"
import { Deansinfo, BOD, BWC, IDC, FC } from "./administration/const"

const Administrationpage = () => {
  return (
    <div className="adminsection">
      <div className="admainrow admainrowmain">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1>Administration</h1>
          </div>
          <div className="row rowmarl3">
            <h2>
              “Education is not the learning of facts, but the training of minds
              to think”
            </h2>
          </div>
          <div className="row rowmarl3">
            <h2 id="aut">- Albert Einstein</h2>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img src={adminpic} className="img-fluid" loading="lazy" />
        </div>
      </div>
      <div className="admainrow addeanrow">
        <div className="row rowmarl3">
          <h1>Deans</h1>
        </div>
        {Deansinfo.map(item => (
          <div className="col-4">
            <Adcard
              name={item.name}
              designation={item.designation}
              type={item.type}
            />
          </div>
        ))}
      </div>
      <div className="admainrow addeanrow">
        <div className="row rowmarl3">
          <h1>Board of Directors</h1>
        </div>
        {BOD.map(item => (
          <div className="col-4">
            <Adcard
              name={item.name}
              designation={item.designation}
              type={item.type}
            />
          </div>
        ))}
      </div>
      <div className="admainrow addeanrow">
        <div className="row rowmarl3">
          <h1>Building and Works Committee</h1>
        </div>
        {BWC.map(item => (
          <div className="col-4">
            <Adcard
              name={item.name}
              designation={item.designation}
              type={item.type}
            />
          </div>
        ))}
      </div>
      <div className="admainrow addeanrow">
        <div className="row rowmarl3">
          <h1>Institute DIsciplinary Committeee</h1>
        </div>
        {IDC.map(item => (
          <div className="col-4">
            <Adcard
              name={item.name}
              designation={item.designation}
              type={item.type}
            />
          </div>
        ))}
      </div>
      <div className="admainrow addeanrow">
        <div className="row rowmarl3">
          <h1>Finance Committee</h1>
        </div>
        {FC.map(item => (
          <div className="col-4">
            <Adcard
              name={item.name}
              designation={item.designation}
              type={item.type}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Administrationpage
