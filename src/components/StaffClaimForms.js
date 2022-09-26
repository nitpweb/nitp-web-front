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
      DLink: `${home}/staffForm/CL application.pdf`,
      "Office order": "Bills/PDA form",
      OLink: `${home}/staffForm/Circular5c370f6512525.pdf`,
    },
    {
      Downloads: "El Form",
      DLink: `${home}/staffForm/elform .pdf`,
      "Office order": "New Bill Format",
      OLink: `${home}/staffForm/Bill_format.pdf`,
    },
    {
      Downloads: "LTC Application Form",
      DLink: `${home}/staffForm/LTC Application Form.pdf`,
      "Office order": "LTC Claim Form",
      OLink: `${home}/staffForm/ltcclaim.pdf`,
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
      Downloads: "Medical Nursing CERTIFICATE",
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
      Downloads: "Travall Bill For Tour",
      DLink: `${home}/staffForm/travallbillfortour.pdf`,
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
