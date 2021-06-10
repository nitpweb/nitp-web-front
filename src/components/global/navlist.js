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
    title: "About Director",
    name: "Our Director",
  },
  {
    url: "/administration",
    title: "Deans",
    name: "Deans",
  },
  {
    url: "/administration",
    title: "Board of Governors",
    name: "Board of Governors",
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

const Navlist = {
  departments: Departments,
  admin: Admin,
  about: About,
}
export default Navlist
