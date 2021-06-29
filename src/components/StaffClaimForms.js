import React from "react"
import { PageLayout } from "./styles/pagelayout"
const home = "http://www.nitp.ac.in"

const SCF = {
  title: <h1>Staff Claim Form</h1>,
  content: (
    <>
      <table align="center" className="table-act" border="1">
        <tr>
          <th>Downloads</th>

          <th colspan="0">Office order</th>
        </tr>
        <tr id="alt_row">
          <td>
            <a href={`${home}/php/downloads/Advance form.pdf`}>Advance Form</a>
          </td>
          <td colspan="0">
            <a href={`${home}/php/downloads/Medical notice.pdf`}>
              Medical Notice
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href={`${home}/php/downloads/CEA form.pdf`}>CEA Form</a>
          </td>
          <td>
            <a href={`${home}/php/downloads/office order.pdf`}>Office Order</a>
          </td>
        </tr>
        <tr id="alt_row">
          <td>
            <a href={`${home}/php/downloads/CL application.pdf`}>
              CL Application
            </a>
          </td>
          <td colspan="0">
            <a href={`${home}/uploads/Circular5c370f6512525.pdf`}>
              Bills/PDA form
            </a>
          </td>
        </tr>

        <tr>
          <td>
            <a href={`${home}/php/downloads/elform .pdf`}>El Form </a>
          </td>
          <td colspan="0">
            <a href={`${home}/uploads/Bill_format.pdf`}>New Bill Format</a>
          </td>
        </tr>

        <tr id="alt_row">
          <td>
            <a href={`${home}/php/downloads/LTC Application Form.pdf`}>
              LTC Application Form
            </a>
          </td>
          <td>
            <a href={`${home}/php/downloads/ltcclaim.pdf`}>LTC Claim Form</a>
          </td>
        </tr>

        <tr>
          <td>
            <a href={`${home}/php/downloads/claim.pdf`}>Medical Claim Form</a>
          </td>
          <td></td>
        </tr>

        <tr id="alt_row">
          <td>
            <a href={`${home}/php/downloads/Medical Certificate (A).pdf`}>
              Medical Certificate (A)
            </a>
          </td>
          <td></td>
        </tr>

        <tr>
          <td>
            <a href={`${home}/php/downloads/Medical Certificate (B).pdf`}>
              Medical Certificate (B)
            </a>
          </td>
          <td></td>
        </tr>

        <tr id="alt_row">
          <td>
            <a href={`${home}/php/downloads/Emergency CERTIFICATE.pdf`}>
              Medical Emergency Certificate
            </a>
          </td>
          <td></td>
        </tr>

        <tr>
          <td>
            <a href={`${home}/php/downloads/Nursing CERTIFICATE.pdf`}>
              Medical Nursing CERTIFICATE
            </a>
          </td>
          <td></td>
        </tr>

        <tr>
          <td>
            <a href={`${home}/uploads/Subscriber_Registration_Form_CSRF.pdf`}>
              NPS Registration Form
            </a>
          </td>
          <td></td>
        </tr>

        <tr>
          <td>
            <a href={`${home}/php/downloads/T.A. for expert.pdf`}>
              T.A. For Expert
            </a>
          </td>
          <td></td>
        </tr>

        <tr>
          <td>
            <a href={`${home}/php/downloads/travallbillfortour.pdf`}>
              Travall Bill For Tour
            </a>
          </td>
          <td></td>
        </tr>

        <tr id="alt_row">
          <td>
            <a href={`${home}/uploads/Vehicle_Permission.pdf`}>
              Vehicle Permission Form
            </a>
          </td>
          <td></td>
        </tr>

        <tr>
          <td>
            <a href={`${home}/uploads/Security_gate_Pass.pdf`}>
              Security Gate Pass
            </a>
          </td>
          <td></td>
        </tr>
      </table>
    </>
  ),
}

const StaffClaimForms = () => {
  return (
    <>
      <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
        <div className="layoutrow layoutrowmain">
          <div className="row row-new rowmarl3 ">{SCF.title}</div>

          <div
            className="row row-new rowmarl3"
            style={{
              overflow: `auto`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {SCF.content}
          </div>
        </div>
      </PageLayout>
    </>
  )
}

export default StaffClaimForms
