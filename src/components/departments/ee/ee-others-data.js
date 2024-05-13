import React from "react"

// const home = "http://www.nitp.ac.in/"
const home = process.env.GATSBY_BASE_URL + "ee/labs/"

const Tables = {
 studentSelectedForInternships: [
  {
   "Roll No": 2002079,
   Name: "Om Kumar",
   "Academic / Industrial": "Industrial",
   Organisation: "NALCO, Anugul",
  },
  {
   "Roll No": 2002023,
   Name: "Sujeet Kumar",
   "Academic / Industrial": "Industrial",
   Organisation: "NTPC, Muzaffarpur",
  },
  {
   "Roll No": 2002021,
   Name: " Chandan Kumar",
   "Academic / Industrial": "Industrial",
   Organisation: "NTPC, Muzaffarpur",
  },
  {
   "Roll No": 2002028,
   Name: "Mallela Srujana ",
   "Academic / Industrial": "Industrial",
   Organisation: "BHEL",
  },
  {
   "Roll No": 2002110,
   Name: "Akash Kumar ",
   "Academic / Industrial": "Industrial",
   Organisation: "IOCL, Barauni",
  },
  {
   "Roll No": 2002063,
   Name: "Ankunj Suraj",
   "Academic / Industrial": "Academic",
   Organisation: "IIT Hyderabad",
  },
  {
   "Roll No": 2102021,
   Name: "Ayush Raj",
   "Academic / Industrial": "Industrial",
   Organisation: "NTPC, Bhagalpur",
  },
  {
   "Roll No": 2102046,
   Name: " Ratan deep",
   "Academic / Industrial": "Industrial",
   Organisation: "IOCL, Baruni",
  },
  {
   "Roll No": 2102059,
   Name: "Shatrughan Kasaudhan ",
   "Academic / Industrial": "Industrial",
   Organisation: "NTPC, Tanda",
  },
  {
   "Roll No": 2102097,
   Name: " Abhishek Kumar Sudhanshu",
   "Academic / Industrial": "Industrial",
   Organisation: "PGCIL, Patna",
  },
  {
   "Roll No": 2102125,
   Name: "Anubhav Kumar ",
   "Academic / Industrial": "Industrial",
   Organisation: "PGCIL, Patna",
  },
  {
   "Roll No": 2102128,
   Name: "Mayank Kumar",
   "Academic / Industrial": "Industrial",
   Organisation: "Damodar Velley Corporation Ltd.",
  },
  {
   "Roll No": 2102027,
   Name: "Ankur Kumar ",
   "Academic / Industrial": "Industrial",
   Organisation: "NTPC, Patna",
  },
  {
   "Roll No": 2102079,
   Name: "Praveen kumar ",
   "Academic / Industrial": "Industrial",
   Organisation: "E.C Railway Danapur",
  },
  {
   "Roll No": 2102098,
   Name: "Vedansh Kumar Srivastava ",
   "Academic / Industrial": "Industrial",
   Organisation: "BHEL, Bhopal",
  },
  {
   "Roll No": 2102004,
   Name: "Utsav Kumar ",
   "Academic / Industrial": "Industrial",
   Organisation: "PGCIL, Patna",
  },
 ],
 projectSanctioned: [
  {
   "Sr. No.": 1,
   "Project Scheme and Sponsoring Agency":
    "Department of Science and Technology (DST)",
   "File Number": "89830",
   "Title of the Project": "DST-FIST 2023",
   "Amount (INR)": "82,76,000",
   "Name of Investigator": "Dr. Rajib Kumar Mandal",
   Status: "Approved October 2023",
   "Start Date": "-",
   "End Date": "-",
   Duration: "5.0",
  },
  {
   "Sr. No.": 2,
   "Project Scheme and Sponsoring Agency":
    "Science and Engineering Research Board (SERB)",
   "File Number": "EEQ/2022/000555",
   "Title of the Project":
    "Design of Switched-Capacitor Based Boosting Inverter for PV Applications with Fewer Components",
   "Amount (INR)": "33,93,434",
   "Name of Investigator": "Dr. Rajib Kumar Mandal",
   Status: "Ongoing",
   "Start Date": "14.02.2023",
   "End Date": "13.02.2026",
   Duration: "3.0",
  },
  {
   "Sr. No.": 3,
   "Project Scheme and Sponsoring Agency":
    "Bihar Council on Science and Technology (BCST)",
   "File Number": "BCST-RD-01/2022-797",
   "Title of the Project":
    "A smart and connected Electrochemical device for quality analysis of agricultural products",
   "Amount (INR)": "2,00,000",
   "Name of Investigator": "Dr. Arunangshu Ghosh,",
   Status: "Ongoing",
   "Start Date": "14.10.2023",
   "End Date": "3.10.2025",
   Duration: "2.0",
  },
  {
   "Sr. No.": 4,
   "Project Scheme and Sponsoring Agency": "Department of Biotechnology (DBT)",
   "File Number": "BT/PR49634/MED/32/851/2023",
   "Title of the Project":
    "Development of a novel soft -robotic joint for potential assistive applications using piezoelectric composite elastomer based synthetic muscle fibres",
   "Amount (INR)": "32,76,000 ",
   "Name of Investigator": "Dr. Arunangshu Ghosh",
   Status: "Approved on July 2023",
   "Start Date": "-",
   "End Date": "-",
   Duration: "1.5",
  },
  {
   "Sr. No.": 5,
   "Project Scheme and Sponsoring Agency": "Startup Research grants",
   "File Number": "SRG/2021/001837",
   "Title of the Project":
    "Design and development of indigenous low-cost phasor measurement unit ",
   "Amount (INR)": "32,17,000",
   "Name of Investigator": "Dr. M Senthil Kumar",
   Status: "Ongoing",
   "Start Date": "14.11.2021",
   "End Date": "13.11.2024",
   Duration: "3.0",
  },
  {
   "Sr. No.": 6,
   "Project Scheme and Sponsoring Agency": "Startup Research grants",
   "File Number": "SRG/2021/002110",
   "Title of the Project":
    "Bio-inspired electronic synaptic cells for neuromorphic and bio-medical applications",
   "Amount (INR)": "29,00,000",
   "Name of Investigator": "Dr. Amitesh Kumar",
   Status: "Ongoing",
   "Start Date": "14.11.2021",
   "End Date": "13.11.2024",
   Duration: "3.0",
  },
  {
   "Sr. No.": 7,
   "Project Scheme and Sponsoring Agency":
    "Biotechnology Ignition Grant (BIG), BIRAC, DBT, Govt. of India",
   "File Number": "BIRAC/KIIT01201/BIG-17/20",
   "Title of the Project":
    "Development of portable spectroscopic instruments for on-site estimation of quality compounds in tea",
   "Amount (INR)": "49,55,000",
   "Name of Investigator": "Dr. Arunangshu Ghosh-CoPI",
   Status: "Completed",
   "Start Date": "20.12.2021",
   "End Date": "19.12.2023",
   Duration: "2.0",
  },
  {
   "Sr. No.": 8,
   "Project Scheme and Sponsoring Agency":
    "Early Career Research Award, SERB, DST, Govt. of India",
   "File Number": "ECR/2017/001027",
   "Title of the Project":
    "Sustainable Smart Grid Framework for Energy Management Sytem Incorporating available Renewable Resources",
   "Amount (INR)": "20,19,600",
   "Name of Investigator": "Dr. Mala De",
   Status: "Completed",
   "Start Date": "15.07.2017",
   "End Date": "14.01.2021",
   Duration: "3.5",
  },
  {
   "Sr. No.": 9,
   "Project Scheme and Sponsoring Agency":
    "Early Career Research Award, SERB, DST, Govt. of India",
   "File Number": "ECR/2016/000900",
   "Title of the Project":
    "Fault Tolerant Control of Permanent Magnet Synchronous Motor Drive in Electric Vehicles ",
   "Amount (INR)": "29,45,180",
   "Name of Investigator": "Dr. Vimlesh Verma",
   Status: "Completed",
   "Start Date": "29.09.2016",
   "End Date": "28.03.2020",
   Duration: "3.5",
  },
  {
   "Sr. No.": 10,
   "Project Scheme and Sponsoring Agency":
    "Early Career Research Award, SERB, DST, Govt. of India",
   "File Number": "ECR/2016/001547",
   "Title of the Project":
    "Design and development of a low cost BLDC motor drive for solar PV based irrigation system",
   "Amount (INR)": "42,17,530",
   "Name of Investigator": "Dr. Nishat Anwar",
   Status: "Completed",
   "Start Date": "28.03. 2017",
   "End Date": "27.09. 2020",
   Duration: "3.5",
  },
  {
   "Sr. No.": 11,
   "Project Scheme and Sponsoring Agency":
    "TEQIP Collaborative Research Scheme, NPIU, Govt. of India",
   "File Number": "-",
   "Title of the Project":
    "Development of portable and industry viable torsional vibration measurement system",
   "Amount (INR)": "13,35,000",
   "Name of Investigator": "Dr. Nishat Anwar",
   Status: "Completed",
   "Start Date": "8.06.2019",
   "End Date": "30.09.2020",
   Duration: "1.25",
  },
  {
   "Sr. No.": 12,
   "Project Scheme and Sponsoring Agency": "Seed Project Grant, NIT Patna",
   "File Number": "NITP/3040/19",
   "Title of the Project":
    "High Performance Vector Controlled Multiphase AC Machines",
   "Amount (INR)": "10,00,000",
   "Name of Investigator": "Dr. Ambarisha Mishra",
   Status: "Completed",
   "Start Date": "02.09. 2019",
   "End Date": "01.09.2021",
   Duration: "2.0",
  },
  {
   "Sr. No.": 13,
   "Project Scheme and Sponsoring Agency":
    "TEQIP-AICTE, Collaborative research scheme",
   "File Number": "-",
   "Title of the Project":
    "Investigation into QoS for Next Generation Networks",
   "Amount (INR)": "10,62,000",
   "Name of Investigator": "Dr. Ravi Shankar",
   Status: "Completed",
   "Start Date": "-",
   "End Date": "-",
   Duration: "2.25",
  },
  {
   "Sr. No.": 14,
   "Project Scheme and Sponsoring Agency":
    "Instrument Development Program, DST, Govt. of India",
   "File Number": "IDP/SEN/05/2015",
   "Title of the Project":
    "Development of Potentiostat System for General Purpose Electro-Chemical Applications",
   "Amount (INR)": "23,33,600",
   "Name of Investigator": "Dr.Arunangshu Ghosh-CoPI ",
   Status: "Completed",
   "Start Date": "21.07. 2016",
   "End Date": "20.07. 2019",
   Duration: "3.0",
  },
  {
   "Sr. No.": 15,
   "Project Scheme and Sponsoring Agency":
    "Early Career Research Award, SERB, DST, Govt. of India",
   "File Number": "CR/2016/001813",
   "Title of the Project":
    "Development of a portable electronic tongue for estimation of tea quality and spoilage detection of food samples",
   "Amount (INR)": "15,95,000",
   "Name of Investigator": "Dr. Arunangshu Ghosh",
   Status: "Completed",
   "Start Date": "17.03.2017",
   "End Date": "6.09.2020",
   Duration: "3.5",
  },
 ],
 totalAmount: [
  {
   "Total Project Value": "TOTAL VALUE OF PROJECTS (INR)",
   "Amount (INR)": "42,725,344/-",
  },
 ],
 consultancy: [
  {
   "Name of the faculty": "Prof. Ramesh Kumar, Dr. Rajib Kumar Mandal",
   "Project Title":
    "Vetting of electrical design of new electrical distribution system of Chanakya National Law University, Patna (07.04.2021)",
   "Funding Agency": "Chanakya National Law University, Patna, Bihar",
   "Amount (INR)": "4,60,200",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal, Dr. Nishat Anwar",
   "Project Title":
    "Vetting for MEP schemes/drawings for the construction of 240 bedded hospital building of Dr. Radha Krishan Medical College and Hospital, Hamirpur ( 27.04.2021)",
   "Funding Agency": "Ahluwalia Contracts (India) Limited, New Delhi",
   "Amount (INR)": "5,36,900",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal, Dr. Ravi Shankar",
   "Project Title":
    "Vetting of MEP services design and drawing of all buildings at the proposed permanent campus of IIIT bhagalpur, Bihar ( 13.04.2021)",
   "Funding Agency": "DDF Consultants, Pitampura, New Delhi",
   "Amount (INR)": "5,98,260",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal, Dr. Ravi Shankar",
   "Project Title":
    "Upgradation of Jawaharlal Nehru medical college and Hospital, Bhagalpur, Bihar ( 20.05.2019)",
   "Funding Agency": "Tribeni Constructions Limited, Guwahati, Assam",
   "Amount (INR)": "4,44,860",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal, Dr. Ravi Shankar",
   "Project Title": "Upgradation of PMCH, Patna ( 28.10.2020)",
   "Funding Agency": "C.K. Constructions, Noida, Uttar Pradesh",
   "Amount (INR)": "5,67,580",
  },
  {
   "Name of the faculty": "Prof. Ramesh Kumar, Dr. Rajib Kumar Mandal",
   "Project Title":
    "Proof checking and E & M works regarding the construction of academic and residential complexes for the campus of IIT Patna, Bihta ( 05.02.2019)",
   "Funding Agency": "NCC Limited, Bihta, Patna, Bihar",
   "Amount (INR)": "3,54,000",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal",
   "Project Title":
    "To examine the executed work of supply, installation, testing and commissioning of air-conditioners and associated electrical work at SCI building",
   "Funding Agency": "IGIMS Patna",
   "Amount (INR)": "3,06,800",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal",
   "Project Title":
    "Vetting drawings/ documents of internal and external, electrical civil and mechanical design and drawing for the 240 bedded hospital, academic block, service block, department work and specialized services for Radhakrishnan medical college and hospital at Hamirpur, Himachal Pradesh.",
   "Funding Agency": "Ahulwalia Contracts (Inda, Ltd.)",
   "Amount (INR)": "5,36,900",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal",
   "Project Title":
    "Vetting of MEP services, design and drawings of permanent campus of IIM Sambalpur, Orissa.",
   "Funding Agency": "Dee Vee Projects Ltd., IIM Sambalur",
   "Amount (INR)": "6,37,000",
  },
  {
   "Name of the faculty": "Dr. Ambrisha Mishra",
   "Project Title":
    "Vetting of design and drawing related to Nikrish Pump Canal Project, Buxar, Bihar",
   "Funding Agency": "Flowmore Ltd.",
   "Amount (INR)": "3,01,600",
  },
  {
   "Name of the faculty": "Dr. Ambrisha Mishra",
   "Project Title":
    "Design and drawing related to Jaitpura Pump Canal Project, Kaimur, Bihar ",
   "Funding Agency": "Flowmore Ltd.",
   "Amount (INR)": "2,71,440",
  },
  {
   "Name of the faculty": "Dr. Rajib Kumar Mandal",
   "Project Title":
    "To examine the executed work of supply, installation, testing and commissioning of air-conditioners and associated electrical work at SCI building",
   "Funding Agency": "IGIMS Patna",
   "Amount (INR)": "3,06,800",
  },
 ],
 confrences: [
  {
   "Name of confrences":
    "3rd International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET)",
   Duration: "21-22 Dec. 2023",
   "International/National": "International",
   Publisher: "IEEE",
   Proceedings: "https://ieeexplore.ieee.org/xpl/conhome/10452149/proceeding",
  },
  {
   "Name of confrences":
    "2nd International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET)",
   Duration: "24-25 June 2022",
   "International/National": "International",
   Publisher: "IEEE",
   Proceedings: "https://ieeexplore.ieee.org/xpl/conhome/9847617/proceeding",
  },
  {
   "Name of confrences":
    "International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET)",
   Duration: "10-11 July 2020",
   "International/National": "International",
   Publisher: "IEEE",
   Proceedings: "https://ieeexplore.ieee.org/xpl/conhome/9177228/proceeding",
  },
 ],
 shortTermCourse: [
  {
   Title: "DSP Applications on ARM Platform",
   "Developed/Organized By": "Dr Arunangshu Ghosh",
   Duration: "7 days (26/08/2016 to 01/09/2016)",
   "Resource Persons":
    "Prof. S K Sinha (Retd. Prof. IISc Bangalore)  Prof. Donald Reay (Heriot-Watt University; Edinburgh, UK.",
  },
  {
   Title:
    "Short term course(Intelligent sensing technologies and Instrumentation)",
   "Developed/Organized By": "Dr Arunangshu Ghosh",
   Duration: "5 days (05/0l/2016 to 09/01/2016)",
   "Resource Persons": "IITs, JU, NIT and Industries (CDAC)",
  },
  {
   Title:
    "Short term course(Advanced Power Electronics converters for renewable energy and Industrial Drives)",
   "Developed/Organized By": "Dr Vimlesh Verma",
   Duration: "5 days (14/12/2015 to 18/12/2015)",
   "Resource Persons": "Faculties from IITs, NITs and Industries (ABB)",
  },
  {
   Title: "Short term course(Advances in Industrial Control)",
   "Developed/Organized By": "Dr Nishat Anwar",
   Duration: "5 days (27/l 1/2015 to 1/12/2015)",
   "Resource Persons":
    "Faculties from IITs , AMU, NITs and Foreign University.",
  },
  {
   Title:
    "Short term course Reliability, Availability, Maintainability and Safety (RAMS)",
   "Developed/Organized By": "Dr Mala De",
   Duration: "2 days (18/04/2015 to 19/04/2015)",
   "Resource Persons":
    "Dr. Ajeet Kr PandeyDr. Mukul Verma,Experts from Industries",
  },
  {
   Title: "Summer School",
   "Developed/Organized By": "Dr G K Choudhury",
   Duration: "1 week (19/10/2012 to 23/10/2012)",
   "Resource Persons": "Faculties from IITs and NITs",
  },
 ],
 expertLectures: [
  {
   Title:
    "Expert classes and discussion session on Power Electronics and Industrial Drives & control",
   Duration: "4 days (25/02/2016 to 28/02/2016)",
   "Resource Persons": "Prof. S. K Sinha (Retd Professor IISC Banglore)",
  },
  {
   Title:
    "DC Motor Speed Control Problem and Discussion on end-to-end Controller Design",
   Duration: "4 days (25/02/216 to 28/02/2016)",
   "Resource Persons": "Prof. S.K Sinha (Retd. Prof. IISc Bangalore)",
  },
  {
   Title: "Power Electronics & Industrial Drive Control",
   Duration: "5 days (03/02/2015 to 09/02/2015)",
   "Resource Persons": "J R P Gupta(Professor, DTU)",
  },
  {
   Title:
    "General overview on Aerospace Industries and equipment and Information on higher studies requirement in USA",
   Duration: "1 day on 20/03/2015",
   "Resource Persons":
    "Mr. Fariz Kalim, Manager Project Management and Hardware Development, TELEDYNE CONTROLS",
  },
  {
   Title: "Commercial Aspects of Solar Energy in Indian Market",
   Duration: "1 day on18/03/2015",
   "Resource Persons": "Mr. S. Talapatra(Industry Expert)",
  },
  {
   Title: "Microcontrollers/ PIC processor/ ARM Processor",
   Duration: "1 day on 12/03/2015",
   "Resource Persons": "Radha Narayan Rao(Industry Expert)",
  },
  {
   Title:
    "Embedded System Design and implementation – case study and discussion",
   Duration: "1 day on 29/01/2015",
   "Resource Persons": "Prof. S.K Sinha (Retd. Prof. IISc Bangalore)",
  },
 ],
 shortTermCourse2: [
  {
   "Sr.No.": 1,
   Title:
    "FDP on “Recent Trends in Research & Opportunities in Electrical and Electronic Engineering” ",
   "Developed/Organized By": "Dr. Moina Ajmeri",
   Duration: "15.3.2021 to 23.03.2021",
   "Other detail": "Faculties from IITs and NITs",
  },
  {
   "Sr.No.": 2,
   Title:
    "FDP course “Research Methodology For Social Sciences, Engineering and Management: NEP 2020 (RMSSEM 2023)” ",
   "Developed/Organized By": "Dr. Amitesh Kumar",
   Duration: "10 July-14 July 2023",
   "Other detail": "Faculties from IITs and NITs",
  },
  {
   "Sr.No.": 3,
   Title:
    "FDP course “Blockchain Technology for Next-Generation Applications” ",
   "Developed/Organized By": "Dr. Amitesh Kumar",
   Duration: "19 June-24 June 2023 ",
   "Other detail": "Faculties from IITs and NITs",
  },
  {
   "Sr.No.": 4,
   Title:
    "FDP course Next-generation Applications in Electrical and Electronics Engineering”",
   "Developed/Organized By": "Dr. Amitesh Kumar",
   Duration: "24-01-2022 to 04-02-2022",
   "Other detail": "Faculties from IITs and NITs",
  },
  {
   "Sr.No.": 5,
   Title: "FDP course “Electrical Vehicles and Mobility “",
   "Developed/Organized By": "Dr. Amitesh Kumar",
   Duration: "24-01-2022 to 04-02-2022",
   "Other detail": "jointly organized by NIT Patna, MNIT Jaipur, IIIT Jabalpur",
  },
  {
   "Sr.No.": 6,
   Title: "FDP course “Renewable Energy: Research to Industry “ ",
   "Developed/Organized By": "Dr. Amitesh Kumar",
   Duration: "22Aug- 13th Sep. 2020",
   "Other detail": "Faculties from IITs and NITs",
  },
  {
   "Sr.No.": 7,
   Title:
    "FDP on Next-Generation Semiconductor Devices for high-end applications ",
   "Developed/Organized By": "Dr. Amitesh Kumar",
   Duration: "22 -27 June 2020",
   "Other detail": "Faculties from IITs and NITs",
  },
  {
   "Sr.No.": 8,
   Title: "FDP on Recent Trends in Robotics ",
   "Developed/Organized By": "Dr. Gagan Deep Meena ",
   Duration: "04.07.2022 to 15.07.2022",
   "Other detail":
    "in association with EICT academies of IIITDM Jabalpur, MNIT Jaipur, IIT Roorkee and NIT Patna",
  },
  {
   "Sr.No.": 9,
   Title:
    "Online FDP on Recent Trends in Control System Engineering (ReTreCSE-2021) ",
   "Developed/Organized By": "Dr. Gagan Deep Meena Dr. G. Lloyds Raja",
   Duration: "31.05.2021 to 06.06.2021",
   "Other detail":
    "Resource Persons: Prof. Hassan K. Khalil, Michigan State Univ., USA,  Prof. Francesco Bullo, UC Santa Barbara, USA, Prof. Simone Baldi, TU Delft, The Netherlands,  Prof. Ramon Vilanova, Univ. of Barcelona, Spain, Prof. Hanamoto Tsuyoshi, Kyushu Inst. of Tech., Japan, Prof. Utkal Mehta, Univ. of South Pacific, Fiji, Prof  Manuel Mera HernÃ¡ndez, IPN Mexico, Prof. Kazuto Takashima, Kyushu Inst. of Tech., Japan, Dr. M. Shamsuzzoha, Norner AS, Norway, Prof. Bidyadhar Subudhi, IIT Goa , Prof. Arun Tangirala, IIT Madras, Prof. Sandip Ghosh, IIT (BHU) Varanasi, Dr. Rames Chandra Panda, CSIR-CLRI, Chennai, Prof. Shubhendu Bhasin, IIT Delhi, Prof. Sheshagiri Rao, NIT Warangal, Prof. Manas Kumar Bera, NIT Silchar, Prof. Neeli Satyanarayana, MNIT Jaipur Website Link: https://sites.google.com/nitp.ac.in/retrecse2021/home?authuser=0",
  },
  {
   "Sr.No.": 10,
   Title:
    "Online FDP on Deep Learning for Visual Computing and Communication- DELVICCO 2020 ",
   "Developed/Organized By":
    "Dr. Gagan Deep Meena Dr. R. K. Karsh (NIT Silchar) Co-Coordinator",
   Duration: "15 October, 2020 to 21 October, 2020.",
   "Other detail":
    "jointly by Dept of ECE, NIT Silchar and Electronics and ICT Academy, NIT Patna",
  },
  {
   "Sr.No.": 11,
   Title:
    "Global FDPs, G10: Digital Tools for writing, Authoring and Reviewing Manuscripts",
   "Developed/Organized By":
    "Dr. Gagan Deep Meena as Academy Level Coordinator",
   Duration: "Sept 21 to Oct 02 , 2020",
   "Other detail":
    "Jointly organized by EICT Academies of NIT Patna, MNIT Jaipur, and IIT Guwahati Resource Persons were Faculties from IITs and NITs ",
  },
  {
   "Sr.No.": 12,
   Title:
    "Online FDP on Recent Trends in Control System Engineering (ReTreCSE-2020) ",
   "Developed/Organized By": "Dr. Gagan Deep Meena Dr. G. Lloyds Raja",
   Duration: "22-28 June 2020",
   "Other detail":
    "Resource Persons: - Dr. Shubhendu Bhasin, IIT Delhi, Dr. Ahmad Ali, IIT Patna,  Dr. Abhinoy Kumar Singh, IIT Indore,  Dr. Vidya Sagar Yellapu, SJTU, China, Dr. Neeli Satyanaraya, MNIT Jaipur, Dr. Sumit Jha, MNNIT Allahabad,  Dr. Rahul Radhakrishnan, SVNIT Surat and Control group faculty members of NIT Patna Funded by EICT NIT Patna",
  },
  {
   "Sr.No.": 13,
   Title: "FDP on Theory and Simulations in Robotics (TheSiR-2020)  ",
   "Developed/Organized By": "Dr. Gagan Deep Meena",
   Duration: "01 June to 07 2020",
   "Other detail":
    "Resource Persons: Prof. S. K. Saha, IIT Delhi,  Dr. Suril Shah, IIT Jodhpur, Dr. Amit IIT Jodhpur, Dr. Anup IIT Jodhpur,  Dr. Arun Dayal Udai, IIT(ISM) Dhanbad,  Dr. Aamir Hayat, SUTD Singapore Funded by EICT NIT Patna",
  },
  {
   "Sr.No.": 14,
   Title:
    "Faculty Development Programme on “Advances in Industrial Automation” ",
   "Developed/Organized By": "Dr. D. K. Dheer",
   Duration: "10-14/12/2018",
   "Other detail": "at NSIT, Amhara, Bihta",
  },
  {
   "Sr.No.": 15,
   Title:
    "Five days Faculty Development Program on Advances in Electrical System ",
   "Developed/Organized By": "Dr. Ravi Shankar",
   Duration: "July, 2018",
   "Other detail": "at BIT Sindri",
  },
  {
   "Sr.No.": 16,
   Title: "Workshop on “LabView and its Application”",
   "Developed/Organized By": "Dr. Vimlesh Verma",
   Duration: "14th-18th March 2016",
   "Other detail": "Faculties from IITs and NITs",
  },
  {
   "Sr.No.": 17,
   Title:
    "Workshop on “Control Design, Simulation and Data Acquisition using Labview and Sensor Interfacing”",
   "Developed/Organized By": "Dr. Vimlesh Verma",
   Duration: "5th – 6th April 2016",
   "Other detail": "Faculties from IITs and NITs",
  },
  {
   "Sr.No.": 18,
   Title: "Short Term Course on “Institute-Industry Interaction” ",
   "Developed/Organized By": "Dr. Vimlesh Verma",
   Duration: "5th – 9th Dec. 2016",
   "Other detail": "Faculties from IITs and NITs",
  },
  {
   "Sr.No.": 19,
   Title: "Faculty Development Program Through NKN",
   "Developed/Organized By": "Dr. Vimlesh Verma",
   Duration: "11 – 20 Dec. - 2017",
   "Other detail": "Faculties from IITs and NITs",
  },
  {
   "Sr.No.": 20,
   Title: "Faculty Development Program Through NKN",
   "Developed/Organized By": "Dr. Vimlesh Verma",
   Duration: "01st June - 2018",
   "Other detail": "Faculties from IITs and NITs",
  },
  {
   "Sr.No.": 21,
   Title: "DSP Applications on ARM Platform",
   "Developed/Organized By": "Dr. Arunangshu Ghosh",
   Duration: "7 days (26/08/2016 to 01/09/2016)",
   "Other detail":
    "Prof. S K Sinha (Retd. Prof. IISc Bangalore) Prof. Donald Reay (Heriot-Watt University; Edinburgh, UK.",
  },
  {
   "Sr.No.": 22,
   Title:
    "Short term course(Intelligent sensing technologies and Instrumentation)",
   "Developed/Organized By": "Dr. Arunangshu Ghosh",
   Duration: "5 days (05/0l/2016 to 09/01/2016)",
   "Other detail": "IITs, JU, NIT and Industries (CDAC)",
  },
  {
   "Sr.No.": 23,
   Title:
    "Short term course(Advanced Power Electronics converters for renewable energy and Industrial Drives)",
   "Developed/Organized By": "Dr. Vimlesh Verma",
   Duration: "5 days (14/12/2015 to 18/12/2015)",
   "Other detail": "Faculties from IITs, NITs and Industries (ABB)",
  },
  {
   "Sr.No.": 24,
   Title: "Short term course(Advances in Industrial Control)",
   "Developed/Organized By": "Dr. Nishat Anwar",
   Duration: "5 days (27/l 1/2015 to 1/12/2015)",
   "Other detail": "Faculties from IITs , AMU, NITs and Foreign University.",
  },
  {
   "Sr.No.": 25,
   Title:
    "Short term course Reliability, Availability, Maintainability and Safety (RAMS)",
   "Developed/Organized By": "Dr. Mala De",
   Duration: "2 days (18/04/2015 to 19/04/2015)",
   "Other detail": "Dr. Ajeet Kr PandeyDr. Mukul Verma,Experts from Industries",
  },
  {
   "Sr.No.": 26,
   Title: "Summer School",
   "Developed/Organized By": "Dr. G. K. Choudhury",
   Duration: "1 week (19/10/2012 to 23/10/2012)",
   "Other detail": "Faculties from IITs and NITs",
  },
 ],

 renownedacad: [
  {
   "Sr.No.": 1,
   Title:
    "Introduction to Advanced Distribution Management Systems (ADMS) Organized by IEEE PES Society of EED on Women’s Day",
   "Duration/Venue": "8 March 2024 Online Mode",
   "Resource Persons":
    "Dr. Kamakshi P. Swain, Senior Power Systems Engineer, Synergy Systems and Solutions. ",
  },
  {
   "Sr.No.": 2,
   Title:
    "Robot Demonstration of Robotnik Spain's Mobile Manipulator Integrated with Sensors",
   "Duration/Venue": "20.10.2021 at T&P Cell Seminar Hall SAC NIT Patna",
   "Resource Persons": "Mr. Aditya Marathe, Founder, Nugenix Robotics ",
  },
  {
   "Sr.No.": 3,
   Title: "The Rise of Reconfigurable Robots",
   "Duration/Venue":
    "01.11.2021,Venue: Control Lab, 2nd Floor, New Extension Building",
   "Resource Persons": "Dr. Aamir Abdullah Hayat, SUTD Singapore",
  },
  {
   "Sr.No.": 4,
   Title:
    "Expert classes and discussion session on Power Electronics and Industrial Drives & control",
   "Duration/Venue": "4 days (25/02/2016 to 28/02/2016)",
   "Resource Persons": "Prof. S. K Sinha (Retd Professor IISC Banglore)",
  },
  {
   "Sr.No.": 5,
   Title:
    "DC Motor Speed Control Problem and Discussion on end-to-end Controller Design",
   "Duration/Venue": "4 days (25/02/216 to 28/02/2016)",
   "Resource Persons": "Prof. S.K Sinha (Retd. Prof. IISc Bangalore)",
  },
  {
   "Sr.No.": 6,
   Title: "Power Electronics & Industrial Drive Control",
   "Duration/Venue": "5 days (03/02/2015 to 09/02/2015)",
   "Resource Persons": "J R P Gupta(Professor, DTU)",
  },
  {
   "Sr.No.": 7,
   Title:
    "General overview on Aerospace Industries and equipment and Information on higher studies requirement in USA",
   "Duration/Venue": "1 day on 20/03/2015",
   "Resource Persons":
    "Mr. Fariz Kalim, Manager Project Management and Hardware Development, TELEDYNE CONTROLS",
  },
  {
   "Sr.No.": 8,
   Title: "Commercial Aspects of Solar Energy in Indian Market",
   "Duration/Venue": "1 day on18/03/2015",
   "Resource Persons": "Mr. S. Talapatra(Industry Expert)",
  },
  {
   "Sr.No.": 9,
   Title: "Microcontrollers/ PIC processor/ ARM Processor",
   "Duration/Venue": "1 day on 12/03/2015",
   "Resource Persons": "Radha Narayan Rao(Industry Expert)",
  },
  {
   "Sr.No.": 10,
   Title:
    "Embedded System Design and implementation – case study and discussion",
   "Duration/Venue": "1 day on 29/01/2015",
   "Resource Persons": "Prof. S.K Sinha (Retd. Prof. IISc Bangalore)",
  },
 ],
 research: [
  {
   "Sr.No.": 1,
   "Specialization of the Research": "Power and Energy System",
   "Descriptive Key-word":
    "a)	Power System Protection & PMU b)	Real & Reactive Power Management, Optimal Power Flow c)Renewable energy integration, Operation control & Stability d)Microgrid, Smart-Grid, Restructered Power System, AGC Resiliency & Reliability of Hybrid Power System e)Cyber Security, high performance Computing, Optimization, HVDC & FACTS device application to te Power System.",
  },
  {
   "Sr.No.": 2,
   "Specialization of the Research": "Electrical Machine & Drives",
   "Descriptive Key-word":
    "a)	Sensorless Control of AC Drives.b)	Vector Controlled AC Drives.c)	DTC Controlled AC Drives.d)	Multilevel Converter Fed AC Drives.e)	Multiphase AC motor drive.f)	Dob based control of machine.",
  },
  {
   "Sr.No.": 3,
   "Specialization of the Research": "Control Theory & Practices",
   "Descriptive Key-word":
    "a)	Nonlinear and advanced control techniques (SMC, ADRC, adaptive control, learning based control, non-linear control, optimal control, DOB based control).b)	Applications oriented control (such as control for power electronics, load frequency regulations with cyber security, robotics, radar, dc microgrid, altitude control of flight).c)	Biomedical applications of control, controller design for industrial processes, chemical process control.d)	Digital Control, Discretization techniques, Microprocessor based control.e)	Process modelling and identification, control of waste water treatment plant.",
  },
  {
   "Sr.No.": 4,
   "Specialization of the Research": "Power Electronics & its Application",
   "Descriptive Key-word":
    "a)    Electric Vehicle Chargers & Charging Stations, Converter Control of Motors, Solid State Transformers.b) Analysis, Modelling, and Control of Power Electronics Converters.c)    Renewable Energy & Its Integration; DC, AC, and Hybrid Microgrids; Grid Connected Converters.d)      Multilevel Inverters, Reduced Sensor-based SAPF.e)   Shunt Active Power Filter, Series Active Power Filter.f) UPQC, STATCOM, D-STATCOM, UPFC, DPFC and Power Quality Improvement Techniques.",
  },
  {
   "Sr.No.": 5,
   "Specialization of the Research":
    "Electric Vehicles & Energy Storage System",
   "Descriptive Key-word":
    "a)	Electric Powertrain, Drives and Control.b)	Battery Management and Energy Storage Systems.c)	Charging Infrastructure and Converters.d)	Grid and Renewable Energy Integration",
  },
  {
   "Sr.No.": 6,
   "Specialization of the Research": "Robotics & Automation",
   "Descriptive Key-word":
    "a)	Unmanned aerial and ground vehicles.b)	Bio inspired and Reconfigurable robots.c)	Vision based control and Path planning algorithms.d)	Multi agent systems.e)	Assistive service robots.",
  },
  {
   "Sr.No.": 7,
   "Specialization of the Research": "Instrumental & Signal Processing",
   "Descriptive Key-word":
    "a) Multivariate signal modelling using AI/ML techniques.b)  Sensor array based instrumentation.c)  Sensors and actuators.d) System identification of biochemical processes",
  },
  {
   "Sr.No.": 8,
   "Specialization of the Research": "Semi-Conductor Devices & Circuit System",
   "Descriptive Key-word":
    "a) Design and Fabrication of VLSI and Semiconductor devices.b)  Analog and Mixed Signal Integrated Circuit Design.c)  Fractional-order Circuits and Systems.d) Microelectronics Circuits and Nanotechnology devices.e)  Biosensors, Memory and Neuromorphic Computing.f) Energy Harvesting/Storage Devices, including Solar cells, batteries and fuel cells.",
  },
 ],
 faculty: [
  {
   "Sr.No.": 1,
   Name: "Prof. (Dr.) Girish Kumar Choudhary",
   "Specialization of the Research(Serial No.)": "On-lien",
   "No. of Publications in SCI/SCIE indexed Journal": "",
   "No. of Phd Guided": "",
   "No. of Patent Granted": "",
   "No. of externally Sponsored Project (Completed/ongoing)": "",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=girish@nitp.ac.in",
  },
  {
   "Sr.No.": 2,
   Name: "Prof. (Dr.) Ramesh Kumar ",
   "Specialization of the Research(Serial No.)": "1 & 3",
   "No. of Publications in SCI/SCIE indexed Journal": "",
   "No. of Phd Guided": "02",
   "No. of Patent Granted": "00",
   "No. of externally Sponsored Project (Completed/ongoing)": "",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=ramesh@nitp.ac.in",
  },
  {
   "Sr.No.": 3,
   Name: "Dr. Rajib Kumar Mandal ",
   "Specialization of the Research(Serial No.)": "1, 4 & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "25",
   "No. of Phd Guided": "03",
   "No. of Patent Granted": "00",
   "No. of externally Sponsored Project (Completed/ongoing)": "01",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=rajib@nitp.ac.in",
  },
  {
   "Sr.No.": 4,
   Name: "Dr. Mala De ",
   "Specialization of the Research(Serial No.)": "1",
   "No. of Publications in SCI/SCIE indexed Journal": "28",
   "No. of Phd Guided": "04",
   "No. of Patent Granted": "02",
   "No. of externally Sponsored Project (Completed/ongoing)": "01",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=mala@nitp.ac.in",
  },
  {
   "Sr.No.": 5,
   Name: "Dr. Vimlesh Verma ",
   "Specialization of the Research(Serial No.)": "2, 4, & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "25",
   "No. of Phd Guided": "05",
   "No. of Patent Granted": "04",
   "No. of externally Sponsored Project (Completed/ongoing)": "02",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=vimlesh.verma@nitp.ac.in",
  },
  {
   "Sr.No.": 6,
   Name: "Dr. Jayanti Choudhary ",
   "Specialization of the Research(Serial No.)": "2, 4, & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "01",
   "No. of Phd Guided": "00",
   "No. of Patent Granted": "00",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=jayanti@nitp.ac.in",
  },
  {
   "Sr.No.": 7,
   Name: "Dr. Md Nishat Anwar ",
   "Specialization of the Research(Serial No.)": "1, 2, 3 & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "30",
   "No. of Phd Guided": "02",
   "No. of Patent Granted": "03",
   "No. of externally Sponsored Project (Completed/ongoing)": "02",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=nishat@nitp.ac.in",
  },
  {
   "Sr.No.": 8,
   Name: "Dr. Arunangshu Ghosh ",
   "Specialization of the Research(Serial No.)": "6 & 7",
   "No. of Publications in SCI/SCIE indexed Journal": "26",
   "No. of Phd Guided": "01",
   "No. of Patent Granted": "02",
   "No. of externally Sponsored Project (Completed/ongoing)": "04",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=arunangshu.ghosh@nitp.ac.in",
  },
  {
   "Sr.No.": 9,
   Name: "Dr. Sanjeev Kumar Mallik ",
   "Specialization of the Research(Serial No.)": "1, 4 & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "04",
   "No. of Phd Guided": "02",
   "No. of Patent Granted": "0",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=skmallik@nitp.ac.in",
  },
  {
   "Sr.No.": 10,
   Name: "Dr. Ravi Shankar ",
   "Specialization of the Research(Serial No.)": "1 & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "27",
   "No. of Phd Guided": "05",
   "No. of Patent Granted": "02",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=ravi@nitp.ac.in",
  },
  {
   "Sr.No.": 11,
   Name: "Dr. Dharmendra Kumar Dheer ",
   "Specialization of the Research(Serial No.)": "1,3,5 & 6",
   "No. of Publications in SCI/SCIE indexed Journal": "27",
   "No. of Phd Guided": "02",
   "No. of Patent Granted": "00",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=dkdheer@nitp.ac.in",
  },
  {
   "Sr.No.": 12,
   Name: "Dr. Ashiwani Kumar ",
   "Specialization of the Research(Serial No.)": "1 & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "05",
   "No. of Phd Guided": "00",
   "No. of Patent Granted": "01",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=ashwani@nitp.ac.in",
  },
  {
   "Sr.No.": 13,
   Name: "Dr. Ambarisha Mishra ",
   "Specialization of the Research(Serial No.)": "2,4 & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "06",
   "No. of Phd Guided": "02",
   "No. of Patent Granted": "00",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=ambrish.mishra@nitp.ac.in",
  },
  {
   "Sr.No.": 14,
   Name: "Dr. Moina Ajmeri ",
   "Specialization of the Research(Serial No.)": "3,4 & 6",
   "No. of Publications in SCI/SCIE indexed Journal": "06",
   "No. of Phd Guided": "01",
   "No. of Patent Granted": "01",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=moina@nitp.ac.in",
  },
  {
   "Sr.No.": 15,
   Name: "Dr. M SENTHIL KUMAR ",
   "Specialization of the Research(Serial No.)": "1",
   "No. of Publications in SCI/SCIE indexed Journal": "05",
   "No. of Phd Guided": "00",
   "No. of Patent Granted": "02",
   "No. of externally Sponsored Project (Completed/ongoing)": "01",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=msk.ee@nitp.ac.in",
  },
  {
   "Sr.No.": 16,
   Name: "Dr. G. Lloyds Raja ",
   "Specialization of the Research(Serial No.)": "3",
   "No. of Publications in SCI/SCIE indexed Journal": "25",
   "No. of Phd Guided": "01",
   "No. of Patent Granted": "01",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=lloyds.ee@nitp.ac.in",
  },
  {
   "Sr.No.": 17,
   Name: "Dr. Gagan Deep Meena ",
   "Specialization of the Research(Serial No.)": "3, 5,6 & 7",
   "No. of Publications in SCI/SCIE indexed Journal": "01",
   "No. of Phd Guided": "00",
   "No. of Patent Granted": "00",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=gagandeep.ee@nitp.ac.in",
  },
  {
   "Sr.No.": 18,
   Name: "Dr. Amitesh Kumar ",
   "Specialization of the Research(Serial No.)": "1,5 & 8",
   "No. of Publications in SCI/SCIE indexed Journal": "35",
   "No. of Phd Guided": "02",
   "No. of Patent Granted": "02",
   "No. of externally Sponsored Project (Completed/ongoing)": "01",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=amitesh.ee@nitp.ac.in",
  },
  {
   "Sr.No.": 19,
   Name: "Dr. Trilochan Penthia ",
   "Specialization of the Research(Serial No.)": "4 & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "09",
   "No. of Phd Guided": "00",
   "No. of Patent Granted": "00",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=trilochan.ee@nitp.ac.in",
  },
  {
   "Sr.No.": 20,
   Name: "Dr. Ajit Kumar ",
   "Specialization of the Research(Serial No.)": "1 & 3",
   "No. of Publications in SCI/SCIE indexed Journal": "07",
   "No. of Phd Guided": "00",
   "No. of Patent Granted": "00",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=ajitk.ee@nitp.ac.in",
  },
  {
   "Sr.No.": 21,
   Name: "Dr. Ruchi Agarwal ",
   "Specialization of the Research(Serial No.)": "4",
   "No. of Publications in SCI/SCIE indexed Journal": "01",
   "No. of Phd Guided": "01",
   "No. of Patent Granted": "01",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=ruchi.agarwal@nitp.ac.in",
  },
  {
   "Sr.No.": 22,
   Name: "Dr. Aasim ",
   "Specialization of the Research(Serial No.)": "1 & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "04",
   "No. of Phd Guided": "00",
   "No. of Patent Granted": "00",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=aasim.ee@nitp.ac.in",
  },
  {
   "Sr.No.": 23,
   Name: "Dr. Ajishek Raj ",
   "Specialization of the Research(Serial No.)": "3 & 8",
   "No. of Publications in SCI/SCIE indexed Journal": "25",
   "No. of Phd Guided": "00",
   "No. of Patent Granted": "00",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=ajishek.ee@nitp.ac.in",
  },
  {
   "Sr.No.": 24,
   Name: "Dr. Saran Satsangi ",
   "Specialization of the Research(Serial No.)": "1 & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "07",
   "No. of Phd Guided": "00",
   "No. of Patent Granted": "01",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=saran.ee@nitp.ac.in",
  },
  {
   "Sr.No.": 25,
   Name: "Dr. Pawan kumar ",
   "Specialization of the Research(Serial No.)": "2,4 & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "00",
   "No. of Phd Guided": "00",
   "No. of Patent Granted": "00",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=pawan.ee@nitp.ac.in",
  },
  {
   "Sr.No.": 26,
   Name: "Dr. Dhruba Kumar ",
   "Specialization of the Research(Serial No.)": "1",
   "No. of Publications in SCI/SCIE indexed Journal": "04",
   "No. of Phd Guided": "00",
   "No. of Patent Granted": "01",
   "No. of externally Sponsored Project (Completed/ongoing)": "00",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=dhruba.ee@nitp.ac.in",
  },
  {
   "Sr.No.": 27,
   Name: "Dr. Bineeta Mukhopadhyay",
   "Specialization of the Research(Serial No.)": "1,4 & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "",
   "No. of Phd Guided": "NA",
   "No. of Patent Granted": "NA",
   "No. of externally Sponsored Project (Completed/ongoing)": "NA",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=contract.faculty1.ee@nitp.ac.in",
  },
  {
   "Sr.No.": 28,
   Name: "Dr. Sanjeev Kumar",
   "Specialization of the Research(Serial No.)": "6 & 7",
   "No. of Publications in SCI/SCIE indexed Journal": "",
   "No. of Phd Guided": "NA",
   "No. of Patent Granted": "NA",
   "No. of externally Sponsored Project (Completed/ongoing)": "NA",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=contract.faculty2.ee@nitp.ac.in",
  },
  {
   "Sr.No.": 29,
   Name: "Dr. Pankaj Sahu",
   "Specialization of the Research(Serial No.)": "2,4 & 5",
   "No. of Publications in SCI/SCIE indexed Journal": "",
   "No. of Phd Guided": "NA",
   "No. of Patent Granted": "NA",
   "No. of externally Sponsored Project (Completed/ongoing)": "NA",
   "More Details (Home Page Link)":
    "https://www.nitp.ac.in/profile?id=contract.faculty3.ee@nitp.ac.in",
  },
 ],
 //  <th>Name of the faculty</th>
 //  <th>Mail</th>
 //  staffmember: [
 //   {
 //    "S.No.": 1,
 //    Name: "Sri Atul Kumar",
 //    Designation: "Sr. Technical Assistant",
 //    "Contact details": "atulkumar@nitp.ac.in",
 //    Qualification: "B.Tech in Mechanical Engineering",
 //    //Status: "completed"
 //   },
 //   {
 //    "S.No.": 2,
 //    Name: "Shad Ali Sabari ",
 //    Designation: "Sr. Technical Assistant ",
 //    "Contact details": "shad@nitp.ac.in  ",
 //    Qualification: " B.Tech in Mechanical Engineering",
 //    //Status: "Completed",
 //   },
 //   {
 //    "S.No.": 3,
 //    Name: "Md. Wahajul Haque ",
 //    Designation: " Sr. Technical Assistant",
 //    "Contact details": "wahajul@nitp.ac.in ",
 //    Qualification:
 //     "B.Tech in Mechanical Engineering and Pursuing Ph.D. at NIT Patna ",
 //    //Status: "Completed",
 //   },
 //   {
 //    "S.No.": 4,
 //    Name: " Sri Surendra Kumar",
 //    Designation: "Technical Assistant ",
 //    "Contact details": "surendra.me@nitp.ac.in ",
 //    Qualification: "B.E in Mechanical Engineering ",
 //    Status: "Completed",
 //   },
 //   {
 //    "S.No.": 5,
 //    Name: "Sri Amresh kumar ",
 //    Designation: "Technical Assistant ",
 //    "Contact details": "amresh.me@nitp.ac.in ",
 //    Qualification: " Diploma in Mechanical Engineering & I.Sc",
 //    Status: "Completed",
 //   },
 //   {
 //    "S.No.": 6,
 //    Name: " Sri Vaidhnath Kumar",
 //    Designation: " Technical Assistant",
 //    "Contact details": "vaidhnath.me@nitp.ac.in ",
 //    Qualification: "B.Tech in Mechanical Engineering ",
 //    Status: "Completed",
 //   },
 //   {
 //    "S.No.": 7,
 //    Name: "Sri Subodh Kumar ",
 //    Designation: " Junior Assistant",
 //    "Contact details": "subodh.ja@nitp.ac.in",
 //    Qualification: " B.A. ( Honours ) in History",
 //    Status: "Completed",
 //   },
 //   {
 //    "S.No.": 8,
 //    Name: "Sri UpendraLal ",
 //    Designation: "Sr. Technician ",
 //    "Contact details": " upendralalnit@gmail.com",
 //    Qualification: "Intermediate  ",
 //    Status: "Completed",
 //   },
 //   {
 //    "S.No.": 9,
 //    Name: " Sri Bharat Bhushan Sharma",
 //    Designation: " Sr. Office Attendant",
 //    "Contact details": " ",
 //    Qualification: " ",
 //    Status: "Completed",
 //   },
 //   {
 //    "S.No.": 10,
 //    Name: "Sri Birendra Singh ",
 //    Designation: "Office Attendant, SG-II ",
 //    "Contact details": "Birendrasinghnitp@gmail.com",
 //    Qualification: " ",
 //    Status: "Completed",
 //   },
 //  ],
}
// export const Labs = [
//   {
//     content: (
//       <>
//         <h2>Laboratory Facilities Available in the Department:-</h2>

//         <ol type="1">
//           <li>Elements of Electrical Engg. Lab.</li>
//           <li>Electrical M/C Lab</li>
//           <li>Power System Protection Lab</li>
//           <li>Power Electronics Lab</li>
//           <li>Computer Lab</li>
//           <li>Microprocessor and Microcontroller Lab</li>
//           <li>Network theory Lab</li>
//           <li>Control System Lab</li>
//           <li>Measurement Lab</li>
//           <li>High Voltage Lab</li>
//           <li>SCADA Lab</li>
//         </ol>
//       </>
//     ),
//     // image: (
//     //   <img src={${home}images/image_ele.jpg} style={{ width: "100%" }}></img>
//     // ),
//   },
//   {
//     content: (
//       <>
//         <h2>
//           The following facilities are available in the department for carrying
//           out research:-
//         </h2>
//         <br />
//         <ol type="1">
//           <li>
//             A high end SCADA Lab is provided to the students to carry out
//             experiments related to their research.
//           </li>
//           <li>
//             Available simulation softwares include, MATLAB, Power World
//             Simulator, Cadence-OrCAD, PSIM, LabView(NI).
//           </li>
//           <li>
//             The hardware interface currently available in the department is
//             Typhoon, HIL.
//           </li>
//           <li>
//             Three high end Labs with state-of-the-art facilities are coming up
//             shortly. This include, Advanced Industrial Drives Lab, Advanced
//             Control System lab and Advanced Instrumentation lab.
//           </li>
//           <br />
//           <br />
//           The laboratory under this department includes Basic Electrical
//           Engg.,Electrical Machines, Network Theory, Signals & Systems, and
//           Instrumentation, High Voltage Engg., Microprocessor, Switchgear &
//           protection labs. All labs are equipped with machines and instruments
//           to meet the requirement of UG and PG course Curriculum as well as
//           research & development work being under taken by students and faculty.
//           The department has a Computer Lab with all hardware and software
//           facilities to meet the requirements of system modeling and analog and
//           digital circuit simulation. The department has Analog and Digital
//           Circuit Simulation software for analysis, PCB layout, MATLAB software
//           for modeling, simulation of signals and systems and Power World
//           Simulator for power system study.
//           <br />
//           The aim of the department is to equip the different labs for modern
//           course curriculum in the field of engineering & technology. In order
//           to carryout research, development and consultancy work in active
//           participation with the industry. The department is in process of
//           establishing labs for computer based process control and digital
//           signal processing. Very recently the department has established a high
//           end SCADA lab with a expense of more than 5 crores which is used for
//           final year ug and pg laboratories and also for research purpose by PhD
//           scholars of the department.
//           <br />
//           We are planning to start training courses for industry personnel and
//           academicians in this facility to generate revenue for the department/
//           college.
//         </ol>
//       </>
//     ),
//   },
// ]

export const Labs = {
 content: (
  <>
   <h3>Laboratory Facilities Available in the Department:-</h3>

   <ol type="1">
    <li>Elements of Electrical Engg. Lab.</li>
    <li>Electrical M/C Lab</li>
    <li>Power System Protection Lab</li>
    <li>Power Electronics Lab</li>
    <li>Computer Lab</li>
    <li>Microprocessor and Microcontroller Lab</li>
    <li>Network theory Lab</li>
    <li>Control System Lab</li>
    <li>Measurement Lab</li>
    <li>High Voltage Lab</li>
    <li>SCADA Lab</li>
    <li>Industrial Drives and Control Lab</li>
    <li>
     Advanced Instrumentation Lab
     <li>Power system Lab (upcoming) </li>
    </li>
   </ol>
   <h3>Research Laboratories</h3>
   <p>
    The Department of Electrical Engineering has multiple
    laboratories/facilities which are engaged in interesting and cutting-edge
    research projects. The details of those laboratories are as follows:
    <br />
    <br />
    <h3>
     <strong>1. Advanced Instrumentation Lab: </strong>
    </h3>
    <br />
    Dr. Arunangshu Ghosh with his team of students is working towards the
    development of a portable electronic tongue for estimation of tea quality
    and spoilage detection of food samples. The other work in progress is
    development of the Potentiostat System for General Purpose Electro-Chemical
    Applications. These systems are developed to develop automated systems for
    quality analysis of different agricultural and food samples. Besides,
    technology using near infrared spectroscopy based development (NIR) is also
    being carried out for developing non-invasive, portable and optical
    solutions for quality analysis of food samples. Software like Matlab,
    LABView, and MPLAB are regularly used to train students for carrying out
    researches in this lab. Two externally sponsored research projects have been
    completed successfully in this laboratory.
    <br />
    <br />
    <h3>
     <strong>2. Control Lab: </strong>
    </h3>
    A project design and development of low-cost BLDC motor drive for solar PV
    based irrigation system. One externally sponsored research project has been
    completed successfully in this laboratory
    <br />
    <h3>
     <strong> 3. Industrial Drives and Control Lab:</strong>
    </h3>
    The group of students led by Dr. Vimlesh Verma works towards the development
    of control techniques for electrical machine drives. High end hardware
    simulators like HIL, and software like DSpace are a part of this lab. One
    externally sponsored research project has been completed successfully in
    this laboratory.
    <br />
    <h3>
     <strong>4.SCADA Lab:</strong>
    </h3>
    This space is equipped with the facilities where Interfacing of wind
    turbines with power systems and realization of hardware of grid using
    supervisory control can be done by masters and PhD students.
    <br />
    <h3>
     <strong> 5. NIT Patna campus smart metered distribution system:</strong>
    </h3>
    This enables us to get the real time measurement of power, current,
    frequency, voltage and other electrical parameters throughout the system at
    different nodes. The dataset created acts as an asset and allows us to work
    further on load forecasting, demand side management, generation and
    distribution planning, also renewable generation planning). One externally
    sponsored research project under Dr. Mala De has been completed successfully
    in this laboratory.
    <br />
    <h3>
     <strong> 6. Power electronics Lab:</strong>
    </h3>
    A team of students along with Dr. Ambarisha Mishra is working on a six-phase
    induction motor drive.
    <br /> 
   </p>
  </>
 ),
}

export const LabImages = [
 <img src={`${home}DSC_0056.jpg`} />,
 <img src={`${home}DSC_0057.jpg`} />,
 <img src={`${home}DSC_0058.jpg`} />,
 <img src={`${home}DSC_0061.jpg`} />,
 <img src={`${home}DSC_0063.jpg`} />,
 // <img src={${home}images/a_model.jpg} />,
]

export const Achievements = [
 {
  content: (
   <>
    <h2>
     <strong>Notable achievements by students: </strong>
    </h2>
    <ul>
     <li>Abhash Kumar – secured All India Rank 1 in GATE EE 2020.</li>
     <li>
      Sudhakar Kumar – secured All India Rank 9th Engineering Service
      Examination (ESE 2015).
     </li>
     <li>
      Amratansh Gupta – secured All India Rank 88 in GATE 2020 and currently he
      is a Ph.D. researcher with Department of Electronics and Informatics of
      Vrije Universiteit Brussel.
     </li>
    </ul>
    <h2>
     <strong>Consistent performance in GATE</strong>
    </h2>
    <ul>
     <li>
      GATE 2024 Performers
      <ul>
       <li>
        {" "}
        Mayank Jaiman (Roll No. Graduating Year: 2022) secured AIR 25 in the
        discipline of EE.
       </li>
       <li>
        Manish Choudhary (Roll No.1802113 Graduating Year: 2022) AIR 519.
       </li>
       <li>
        {" "}
        Jitendra Kumar (Roll No.1802102, Graduating Year: 2022) (Maruti Suzuki
        India Ltd.) AIR 600{" "}
       </li>
       <li> Adarsh Kumar (Roll No.1802005, Graduating Year: 2022) AIR 711.</li>
      </ul>
     </li>
     <li>
      {" "}
      Lakshay Narnauli (Roll No. 1402023, Graduating Year: 2018) (IOCL) AIR 288
      in GATE 2023.{" "}
     </li>
     <li>
      {" "}
      Manish Bajya (Roll No. 1802109, Graduating Year: 2022) (KRIBHCO) secured
      AIR-887 Rank in GATE-EE 2022.
     </li>
     <li>
      {" "}
      Rajan Kumar Pandey (Roll No.1802023 Graduating Year: 2022) at Capgemini as
      Associate -II Software Engineer cleared GATE 2021.
     </li>
    </ul>
   </>
  ),
 },
 {
  content: (
   <>
    <h2>
     <strong>Performers at their workplace </strong>
    </h2>
    <ul>
     <li>
      Anjali (Roll No. 1902045; Graduating Year:2023) working as Pre-Sales
      Consultant at O9 Solutions Management Pvt Ltd received SPOT Award
     </li>
     <li>
      Tanishq Singh (Roll No. 1802100 Graduating Year: 2022) Winner of Tata
      Crucible Hackathon 2022 East Region, Winner of IMS case study challenge
      2022, Applause/Spot Awards in Deloitte for exceptional performance.
     </li>
     <li>
      Akansh Omar (Roll No. 1802117 Graduating Year: 2022) Received Applause
      Award and Spot Award.
     </li>
     <li>
      Digvijay Verma (Roll No. 1702033 Graduating Year: 2021) working at Maruti
      Suzuki India Limited as Assistant Manager bagged Star Executive Award in
      Tata Power Delhi Distribution Limited for reducing commercial loss by 12%.
      He also won Gold Award in ICQC 2023- For project of curbing Theft in
      village area distribution network.
     </li>
     <li>
      Rashika Singh (Roll No. 1702101 Graduating Year: 2021) working at Alstom
      Transport India Limited as V&V Designer won Bronze Award in December 2022
      for exceptional work in NCRTC-RRTS Project of India.
     </li>
     <li>
      Amratansh Gupta (Roll No. 1402061 Graduating Year: 2018) as Semiconductor
      Research at IMEC; He received JN Tata Scholar Award (2023), Secured All
      India Rank 88 in GATE-EC 2020, and published Two IEEE Transactions on
      Electron Devices Journal Papers from Master thesis at IISc Bangalore.
     </li>
     <li>
      Tarkeshwer Narayan Gaur (Roll No. 140061 Graduating Year: 2018) at
      Highradius Technologies Pvt Ltd as Senior Consultant- II (Solution
      Architect) emerged as Employee of the quarter (HighFlyer Award).
     </li>
     <li>
      Pranjal Kumar (Roll no. 1702084 Graduating Year: 2021) at L&T Construction
      as Senior Engineer- Electrical Rated as top performer in the FY22-23.
     </li>
     <li>
      Anil Kumar (Roll no. 1802088 Graduating Year: 2022) at Zetwerk
      manufacturing private limited as SDE-1 received Appreciation award.
     </li>
    </ul>
    <h2>
     <strong>Students Selected for Industrial / Academic Internship:</strong>
    </h2>
   </>
  ),
 },
 {
  content: (
   <>
    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Roll No</th>
       <th>Name</th>
       <th>Academic / Industrial</th>
       <th>Organisation</th>
      </tr>
     </thead>
     <tbody>
      {Tables.studentSelectedForInternships.map((row, idx) => (
       <tr key={idx}>
        <td>{row["Roll No"]}</td>
        <td>{row.Name}</td>
        <td>{row["Academic / Industrial"]}</td>
        <td>{row.Organisation}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </>
  ),
 },
 {
  content: (
   <>
    <h2>
     <strong>List of Publications by Students:</strong>
    </h2>
    <ol type="1">
     {/* <li>
      Saragdhara Bhattacharya, MunjiLalithaKumari,
      <strong>M MChoudhary</strong>;{" "}
      <strong>
       &ldquo;Design of power system stabilizer by frequency response and
       state-space method&rdquo;
      </strong>
      ; <em>IEEE ISCO16 Coimbatore Feb 02, 2016</em>
     </li> */}
     <li>
      {" "}
      Kamakshi Prashadini Swain, Prakash Lakhara, Kapish Khetan, Siddhant
      Mishra, Mala De, “Efficient hybrid pricing for optimal DSM of home energy
      management system utilizing load precedence” International Transactions on
      Electrical Energy Systems, volume 31, No. 3, Jan. 2021.
     </li>
     <li>
      {" "}
      Shweta Kumari, Pulakraj Aryan and G. Lloyds Raja, Design and simulation of
      a novel FOIMC-PD/P double-loop control structure for CSTRs and
      bioreactors, Int. J. Chem. React. Eng., 2021,
      doi.org/10.1515/ijcre-2021-0140.{" "}
     </li>
     <li>
      {" "}
      Prakash, A., & Meena, G. (2021). Observer design for apex height and
      vertical velocity of a single-leg hopping robot during stance phase.
      Robotica, Cambridge University Press, 1-12. doi:10.1017/S0263574721001429.{" "}
     </li>
     <li>
      {" "}
      B. S. Shiva, C. D. Kumar & V. Verma, “Single Sensor Based Vector
      Controlled PMSM Drive”, IEEE -PEDES, Jaipur, Dec. – 2020.{" "}
     </li>
     <li>
      {" "}
      B. S. Shiva, C. D. Kumar & V. Verma, “Speed Sensorless Vector Controlled
      PMSM Drive with A Single Current Sensor”, IEEE -PEDES, Jaipur, Dec. –
      2020.{" "}
     </li>
     <li>
      {" "}
      C. D. Kumar, B. S. Shiva & V. Verma, “Vector Control of PMSM Drive with
      Single Current Sensor”, In the Conf. Proc. of SCES 2020, MNNIT Allahabad,
      India.
     </li>
     <li>
      {" "}
      Y. A. Khan, I. S. Twinkle, S. Kumar & V. Verma, “Comparative Analysis of
      Different Converter Topologies for an SRM Drive with Conventional and
      Vector Control Schemes”, In the Conf. Proc. of IEEE-ICEFEET 2020, NIT
      Patna, India.
     </li>
     <li>
      {" "}
      Sweta Kumari and Rajib Kumar Mandal, Effectiveness of Space Vector PWM in
      Three-Phase Inverter, ICEFEET-2020
     </li>
     <li>
      {" "}
      Ashutosh Kumar Singh, Rajib Kumar Mandal, Ravi Raushan and Pratyush Gauri,
      Design and Analysis of the Gate Driver Circuit for Power Semiconductor
      Switches, ICEFEET 2020
     </li>
     <li>
      {" "}
      Ashutosh Kumar Singh, Rajib Kumar Mandal, Ravi Raushan and Pratyush Gauri,
      Grid Connected Photovoltaic Systems with Multilevel Inverter, ICEFEET 2020{" "}
     </li>
     <li>
      {" "}
      Md Irfan Ahmed, Prateem Pan, Ramesh Kumar and R. K. Mandal, Wind
      Generation Forecasting Using Python, ICEFEET-2020{" "}
     </li>
     <li>
      AK Singh, RK Mandal, V Raj, P Gauri, Design of Autonomous Electric Vehicle
      Detecting the Roadside Buildings, 2020 IEEE First International Conference
      on Smart Technologies for Power{" "}
     </li>
     <li>
      {" "}
      Sariki Murali, Ravi Shankar, Shivam Shrivastav, Utkarsh Dhawal and Vishal
      Kannaujia, LFC Scheme for A Deregulated Multi-Area Power System using
      Cascaded Fractional Order Controller, ICEFEET-2020{" "}
     </li>
     <li>
      {" "}
      A. Mishra, Anita Bharti, Anjali Kumari, Apurba Paul, “Transmission Line
      Inspection Robot:A Novel Approach,” 6th International Conference on
      Nanoelectronics Circuits & Communication Systems (NCCS-2020), IETE & ISVE
      Ranchi Centre, 19-20 Dec 2020.{" "}
     </li>
     <li>
      {" "}
      M. S. Ahmed and A. Mishra, "Analysis of 5-Phase IM Drive with Reduced
      Switch 5-Level Inverter," 2020 IEEE Students Conference on Engineering &
      Systems (SCES), Prayagraj, India, 2020, pp. 1-5.
     </li>
     <li>
      {" "}
      S. Ahmad and A. Mishra, "Mathematical Modelling, Simulation and Control of
      Five-Phase Induction Motor Drives," 2020 International Conference on
      Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET),
      Patna, India, 2020, pp. 1-4.{" "}
     </li>
     <li>
      {" "}
      A. Mishra, Sartaj Ahmed, Vikram Kuma, “Performance Investigation of
      Multi-phase IM Drive with Five-level Inverter under Fault Conditions”, 6th
      International Conference on Nanoelectronics Circuits & Communication
      Systems (NCCS-2020), IETE & ISVE Ranchi Centre, 19-20 Dec 2020.{" "}
     </li>
     <li>
      {" "}
      Dibya Bharti, Meera Sinha, Sukanya, Mala De, “Multiobjective Optimization
      Based Resource Utilization with Loss Minimization in Microgrid”, IEEE
      region 10 Symposium (Tensymp 2019), Tensymp, IEEE PES Society,
      (Piscataway, NJ, USA) Jun. 2019.
     </li>
     <li>
      {" "}
      Madhusudan Kumar and M. De, Optimal Load Scheduling for Industrial
      Load-Analysis for a Generalized Industrial Load Model, 8th International
      Conference ICPS 2019. Jaipur, December - 2019,
      DOI:10.1109/ICPS48983.2019.9067735.{" "}
     </li>
     <li>
      {" "}
      R. Kumar, V. Verma, Y.A. Khan, B. S. Shiva, “Q-MRAS Based Speed Sensorless
      Vector Controlled Synchronous Reluctance Motor Drive”, 1st International
      Conference on International Conference on Power Electronics Applications
      and Technology in Present Energy Scenario (PETPES-2019).{" "}
     </li>
     <li>
      {" "}
      Sanjeev Kumar, Manish Kumar, Arunangshu Ghosh, A New Approach of Modeling
      the Electronic Tongue Sensors for Classification, IEEE Sensors 2018
      Conference, New Delhi, India, October 28-31, 2018, DOI:
      10.1109/ICSENS.2018.8589601.{" "}
     </li>
     <li>
      {" "}
      Manish Kumar, Sanjeev Kumar, Amratansh Gupta, Arunangshu Ghosh,
      Development of Electronic Interface for Sensing Applications with
      Voltammetric Electronic Tongue, IEEE Sensors 2018 Conference, New Delhi,
      India, October 28-31, 2018, DOI: 10.1109/ICSENS.2018.8589506,{" "}
     </li>
     <li>
      {" "}
      Sanjeev Kumar, Prince Kumar, Arunangshu Ghosh, Independent Component
      Regression for the Development of Prediction Model for Analysis of
      Electronic Tongue Response, Fifth International Conference on Emerging
      Applications of Information Technology (EAIT), IIEST, Shibpur, Howrah,
      12-13 Jan, 2018, Pages:1-4, 10.1109/EAIT.2018.8470427, DOI:
      10.1109/EAIT.2018.8470427
     </li>
     <li>
      {" "}
      Vibhas K Vats, Sneha Rai, Suddhasil De, Mala De, “Very Short-Term,
      Short-Term and Mid-Term Load Forecasting for Residential Academic
      Institute: A Case Study”, Nanoelectronics, Circuits and Communication
      Systems (NCCS 2018), LNEE Springer Verlag (Berlin/ Heidelberg, Germany),
      Nov.2018.
     </li>
     <li>
      {" "}
      Vibhas K Vats, Sneha Rai, Dibya Bharti, Mala De, “Mitigating Eect of
      Communication Link Failure in Smart Meter based Load Forecasting”, ICCCA
      2018, IEEE (Piscataway, NJ, USA), Dec. 2018.{" "}
     </li>
     <li>
      {" "}
      S. S. Kashyap and M. De, “Loss Allocation and Loss Minimization for Radial
      Distribution System including DGs”, IET Renewable Power Generation, In
      Press, 2017.{" "}
     </li>
     <li>
      {" "}
      Ambuj Saxena, M. De, Demand Response Management of Residential Loads with
      Integrated Temperature Dependent Appliances, 5th International Conference
      on Emerging Applications of Information Technology (EAIT’18), 1-4, IEEE,
      New York, NY, USA, 2017.{" "}
     </li>
     <li>
      {" "}
      Navjeet Singh, M. De, Kamakshi P. Swain, Analysis of a PV System under
      Partially Shaded Condition using Enhanced PV Model, 7th International
      Conference on Power Systems (ICPS’17), 1-6, IEEE, New York, NY, USA, 2017.{" "}
     </li>
     <li>
      {" "}
      A. Sinha and M. De, "Load shifting technique for reduction of peak
      generation capacity requirement in smart grid," 2016 IEEE 1st
      International Conference on Power Electronics, Intelligent Control and
      Energy Systems (ICPEICES), 2016, pp. 1-5, doi:
      10.1109/ICPEICES.2016.7853528.
     </li>
     <li>
      {" "}
      Md S. Alam and M. De, “Optimal Reactive Power Dispatch using Hybrid
      Loop-Genetic based Algorithm”, Proc. 19th National Power System Conference
      (NPSC) 2016, Bhubaneswar, Odisha (December 19-21, 2016).{" "}
     </li>
     <li>
      {" "}
      K. P. Swain and M. De, “Loss Allocation Method Independent of Dynamic Load
      Variation”, Proc. IEEE 7th India International Conference on Power
      Electronics (IICPE) 2016, Patiala, Punjab (November 17-19, 2016).{" "}
     </li>
     <li>
      S. S. Kashyap and M. De, “A Novel Loss Allocation Method for Radial
      Distribution System with Distributed Generations”, Proc. 1st IEEE
      International Conference on Power Electronics, Intelligent Control and
      Energy Systems (PEICES) 2016, New Delhi (July 4-6, 2016).{" "}
     </li>
     <li>
      {" "}
      A. Sinha and M. De, “Load Shifting Technique for Reduction of Peak
      Generation Capacity Requirement in Smart Grid”, Proc. 1st IEEE
      International Conference on Power Electronics, Intelligent Control and
      Energy Systems (PEICES) 2016, New Delhi (July 4-6, 2016).{" "}
     </li>
     <li>
      {" "}
      K. Shahid and M. De, “Short Term Reactive Power Dispatch Using a Novel
      Pricing Structure for Synchronous Condenser”, Proc. 12th Annual IEEE India
      Conference (INDICON) 2015, New Delhi (December 17-20, 2015).{" "}
     </li>
    </ol>
   </>
  ),
 },
]

// export const Staff = [
//   {
//    title: <h2>Non</h2>,
//    content: (
//     <table className="table-act">
//      <thead>
//       <tr className="syllabus-table-head">
//        <th>S.No.</th>
//        <th>Name</th>
//        <th>Designation</th>
//        <th>Contact details</th>
//        <th>Qualification</th>
//        {/* <th>Photo</th> */}
//       </tr>
//      </thead>
//      <tbody>
//       {Tables.staffmember.map((row, idx) => (
//        <tr key={idx}>
//         <td>{row["S.No."]}</td>
//         <td>{row["Name"]}</td>
//         <td>{row["Designation"]}</td>
//         <td>{row["Contact details"]}</td>
//         <td>{row["Qualification"]}</td>
//         {/* <td>{
//            <img
//       src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1ZTd8RKh4GeeBHokdnK0q01hw2sqo9uXB"
//       alt="hodImage"
//     />
//      }</td> */}
//        </tr>
//       ))}
//      </tbody>
//     </table>
//    ),
//   },
//  ]
export const Research = [
 {
  content: (
   <>
    <h3>
     Broadly research area of Electrical Engineering department are classified
     as below::&nbsp;-
    </h3>

    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Sr. No.</th>
       <th>Specialization of the Research</th>
       <th>Descriptive Key-word</th>
      </tr>
     </thead>{" "}
     <tbody>
      {Tables.research.map((row, idx) => (
       <tr key={idx}>
        <td>{row["Sr.No."]}</td>
        <td>{row["Specialization of the Research"]}</td>
        <td>{row["Descriptive Key-word"]}</td>
       </tr>
      ))}
     </tbody>
    </table>
    <h3>
     Research area of Faculty wise for the Electrical Engineering
     Department:&nbsp;-
    </h3>
    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Sr.No.</th>
       <th>Name</th>
       <th>Specialization of the Research (Serial No.)</th>
       <th>No. of Publications in SCI/SCIE indexed Journal</th>
       <th>No. of Phd Guided</th>
       <th>No. of Patent Granted </th>
       <th>No. of externally Sponsored Project (Completed/ongoing)</th>
       <th>More Details (Home Page Link)</th>
      </tr>
     </thead>{" "}
     <tbody>
      {Tables.faculty.map((row, idx) => (
       <tr key={idx}>
        <td>{row["Sr.No."]}</td>
        <a href={row["More Details (Home Page Link)"]}>
         <td>{row["Name"]}</td>
        </a>
        <td>{row["Specialization of the Research(Serial No.)"]}</td>
        <td>{row["No. of Publications in SCI/SCIE indexed Journal"]}</td>
        <td>{row["No. of Phd Guided"]}</td>
        <td>{row["No. of Patent Granted"]}</td>
        <td>
         {row["No. of externally Sponsored Project (Completed/ongoing)"]}
        </td>
        <a href={row["More Details (Home Page Link)"]}>
         <td>{row["More Details (Home Page Link)"]}</td>
        </a>
       </tr>
      ))}
     </tbody>
    </table>
   </>
  ),
 },
]
export const Activities = [
 {
  content: (
   <>
    <h2>List of Research Projects Sanctioned / On-going:&nbsp;-</h2>
    <h5>
     The list of sponsored Research projects carried out by the faculty members
     of the department are provided in the following table:
    </h5>
    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Sr. No.</th>
       <th>Project Scheme and Sponsoring Agency</th>
       <th>File Number</th>
       <th>Title of the Project</th>
       <th>Amount (INR)</th>
       <th>Name of Investigator</th>
       <th>Status</th> <th>Start Date</th>
       <th>End Date</th>
       <th>Duration (Years)</th>
      </tr>
     </thead>{" "}
     <tbody>
      {Tables.projectSanctioned.map((row, idx) => (
       <tr key={idx}>
        <td>{row["Sr. No."]}</td>
        <td>{row["Project Scheme and Sponsoring Agency"]}</td>
        <td>{row["File Number"]}</td>
        <td>{row["Title of the Project"]}</td>
        <td>{row["Amount (INR)"]}</td>
        {/* <td>{row.Collaboration}</td> */}
        <td>{row["Name of Investigator"]}</td>
        <td>{row.Status}</td>
        <td>{row["Start Date"]}</td>
        <td>{row["End Date"]}</td>
        <td>{row.Duration}</td>
       </tr>
      ))}
     </tbody>
     <tbody>
      {Tables.totalAmount.map((row, idx) => (
       <tr key={idx}>
        <td>{row["Total Project Value"]}</td>
        <td>{row["Amount (INR)"]}</td>
       </tr>
      ))}
     </tbody>
    </table>
    <h2>Consultancy Projects:&nbsp;-</h2>
    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Name of the faculty</th>
       <th>Project Title</th>
       <th>Funding Agency</th>
       <th>Amount (INR)</th>
      </tr>
     </thead>{" "}
     <tbody>
      {Tables.consultancy.map((row, idx) => (
       <tr key={idx}>
        <td>{row["Name of the faculty"]}</td>
        <td>{row["Project Title"]}</td>
        <td>{row["Funding Agency"]}</td>
        <td>{row["Amount (INR)"]}</td>
       </tr>
      ))}
     </tbody>
    </table>
    <h2>Conferences:&nbsp;-</h2>
    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Name of confrences</th>
       <th>Duration</th>
       <th>International/National</th>
       <th>Publisher</th>
       <th>Proceedings</th>
      </tr>
     </thead>{" "}
     <tbody>
      {Tables.confrences.map((row, idx) => (
       <tr key={idx}>
        <td>{row["Name of confrences"]}</td>
        <td>{row["Duration"]}</td>
        <td>{row["International/National"]}</td>
        <td>{row["Publisher"]}</td>
        <td>{row["Proceedings"]}</td>
       </tr>
      ))}
     </tbody>
    </table>
    <h2>&nbsp;The List of Short Term Courses organized:-</h2>
    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Title</th>
       <th>Developed/Organized By</th>
       <th>Duration</th>
       <th>Resource Persons</th>
      </tr>
     </thead>
     <tbody>
      {Tables.shortTermCourse.map((row, idx) => (
       <tr key={idx}>
        <td>{row.Title}</td>
        <td>{row["Developed/Organized By"]}</td>
        <td>{row.Duration}</td>
        <td>{row["Resource Persons"]}</td>
       </tr>
      ))}
     </tbody>
    </table>
    <h2>
     List of Expert Lectures by Renowned Academicians and Industry
     Representatives:-
    </h2>

    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Title</th>
       <th>Duration</th>
       <th>Resource Persons</th>
      </tr>
     </thead>
     <tbody>
      {Tables.expertLectures.map((row, idx) => (
       <tr key={idx}>
        <td>{row.Title}</td>
        <td>{row.Duration}</td>
        <td>{row["Resource Persons"]}</td>
       </tr>
      ))}
     </tbody>
    </table>
    <h2>The List of Short-Term Courses organized::-</h2>

    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Sr.No.</th>
       <th>Title</th>
       <th>Developed/Organized By</th>
       <th>Duration</th>
       <th>Other detail</th>
      </tr>
     </thead>
     <tbody>
      {Tables.shortTermCourse2.map((row, idx) => (
       <tr key={idx}>
        <td>{row["Sr.No."]}</td>
        <td>{row["Title"]}</td>
        <td>{row["Developed/Organized By"]}</td>
        <td>{row["Duration"]}</td>
        <td>{row["Other detail"]}</td>
       </tr>
      ))}
     </tbody>
    </table>
    <h2>
     List of Expert Lectures by Renowned Academicians and Industry
     Representatives:-
    </h2>

    <table className="table-act">
     <thead>
      <tr className="syllabus-table-head">
       <th>Sr.No.</th>
       <th>Title</th>
       <th>Duration/Venue</th>
       <th>Resource Persons</th>
      </tr>
     </thead>
     <tbody>
      {Tables.renownedacad.map((row, idx) => (
       <tr key={idx}>
        <td>{row["Sr.No."]}</td>
        <td>{row["Title"]}</td>
        <td>{row["Duration/Venue"]}</td>
        <td>{row["Resource Persons"]}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </>
  ),
 },
]
// export const News_Events = {
//  content: (
//   <>
//    <h2>Workshop/Short Term Courses Organized:</h2>
//    <ul type="circle">
//     <li>
//      Organized Faculty Development Program on <q>Power Electronics</q> through
//      NKN during 11th to 20th Dec. 2017 at NIT Patna.
//     </li>
//     <br />
//     <br />

//     <li>
//      Organized a Short Term Course on{" "}
//      <q>Design of Switched Mode Power Converters</q> during 6th to 8th Feb. 2017
//      at NIT Patna.
//     </li>
//     <br />
//     <br />

//     <li>
//      Organized a Short Term Course on <q>Institute-Industry Interaction</q>{" "}
//      during 5th to 9th Dec. 2016 at NIT Patna.
//     </li>
//     <br />
//     <br />

//     <li>
//      Organized a Workshop on{" "}
//      <q>
//       Control Design, Simulation and Data Acquisition using Labview and Sensor
//       Interfacing
//      </q>{" "}
//      during 5th to 6th April 2016 at NIT Patna.
//     </li>
//     <br />
//     <br />

//     <li>
//      Organized a Workshop on <q>LabView and its Application</q>during 14th to
//      18th March 2016 at NIT Patna.
//     </li>
//     <br />
//     <br />

//     <li>
//      Organized a short term course on{" "}
//      <q>
//       Advanced Power Electronic Converters for Renewable Energy and Industrial
//       Drives
//      </q>{" "}
//      during 14th to 18th Dec. 2015 at NIT Patna
//     </li>
//    </ul>
//   </>
//  ),
// }
