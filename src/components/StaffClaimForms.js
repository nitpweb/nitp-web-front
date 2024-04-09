import React from "react"
import { PageLayout } from "./styles/pagelayout"
const home = "http://web.nitp.ac.in"
import { TabPage } from "./styles/tabpage"

const SCF = {
 title: <h1>Staff Claim Form</h1>,
 content: [
  {
   Downloads: "Advance Form",
   DLink: `${home}/staffForm/Advance form.pdf`,
   "Office order": "Medical Notice",
   OLink: `${home}/staffForm/Medical notice.pdf`,
  },
  {
   Downloads: "CEA Form",
   DLink: `${home}/staffForm/CEA form.pdf`,
   "Office order": "Office Order",
   OLink: `${home}/staffForm/office order.pdf`,
  },
  {
   Downloads: "CL Application",
   DLink: `${home}/staffForm/1.%20Casual%20Leave%20(CL),%20Restricted%20Leave%20(RH).pdf`,
   "Office order": "Bills/PDA form",
   OLink: `${home}/staffForm/Circular5c370f6512525.pdf`,
  },
  {
   Downloads: "Restricted Leave  (RH)",
   DLink: `${home}/staffForm/1.%20Casual%20Leave%20(CL),%20Restricted%20Leave%20(RH).pdf`,
   "Office order": "",
  },
  {
   Downloads: "El Form",
   DLink: `${home}/staffForm/2.%20Earned%20Leave%20(EL).pdf`,
   //   "Office order": "New Bill Format",
   //   OLink: `${home}/staffForm/Bill_format.pdf`,
  },
  {
   Downloads: "Child Care Leave (CCL) ",
   DLink: `${home}/staffForm/3.%20Child%20Care%20Leave.pdf`,
   "Office order": "Bill Format",
   // OLink: `${home}/staffForm/Bill%20format%20dt%2019%20Apr%202023.pdf`,
   OLink: `${home}/staffForm/bill%20format%20new%20bilingual.docx.pdf`,
  },
  {
   Downloads: "Commuted Leave",
   DLink: `${home}/staffForm/4.%20Commuted,%20HPL,%20Maternity,%20Paternity%20Leave.pdf`,
   "Office order": "",
  },
  {
   Downloads: "Half Pay Leave (HPL) ",
   DLink: `${home}/staffForm/4.%20Commuted,%20HPL,%20Maternity,%20Paternity%20Leave.pdf`,
   "Office order": "Guest House Requisition Form",
   OLink: `https://drive.google.com/file/d/1CLiYVUjw7VnOgFq4W-M6Ext7Ccu8XRz2/view`,
  },
  {
   Downloads: "Maternity Leave",
   DLink: `${home}/staffForm/4.%20Commuted,%20HPL,%20Maternity,%20Paternity%20Leave.pdf`,
   "Office order": "",
  },
  {
   Downloads: "Paternity Leave",
   DLink: `${home}/staffForm/4.%20Commuted,%20HPL,%20Maternity,%20Paternity%20Leave.pdf`,
   "Office order": "",
  },
  {
   Downloads: "Leave Encashment (LTC)",
   DLink: `${home}/staffForm/6.%20Leave%20Encashment%20(LTC).pdf`,
   "Office order": "",
  },
  {
   Downloads: "LTC Application Form",
   DLink: `${home}/staffForm/5.%20Application%20for%20LTC%20(Home%20town,%20All%20India).pdf`,
   "Office order": "LTC Claim Form",
   OLink: `${home}/staffForm/ltcclaim_updated.pdf`,
  },
  {
   Downloads: "Medical Claim Form",
   DLink: `${home}/staffForm/claim.pdf`,
   "Office order": "List of Hospitals",
   OLink: `${home}/staffForm/list_of_hospitals.pdf`,
  },
  {
   Downloads: "Medical Certificate (A)",
   DLink: `${home}/staffForm/Medical Certificate (A).pdf`,
   "Office order": "",
  },
  {
   Downloads: "Medical Certificate (B)",
   DLink: `${home}/staffForm/Medical Certificate (B).pdf`,
   "Office order": "",
  },
  {
   Downloads: "Medical Emergency Certificate",
   DLink: `${home}/staffForm/Emergency CERTIFICATE.pdf`,
   "Office order": "",
  },
  {
   Downloads: "Medical Nursing Certificate",
   DLink: `${home}/staffForm/Nursing CERTIFICATE.pdf`,
   "Office order": "",
  },
  {
   Downloads: "NPS Registration Form",
   DLink: `${home}/staffForm/Subscriber_Registration_Form_CSRF.pdf`,
   "Office order": "",
  },
  {
   Downloads: "T.A. For Expert",
   DLink: `${home}/staffForm/T.A. for expert.pdf`,
   "Office order": "",
  },
  {
   Downloads: "Travel Bill For Tour",
   DLink: `${home}/staffForm/travallbillfortour_updated.pdf`,
   "Office order": "",
  },
  {
   Downloads: "Vehicle Permission Form",
   DLink: `${home}/staffForm/Vehicle_Permission.pdf`,
   "Office order": "",
  },
  {
   Downloads: "Security Gate Pass",
   DLink: `${home}/staffForm/Security_gate_Pass.pdf`,
   "Office order": "",
  },
 ],
}

const StaffClaimForms = () => {
 return (
  <>
   <TabPage>
    <div className="mainDiv">
     <div className="layoutrow layoutrowmain digital">
      <div className="row rowmarl3">{SCF.title}</div>

      <div className="row rowmarl3 rowmarr3">
       <table>
        <tr>
         <th>
          <h3 style={{ margin: `0` }}>Downloads</h3>
         </th>
         <th>
          <h3 style={{ margin: `0` }}>Office order</h3>
         </th>
        </tr>
        {SCF.content?.map(row => {
         return (
          <tr>
           {row.Downloads ? (
            <td>
             <a
              href={row.DLink || ""}
              style={{
               textDecoration: `none`,
               fontWeight: `bold`,
              }}
             >
              {row.Downloads}
             </a>
            </td>
           ) : (
            <td></td>
           )}

           {row["Office order"] ? (
            <td>
             <a
              href={row.OLink || ""}
              style={{
               textDecoration: `none`,
               fontWeight: `bold`,
              }}
             >
              {row["Office order"]}
             </a>
            </td>
           ) : (
            <td></td>
           )}
          </tr>
         )
        })}
       </table>
      </div>
     </div>
    </div>
   </TabPage>
  </>
 )
}

export default StaffClaimForms
