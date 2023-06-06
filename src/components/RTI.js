import React from "react"
import { PageLayout } from "./styles/pagelayout"
const home = "http://www.nitp.ac.in"

const rti_data = {
 title: <h1>Right To Information Act,2005</h1>,
 content: (
  <>
   <div>
    <h3>
     Information under RTI about National Institute of Technology (NIT) Patna{" "}
     <a href={`${home}/downloads/NITP_RTI.pdf`}> Click Here for Details</a>
    </h3>
   </div>
   <br />
   <div style={{ display: "block", width: `100%` }}>
    <h3>
     Details of the CPIO & FAA of NIT Patna
     <a href={`${home}/uploads/rti_faa.pdf`}> Click Here</a>
    </h3>
   </div>
   <br />
   <table className="table-act" border="1" style={{ textAlign: "justify" }}>
    <tbody>
     <tr>
      <th>1</th>
      <th colspan="2">About ACT</th>
     </tr>
     <tr>
      <td>1.1</td>
      <td>Name &amp; Title of the Act</td>
      <td>
       Right to Information Act. 2005 (RTI Act)
       <br />
       Office Orders
      </td>
     </tr>
     <tr>
      <td>1.2</td>
      <td>Definition</td>
      <td>
       Right to Information means the right to
       <ul>
        <li>inspection of work, documents, records</li>
        <li>
         taking notes, extracts or, certified copies of documents or records;
        </li>
        <li>taking certified samples of material;</li>
        <li>
         obtaining information in the form of diskettes, floppies, tapes, video
         cassettes or in any other electronic mode or through printouts where
         such information is stored in a computer or in any other device subject
         to relevant provisions in this regard
        </li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>1.3</td>
      <td>Objective/purpose of the Act</td>
      <td>
       To provide available information of the Institute as enshrined in RTI ACT
       to the Indian citizen on payment of prescribed fees.
      </td>
     </tr>
     <tr>
      <td>1.4</td>
      <td>Users</td>
      <td>Citizens of India.</td>
     </tr>
     <tr>
      <th>2</th>

      <th colspan="2">About Organisation</th>
     </tr>
     <tr>
      <td>2.1</td>
      <td>Name</td>
      <td>National Institute of Technology Patna</td>
     </tr>
     <tr>
      <td>2.2</td>
      <td>Functions and Duties</td>
      <td>As per Act and Statutes of the Institute</td>
     </tr>
     <tr>
      <td>2.3</td>
      <td>Powers and duties of its officers and employees</td>
      <td>As per Act and Statutes of the Institute</td>
     </tr>
     <tr>
      <td>2.4</td>
      <td>
       The procedure followed in the decision making process, including channels
       of supervision and accountability
      </td>
      <td>As per Act and Statutes of the Institute</td>
     </tr>
     <tr>
      <td>2.5</td>
      <td>The norms set by it for the discharge of its functions</td>
      <td>As per Act and Statutes of the Institute</td>
     </tr>
     <tr>
      <td>2.6</td>
      <td>
       The rules, regulations, instructions, manuals and records, held by it or
       under its control or used by its employees for discharging its functions
      </td>
      <td>As per Act and Statutes of the Institute</td>
     </tr>
     <tr>
      <td>2.7</td>
      <td>
       A statement of the categories of documents that are held by it or under
       its control
      </td>
      <td>
       Administrative Office Orders / Decisions and Guidelines as approved by
       Institutes' Governing Body i.e. Board of Governors (BOG)
      </td>
     </tr>
     <tr>
      <td>2.8</td>
      <td>
       The particulars of any arrangement that exists for consultation with, or
       representation by the member so of the public in relation to the
       formulation of its policy or implementation thereof
      </td>
      <td>
       Interested persons may write to the Public Information Officer of the
       Institute
      </td>
     </tr>
     <tr>
      <td>2.9</td>
      <td>
       A statement of the boards, councils, committees and other bodies
       consisting of two or more persons constituted as its part or for the
       purpose of its advice, and as to whether meetings of those boards,
       councils, committees and other bodies are open to the public, or the
       minutes of such meetings are accessible for public
      </td>
      <td>
       Following are the Main Committees / Governing body of the Institute
       <ul>
        <li> Board of Governors</li>

        <li>Finance Committee</li>

        <li>Building and Works Committee</li>

        <li>Senate</li>
       </ul>
       Meetings of these Committees/Board are not open to Public
       <br />
       Minutes of the meetings are not accessible to public
      </td>
     </tr>

     <tr>
      <th>3.0</th>
      <th>A directory of its officers and employees</th>
      <th>Institute Telephone Directory</th>
     </tr>
     <tr>
      <td>3.1</td>
      <td>
       The monthly remuneration received by each of its officers and employees,
       including the system of compensation as provided in its regulations
      </td>
      <td>Pay Structure of Institute Employees</td>
     </tr>
     <tr>
      <td>3.2</td>
      <td>
       The budget allocated to each of its agency, indicating the particulars of
       all plans, proposed expenditures and reports on disbursements made
      </td>
      <td>Non Plan and Plan Budget for Financial Year 2007-08</td>
     </tr>
     <tr>
      <td>3.3</td>
      <td>
       The manner of execution of subsidy programmes, including the amounts
       allocated and the details of beneficiaries of such programmes
      </td>
      <td>No Subsidy is given</td>
     </tr>
     <tr>
      <td>3.4</td>
      <td>
       Particulars of recipients of concessions, permits or authorizations
       granted by it
      </td>
      <td>None</td>
     </tr>
     <tr>
      <td>3.5</td>
      <td>
       Details in respect of the information available to or held by it reduced
       in an electronic form
      </td>
      <td>Please see Institute website</td>
     </tr>
     <tr>
      <td>3.6</td>
      <td>
       The particulars of facilities available to citizens for obtaining
       information, including the working hours of a library or reading room, if
       maintained for public use
      </td>
      <td>All the information is available on the institute website.</td>
     </tr>
     <tr>
      <td>3.7</td>
      <td>
       The names, designations and other particulars of the Public Information
       Officers
      </td>
      <td>
       <p>
        {" "}
        Appellate Authority Registrar National Institute of Technology Patna
        Patna-800 005.
       </p>
       <p>
        All matters relating to NIT Patna including its various Departments
        including Research &amp; Development matters, Centres, Interdisciplinary
        Programmes and Sections.
        <br />
        All matters relating to NIT Patna including its various Departments
        (except Dean Research &amp; Development),Centres,Interdisciplinary
        Programmes and Sections.
       </p>
      </td>
     </tr>
    </tbody>
   </table>
  </>
 ),
}

const RTI = () => {
 return (
  <>
   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <div className="layoutrow layoutrowmain">
     <div className="row row-new rowmarl3 ">{rti_data.title}</div>

     <div className="row row-new rowmarl3" style={{ overflow: `auto` }}>
      {rti_data.content}
     </div>
    </div>
   </PageLayout>
  </>
 )
}

export default RTI
