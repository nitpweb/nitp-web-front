import React, { useState, useEffect } from "react"
// import adminpic from "./administration/img/main.svg"
import Adcard from "./administration/adcard"
// import Floatmenu from "./administration/floatmenu"
import Director from "./director"
import Registrar from "./registrar"
import { AdminStyle } from "./styles/AdminStyle"
import Navigate from "./global/Navigate"
import Admin from "./administration/const"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const Administrationpage = () => {
  const [tab] = useQueryParam("tab")
  const [view, setView] = useState("administration")
  const [content, setContent] = useState([])
  const CardData = ["deans", "bog", "bwc", "idc", "fc", "senate", "suh"]

  function getView(callback) {
    setView(callback)
  }
  useEffect(() => {
    Admin.forEach(x => {
      x.data === tab ? setView(tab) : "director"
    })
  }, [tab])

  useEffect(() => {
    let temp
    Admin.forEach(item => {
      if (item.data == view) {
        temp = item.content
        setContent(temp)
      }
    })
  }, [view])

  console.log(tab)
  return (
    <>
      <AdminStyle>
        <Navigate data={Admin} callback={getView} tab={tab} />

        <div className="mainDiv">
          {view == "director" && <Director id="director" />}
          {view == "registrar" && <Registrar id="registrar" />}

          {CardData.includes(view) &&
            content.length != 0 &&
            content.map((item, idx) => (
              <div className="col-4" key={idx}>
                <Adcard
                  name={item?.name}
                  designation={item?.designation}
                  type={item?.type}
                />
              </div>
            ))}

          {/* {view.length != 0 && view[0].name ? (
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
          )} */}
        </div>
      </AdminStyle>
    </>
  )
}
export default Administrationpage
