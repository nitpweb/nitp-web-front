import React from "react"
import { PageLayout } from "./styles/pagelayout"
const home = "http://www.nitp.ac.in"
import { TabPage } from "./styles/tabpage"

const SCF = {
  title: <h1>Staff Claim Form</h1>,
  content: [
    {
      Downloads: "Advance Form",
      DLink: `${home}/php/downloads/Advance form.pdf`,
      "Office order": "Medical Notice",
      OLink: `${home}/php/downloads/Medical notice.pdf`,
    },
    {
      Downloads: "CEA Form",
      DLink: `${home}/php/downloads/CEA form.pdf`,
      "Office order": "Office Order",
      OLink: `${home}/php/downloads/office order.pdf`,
    },
    {
      Downloads: "CL Application",
      DLink: `${home}/php/downloads/CL application.pdf`,
      "Office order": "Bills/PDA form",
      OLink: `${home}/uploads/Circular5c370f6512525.pdf`,
    },
    {
      Downloads: "El Form",
      DLink: `${home}/php/downloads/elform .pdf`,
      "Office order": "New Bill Format",
      OLink: `${home}/uploads/Bill_format.pdf`,
    },
    {
      Downloads: "LTC Application Form",
      DLink: `${home}/php/downloads/LTC Application Form.pdf`,
      "Office order": "LTC Claim Form",
      OLink: `${home}/php/downloads/ltcclaim.pdf`,
    },
    {
      Downloads: "Medical Claim Form",
      DLink: `${home}/php/downloads/claim.pdf`,
      "Office order": "",
    },
    {
      Downloads: "Medical Certificate (A)",
      DLink: `${home}/php/downloads/Medical Certificate (A).pdf`,
      "Office order": "",
    },
    {
      Downloads: "Medical Certificate (B)",
      DLink: `${home}/php/downloads/Medical Certificate (B).pdf`,
      "Office order": "",
    },
    {
      Downloads: "Medical Emergency Certificate",
      DLink: `${home}/php/downloads/Emergency CERTIFICATE.pdf`,
      "Office order": "",
    },
    {
      Downloads: "Medical Nursing CERTIFICATE",
      DLink: `${home}/php/downloads/Nursing CERTIFICATE.pdf`,
      "Office order": "",
    },
    {
      Downloads: "NPS Registration Form",
      DLink: `${home}/uploads/Subscriber_Registration_Form_CSRF.pdf`,
      "Office order": "",
    },
    {
      Downloads: "T.A. For Expert",
      DLink: `${home}/php/downloads/T.A. for expert.pdf`,
      "Office order": "",
    },
    {
      Downloads: "Travall Bill For Tour",
      DLink: `${home}/php/downloads/travallbillfortour.pdf`,
      "Office order": "",
    },
    {
      Downloads: "Vehicle Permission Form",
      DLink: `${home}/uploads/Vehicle_Permission.pdf`,
      "Office order": "",
    },
    {
      Downloads: "Security Gate Pass",
      DLink: `${home}/uploads/Security_gate_Pass.pdf`,
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
