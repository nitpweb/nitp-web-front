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

const Senate = [
  {
    name: "Prof. P. K. Jain               \n Director, NIT Patna",
    designation: "Ex-Officio Chairman",
  },
  {
    name:
      "Dr. Manoj Kumar             \n             Professor, Architecture Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. Fulena Rajak             \n             Professor, Architecture Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. Sita Ram Sharma             \n             Professor, Chemistry Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. L. B. Roy             \n             Professor, Civil Engineering Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. Sanjeev Sinha             \n             Professor, Civil Engineering Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. Ajay Kumar Sinha             \n             Professor, Civil Engineering Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. S. S. Mishra             \n             Professor, Civil Engineering Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. Vivekanand Singh             \n             Professor, Civil Engineering Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. Ramesh Kumar             \n             Professor, Electrical Engineering Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. Sawal Kishore Singh             \n             Mathematics Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. S. K. Verma             \n             Professor, Mechanical Engineering Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. Om Prakash             \n             Professor, Mechanical Engineering Dept.",
    designation: "Member",
  },
  {
    name: "Dr. N. R. Lall             \n             Professor, Physics Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. Ramakar Jha             \n             Professor, Civil Engineering Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. Prakash Chandra             \n             Professor, Mechanical Engineering Dept.",
    designation: "Member",
  },
  {
    name:
      "Dr. A. N. Sinha             \n             Professor, Mechanical Engineering Dept.",
    designation: "Member",
  },
  {
    name:
      "Prof. K. P. Singh             \n             Former Director, IIT BHU",
    designation: "External Member",
  },
  {
    name:
      "Prof. S. K. Singh             \n             Vice-Chancellor, LNMU, Darbhanga",
    designation: "External Member",
  },
  {
    name:
      "Prof. Pushplata Tripathi, Pro-Vice Chancellor,             \n             Guru-Govind Singh Indraprastha University,             \n             New Delhi.",
    designation: "External Member",
  },
  {
    name: "Dr. Asit Narayan             \n             Registrar, NIT Patna",
    designation: "Ex-Officio Member Secretary",
  },
]

const ServiceUnit = [
  {
    type: "Personal",
    Designation: "Registrar",
    Name: "Dr. Asit Narayan",
  },
  {
    type: "Establishment & Administration",
    Designation: "Deputy Registrar",
    Name: "Dr. Asit Narayan",
  },
  {
    type: "Examinations",
    Designation: "Prof. In-charge",
    Name: "Dr. Abdur Rahman Quaff",
  },
  {
    type: "Training and Placement",
    Designation: "Prof. In-charge",
    Name: "Dr. Samrat Mukherjee",
  },
  {
    type: "HMC",
    Designation: "Chairman",
    Name: "Dr. Samrat Mukherjee",
  },
  {
    type: "Procurement",
    Designation: "Professor Incharge",
    Name: "Prof. Prakash Chandra",
  },
  {
    type: "TEQIP-III",
    Designation: "Coordinator",
    Name: "Dr. M. P. Singh",
  },
  {
    type: "Computer Center",
    Designation: "Prof. In-charge",
    Name: "Dr. M. P. Singh",
  },
  {
    type: "Central Library",
    Designation: "Prof. In-charge",
    Name: "Dr. Anshuman Singh",
  },
  {
    type: "IT Services",
    Designation: "Prof. In-charge",
    Name: "Dr. Prabhat Kumar",
  },
  {
    type: "Web Services and MIS",
    Designation: "Prof. In-charge",
    Name: "Dr. Akshay Deepak",
  },
  {
    type: "Finance & Accounts",
    Designation: "Deputy Registrar",
    Name: "Shri Mani Shankar Singh",
  },
  {
    type: "R&D",
    Designation: "Deputy Registrar",
    Name: "Sri Sunil Kumar Dwivedi",
  },
  {
    type: "EMU",
    Designation: "Prof. In-charge",
    Name: "Dr. R. K. Mandal",
  },
  {
    type: "Examination",
    Designation: "Deputy Registrar",
    Name: "Mrs. Bobby",
  },
  {
    type: "IT Service",
    Designation: "Scientific & Technical Officer",
    Name: "Dr. Santosh Kumar",
  },
  {
    type: "Academics & Examination & Scholarship",
    Designation: "Assistant Registrar",
    Name: "Shri Shardul Vikram",
  },
  {
    type: "Establishment",
    Designation: "Assistant Registrar",
    Name: "Shri Rajesh Kumar",
  },
  {
    type: "Security & Housekeeping",
    Designation: "Assistant Registrar",
    Name: "Sri J P Sharma",
  },
  {
    type: "Finance & Accounts",
    Designation: "Assistant Registrar",
    Name: "Sri Sunny Choudhary",
  },
  {
    type: "Academics",
    Designation: "Assistant Registrar",
    Name: "Sri Abhay Kumar",
  },
  {
    type: "Student Activity and Sports",
    Designation: "Officer In-charge",
    Name: "Sri Arijit Putatunda",
  },
]

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
    content: ServiceUnit,
  },
]

export default Admin
