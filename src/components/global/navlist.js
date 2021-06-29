const Departments = [
  {
    title: "Computer Science and Engineering",
    url: "/cse",
  },
  { url: "/ece", title: "Electronics and Communication Engineering" },

  { url: "/ee", title: "Electrical Engineering" },
  { url: "/me", title: "Mechanical Engineering" },

  { url: "/ce", title: "Civil Engineering" },

  { url: "/hss", title: "Humanities & Social Sciences" },

  { url: "/arch", title: "Architecture" },

  { url: "/physics", title: "Physics" },

  { url: "/chem", title: "Chemistry" },

  { url: "/math", title: "Mathematics" },
]

const Admin = [
  {
    url: "/administration",
    title: "Director",
    data: "director",
  },
  {
    url: "/administration",
    title: "Deputy Director",
    data: "deputydirector",
  },
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
    url: "http://www.nitp.ac.in/uploads/ORG_CHART_NITP.pdf",
    title: "Organization Chart",
    data: "",
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
        title: "Faculties of NIT Patna",
      },
      {
        url: "/officers",
        title: "Officers of NIT Patna",
      },
    ],
  },
  {
    url: "/",
    title: "Resources",
    data: "Resources",
    sub: [
      {
        url: "http://www.nitp.ac.in/uploads/PAN_NITP.pdf",
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
        url:
          "http://web.nitp.ac.in/uploads20/Pratibimb/NIT%20Patna%20E-Magazine.pdf",
        title: "Magazine (Pratibimb)",
      },
      {
        url: "/students",
        title: "Clubs/Societies",
        data: "clubs",
      },
      {
        url: "http://web.nitp.ac.in/incubation_center/index.html",
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
    title: "Programme Structure",
    data: "programmes",
    id: "two",
    sub: [
      {
        url: "/academics",
        title: "UG Course",
        data: "programmesug",
      },
      {
        url: "/academics",
        title: "PG (M.tech/MURP) Course",
        data: "programmespg",
      },
      {
        url: "/academics",
        title: "M.tech/MURP-PHD (DD)",
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
      {
        url: "/academics",
        title: "Refund Rules",
        data: "refund",
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
        title: "Academic Notices",
        data: "Notices",
      },
      {
        url: "http://www.nitp.ac.in/uploads21/Academic_calendar_2021_2022.pdf",
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
        url: "http://web.nitp.ac.in/ict/index.php",
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
    ],
  },
  // {
  //   url: "/academics",
  //   title: "Academics",
  //   data: "",
  //   id: "one",
  //   sub: [
  //     {
  //       url: "http://web.nitp.ac.in/ict/index.php",
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
  //   url: "http://web.nitp.ac.in/ict/index.php",
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
    url: "http://mail.google.com/a/nitp.ac.in",
    title: "Web Mail",
    data: "",
  },
  {
    url: "http://exam.nitp.ac.in/",
    title: "Chanakya Portal",
    data: "",
  },
  {
    url: "#",
    title: "Recruitments",
    data: "",
  },
  {
    url:
      "https://docs.google.com/forms/d/e/1FAIpQLSedy0aZLXXj709zQjAejWvLQOs4_6ESIciPe0IV199kMr_D1g/viewform?usp=sf_link",
    title: "Employee I-Card",
    data: "",
  },
  {
    url: "/staffClaimForm",
    title: "Staff Claim Form",
    data: "",
  },
  {
    url: "http://admin.nitp.ac.in/",
    title: "Faculty Login",
    data: "",
  },
  {
    url: "/facilities",
    title: "Facilities",
    data: "",
  },
]

const Students = [
  {
    url: "http://mail.google.com/a/nitp.ac.in",
    title: "Web Mail",
  },
  {
    url: "http://exam.nitp.ac.in:9001/",
    title: "Chanakya Portal",
  },
  {
    url: "/academics?tab=admissions",
    title: "Admissions",
  },
  {
    url: "/academics?tab=calendar",
    title: "Academic Calendar",
  },
  {
    url: "/students",
    title: "Clubs/Societies",
    data: "clubs",
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
    url: "http://web.nitp.ac.in/data/Anti-ragging_Committee_2019.pdf",
    title: "Anti Ragging",
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
    title: "Concessions",
    data: "concession",
  },
  {
    url: "/students",
    title: "Tech Fest",
    data: "corona",
  },
  {
    url: "http://www.nitp.ac.in/convocation2020/",
    title: "Convocation",
  },
  {
    url: "http://web.nitp.ac.in/incubation_center/index.html",
    title: "Incubation Centre",
  },
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
    url:
      "https://docs.google.com/forms/d/e/1FAIpQLSc5_x34TMtQdMaW2Ad9Nvsmz1N8YXdAGJHtAM5kn3a850Ekyw/viewform?usp=sf_link",
    title: "Student I-Card",
  },
  {
    url: "/facilities",
    title: "Facilities",
  },
]

const Facilities = [
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
  {
    url: "/facilities",
    title: "WiFi",
    data: "wifi",
  },
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
    title: "Electric Maintainence Unit",
    data: "emu",
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
