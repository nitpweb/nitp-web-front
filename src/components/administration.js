import React, { useState, useEffect } from "react"
// import adminpic from "./administration/img/main.svg"
import Adcard from "./administration/adcard"
// import Floatmenu from "./administration/floatmenu"
import Director from "./director"
import Registrar from "./registrar"
import DeputyDirector from "./deputyDirector"
import { AdminStyle } from "./styles/AdminStyle"
import Navigate from "./global/Navigate"
import Admin from "./administration/const"
import { useQueryParam } from "use-query-params"

const Administrationpage = () => {
 const [tab] = useQueryParam("tab")
 const [view, setView] = useState("director")
 const [content, setContent] = useState([])
 const CardData = ["deans", "bog", "bwc", "idc", "fc", "senate", "suh"]

 function getView(callback) {
  setView(callback)
 }
 useEffect(() => {
  Admin.forEach(x => {
   tab ? (x.data === tab ? setView(tab) : "") : setView("director")
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
    <Navigate data={Admin} callback={getView} tab={tab ? tab : "director"} />

    <div className="mainDiv">
     {view == "director" && <Director id="director" />}
     {view == "registrar" && <Registrar id="registrar" />}
     {/* {view == "deputydirector" && <DeputyDirector id="deputydirector" />} */}

     {CardData.includes(view) &&
      content?.length != 0 &&
      content?.map((item, idx) => (
       <div key={idx}>
        <Adcard
         name={item?.name}
         designation={item?.designation}
         type={item?.type}
        />
       </div>
      ))}
    </div>
   </AdminStyle>
  </>
 )
}
export default Administrationpage
