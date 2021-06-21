import React from "react"
import Navlist from "../global/navlist"

const Deansinfo = [
  {
    name: "Prof. Pradip Kumar Jain",
    designation: "Chairman, Board of Governors",
    type: "Chairman",
  },
  {
    name: "Prof. S.K. Verma",
    designation: "Deputy Director and Dean, Academic",
    type: "Dean",
  },
  {
    name: "Prof. Om Prakash",
    designation: "Dean, Faculty Welfare",
    type: "Dean",
  },
  {
    name: "Prof. Prakash Chandra",
    designation: "Dean, Student Welfare",
    type: "Dean",
  },
  {
    name: "Prof. Fulena Rajak",
    designation: "Dean, Planning and Development",
    type: "Dean",
  },
  {
    name: "Prof. Lal Bahadur Roy",
    designation: "Dean, Research and consultancy",
    type: "Dean",
  },
  {
    name: "Dr. Asit Narayan",
    designation: "Registrar, NIT Patna",
    type: "Registrar",
  },
]
const BOG = [
  {
    name: "Prof. Pradip Kumar Jain",
    designation: "Chairperson(Actg.) BOG, Ex-Officio Member, NIT Patna",
    type: "chairperson",
  },
  {
    name: "Dr. Asit Narayan",
    designation: "Registrar, NIT Patna",
    type: "Secretary",
  },
  {
    name: "Joint Secretary(Technical) or his/her nominee",
    designation: "Department of Higher Education, MHRD",
    type: "Member",
  },
  {
    name: "JS and Financial Advisor or his/her nominee",
    designation: "Department of Higher Education, MHRD",
    type: "Member",
  },
  {
    name: "Sri Shailendra P. Sinha",
    designation:
      "Managing Director Kalyanpur Cement Ltd.,Maurya Center,1 , Frazer Road, PB No. 89, Patna-800001(Bihar)",
    type: "Member",
  },
  {
    name: "Sri Aditya Prakash Mishra",
    designation: "Former Member, Railway Engineering Board",
    type: "Member",
  },
  {
    name: "Dr. Chandrawati Jee",
    designation:
      "Former Head, P.G. Department of Biotechnology, A.N. College, Patna",
    type: "Member",
  },
  {
    name: "Dr. Narendra Kumar Singh",
    designation:
      "Associate Professor & Head,Department of Physics, S.N. Sinha College, Jehanabad",
    type: "Member",
  },
  {
    name: "Prof. S.K. Verma",
    designation: "Professor, Mechanical Engg. Dept., NIT Patna",
    type: "Member",
  },
  {
    name: "Director IIT Patna",
    designation: "or his nominee not below the rank of professor",
    type: "Member",
  },
]
const BWC = [
  {
    name: "Prof. Pradip Kumar Jain",
    designation: "Director, NIT Patna",
    type: "Ex-Officio Chairperson",
  },
  {
    name: "Director or Deputy Secretary",
    designation: "or his nominee Dealing with NITs in Ministry",
    type: "Ex-Officio Member",
  },
  {
    name: "Director or Deputy Secretary",
    designation: "or his nominee Dealing with Finance of NITs in Ministry",
    type: "Ex-Officio Member",
  },
  {
    name: "Dr. Rajesh Kumar",
    designation: "Professor Department of Civil Engineering IIT BHU",
    type: "Member",
  },
  {
    name: "Sri Ashok Kumar",
    designation:
      "Director (Operation) South Bihar Power Distribution Co. Ltd Patna",
    type: "Member",
  },
  {
    name: "Sri Pawan Kumar",
    designation: `Executive Engineer
Construction Divison-1
BCD, Govt. of Bihar`,
    type: "Member",
  },
  {
    name: `Prof. Fulena Rajak`,
    designation: `Dean (Planning & Development), NIT Patna`,
    type: `Member`,
  },
  {
    name: `Dr. Asit Narayan`,
    designation: `Registrar, NIT Patna`,
    type: `Secretary`,
  },
]

const IDC = [
  {
    name: "Prof. Prakash Chandra",
    designation: "Dean(Student Welfare)",
    type: "Chairman",
  },
  {
    name: "Prof. Vivekanand Singh",
    designation: "Director's Nominee",
    type: "Member",
  },
  {
    name: "Dr. Samrat Mukherjee",
    designation: "Chairman Hostel Management Committee",
    type: "Member",
  },
  {
    name: "",
    designation:
      "Warden of the Hostel of Residence of which the student concerned is a boarder",
    type: "Member",
  },
  {
    name: "Dr. T. Roshni",
    designation: "One faculty nominated by the Senate",
    type: "Member",
  },
  {
    name: "",
    designation: "Students Representative nominated by Dean (Student Welfare)",
    type: "Member",
  },
  {
    name: "Dr. Asit Narayan",
    designation: "Registrar, NIT Patna",
    type: "Member Secretary",
  },
]
const FC = [
  {
    name: "Prof. Pradip Kumar Jain",
    designation: "Director, NIT Patna",
    type: "Chairperson",
  },
  {
    name: "Joint Secretary(Technical) or his/her nominee",
    designation: "Department of Higher Education,MHRD",
    type: "Member",
  },
  {
    name: "JS and FInancial Advisor",
    designation: "Department of Higher Education, MHRD",
    type: "Member",
  },
  {
    name: "Director IIT Patna",
    designation: "or his nominee not below the rank of professor",
    type: "Member",
  },
  {
    name: "Dr. Asit Narayan",
    designation: "Registrar, NIT Patna",
    type: "Secretary",
  },
]

const director = [
  {
    director: "something",
  },
]

const Senate = {
  title: (
    <>
      <h1>Senate</h1>
    </>
  ),
  content: (
    <>
      <table className="table-act" border="1">
        <tr>
          <th>Name</th>
          <th>Designation</th>
        </tr>
        <tr>
          <td>
            <b>
              Prof. P. K. Jain
              <br /> Director, NIT Patna
            </b>
          </td>
          <td>
            <b>Ex-Officio Chairman</b>
          </td>
        </tr>
        <tr>
          <td>
            Dr. Manoj Kumar
            <br />
            Professor, Architecture Dept.
          </td>
          <td>Member</td>
        </tr>
        <tr>
          <td>
            Dr. Fulena Rajak
            <br />
            Professor, Architecture Dept.
          </td>
          <td> Member</td>
        </tr>

        <tr>
          <td>
            Dr. Sita Ram Sharma
            <br />
            Professor, Chemistry Dept.
          </td>
          <td> Member</td>
        </tr>
        <tr>
          <td>
            Dr. L. B. Roy
            <br />
            Professor, Civil Engineering Dept.
          </td>
          <td> Member</td>
        </tr>
        <tr>
          <td>
            Dr. Sanjeev Sinha
            <br />
            Professor, Civil Engineering Dept.
          </td>
          <td> Member</td>
        </tr>
        <tr>
          <td>
            Dr. Ajay Kumar Sinha
            <br />
            Professor, Civil Engineering Dept.
          </td>
          <td> Member</td>
        </tr>
        <tr>
          <td>
            Dr. S. S. Mishra
            <br />
            Professor, Civil Engineering Dept.
          </td>
          <td> Member</td>
        </tr>
        <tr>
          <td>
            Dr. Vivekanand Singh
            <br />
            Professor, Civil Engineering Dept.
          </td>
          <td> Member</td>
        </tr>

        <tr>
          <td>
            Dr. Ramesh Kumar
            <br />
            Professor, Electrical Engineering Dept.
          </td>
          <td> Member</td>
        </tr>
        <tr>
          <td>
            Dr. Sawal Kishore Singh
            <br />
            Mathematics Dept.
          </td>
          <td> Member</td>
        </tr>
        <tr>
          <td>
            Dr. S. K. Verma
            <br />
            Professor, Mechanical Engineering Dept.
          </td>
          <td> Member</td>
        </tr>
        <tr>
          <td>
            Dr. Om Prakash
            <br />
            Professor, Mechanical Engineering Dept.
          </td>
          <td>Member</td>
        </tr>
        <tr>
          <td>
            Dr. N. R. Lall
            <br />
            Professor, Physics Dept.
          </td>
          <td> Member</td>
        </tr>
        <tr>
          <td>
            Dr. Ramakar Jha
            <br />
            Professor, Civil Engineering Dept.
          </td>
          <td> Member</td>
        </tr>
        <tr>
          <td>
            Dr. Prakash Chandra
            <br />
            Professor, Mechanical Engineering Dept.
          </td>
          <td> Member</td>
        </tr>
        <tr>
          <td>
            Dr. A. N. Sinha
            <br />
            Professor, Mechanical Engineering Dept.
          </td>
          <td> Member</td>
        </tr>
        <tr>
          <td>
            Prof. K. P. Singh
            <br />
            Former Director, IIT BHU
          </td>
          <td>External Member</td>
        </tr>
        <tr>
          <td>
            Prof. S. K. Singh
            <br />
            Vice-Chancellor, LNMU, Darbhanga
          </td>
          <td>External Member</td>
        </tr>
        <tr>
          <td>
            Prof. Pushplata Tripathi, Pro-Vice Chancellor,
            <br />
            Guru-Govind Singh Indraprastha University,
            <br />
            New Delhi.
          </td>
          <td>External Member</td>
        </tr>
        <tr>
          <td>
            Dr. Asit Narayan
            <br />
            Registrar, NIT Patna
          </td>
          <td>Ex-Officio Member Secretary </td>
        </tr>
      </table>
      <br />
      <div style="float:right">
        <a style="text-decoration: none;color:#224E90" href="./senatemins.php">
          Click here
        </a>{" "}
        to view minutes of Senate meetings
      </div>
      &nbsp; &nbsp; &nbsp;
      <a href="./downloads/Senate compositon.pdf">Click here</a> download Senate
      Composition.
    </>
  ),
}

const Admin = [
  {
    url: "/administration",
    title: "Director",
    data: "director",
    content: [],
  },
  // {
  //   url: "/administration",
  //   title: "Deputy Director",
  //   data: "deputydirector",
  // },
  {
    url: "/administration",
    title: "Deans",
    data: "deans",
    content: Deansinfo,
  },
  {
    url: "/administration",
    title: "Registrar",
    data: "registrar",
    content: [],
  },
  {
    url: "/administration",
    title: "Board of Governors",
    data: "bog",
    content: BOG,
  },
  {
    url: "/administration",
    title: "Senate",
    data: "senate",
    content: Senate,
  },
  {
    url: "/administration",
    title: "Building & Works committee",
    data: "bwc",
    content: BWC,
  },
  {
    url: "/administration",
    title: "Institute Disciplinary committee",
    data: "idc",
    content: IDC,
  },
  {
    url: "/administration",
    title: "Finance committee",
    data: "fc",
    content: FC,
  },
  {
    url: "/administration",
    title: "Service Unit Heads",
    data: "suh",
    content: [],
  },
]


export default Admin
