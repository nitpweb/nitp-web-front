import React from "react"
import Navlist from "../global/navlist"

const Deansinfo = [
 {
  name: "Prof. Pijush Samui",
  designation: "Dean, Planning & Development",
  type: "Dean",
 },
 {
  name: "Prof. Vivekanand Singh",
  designation: "Dean, Research & Consultancy",
  type: "Dean",
 },
 {
  name: "Prof. Samrat Mukherjee",
  designation: "Dean, Student Welfare",
  type: "Dean",
 },
 {
  name: "Prof.(Dr.) Sanjeev Sinha",
  designation: "Dean, Academic",
  type: "Dean",
 },
 {
  name: "Prof. Amar Nath Sinha",
  designation: "Dean, Faculty Welfare",
  type: "Dean",
 },
]
const BOG = [
 {
  name: "Shri Ashok Kumar Modi",
  designation: "Chairperson BOG, Ex-Officio Member, NIT Patna",
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
  name: "Prof. Samrat Mukherjee",
  designation: "Dean(Student Welfare)",
  type: "Chairman",
 },
 {
  name: "Prof. Prakash Chandra",
  designation: "Director's Nominee",
  type: "Member",
 },
 {
  name: "Dr. Bambam Kumar",
  designation: "Asst. Chairman Hostel Management Committee",
  type: "Member",
 },
 {
  name: "",
  designation:
   "Warden of the Hostel of Residence of which the student concerned is a boarder",
  type: "Member",
 },
 {
  name: "Dr. Mala De",
  designation: "One faculty nominated by the Senate",
  type: "Member",
 },
 {
  name:
   "Mr. Rajeev Ranjan, Roll No. 2006201, CSE Ms. Madduri Hemadruthi, Roll No. - 2003087, CE",
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
  name: "Prof. P. K. Jain  \n Director, NIT Patna",
  type: "Ex-Officio Chairman",
 },
 {
  name: "Prof. Nityanand Singh Maurya \n Professor, Civil Engineering Dept.",
  type: "Member",
 },
 {
  name:
   "Prof. Prabhat Kumar \n Professor, Computer Science and Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. M.P. Singh \n Professor, Computer Science and Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Samrat Mukherjee \n Professor, Physics Dept.",
  type: "Member",
 },
 {
  name:
   "Prof. Bharat Gupta \n Professor, Electronics and Communication Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Abdur Rahman Quaff, \n Civil Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Baboo Rai \n Professor, Civil Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Anshuman Singh \n Professor, Civil Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Pijush Samui \n Professor, Civil Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Sunita Kumari \n Professor, Civil Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Amit Kumar \n Professor, Mechanical Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Manoj Kumar \n Professor, Architecture Dept.",
  type: "Member",
 },
 {
  name: "Prof. Fulena Rajak \n Professor, Architecture Dept.",
  type: "Member",
 },
 {
  name: "Prof. L. B. Roy \n Professor, Civil Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Sanjeev Sinha \n Professor, Civil Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Ajay Kumar Sinha \n Professor, Civil Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. S. S. Mishra \n Professor, Civil Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Vivekanand Singh \n Professor, Civil Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Ramesh Kumar \n Professor, Electrical Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Sawal Kishore Singh \n Mathematics Dept.",
  type: "Member",
 },
 {
  name: "Prof. S. K. Verma \n Professor, Mechanical Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Om Prakash \n Professor, Mechanical Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Ramakar Jha \n Professor, Civil Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. Prakash Chandra \n Professor, Mechanical Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. A. N. Sinha \n Professor, Mechanical Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. K. P. Singh \n Former Director, IIT BHU",
  type: "External Member",
 },
 {
  name: "Prof. S. K. Singh \n Vice-Chancellor, LNMU, Darbhanga",
  type: "External Member",
 },
 {
  name:
   "Prof. Pushplata Tripathi, \n Pro-Vice Chancellor, \n Guru-Govind Singh Indraprastha University, New Delhi.",
  type: "External Member",
 },
 {
  name: "Prof. Asit Narayan \n Registrar, NIT Patna",
  type: "Ex-Officio Member Secretary",
 },
]

const ServiceUnit = [
 {
  designation: "Personal",
  type: "Registrar",
  name: "Dr. Asit Narayan",
 },
 {
  designation: "Establishment & Administration",
  type: "Deputy Registrar",
  name: "Dr. Asit Narayan",
 },
 {
  designation: "Examinations",
  type: "Associate Dean (Exam)",
  name: "Prof. Abdur Rahman Quaff",
 },
 {
  designation: "Training and Placement",
  type: "Prof. In-charge",
  name: "Prof. Samrat Mukherjee",
 },
 {
  designation: "HMC",
  type: "Chairman",
  name: "Prof. Samrat Mukherjee",
 },
 {
  designation: "Procurement",
  type: "Professor Incharge",
  name: "Prof. Prakash Chandra",
 },
 {
  designation: "Procurement",
  type: "Add. Professor Incharge",
  name: "Prof. Amit Kumar",
 },
 {
  designation: "TEQIP-III",
  type: "Coordinator",
  name: "Prof. M. P. Singh",
 },
 {
  designation: "Centre for Computing and Information Services (CCIS)",
  type: "Prof. In-charge",
  name: "Prof. Prabhat Kumar",
 },
 {
  designation: "Central Library",
  type: "Prof. In-charge",
  name: "Dr. S. K. Mandal",
 },
 {
  designation: "IT Services",
  type: "Prof. In-charge",
  name: "Prof. Prabhat Kumar",
 },
 {
  designation: "Web Services and MIS",
  type: "Prof. In-charge",
  name: "Dr. Akshay Deepak",
 },
 {
  designation: "Finance & Accounts",
  type: "Deputy Registrar",
  name: "Shri Mani Shankar Singh",
 },
 {
  designation: "R&D",
  type: "Deputy Registrar",
  name: "Sri Sunil Kumar Dwivedi",
 },
 {
  designation: "EMU",
  type: "Prof. In-charge",
  name: "Dr. Vimlesh Verma",
 },
 {
  designation: "Website",
  type: "Prof. In-charge",
  name: "Dr. Amitesh Kumar",
 },
 {
  designation: "Examination",
  type: "Deputy Registrar",
  name: "Mrs. Bobby",
 },
 {
  designation: "IT Service",
  type: "Scientific & Technical Officer",
  name: "Dr. Santosh Kumar",
 },
 {
  designation: "Academics & Examination & Scholarship",
  type: "Assistant Registrar",
  name: "Shri Shardul Vikram",
 },
 {
  designation: "Establishment",
  type: "Assistant Registrar",
  name: "Shri Rajesh Kumar",
 },
 {
  designation: "Security & Housekeeping",
  type: "Assistant Registrar",
  name: "Sri J P Sharma",
 },
 {
  designation: "Research & Consulatancy",
  type: "Assistant Registrar",
  name: "Sri Sunny Choudhary",
 },
 {
  designation: "Academics",
  type: "Assistant Registrar",
  name: "Sri Abhay Kumar",
 },
 {
  designation: "Student Activity and Sports",
  type: "Officer In-charge",
  name: "Sri Arijit Putatunda",
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
 // url: "/administration",
 // title: "Deputy Director",
 // data: "deputydirector",
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
