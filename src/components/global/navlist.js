const Departments = [
 { url: "/arch", title: "Architecture & Planning" },

 { url: "/chem", title: "Chemistry" },

 { url: "/ce", title: "Civil Engineering" },

 {
  title: "Computer Science and Engineering",
  url: "/cse",
 },

 { url: "/ee", title: "Electrical Engineering" },

 { url: "/ece", title: "Electronics and Communication Engineering" },

 { url: "/hss", title: "Humanities & Social Sciences" },

 { url: "/math", title: "Mathematics" },

 { url: "/me", title: "Mechanical Engineering" },

 { url: "/physics", title: "Physics" },
]

const Admin = [
 {
  url: "/",
  title: "Administration",
  data: "",
  sub: [
   {
    url: "/administration",
    title: "Director",
    data: "director",
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
   },
   {
    url: "/administration",
    title: "Registrar",
    data: "registrar",
   },
   {
    url: "/administration",
    title: "Board of Governors",
    data: "bog",
   },
   {
    url: "/administration",
    title: "Senate",
    data: "senate",
   },
   {
    url: "/administration",
    title: "Building & Works committee",
    data: "bwc",
   },
   {
    url: "/administration",
    title: "Institute Disciplinary committee",
    data: "idc",
   },
   {
    url: "/administration",
    title: "Finance committee",
    data: "fc",
   },
   {
    url: "/administration",
    title: "Service Unit Heads",
    data: "suh",
   },
   {
    url: "https://drive.google.com/file/d/1yvZjylqZbxiwn3kEqmUSHSQeiJuU4bHw/view?usp=sharing",
    title: "Organization Chart",
    data: "",
   },
  ],
 },
]
const Home = [
 {
  url: "/about",
  title: "About Us",
  data: "About",
  sub: [
   {
    url: "/about",
    title: "About",
    data: "about",
    img: "/department/about.svg",
   },
   {
    url: "/director",
    title: "Director’s Message",
   },
   {
    url: "/about",
    title: "Mission & Vision",
    data: "missionvision",
    img: "/department/mission.svg",
   },
   {
    url: "/about",
    title: "Values",
    data: "values",
    img: "/clock.svg",
   },
   {
    url: "/about",
    title: "Campus",
    data: "campus",
    img: "/map.svg",
   },
   {
    url: "/faculties",
    title: "Faculty of NIT Patna",
   },
   {
    url: "/officers",
    title: "Officers of NIT Patna",
   },
   {
    url: "/otherEmployees",
    title: "Other Employees of NIT Patna",
   },
  ],
 },
 {
  url: "/",
  title: "Resources",
  data: "Resources",
  sub: [
   {
    url: "https://drive.google.com/file/d/1Njk4q-iZudKaNHgZ7eYprCfaFKd1BroC/view?usp=sharing",
    title: "PAN/ GST",
   },
   {
    url: "http://web.nitp.ac.in/alumni/html/index.html",
    title: "Alumni",
   },
   {
    url: "/RTI",
    title: "RTI",
   },
   {
    url: "/magazine",
    title: "Magazine (Pratibimb)",
   },
   {
    url: "/students",
    title: "Clubs/ Societies",
    data: "clubs",
   },
   {
    url: "https://web.nitp.ac.in/incubation_center/index.html",
    title: "Incubation Center",
   },
   {
    url: "/facilities",
    title: "Facilities",
   },
  ],
 },
]
const About = [
 {
  url: "/about",
  title: "About",
  data: "About",
 },
 {
  url: "/about",
  title: "Mission & Vision",
  data: `Mission and Vision`,
 },
 {
  url: "/about",
  title: "Values",
  data: "values",
 },
 {
  url: "/about",
  title: "Campus",
  data: "campus",
 },
]

const Academics = [
 {
  url: "/academics",
  title: "Course Structure",
  data: "programmes",
  id: "two",
  sub: [
   {
    url: "/academics",
    title: "UG",
    data: "programmesug",
   },
   {
    url: "/academics",
    title: "PG (M.tech/MURP)",
    data: "programmespg",
   },
   {
    url: "/academics",
    title: "M.tech/MURP-PhD (DD)",
    data: "programmesdd",
   },
   {
    url: "/academics",
    title: "Integrated M.sc",
    data: "programmesimsc",
   },
  ],
 },
 {
  url: "/academics",
  title: "Admissions",
  data: "admissions",
  id: "three",
  sub: [
   {
    url: "/academics",
    title: "CCMT/JoSSA/CSAB",
    data: "admissions",
   },
   {
    url: "/students",
    title: "Relaxation Criteria",
    data: "concession",
   },
   // {
   //   url: "/academics",
   //   title: "Refund Rules",
   //   data: "refund",
   // },
  ],
 },
 {
  url: "/academics",
  title: "Centre Of Excellence",
  data: "centreOfExcellence",
  id: "three",
  sub: [
   {
    url: "/academics",
    title: "TSSC",
    data: "centreOfExcellence",
   },
   //    {
   //     url: "/academics",
   //     title: "ISRO RACS",
   //     data: "centreOfExcellence",
   //    },
   {
    url: "/isro-racs",
    title: "ISRO RACS",
    data: "isro-racs",
   },
  ],
 },
 {
  url: "/academics",
  title: "Academics",
  data: "",
  id: "four",
  sub: [
   {
    url: "/academics",
    title: "Programmes",
    data: "programmes",
   },
   {
    url: "/academics",
    title: "Departments",
    data: "depts",
   },
   {
    url: "/academics",
    title: "Academic Notices",
    data: "Notices",
   },
   {
    // url: "https://web.nitp.ac.in/uploads22/Academic_cal._Even_2022_23.pdf",
    url: "https://drive.google.com/file/d/1tVgQSygS8GRTZIglbVWVClasegdd6BCi/view?usp=sharing",
    title: "Academic Calendar",
    data: "",
   },
   {
    url: "/academics",
    title: "Fee Structure",
    data: "fee",
   },
   {
    url: "/academics",
    title: "Format of Official Documents",
    data: "format",
   },
   {
    url: "http://nitp.ac.in/ict/index.php",
    title: "ICT Academy",
    data: "",
   },
   {
    url: "/academics",
    title: "Digital Initiatives",
    data: "digital",
   },
   {
    url: "/academics",
    title: "Regulation & Curricula",
    data: "curricula",
   },
   {
    url: "/academics",
    title: "Patents",
    data: "patents",
   },
   // {
   //   url: "/academics",
   //   title: "Centre of Excellence",
   //   data: "centreOfExcellence",
   // },
  ],
 },
 // {
 //   url: "/academics",
 //   title: "Academics",
 //   data: "",
 //   id: "one",
 //   sub: [
 //     {
 //       url: "http://nitp.ac.in/ict/index.php",
 //       title: "ICT Academy",
 //       data: "",
 //     },
 //     {
 //       url: "/academics",
 //       title: "Digital Initiatives",
 //       data: "digital",
 //     },
 //     {
 //       url: "/academics",
 //       title: "Regulation & Curricula",
 //       data: "curricula",
 //     },
 //   ],
 // },
 // {
 //   url: "http://nitp.ac.in/ict/index.php",
 //   title: "ICT Academy",
 // },
 // {
 //   url: "/academics",
 //   title: "Admissions",
 //   data: "Admissions",
 // },
 // {
 //   url: "/academics",
 //   title: "Notices",
 //   data: "Notices",
 // },
 // {
 //   url: "/academics",
 //   title: "Format",
 //   data: "Format",
 // },
]

const Faculty = [
 {
  url: "/",
  title: "Faculty",
  data: "",
  sub: [
   {
    url: "http://mail.google.com/a/nitp.ac.in",
    title: "Web Mail",
    data: "",
   },
   {
    url: "http://mis.nitp.ac.in:81/",
    title: "Academic Portal",
    data: "",
   },
   {
    url: "/jobsnitp",
    title: "Recruitments",
    data: "",
   },
   {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSedy0aZLXXj709zQjAejWvLQOs4_6ESIciPe0IV199kMr_D1g/viewform?usp=sf_link",
    title: "Employee I-Card",
    data: "",
   },
   {
    url: "/staffClaimForm",
    title: "Staff Claim Form",
    data: "",
   },
   {
    url: "https://admin.nitp.ac.in/",
    title: "Admin Login",
    data: "",
   },
   { url: "/internationalAffairs", title: "International Affairs" },
  ],
 },
]

const Students = [
 {
  url: "/students",
  title: "For Students",
  data: "",
  sub: [
   {
    url: "/students",
    title: "Clubs/ Societies",
    data: "clubs",
   },
   {
    url: "/academics?tab=admissions",
    title: "Admissions",
   },
   {
    url: "/students",
    title: "1st Year Students",
    data: "firstyear",
   },
   {
    url: "/students",
    title: "Student Activity Centre",
    data: "sac",
   },

   {
    url: "/students",
    title: "Fellowship Opportunities",
    data: "fellowship",
   },
   {
    url: "/students",
    title: "Scholarship",
    data: "scholarship",
   },
   {
    url: "/students",
    title: "Tech Fest",
    data: "corona",
   },
   // {
   //   url: "http://www.nitp.ac.in/asme/index.html",
   //   title: "ASME",
   // },
   {
    url: "/students",
    title: "Student Exchange",
    data: "studentexchange",
   },
   {
    url: "/students",
    title: "NSS@NITP",
    data: "nss",
   },
   {
    url: "/students",
    title: "E-cell",
    data: "Ecell",
   },
   {
    url: "/students",
    title: "Unnat Bharat",
    data: "Unnatbharat",
   },
  ],
 },
 {
  url: "/students",
  title: "Links",
  data: "",
  sub: [
   {
    url: "http://old.nitp.ac.in/alumni/html/index.html",
    title: "Alumni",
   },
   {
    url: "http://mail.google.com/a/nitp.ac.in",
    title: "Web Mail",
   },
   {
    url: "http://exam.nitp.ac.in:9001/",
    title: "Academic Portal",
   },
   {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSc5_x34TMtQdMaW2Ad9Nvsmz1N8YXdAGJHtAM5kn3a850Ekyw/viewform?usp=sf_link",
    title: "Student I-Card",
   },
   {
    url: "http://www.nitp.ac.in/convocation2020/",
    title: "Convocation",
   },
   {
    url: "https://web.nitp.ac.in/incubation_center/index.html",
    title: "Incubation Centre",
   },
   {
    url: "http://corona.nitp.ac.in/Corona16/index.php",
    title: "Corona",
   },

   {
    url: "http://nitp.ac.in/data/Anti-ragging_Committee_2019.pdf",
    title: "Anti Ragging",
   },

   {
    url: "/facilities",
    title: "Facilities",
   },
   {
    url: "/students",
    title: "Concessions",
    data: "concession",
   },
   {
    url: "https://drive.google.com/file/d/1tVgQSygS8GRTZIglbVWVClasegdd6BCi/view?usp=sharing",
    title: "Academic Calendar",
   },
   {
    url: "https://paydirect.eduqfix.com/app/mnYv9Q6+C+3lIMqghRCwdaqVZusPrJtq2RGJrJFnKnmtz3KBqtsEFPVrZFvoPubG/3466",
    title: "Fee Payment",
   },
  ],
 },
]

const Facilities = [
 {
  url: "/facilities",
  title: "Facilities",
  data: "",
  sub: [
   {
    url: "/facilities",
    title: "Computer Centre",
    data: "cc",
   },
   {
    url: "/facilities",
    title: "IT Service Unit",
    data: "it",
   },
   {
    url: "/facilities",
    title: "TEQUIP",
    data: "tequip",
   },
   {
    url: "/facilities",
    title: "Library",
    data: "library",
   },
   {
    url: "/facilities",
    title: "Medical Facilities",
    data: "medical",
   },
   {
    url: "/facilities",
    title: "Sports Facilities",
    data: "sports",
   },
   {
    url: "/facilities",
    title: "Hostel & Mess",
    data: "hostel",
   },
   {
    url: "/facilities",
    title: "Laboratories",
    data: "lab",
   },
   //    {
   //     url: "/facilities",
   //     title: "WiFi",
   //     data: "wifi",
   //    },
   {
    url: "/facilities",
    title: "Bank",
    data: "bank",
   },
   {
    url: "/facilities",
    title: "Security",
    data: "security",
   },
   {
    url: "/facilities",
    title: "Woman Cell",
    data: "womancell",
   },
   {
    url: "/facilities",
    title: "SC/ST Cell",
    data: "scstcell",
   },
   {
    url: "/facilities",
    title: "EMU",
    data: "emu",
   },
   {
    url: "/facilities",
    title: "ESU",
    data: "esu",
   },
  ],
 },
]

const Navlist = {
 departments: Departments,
 admin: Admin,
 about: About,
 academics: Academics,
 students: Students,
 facilities: Facilities,
 home: Home,
 faculty: Faculty,
}
export default Navlist
