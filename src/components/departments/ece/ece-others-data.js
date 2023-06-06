import React from "react"

// const home = "http://www.nitp.ac.in"
const home = process.env.GATSBY_BASE_URL + "ece/labs/"

const btn_style = {
 backgroundColor: `red`,
 border: "none",
 borderRadius: "20px",
 padding: `8px`,
 fontSize: `1.5rem`,
 textDecoration: "none",
 color: "white",
 width: "80px",
 textAlign: "center",
 margin: `1rem`,
}

export const Labs = [
 {
  title: <h2>Departmental Laboratories</h2>,
  content: (
   <ol type="1.">
    <li>Electronic Devices and Circuit Lab</li>
    <li>Digital Electronics Lab.</li>
    <li>Semiconductor Device Lab</li>
    <li>Communication Engineering Lab</li>
    <li>VLSI Lab</li>
    <li>Digital Signal Processing Lab </li>
    <li>Microwave Engineering Lab</li>
    <li>Electromagnetic Computation and Simulation Lab</li>
    <li>Project Lab</li>
    <li>Signal Processing Research Lab.</li>
    <li>Wireless Propagation Lab.</li>
    <li>Optical Fiber Communication & Photonics Research Lab</li>
    <li>Microprocessor & Microcontroller Lab</li>
    <li>VLSI Fabrication Lab</li>
    <li>WSN Lab</li>
    <li> Image Processing Lab</li>
   </ol>
  ),
  images: (
   <>
    <img src={`${home}eceimage002.jpg`} height="250px" width="350px" />
    <br />
    <img src={`${home}eceimage003.jpg`} height="250px" width="350px" />
   </>
  ),
 },
 {
  title: <h2>Important Software:</h2>,
  content: (
   <ol type="1">
    <li>CST(full package)</li>
    <li>HFSS(full package)</li>

    <li>IE3D</li>
    <li>MATLAB</li>
    <li>NI LAB View</li>
    <li>Multisim</li>
    <li>OptiSuite(full package)</li>
    <li>Cadence</li>
    <li>Synopsis</li>
    <li>Mentor graphics</li>
    <li>Vivado Xilinx</li>
    <li>RSoft FemSIM</li>
    <li>COMSOL with Wave Optics module</li>
    <li>Xilinx SDSOC</li>
    <li>Mentor Catapult (C/C++/SystemC HLS)</li>
    <li>Xilinx Vivado System Edition with Partial Reconfiguration</li>
   </ol>
  ),
  images: (
   <>
    <img src={`${home}eceimage005.jpg`} height="250px" width="350px" />
    <br />

    <img src={`${home}eceimage006.jpg`} height="250px" width="350px" />
   </>
  ),
 },
 {
  title: <h2>Major Equipment:</h2>,
  content: (
   <ol type="1">
    <li>Dell Blade Server</li>
    <li>HP Blade Server</li>
    <li>Agilent E8257D PSG Analog Signal Generator (250 kHz to 40 GHz)</li>
    <li>Agilent N5222A PNA Vector Network Analyzer (10 MHz to 26.5 GHz)</li>
    <li>Agilent N9020A MXA Signal Analyzer (10 Hz to 26.5 GHz)</li>
    <li>
     Rudimentary Antenna Radiation Pattern Measurement Setup (40 MHz to 12.4
     GHz) from Amitec
    </li>
    <li>MITS ELEVEN-Lab PCB Prototyping Machine (Resolution: 0.625 micron)</li>
    <li>
     ERSA i-CON VARIO 4 High Precision 4 Channel Soldering/De-soldering Station
    </li>

    <li>NI USRP-Rio Software Defined Radio Platform (440 MHz to 4.4 GHz)</li>
    <li>Tektronix 1 GHz Mixed Signal Oscilloscope</li>
    <li>Kithley Semiconductor Characterization System</li>
    <li>
     Two SMC 100A Signal Generators (9 kHz to 3 GHz) from Rohde & Schwarz
    </li>
    <li>
     Anritsu VNA MS2037C (5 kHz to 15 GHz) and Spectrum Analyzer (9 kHz to 15
     GHz)
    </li>
    <li>2231A-30-3 Triple Channel DC Power Supply from Keithley</li>
    <li>
     Software Controlled Motorized Antenna Positioner (azimuth and elevation)
     from Holmarc
    </li>

    <li>Zedboard (For Embedded Application)</li>
    <li>Xilinx Zynq UltraScale+ MPSoC ZCU102 Evaluation Kit</li>
    <li>Xilinx Zynq 7000 AP SoC ZC702 Evaluation Kit</li>
    <li>Zybo Board (For Internet of Things Lab)</li>
    <li>Multiple Instrumentation Lab</li>
    <li>NI 9792: WSN Gateway with NI WSN 3214, NI WSN 3226, and NI WSN 3212</li>
    <li>OTDR and Optical Network Building Block system</li>
    <li>Physics of Fiber Optics Lab Setup</li>
    <li>Soldering De-soldering Station</li>
   </ol>
  ),
  images: (
   <>
    <img src={`${home}eceimage007.jpg`} height="250px" width="350px" />
    <br />
    <img src={`${home}DSC_0031.jpg`} height="250px" width="350px" />
    <br />
    <img src={`${home}DSC_0011.jpg`} height="250px" width="350px" />
   </>
  ),
 },
]

const AchievementsTable = [
 {
  "S.No.": 1,
  "Name of the Faculty": "Dr. D.K. Singh and Mr. B.C. Sahana",
  "Organized Workshop/FDP/STC/GIAN program":
   "National Mission on Education through Information and communication tech.",
  Duration: "2013, June 06-07",
 },
 {
  "S.No.": 2,
  "Name of the Faculty": "Prof. D.K. Singh",
  "Organized Workshop/FDP/STC/GIAN program":
   "National Mission on Education through Information and communication tech.",
  Duration: "2014, January 17-18",
 },
 {
  "S.No.": 3,
  "Name of the Faculty":
   "Prof. M.P. Tripathi, Dr. Rakesh Ranjan and Dr. P. Kishore Kumar",
  "Organized Workshop/FDP/STC/GIAN program": "Analog Integrated Circuits",
  Duration: "2015, June 15-22",
 },
 {
  "S.No.": 4,
  "Name of the Faculty":
   "Dr. Gayadhar Pradhan, Dr. Rakesh Ranjan and Dr. P. Kishore Kumar",
  "Organized Workshop/FDP/STC/GIAN program":
   "Recent trends in Speech & Image Processing",
  Duration: "2015, June 23-27",
 },
 {
  "S.No.": 5,
  "Name of the Faculty": "Dr. Puli Kishore Kumar and Dr. Rakesh Ranjan",
  "Organized Workshop/FDP/STC/GIAN program": "Microwaves and antennas",
  Duration: "2015, June 29 to July 03",
 },
 {
  "S.No.": 6,
  "Name of the Faculty": "Dr. (Md.) Waseem Akram and Dr. Gaurav Kaushal",
  "Organized Workshop/FDP/STC/GIAN program": "VLSI & EMBEDDED SYSTEM",
  Duration: "2015, December 09-18",
 },
 {
  "S.No.": 7,
  "Name of the Faculty": "Dr. (Md.) Waseem Akram and Dr. Gaurav Kaushal",
  "Organized Workshop/FDP/STC/GIAN program":
   "Summer Internship Programme on Microcontroller based Embedded System Design",
  Duration: "2016, July 11 to August 02",
 },
 {
  "S.No.": 8,
  "Name of the Faculty": "Dr. Priyanka Mondal",
  "Organized Workshop/FDP/STC/GIAN program":
   "Smart Antennas and Space-time Adaptive Processing",
  Duration: "2016, March 28 to April 1",
 },
 {
  "S.No.": 9,
  "Name of the Faculty": "Dr. Priyanka Mondal",
  "Organized Workshop/FDP/STC/GIAN program":
   "Terahertz Technology and its application (NIT Patna)",
  Duration: "2016, August 01-05",
 },
 {
  "S.No.": 10,
  "Name of the Faculty": "Dr. Priyanka Mondal",
  "Organized Workshop/FDP/STC/GIAN program":
   "Microwave Wireless Components for Transmitter and Receiver Systems",
  Duration: "2016, May 30 to June 3",
 },
 {
  "S.No.": 11,
  "Name of the Faculty":
   "Dr. Seemant Saha, Dr. Bharat Gupta and Dr. Rajarshi Battacharya",
  "Organized Workshop/FDP/STC/GIAN program":
   "TOWARDS 5G: THE KEY ENABLING TECHNOLOGIES",
  Duration: "2016, December 05-14",
 },
 {
  "S.No.": 12,
  "Name of the Faculty":
   "Dr. Bharat Gupta, Mr S. Sasmal and Mrs. M. Bhatacharyya(PI)",
  "Organized Workshop/FDP/STC/GIAN program": "IOT, BIGDATA AND CLOUD COMPUTING",
  Duration: "2017, February 08-18",
 },
 {
  "S.No.": 13,
  "Name of the Faculty": "Dr. Seemanti saha (PI)",
  "Organized Workshop/FDP/STC/GIAN program":
   "Fundamentals of Analog and Digital Communication Systems",
  Duration: "2017, May 13-22",
 },
 {
  "S.No.": 14,
  "Name of the Faculty": "Dr. Bharat Gupta and Mr. S Sasmal",
  "Organized Workshop/FDP/STC/GIAN program":
   "Embedded Systems-Design and Development",
  Duration: "2017, May 18-24",
 },
 {
  "S.No.": 15,
  "Name of the Faculty": "Dr. Bharat Gupta",
  "Organized Workshop/FDP/STC/GIAN program": "Digital VLSI Circuit Design",
  Duration: "2017, June 03-12",
 },
 {
  "S.No.": 16,
  "Name of the Faculty": "Dr. Bharat Gupta & Mr. Soumitra Sasmal",
  "Organized Workshop/FDP/STC/GIAN program":
   "Big Data Annalytics and Machine Learning",
  Duration: "2017, July 04-14",
 },
 {
  "S.No.": 17,
  "Name of the Faculty": "Dr. Bharat Gupta and Dr. S. Bhattacharyya",
  "Organized Workshop/FDP/STC/GIAN program":
   "Hybrid Computational Intelligence",
  Duration: "2017, July 17-27",
 },
 {
  "S.No.": 18,
  "Name of the Faculty": "Dr. Bharat Gupta & Mr. Soumitra Sasmal",
  "Organized Workshop/FDP/STC/GIAN program": "Advanced Java and Android",
  Duration: "2018, January 04-11",
 },
 {
  "S.No.": 19,
  "Name of the Faculty":
   "Dr. Bikash Chandra Sahana and Dr. Rajeev Kumar Arya (Coordinator)",
  "Organized Workshop/FDP/STC/GIAN program": "DSP and Sensors",
  Duration: "2018,December 10-14",
 },
 {
  "S.No.": 20,
  "Name of the Faculty": "Dr. Subodh Srivastava(Coordinator)",
  "Organized Workshop/FDP/STC/GIAN program":
   "Embedded System and Interfacing hands-on",
  Duration: "2019, June 10-14",
 },
 {
  "S.No.": 21,
  "Name of the Faculty": "Dr. Ritesh Kumar Mishra",
  "Organized Workshop/FDP/STC/GIAN program":
   "VLSI ASIC Design ( Under the aegis of TEQIP)",
  Duration: "2019, June 26-30",
 },
 {
  "S.No.": 22,
  "Name of the Faculty": "Dr. Jayanta Ghosh",
  "Organized Workshop/FDP/STC/GIAN program": "Antenna Trends",
  Duration: "2019, July 01-05",
 },
 {
  "S.No.": 23,
  "Name of the Faculty": "Dr. Rakesh Ranjan (Co-ordinator)",
  "Organized Workshop/FDP/STC/GIAN program":
   "Photonics Communication and Its Applications",
  Duration: "2019, July 9-13",
 },
 {
  "S.No.": 24,
  "Name of the Faculty": "Dr. Subodh Srivastava (Coordinator)",
  "Organized Workshop/FDP/STC/GIAN program":
   "Distinguished lecture by Dr. R Venkatesha Prasad from Delft University of Technology (TU Delft), Netherlands",
  Duration: "2019, August 22",
 },
 {
  "S.No.": 25,
  "Name of the Faculty": "Dr. Subodh Srivastava (Coordinator)",
  "Organized Workshop/FDP/STC/GIAN program":
   "Distinguished lecture by Prof. Mohamed Rawidean Mohd Kassim (MIMOS,the Ministry of Science, Technology and Innovation Malaysia)",
  Duration: "2019, September 25",
 },
 {
  "S.No.": 26,
  "Name of the Faculty": "Dr. Subodh Srivastava (Coordinator & PI)",
  "Organized Workshop/FDP/STC/GIAN program": "Cloud Computing",
  Duration: "2019, October 16-20",
 },
 {
  "S.No.": 27,
  "Name of the Faculty": "Dr. Manpuran Mahto (Convener)",
  "Organized Workshop/FDP/STC/GIAN program":
   "National symposium on Vacuum Electronic Devices and Applications (VEDA-2019)",
  Duration: "2019, November 21-23",
 },
 {
  "S.No.": 28,
  "Name of the Faculty": "Dr. Subodh Srivastava (Coordinator)",
  "Organized Workshop/FDP/STC/GIAN program": "Deep Learning and Applications",
  Duration: "2019, December 09-13",
 },
 {
  "S.No.": 29,
  "Name of the Faculty": "Dr. Bal Chand Nagar (Coordinator)",
  "Organized Workshop/FDP/STC/GIAN program":
   "VLSI Chip Design Hands on using Open Source EDA",
  Duration: "2019, December 16-20",
 },
 {
  "S.No.": 30,
  "Name of the Faculty": "Dr. Rajeev Kumar Arya and Dr.Bikash Chandra Sahana",
  "Organized Workshop/FDP/STC/GIAN program": "AI & Machine Learning",
  Duration: "2019, December 23-27",
 },
 {
  "S.No.": 31,
  "Name of the Faculty": "Dr. Rajeev Kumar Arya and Dr.Bikash Chandra Sahana",
  "Organized Workshop/FDP/STC/GIAN program":
   "4th International Conference SoCTA-2019 (Soft Computing: Theories and Applications)",
  Duration: "2019, December 27-29",
 },
 {
  "S.No.": 32,
  "Name of the Faculty": "Dr. Bharat Gupta (Principal Coordinator)",
  "Organized Workshop/FDP/STC/GIAN program":
   "ICT Tools for Teaching, Learning Process & Institutes",
  Duration: "2020, January 13-17",
 },
 {
  "S.No.": 33,
  "Name of the Faculty":
   "Dr. Subodh Srivastava (Coordinator) & Dr. Manpuran Mahto (Coordinator)",
  "Organized Workshop/FDP/STC/GIAN program":
   "Hands on WorkShop on Internet of Things (IOT)/Embedded System",
  Duration: "2020, February 14-18",
 },
 {
  "S.No.": 34,
  "Name of the Faculty": "Dr. Ritesh Kumar Mishra (Coordinator)",
  "Organized Workshop/FDP/STC/GIAN program":
   "Digital System Design, Verification and Synthesis Algorithm ( Under the aegis of TEQIP)",
  Duration: "2020, February 26- March 01",
 },
]
export const Achievements = [
 {
  title: (
   <h2>
    List of Short-Term Courses / Faculty Development Program / Workshop / Gian
    Program:
   </h2>
  ),
  content: (
   <table className="table-act">
    <tr className="syllabus-table-head">
     <th>S.No.</th>
     <th>Name of the Faculty</th>
     <th>Organized Workshop/FDP/STC/GIAN program</th>
     <th>Duration</th>
    </tr>

    {AchievementsTable.map((row, idx) => {
     return (
      <tr key={idx}>
       <td>{row["S.No."]}</td>
       <td>{row["Name of the Faculty"]}</td>
       <td>{row["Organized Workshop/FDP/STC/GIAN program"]}</td>
       <td>{row.Duration}</td>
      </tr>
     )
    })}
   </table>
  ),
 },
]

const SponseredProjectsTable = [
 {
  "Name of the Project":
   "Development of Signal Processing algorithms for remote detection of humans trapped under Debris in disaster affected areas using RF sensing of cardiopulmonary motion",
  "Name of the PI":
   "Dr. G. Pradhan (PI), Dr. B. Gupta (Co-PI), Dr. P. Kishore Kumar (Co-PI)",
  "Sponsoring Agency": "DeitY Under SMDP",
  "Sanctioned Amount(in lakh)": 98.4,
  Status: "On going",
 },
 {
  "Name of the Project":
   "Design and Optimization of CPW-Fed Multiband MIMO Antenna for Handheld Mobile Terminals",
  "Name of the PI": "Dr. R. Bhattacharya (PI)",
  "Sponsoring Agency": "DST (SERB Young Scientist Scheme)",
  "Sanctioned Amount(in lakh)": 26.8,
  Status: "On Going",
 },
 {
  "Name of the Project":
   "Development of Algorithms for Speech based Bilingual Keyword Search to Detect Fraud/Spam Calls",
  "Name of the PI": "Dr. G. Pradhan (PI)",
  "Sponsoring Agency": "DeitY",
  "Sanctioned Amount(in lakh)": 41.1,
  Status: "Completed",
 },
 {
  "Name of the Project":
   "A 94 GHZ Front End for Passive Millimeter wave Imaging with Enhanced Antenna Gain",
  "Name of the PI": "Dr. P. Mondal (PI)",
  "Sponsoring Agency": "SERB-DST",
  "Sanctioned Amount(in lakh)": 20.74,
  Status: "On going",
 },
 {
  "Name of the Project":
   "A low noise subharmonic mixer for millimeter-wave space-borne applications",
  "Name of the PI": "Dr. P. Mondal (PI)",
  "Sponsoring Agency": "ISRO RESPOND scheme",
  "Sanctioned Amount(in lakh)": 17.48,
  Status: "On going",
 },
 {
  "Name of the Project":
   "Design Optimization of Multicore Fibers for High Capacity Optical Communications",
  "Name of the PI": "Dr. R. Ranjan (PI)",
  "Sponsoring Agency": "SERB_DST",
  "Sanctioned Amount(in lakh)": 7.48,
  Status: "On going",
 },
 {
  "Name of the Project":
   "Resource Optimization and Interference management for Green ultra-dense 5G Cognitive Radio Networks",
  "Name of the PI": "Dr. S. Saha (PI)",
  "Sponsoring Agency": "SERB_DST",
  "Sanctioned Amount(in lakh)": 27.33,
  Status: "On going",
 },
 {
  "Name of the Project":
   "Development of Signal Processing Algorithms for Ultra-Wideband Through-the-Wall Radar Imaging using Compressive Sensing",
  "Name of the PI": "Dr. P. Kishore Kumar (PI)",
  "Sponsoring Agency": "SERB_DST",
  "Sanctioned Amount(in lakh)": 21.07,
  Status: "On going",
 },
 {
  "Name of the Project":
   "Development of Chirp Scaling Algorithm and Range Doppler Algorithm for Processing High Squint SAR raw data and its Simulation",
  "Name of the PI": "Dr. P. Kishore Kumar (Co-PI)",
  "Sponsoring Agency": "RCI Hyderabad",
  "Sanctioned Amount(in lakh)": 9.5,
  Status: "Completed",
 },
 {
  "Name of the Project":
   "Developing E-Learning material for UG students across India in collaboration with IIT Kharagpur",
  "Name of the PI": "Dr. P. Kishore Kumar (Co-PI)",
  "Sponsoring Agency": "NMEICT, MHRD, Govt. of India",
  "Sanctioned Amount(in lakh)": 7,
  Status: "Completed",
 },
 {
  "Name of the Project": "NMEICT",
  "Name of the PI": "Prof. D. K. Singh",
  "Sponsoring Agency": "MHRD",
  "Sanctioned Amount(in lakh)": 10,
  Status: "Completed",
 },
 {
  "Name of the Project": "ICT Academy",
  "Name of the PI": "Dr. B. Gupta (PI)",
  "Sponsoring Agency": "DeitY",
  "Sanctioned Amount(in lakh)": 1750,
  Status: "On going",
 },
 {
  "Name of the Project": "Applied design studies on HPM oscillator-MILO",
  "Name of the PI": "Prof. Pradip Kumar Jain",
  "Sponsoring Agency": "DRDO",
  "Sanctioned Amount(in lakh)": 99,
  Status: "On going",
 },
 {
  "Name of the Project":
   "Design and Simulation of Integrated Optoelectronics Filters in Silicon-on-Insulator Substrate",
  "Name of the PI": "Dr. Rakesh Ranjan (Co-PI)",
  "Sponsoring Agency": "NPIU, New Delhi Under TEQIP CRS",
  "Sanctioned Amount(in lakh)": 10.08,
  Status: "On going",
 },
 {
  "Name of the Project":
   "Engineering the tunable Au-Bi2Se3-Au metamaterial perfect absorber (MMPA)",
  "Name of the PI": "Dr. Manpuran Mahto(Co-PI)",
  "Sponsoring Agency": "TEQIP Collaborative Research Scheme.",
  "Sanctioned Amount(in lakh)": 10,
  Status: "On going",
 },
 {
  "Name of the Project":
   "Development of multi-stacked PLZT material for Aerospace actuator applications",
  "Name of the PI": "Dr. Manpuran Mahto(Co-PI)",
  "Sponsoring Agency": "Aeronautics R & D Board, DRDO",
  "Sanctioned Amount(in lakh)": 23,
  Status: "On going",
 },
 {
  "Name of the Project":
   "Image Processing and Machine Learning Algorithms based Automatic Bimodal Computer Aided Diagnostics (BCAD) Tool for Breast Cancer Detection(Seed Money )",
  "Name of the PI": "Dr. Subodh Srivastava(PI)",
  "Sponsoring Agency": "TEQIP-III",
  "Sanctioned Amount(in lakh)": 9.7,
  Status: "On going",
 },
 {
  "Name of the Project":
   "Low power D2D communication with QoS constrains for IoB/IoT applications in 5G Network",
  "Name of the PI": "Dr. Rajeev Kumar Arya (PI)",
  "Sponsoring Agency": "SERB-DST",
  "Sanctioned Amount(in lakh)": 21.48,
  Status: "On going",
 },
 {
  "Name of the Project":
   "Design and fabrication of current mode CMOS based Low Power IC (Integrated Circuit)",
  "Name of the PI": "Dr. Rajeev Kumar Arya(Co-PI)",
  "Sponsoring Agency": "NPIU -TEQIP-III, CRS",
  "Sanctioned Amount(in lakh)": 16.92,
  Status: "On going",
 },
]

export const Activities = [
 {
  title: <h2>Inter Departmental Activity:</h2>,
  content: (
   <ul>
    <li>
     ICT academy has been established for development/upgradation to improve the
     employability of the graduates/diploma holders in various streams in
     cooperation with other departments.
    </li>
   </ul>
  ),
 },

 {
  title: <h2>Sponsored Project List:</h2>,
  content: (
   <table className="table-act" style={{ maxWidth: `90%` }}>
    <tr className="syllabus-table-head">
     <th>Name of the Project</th>
     <th>Name of the PI</th>
     <th>Sponsoring Agency</th>
     <th>Sanctioned Amount(in lakh)</th>
     <th>Status</th>
    </tr>
    {SponseredProjectsTable.map((row, idx) => {
     return (
      <tr key={idx}>
       <td>{row["Name of the Project"]}</td>
       <td>{row["Name of the PI"]}</td>
       <td>{row["Sponsoring Agency"]}</td>
       <td>{row["Sanctioned Amount(in lakh)"]}</td>
       <td>{row.Status}</td>
      </tr>
     )
    })}
   </table>
  ),
 },

 {
  title: <h2>List of Publications:</h2>,
  content: (
   <>
    <a
     href=".http://www.nitp.ac.in/php/ece/publications/year_2020.pdf"
     style={btn_style}
    >
     2020
    </a>
    <a
     href=".http://www.nitp.ac.in/php/ece/publications/year_2019.pdf"
     style={btn_style}
    >
     2019
    </a>
    <a href="http://www.nitp.ac.in/php/year_2018.pdf" style={btn_style}>
     2018
    </a>
    <a href="http://www.nitp.ac.in/php/year_2017.pdf" style={btn_style}>
     2017
    </a>
    <a href="http://www.nitp.ac.in/php/year_2016.pdf" style={btn_style}>
     2016
    </a>
    <a href="http://www.nitp.ac.in/php/year_2015.pdf" style={btn_style}>
     2015
    </a>
   </>
  ),
 },
]
