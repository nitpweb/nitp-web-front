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
    name: "Our Director",
  },
  {
    url: "/administration",
    title: "Deputy Director",
    name: "Deputy Director",
  },
  {
    url: "/administration",
    title: "Deans",
    name: "Deans",
  },
  {
    url: "/administration",
    title: "Registrar",
    name: "Registrar",
  },
  {
    url: "/administration",
    title: "Board of Governors",
    name: "Board of Governors",
  },
  {
    url: "/administration",
    title: "Senate",
    name: "Senate",
  },
  {
    url: "/administration",
    title: "Building & Works committee",
    name: "Building and Works Committee",
  },
  {
    url: "/administration",
    title: "Institute Disciplinary committee",
    name: "Institute Disciplinary Committee",
  },
  {
    url: "/administration",
    title: "Finance committee",
    name: "Finance Committee",
  },
  {
    url: "/administration",
    title: "Service Unit Heads",
    name: "Service Unit Heads",
  },
]
const Home=[
  {
    url: "/about",
    title: "About Us",
    name: "About",
    sub:[
      {
        url: "/about",
        title: "About",
        name: "About",
      },
      {
        url: "/administration",
        title: "Director’s Message",
        name: "Our Director",
      },
      {
        url: "/about",
        title: "Mission & Vision",
        name: "Mission and Vision",
      },
      {
        url: "/about",
        title: "Values",
        name: "Values",
      },
      {
        url: "/about",
        title: "Campus",
        name: "Campus",
      },
      {
        url: "/",
        title: "People at NIT Patna",
        name: "People at NIT Patna",
      },
    ]
  },
  {
    url: "/",
    title: "Resources",
    name: "Resources",
    sub:[
      {
        url: "/",
        title: "PAN/ GST",
        name: "pan",
      },
      {
        url: "/",
        title: "Alumni",
        name: "Alumni",
      },
      {
        url: "/",
        title: "RTI",
        name: "RTI",
      },
      {
        url: "/",
        title: "Magazine (Pratibimb)",
        name: "Pratibimb",
      },
      {
        url: "/",
        title: "Clubs/Societies",
        name: "",
      },
      {
        url: "/",
        title: "Incubation Center",
        name: "Incubation Center",
      },
      {
        url: "/facilities",
        title: "Facilities",
        name: "",
      },
    ]
  },
]
const About = [
  {
    url: "/about",
    title: "About",
    name: "About",
  },
  {
    url: "/about",
    title: "Mission & Vision",
    name: `Mission and Vision`,
  },
  {
    url: "/about",
    title: "Values",
    name: "Values",
  },
  {
    url: "/about",
    title: "Campus",
    name: "Campus",
  },
]

const Academics = [
  {
    url: "/academics",
    title: "Admissions",
    name: "Admissions",
  },
  {
    url: "/academics",
    title: "Notices",
    name: "Notices",
  },
  {
    url: "/academics",
    title: "Format",
    name: "Format",
  },
]
const Facilities = [
  {
    url: "/facilities",
    title: "Computer Centre",
    name: "Computer Centre",
  },
  {
    url: "/facilities",
    title: "Library",
    name: "Library",
  },
  {
    url: "/facilities",
    title: "Medical Facilities",
    name: "Medical Facilities",
  },
  {
    url: "/facilities",
    title: "Sports Facilities",
    name: "Sports Facilities",
  },
  {
    url: "/facilities",
    title: "Hostel & Mess",
    name: "Hostel and Mess",
  },
  {
    url: "/facilities",
    title: "Laboratories",
    name: "Laboratories",
  },
  {
    url: "/facilities",
    title: "WiFi",
    name: "WiFi",
  },
  {
    url: "/facilities",
    title: "Bank",
    name: "Bank",
  },
  {
    url: "/facilities",
    title: "Security",
    name: "Security",
  },
  {
    url: "/facilities",
    title: "Woman Cell",
    name: "Woman Cell",
  },
  {
    url: "/facilities",
    title: "Electric Maintainence Unit",
    name: "Electric Maintainence Unit",
  },
]
const Placement = [
  {
    url: "/placements",
    title: "About",
    name: "About",
  },
  {
    url: "/placements",
    title: "Director's Message",
    name: "Director's Message",
  },
  {
    url: "/placements",
    title: "TPO's Message",
    name: "TPO's Message",
  },
  {
    url: "/placements",
    title: "Placement Officers",
    name: "Placement Officers",
  },
]
const Navlist = {
  departments: Departments,
  admin: Admin,
  about: About,
  academics: Academics,
  facilities: Facilities,
  placements: Placement,
  home:Home,
}
export default Navlist
