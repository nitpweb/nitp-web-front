import React, { useState, useEffect } from "react"
// import adminpic from "./administration/img/main.svg"
import Adcard from "./administration/adcard"
// import Floatmenu from "./administration/floatmenu"
import Director from "./director"
import { AdminStyle } from "./styles/AdminStyle"
import Navigate from "./global/Navigate"
import AdministrationData from "./administration/const"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const Administrationpage = () => {
  const [tab, setNum] = useQueryParam("tab", StringParam)

  const [view, setView] = useState([])
  function getView(callback) {
    setView(callback)
  }

  useEffect(() => {
    AdministrationData.forEach(x => {
      x.info === tab ? setView(x.data) : ""
    })
  }, [tab])

  return (
    <>
      <AdminStyle>
        <Navigate data={AdministrationData} callback={getView} tab={tab} />

        <div className="mainDiv">
          {view.length != 0 && view[0].name ? (
            view.map(item => {
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
          ) : (
            <Director id="director" />
          )}
        </div>
      </AdminStyle>
     
    </>
  )
}
export default Administrationpage
